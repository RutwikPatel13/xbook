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


import numpy as np 
import pandas as pd
import matplotlib.pyplot as plt
import os
import cv2
import requests
import pickle

i=0
train_data=[]
for row in df.iterrows():
    i+=1
    print(i)
    print(row[1].Age)
    url = row[1].Cover1
    resp = requests.get(url, stream=True).raw
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_ANYCOLOR)
    new_image=cv2.resize(image,(200,200))
    print(new_image.shape)
    plt.imshow(new_image,cmap='gray')
    train_data.append([new_image,row[1].Age])
    plt.show()

x=[]
y=[]
i=0
for features,labels in train_data:
    i+=1
    x.append(features)
    y.append(labels)
x=np.array(x).reshape(91,200,200,3)
print(x.shape)
pickleX=open('X.pickle','wb')
pickle.dump(x,pickleX)
pickleX.close()

pickleY=open('Y.pickle','wb')
pickle.dump(y,pickleY)
pickleY.close()

file = open('X.pickle', 'rb')

data_x = pickle.load(file)

file.close()

print(data_x[0])

file_y=open('Y.pickle','rb')
data_y=pickle.load(file_y)
file_y.close()

data_y

data_x=data_x/255.0

data_x.shape

import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Activation,Dropout,Dense,Conv2D,Flatten,MaxPooling2D,BatchNormalization

model=Sequential()
model.add(Conv2D((64),kernel_size=(3,3),input_shape=data_x.shape[1:]))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Conv2D((64),kernel_size=(3,3),input_shape=data_x.shape[1:]))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2,2)))

model.add(Flatten())
model.add(Dense(64))
model.add(Dropout(0.5))
model.add(Activation('relu'))

model.add(Dense(64))
model.add(Dropout(0.5))
model.add(Activation('relu'))

model.add(Dense(1))
model.add(Activation('linear'))

model.compile(loss='mse',optimizer='adam')

from sklearn.model_selection import train_test_split

x_train,x_test,y_train,y_test=train_test_split(data_x,data_y,test_size=0.2,random_state=5)
train_x = np.asarray(x_train)
train_y = np.asarray(y_train)



history =model.fit(train_x,train_y,batch_size=32,validation_split=0.2,epochs=200)

y_pred=model.predict(x_test)
j=0
y_pred.shape


iter=0
for i in y_test:
  print('Real', i)
  print('Pred ',y_pred[iter])
  iter+=1


iter=0
for i in y_test:
  print("Conditon of Book:")
  if(y_pred[iter] <= 2):
    print("Excellent",i)
  elif(y_pred[iter] >2 and y_pred[iter]<=4):
    print("Good",i)
  elif(y_pred[iter] >4 and y_pred[iter]<=6):
    print("Ok")
  elif(y_pred[iter] >6 and y_pred[iter]<=8):
    print("Bad")
  else:
    print("Very Bad")
  #Display Image 
  plt.imshow(x_test[iter],cmap='gray')
  plt.show()
  iter+=1


age_act=[]
age_pred=[]
iter=0
for i in y_test:
  age_act.append(i)
  age_pred.extend(y_pred[iter])
  iter=iter+1


print(age_act,age_pred)
