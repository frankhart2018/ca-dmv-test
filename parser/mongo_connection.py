import pymongo
import urllib.parse

from constants import *


class MongoConnection:
    __client = None

    @classmethod
    def get_connection(cls):
        username = urllib.parse.quote_plus(USERNAME)
        password = urllib.parse.quote_plus(PASSWORD)

        if cls.__client is None:
            cls.__client = pymongo.MongoClient(
                f"mongodb+srv://{username}:{password}@cluster0.j8tt0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
            )

        return cls.__client
