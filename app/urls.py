from app import app, db
from .views import *

@app.route('/')
def index():
    return Index()

@app.route("/get/",methods=['GET','POST'])
def gettodolist():
    return GetToDoList()

@app.route("/new/",methods=['GET','POST'])
def newtodoList():
    return NewToDoList()