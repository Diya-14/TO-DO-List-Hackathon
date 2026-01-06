Smart Todo CLI
A smart, offline-first Command Line Interface (CLI) Todo application designed for efficiency. It leverages natural language processing (NLP) to parse task details and AI-powered clustering to automatically organize your to-do list.

🚀 Features
Natural Language Entry: Add tasks using conversational language. The system automatically detects due dates and priorities (e.g., "Buy milk tomorrow at 5pm urgent").
Smart Updates: Update existing tasks using natural language or specific flags.
AI Organization: Automatically clusters and groups related tasks using simple machine learning techniques.
Rich CLI Interface: Beautiful, formatted output using the rich library.
Offline & Local: All data is stored locally in human-readable JSON format. No internet connection required.
🛠️ Prerequisites
Python 3.8 or higher
pip (Python package installer)
📦 Installation
Clone the repository:

git clone https://github.com/YourUsername/TO-DO-List-Hackathon.git
cd TO-DO-List-Hackathon
Create a virtual environment (recommended):

python -m venv venv
# Windows
.\venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
Install dependencies:

pip install -r requirements.txt
📖 Usage
The application is run via the src/main.py script.

Adding Tasks
Add a task using natural language. The system will try to extract due dates and priorities.

python src/main.py add "Submit report next Friday high priority"
Listing Tasks
View your current tasks in a formatted table.

# List all pending tasks
python src/main.py list

# List completed tasks
python src/main.py list --status done
Completing Tasks
Mark a task as done using its ID.

python src/main.py complete <task_id>
Updating Tasks
Update a task's details using its ID (or short ID).

# Update using natural language
python src/main.py update <task_id> "Change deadline to Monday"

# Update using explicit flags
python src/main.py update <task_id> --priority low
Organizing Tasks
Automatically group related tasks into clusters.

python src/main.py organize
Deleting Tasks
Remove a task permanently using its ID.

python src/main.py delete <task_id>
🧪 Running Tests
This project uses pytest for testing. To run the test suite:

pytest
🌐 Web Dashboard (Professional Edition)
The project now includes a formal, professional web interface with a high-end SaaS aesthetic.

🛠️ Backend Setup (FastAPI)
Navigate to the backend directory: cd backend
Install dependencies: pip install -r requirements.txt
Start the API server: fastapi dev app/main.py
The API will run at http://127.0.0.1:8000
Local SQLite database is used by default for guaranteed local functionality.
🎨 Frontend Setup (Next.js)
Navigate to the frontend directory: cd frontend
Install dependencies: npm install
Start the development server: npm run dev
Open http://localhost:3000 in your browser.
Features:

Professional SaaS Design: Clean, vibrant Indigo theme with a sidebar dashboard.
Secure Authentication: Full Sign-in/Sign-up flow with JWT protection.
Smart Task Management: Create, update, and organize tasks with a beautiful UI.
Responsive Layout: Fully functional on desktop and mobile.
🤝 Contributing
Fork the repository.
Create a feature branch.
Commit your changes.
Push to the branch.
Open a Pull Request.