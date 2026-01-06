# Research: Smart Todo CLI Implementation

**Feature**: Smart Todo CLI
**Date**: 2025-12-30

## Decisions

### 1. NLP Execution Method (Offline)
**Decision**: Hybrid Approach (Regex + Lightweight NLP Library).
**Rationale**: 
- "Offline Only" constraint rules out cloud APIs.
- "Smart" requirement implies more than just rigid regex.
- Use `dateparser` for robust date extraction.
- Use simple rule-based heuristics for Priority/Category extraction (e.g., "urgent", "meeting").
- Avoids heavy ML dependencies (PyTorch/Transformers) to keep "Cold Start < 500ms" achievable.

### 2. Clustering Logic (Offline)
**Decision**: Keyword-based + Simple TF-IDF (Term Frequency-Inverse Document Frequency) using `scikit-learn` or custom lightweight implementation.
**Rationale**:
- True "semantic" embedding requires large local models (hundreds of MBs), violating "lightweight/fast" goals.
- TF-IDF provides decent "relatedness" grouping without heavy models.
- Fallback to explicit Tag grouping.

### 3. CLI Framework
**Decision**: `Typer`.
**Rationale**: Modern, Type-hint based, cleaner than `Click` or `Argparse`, supports auto-completion.

## Alternatives Considered

- **Local LLM (Llama.cpp)**: Rejected due to hardware requirements, large binary size, and slow startup time (>500ms).
- **Spacy**: Good, but potentially overkill/slow load time for just a Todo list. Will start with `dateparser` + regex.
