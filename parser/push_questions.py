import pandas as pd
from tqdm import tqdm

from mongo_connection import MongoConnection
from constants import *


if __name__ == '__main__':
    conn = MongoConnection.get_connection()
    db = conn[DB]
    collection = db[COLLECTION]

    df = pd.read_csv(CSV_PATH)

    for i, row in tqdm(df.iterrows()):
        question = row['question']
        answer = row['answer']
        document = {
            'question': question,
            'answer': answer,
            'correct': 0,
            'incorrect': 0,
            'idx': i,
        }

        collection.insert_one(document)