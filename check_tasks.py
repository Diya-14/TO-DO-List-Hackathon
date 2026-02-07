import sqlite3
import os

db_path = 'todo-app/backend/sql_app.db'
if not os.path.exists(db_path):
    print(f"File {db_path} not found.")
else:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM task;")
    rows = cursor.fetchall()
    print(f"Total tasks: {len(rows)}")
    for row in rows:
        print(row)
    conn.close()
