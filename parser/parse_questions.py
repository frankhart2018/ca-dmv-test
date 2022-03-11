from bs4 import BeautifulSoup
import pandas as pd


if __name__ == "__main__":
    print("Please wait while questions are parsed...")
    HTML_FILE_PATH = "./ca-dmv-dump.html"
    with open(HTML_FILE_PATH, "r") as f:
        html_doc = f.read()

    soup = BeautifulSoup(html_doc, 'html.parser')

    question_divs = soup.find_all("div", class_="SetPageTerm-smallSide")
    answer_divs = soup.find_all("div", class_="SetPageTerm-largeSide")

    for br in soup.find_all("br"):
        br.replace_with("\n")

    assert len(question_divs) == len(answer_divs)

    question_answer_pairs = []
    for question_div, answer_div in zip(question_divs, answer_divs):
        question = question_div.text
        answer = answer_div.text
        question_answer_pairs.append((question, answer))

    print(f"Number of questions and answers = {len(question_answer_pairs)}")

    CSV_FILE_PATH = HTML_FILE_PATH.replace(".html", ".csv")
    questions_df = pd.DataFrame(question_answer_pairs, columns=["question", "answer"])
    questions_df.to_csv(CSV_FILE_PATH, index=False)