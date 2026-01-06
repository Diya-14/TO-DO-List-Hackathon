import pytest
from datetime import datetime
from src.skills.nlp import NLParser
from src.models.task import Priority

def test_parse_simple_task():
    parser = NLParser()
    result = parser.parse("Buy milk")
    assert result["title"] == "Buy milk"
    assert result["due_date"] is None
    assert result["priority"] == Priority.MEDIUM

def test_parse_with_date():
    parser = NLParser()
    # Using a fixed date or relative for testing might be tricky with dateparser
    # but we can check if it returns a datetime object
    result = parser.parse("Buy milk tomorrow")
    assert result["title"] == "Buy milk"
    assert isinstance(result["due_date"], datetime)

def test_parse_with_priority_high():
    parser = NLParser()
    result = parser.parse("Fix bug urgent")
    assert result["title"] == "Fix bug"
    assert result["priority"] == Priority.HIGH

def test_parse_with_priority_low():
    parser = NLParser()
    result = parser.parse("Read book whenever")
    assert result["title"] == "Read book"
    assert result["priority"] == Priority.LOW

def test_parse_complex_input():
    parser = NLParser()
    result = parser.parse("Meeting with boss tomorrow at 5pm high priority")
    assert "Meeting with boss" in result["title"]
    assert isinstance(result["due_date"], datetime)
    assert result["priority"] == Priority.HIGH
