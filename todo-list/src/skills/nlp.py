import dateparser
from dateparser.search import search_dates
import re
from datetime import datetime
from typing import Optional, Dict, Any
from src.models.task import Priority

class NLParser:
    def __init__(self):
        # Ordered by specificity
        self.priority_map = {
            r"\bhigh priority\b": Priority.HIGH,
            r"\burgent\b": Priority.HIGH,
            r"\bhigh\b": Priority.HIGH,
            r"\bmedium\b": Priority.MEDIUM,
            r"\blow\b": Priority.LOW,
            r"\bwhenever\b": Priority.LOW,
        }

    def parse(self, text: str, partial: bool = False) -> Dict[str, Any]:
        """
        Parses natural language text into task attributes.
        If partial=True, returns only the fields found in the text.
        """
        original_text = text
        
        # 1. Extract and remove Priority keywords
        priority = None if partial else Priority.MEDIUM
        for pattern, p_level in self.priority_map.items():
            if re.search(pattern, text, re.IGNORECASE):
                priority = p_level
                text = re.sub(pattern, "", text, flags=re.IGNORECASE).strip()
                break

        # 2. Extract Date/Time info using search_dates
        due_date = None
        cleaned_text = text
        
        try:
            found_dates = search_dates(text, settings={'PREFER_DATES_FROM': 'future'})
            if found_dates:
                # Use the first date found
                date_str, date_obj = found_dates[0]
                due_date = date_obj
                # Remove the date string from the text
                cleaned_text = text.replace(date_str, "").strip()
        except:
            # Fallback if search_dates fails or isn't available
            pass

        # Clean up double spaces etc
        title = re.sub(r'\s+', ' ', cleaned_text).strip()
        
        # Fallback logic
        if not title and not partial:
            title = original_text

        result = {}
        if title:
            result["title"] = title
        if due_date:
            result["due_date"] = due_date
        if priority is not None:
            result["priority"] = priority
        
        if not partial:
            # Fill defaults for 'add' command compatibility
            if "title" not in result: result["title"] = original_text
            if "priority" not in result: result["priority"] = Priority.MEDIUM
            if "due_date" not in result: result["due_date"] = None
            result["category"] = None

        return result