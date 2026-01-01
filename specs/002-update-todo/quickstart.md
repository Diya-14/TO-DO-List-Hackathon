# Quickstart: Update Todo

## Examples

### 1. Simple title update
```bash
python -m src.main update abc12345 "New task name"
```

### 2. Update priority using NLP
```bash
python -m src.main update abc12345 "urgent"
```

### 3. Mixed update with CLI overrides
```bash
python -m src.main update abc12345 "Buy milk tomorrow" --priority high
```
*Result: Title="Buy milk", Due=Tomorrow, Priority=High (overriding any priority in text)*

### 4. Explicit field update
```bash
python -m src.main update abc12345 --title "Totally different"
```
