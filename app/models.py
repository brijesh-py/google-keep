from app import db

model = db.Model
column = db.Column
integer = db.Integer()
string = db.String()
json = db.JSON()
boolean = db.Boolean()

class ToDoList(model):
    __tablename__ = 'todolist'
    def __init__(self, note_title, note_content, note_color, note_pin, time, key):
        self.note_title = note_title
        self.note_content = note_content
        self.time = time
        self.key = key
        self.note_color = note_color
        self.note_pin = note_pin

    id = column(integer, primary_key=True)
    note_title = column(string)
    note_content = column(string)
    note_color = column(string)
    note_pin = column(string)
    time = column(string)
    key = column(string, unique=True)

    def get_note(self, note_title):
        return self.note_title
    
    def get_time(self, time):
        return self.time
    
    def get_key(self, key):
        return self.key 