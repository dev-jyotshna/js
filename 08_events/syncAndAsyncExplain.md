## Javascript (Default)
     - Synchronous
     - Single threaded

- Execution Context : execites one line at a time
     - |-> console log 1
     - |-> console log 2
     - CALL STACK , Memory Heap

each operation waits for the last one to complete before executing

## Blocking Code vs Non Blocking Code
read file system access from node.js as browser is not so powerful.
### Blocking Code
- Block the flow of Program
- Read file sync

### Non Blocking Code
- Does not block exection
- Read file async

![alt text](<Screenshot 2024-09-14 232512.png>)

web API(has DOM) or node environment
fetch gives high priority task queue