from mongo_connection import MongoConnection
from constants import *


if __name__ == "__main__":
    conn = MongoConnection.get_connection()
    db = conn[DB]
    collection = db[COLLECTION]

    collection.delete_many({})