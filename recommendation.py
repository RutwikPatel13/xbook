import sys

#Title=sys.argv[1]
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

df=pd.read_csv('Book dataset Excel (IPD).xlsx - book dataset.csv',encoding='unicode_escape',error_bad_lines=False)

#create list of columns to keep
columns=['Subject','Publisher','Author','Semester']

df = df.dropna(subset=['Subject', 'Author','Publisher','Semester'])
#df = df.dropna(subset=['Title','Publisher'])

df.reset_index(inplace = True)

def combine_feature(data):
      feature=[]
      for i in range(0,data.shape[0]):
        try:
            feature.append(data['Subject'][i]+' '+data['Publisher'][i]+' '+data['Author'][i]+' '+data['Semester'][i])
        except:
            pass
      return feature

df['Combined']=combine_feature(df)

cm=CountVectorizer().fit_transform(df['Combined'])

#Creating Cosine Similarity Matrix
cs=cosine_similarity(cm)
Title='Engineering Drawing'

book_id=df[df.Title==Title]['Book Sr no.'].values[0]


scores=list(enumerate(cs[book_id]))

sorted_scores=sorted(scores,key=lambda x:x[1],reverse=True)

j=0
print("The 5 most similar books to "+Title+"are :\n")
book_title=[]
pub=[]
sem=[]
author=[]
ids=[]
final_obj={}
for item in sorted_scores:
  try:

    book_title.append(df[df['Book Sr no.']==item[0]]['Title'].values[0])
    pub.append(df[df['Book Sr no.']==item[0]]['Publisher'].values[0])
    sem.append(df[df['Book Sr no.']==item[0]]['Semester'].values[0])
    ids.append(df[df['Book Sr no.']==item[0]]['_id'].values[0])


    
  except:
    pass
  #if book_title==Title:
   # continue

  finaObj={book_title,pub,sem}
  print(final_obj)
  j=j+1
  if j>=5:
    break