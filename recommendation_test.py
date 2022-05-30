from pymongo import MongoClient
import pymongo
from pprint import pprint

CONNECTION_STRING = "mongodb+srv://vandit-admin:1234@cluster0.3wvtg.mongodb.net/xbook?authSource=admin&replicaSet=atlas-uj7g6h-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
client = MongoClient(CONNECTION_STRING)

db=client['myFirstDatabase']

books = db['book1']


print(client.list_database_names())  
print(db.list_collection_names())

#book = books.find_one({'isbn':'81-7758-273-9'});
#print(book) 
#print(book.get('bookName'))

#cursor = books.find({})
#for book3 in cursor:
#    print(book3)

#bookss = list(db.book1.find({}))
#print(bookss)


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
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

columns=['subject','publisher','author','semester']
df = df.dropna(subset=['subject','publisher','author','semester'])

df.reset_index(inplace = True)

print(df)

def combine_feature(data):
      feature=[]
      for i in range(0,data.shape[0]):
        try:
            feature.append(data['subject'][i]+' '+data['publisher'][i]+' '+data['author'][i]+' '+data['semester'][i])
        except:
            pass
      return feature

df['combined']=combine_feature(df)

cm=CountVectorizer().fit_transform(df['combined'])

#Creating Cosine Similarity Matrix
cs=cosine_similarity(cm)
#Title='Engineering Drawing'

unique_id = df[df.bookName==Title]['_id'].values[0]
print(unique_id)
book_id=df.loc[df.bookName==Title].index[0]
print(book_id)
scores=list(enumerate(cs[book_id]))

sorted_scores=sorted(scores,key=lambda x:x[1],reverse=True)
print(sorted_scores)
j=0
print("The 5 most similar books to "+Title+"are :\n")
book_title=[]
pub=[]
sem=[]
author=[]
ids=[]
final_obj={}
for item in sorted_scores:
  if df['_id'][item[0]]==unique_id:
        continue
  try:
    book_title.append(df['bookName'][item[0]])
    pub.append(df['publisher'][item[0]])
    sem.append(df['semester'][item[0]])
    author.append(df['author'][item[0]])
    
    ids.append(df['_id'][item[0]])

    
  except:
    pass
  

  j=j+1
  if j>=5:
    break

print(ids) # stores id of 5 most similar books 