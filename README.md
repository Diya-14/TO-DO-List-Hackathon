# Smart Todo CLI

A smart, offline-first Command Line Interface (CLI) Todo application designed for efficiency. It leverages natural language processing (NLP) to parse task details and AI-powered clustering to automatically organize your to-do list.

## 🚀 Features

*   **Natural Language Entry**: Add tasks using conversational language. The system automatically detects due dates and priorities (e.g., "Buy milk tomorrow at 5pm urgent").
*   **Smart Updates**: Update existing tasks using natural language or specific flags.
*   **AI Organization**: Automatically clusters and groups related tasks using simple machine learning techniques.
*   **Rich CLI Interface**: Beautiful, formatted output using the `rich` library.
*   **Offline & Local**: All data is stored locally in human-readable JSON format. No internet connection required.

## 🛠️ Prerequisites

*   Python 3.8 or higher
*   pip (Python package installer)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YourUsername/TO-DO-List-Hackathon.git
    cd TO-DO-List-Hackathon
    ```

2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    # Windows
    .\venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## 📖 Usage

The application is run via the `src/main.py` script.

### Adding Tasks
Add a task using natural language. The system will try to extract due dates and priorities.

```bash
python src/main.py add "Submit report next Friday high priority"
```

### Listing Tasks
View your current tasks in a formatted table.

```bash
# List all pending tasks
python src/main.py list

# List completed tasks
python src/main.py list --status done
```

### Completing Tasks
Mark a task as done using its ID.

```bash
python src/main.py complete <task_id>
```

### Updating Tasks
Update a task's details using its ID (or short ID).

```bash
# Update using natural language
python src/main.py update <task_id> "Change deadline to Monday"

# Update using explicit flags
python src/main.py update <task_id> --priority low
```

### Organizing Tasks
Automatically group related tasks into clusters.

```bash
python src/main.py organize
```

### Deleting Tasks
Remove a task permanently using its ID.

```bash
python src/main.py delete <task_id>
```

## 🧪 Running Tests

This project uses `pytest` for testing. To run the test suite:

```bash
pytest
```

## 📂 Project Structure

```
TO-DO-List-Hackathon/
├── requirements.txt    # Python dependencies
├── src/
│   ├── main.py         # Application entry point
│   ├── cli/            # CLI command definitions
│   ├── core/           # Core logic (Config, Persistence, TaskManager)
│   ├── models/         # Data models (Task)
│   └── skills/         # AI/NLP capabilities (NLP parsing, Clustering)
├── tests/              # Unit and integration tests
└── specs/              # Feature specifications and documentation
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.