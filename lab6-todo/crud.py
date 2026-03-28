from sqlalchemy.orm import Session
import models
import auth

def create_user(db: Session, user):
    hashed = auth.hash_password(user.password)
    db_user = models.User(username=user.username, password=hashed)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_todo(db: Session, title, user_id):
    todo = models.Todo(title=title, owner_id=user_id)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo

def get_user_todos(db: Session, user_id):
    return db.query(models.Todo).filter(models.Todo.owner_id == user_id).all()