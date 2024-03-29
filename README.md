# Monnbit-Tree

Converting moonbit project dependency chains to mermaid code.

## Usage

```
npm install moonbit-tree -g
moonbit-tree > graph.mmd // In the project root directory
```

## Example(Monnbit/Core)

```mermaid
graph LR
assertion --> array
math --> array
assertion --> bytes
assertion --> coverage
string --> coverage
assertion --> deque
num --> double
assertion --> double
int --> hashmap
list --> hashmap
array --> hashmap
assertion --> hashmap
assertion --> immutable_hashmap
array --> immutable_hashmap
assertion --> immutable_set
list --> immutable_set
array --> immutable_set
num --> int
assertion --> int
num --> int64
assertion --> int64
assertion --> list
array --> list
assertion --> map
list --> map
vec --> map
immutable_set --> map
assertion --> math
double --> math
assertion --> option
assertion --> priority_queue
assertion --> queue
assertion --> ref
num --> ref
int --> ref
assertion --> result
assertion --> stack
list --> stack
array --> stack
assertion --> strconv
assertion --> tuple
assertion --> vec
string --> vec
```
