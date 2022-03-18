# quizlet-scraper

Scrape quizzes from quizlet and generate self-assessments for them in an interactive web-application interface. 

## Note

The parser is built using python (with BeautifulSoup) and the test taker app is built in Node.js and MongoDB (cloud mongo), so in order to run all parts of this application, you need to have python3 (>= 3.6) and latest Node.js installed.

## Steps to run

### To get the data

The parsing of HTML to a cleaned CSV can be done using

```bash
user@programmer~:$ python parser/parse_questions.py
```

To push the data into MongoDB:

```bash
 user@programmer~:$ python parser/push_questions.py
```

To delete the entire collection:

```bash
user@programmer~:$ python parser/empty_collection.py
```

### To run the test taker app

If you are running this for the first time, then install the packages:

```bash
user@programmer~:$ npm install
```

Next run the app:

```bash
user@programmer~:$ npm start
```
