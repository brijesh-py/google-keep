from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.secret_key ='secret_key'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///db.db'

db = SQLAlchemy(app)
migrate = Migrate()
migrate.init_app(app, db)
CORS(app)
CORS(app, origins='*', methods=['GET', 'POST'])
from .urls import *