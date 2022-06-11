from bson import ObjectId
from pymongo import MongoClient
import pymongo
# from pprint import pprint
import sys
CONNECTION_STRING = "mongodb+srv://vandit-admin:1234@cluster0.3wvtg.mongodb.net/xbook?authSource=admin&replicaSet=atlas-uj7g6h-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
client = MongoClient(CONNECTION_STRING)

db=client['myFirstDatabase']

books = db['book1']


mydb, mydb_name, instance_col = client, db, books
# make an API call to the MongoDB server
cursor = instance_col.find()
# extract the list of documents from cursor obj
mongo_df = list(cursor)

import pandas
# create an empty DataFrame for storing documents
df = pandas.DataFrame(columns=[])

# iterate over the list of MongoDB dict documents
for num, doc in enumerate(mongo_df):
    # convert ObjectId() to str
    doc["_id"] = str(doc["_id"])
    # get document _id from dict
    doc_id = doc["_id"]
    # create a Series obj from the MongoDB dict
    series_obj = pandas.Series( doc, name=doc_id )
        # append the MongoDB Series obj to the DataFrame obj
    df = df.append(series_obj)
    # get document _id from dict
    doc_id = doc["_id"]

import sys
Title=sys.argv[1]

#Validation of variables
index=df.loc[df._id==Title].index[0]
#print(df['selectedFile'][index])

import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
import os
import requests
import cv2
import pytesseract as pt
pt.pytesseract.tesseract_cmd=r'C:\Program Files\Tesseract-OCR\tesseract.exe'
import keras_ocr
pipeline = keras_ocr.pipeline.Pipeline()

url = df['selectedFile'][index]
#resp = requests.get(url, stream=True).raw
#image = np.asarray(bytearray(resp.read()), dtype="uint8")
#image = cv2.imdecode(image, cv2.IMREAD_COLOR)
#text = pt.image_to_string(image)
#print(text)
imagetext = []
images = [
  keras_ocr.tools.read(url) for url in [
      url
  ]
]
prediction_groups = pipeline.recognize(images)
predicted_image_1 = prediction_groups[0]


for text, box in predicted_image_1:
    text = text.lower()
    imagetext.append(text)

    #print(text)
#print(imagetext)

bookname = df['bookName'][index]
bookname = bookname.lower()
author = df['author'][index]
booknamelist = bookname.split() 
#print(booknamelist)
check = all(item in imagetext for item in booknamelist)

if check:
    books.update_one({"_id":ObjectId(Title)},{"$set":{"legitacy":"yoooo"}})
else:
    books.update_one({"_id":ObjectId(Title)},{"$set":{"legitacy":"notlegit"}})


