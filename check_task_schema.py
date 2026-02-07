import sqlite3
import os

db_path = 'todo-app/backend/sql_app.db'
if not os.path.exists(db_path):
    print(f"File {db_path} not found.")
else:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name='task';")
    result = cursor.fetchone()
    if result:
        print(result[0])
    else:
        print("Table 'task' not found.")
    conn.close()
