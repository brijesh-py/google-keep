from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.secret_key ='V1RreGJYQm5jV2w0T1d4TmR6ZzVkV1J5YzNZME1qRnVQVXBoVVE9PQ=='
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///db.db'

db = SQLAlchemy(app)
migrate = Migrate()
migrate.init_app(app, db)
CORS(app)
CORS(app, origins='domain_name', methods=['GET', 'POST'])
from .urls import *
