from flask_cors import CORS
from flask import Flask,jsonify,request
import pymongo
import urllib

app = Flask(__name__)
CORS(app)

client = pymongo.MongoClient("mongodb+srv://minion:bello@minioncluster.mvbt9k8.mongodb.net/?retryWrites=true&w=majority")
db = client.miniogram
collection = db.gif

@app.route("/")
def hello_world():
    cursor = collection.find({},{"_id":0})
    documents = []
    for document in cursor:
        documents.append(document["data"])
    return jsonify(documents)

@app.route("/add")
def add():
    gif = urllib.parse.unquote(request.args.get("gif"))
    collection.insert_one({"data": {"link": gif}})
    return "success"

app.run(debug=True)