from flask import jsonify, request, render_template
from .models import ToDoList, db
from .auth import key, currentTime, createSlug

def Index():
    return  render_template("index.html")

def GetToDoList():
    get_todolist = ToDoList.query.all()
    temp = {}
    for x in get_todolist:
        temp[x.id] = {
            'note_title':x.note_title,
            'note_content':x.note_content[:400],
            'note_color':x.note_color,
            'note_pin':x.note_pin,
            'time':x.time,
            'key':x.key,
        }
    return jsonify(temp)

def NewToDoList():
    if request.method=="POST":
        note_content = request.form['note-content']
        note_title = request.form['note-title']
        note_color = request.form['note-color']
        note_pin = request.form['note-pin']
        add_todo_list = ToDoList(note_title=createSlug(note_title), note_content=str(note_content), note_color = str(note_color), note_pin = str(note_pin), time=currentTime(), key=key(10))
        db.session.add(add_todo_list)
        db.session.commit()
        return jsonify({'response':202})
    else:
        return render_template("new-todo.html")