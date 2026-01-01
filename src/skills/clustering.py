from typing import List, Dict
from src.models.task import Task
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import numpy as np

class TaskClusterer:
    def cluster(self, tasks: List[Task]) -> Dict[str, List[Task]]:
        """Groups tasks into clusters based on title similarity."""
        if not tasks:
            return {}
        
        if len(tasks) == 1:
            return {"Cluster 1": tasks}

        # 1. Prepare data
        titles = [t.title for t in tasks]
        
        # 2. Vectorize
        vectorizer = TfidfVectorizer(stop_words='english')
        X = vectorizer.fit_transform(titles)
        
        # 3. Cluster
        # Heuristic for number of clusters: n/3 (min 2, max 5 for a small list)
        n_clusters = max(2, min(len(tasks) // 2, 5))
        if len(tasks) < 2:
            n_clusters = 1
            
        kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
        kmeans.fit(X)
        
        # 4. Group
        clusters = {}
        for i, label in enumerate(kmeans.labels_):
            cluster_name = f"Group {label + 1}"
            if cluster_name not in clusters:
                clusters[cluster_name] = []
            clusters[cluster_name].append(tasks[i])
            
        return clusters
