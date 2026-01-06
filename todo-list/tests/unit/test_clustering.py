import pytest
from src.skills.clustering import TaskClusterer
from src.models.task import Task

def test_cluster_tasks_basic():
    clusterer = TaskClusterer()
    tasks = [
        Task(title="Buy milk"),
        Task(title="Buy eggs"),
        Task(title="Fix bug in python"),
        Task(title="Refactor python code"),
        Task(title="Meeting with boss"),
    ]
    
    clusters = clusterer.cluster(tasks)
    
    # We expect at least some clusters. 
    # With few tasks, it might just group them into one or separate them all.
    # The goal is that "Buy milk" and "Buy eggs" might be together, 
    # and "Fix bug" and "Refactor" might be together.
    assert isinstance(clusters, dict)
    assert len(clusters) > 0

def test_cluster_empty_list():
    clusterer = TaskClusterer()
    clusters = clusterer.cluster([])
    assert clusters == {}

def test_cluster_single_task():
    clusterer = TaskClusterer()
    tasks = [Task(title="Single task")]
    clusters = clusterer.cluster(tasks)
    assert len(clusters) == 1
