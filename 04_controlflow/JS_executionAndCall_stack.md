# JavaScript Execution Context
How will the javascript run the file 

- to run code 1st the JS need to make a Global execution context, it will be put in `this` variable -> this always happens
- Browser global execution context is different from node js global execution context
- Browser global execution context -> value of `this` is **window object**
- JS is single threaded 
1. Global execution context -> Eval execution context
2. Function execution context
- JS code runs in 2 phases 
	- i. Memory _creation phase_ : memory allocation
	- ii. Execution phase

Steps:
>[!example] Code
>1. let val1 = 10
>2. let val2 = 5
>3. function addNum(num1, num2){
> 4.     let total = num1 + num2
> 5. 	return total
>6. }
>7. let result1 = addNum(val1, val2)
>8. let result2 = addNum(10, 2)

1. Global Execution (global environment) -> locate in this
2. Memory Phase (cycle 1)
	 val1 -> undefined
	 val2 -> undefined
	 addNum -> definition till line 6
	 result1 -> undefined
	result2 -> undefined
3. Execution Phase
	val1 <- 10
	val2 <- 5
	addNum -> makes new execution context (new variable environment + execution thread ) in line 7
		addNum new execution context:
		1. Memory Phase
		val1 -> undefined
		val2 -> undefined
		total -> undefined
		2. Execution Phase
		num1 -> 10
		num2 -> 5
		total -> 15
		return total to Global execution context
		DELETE this execution context
	result1 = 15
	addNum -> makes new execution context (NVE+ execution thread ) in line 7
		addNum new execution context:
		1. Memory Phase
		val1 -> undefined
		val2 -> undefined
		total -> undefined
		2. Execution Phase
		num1 -> 10
		num2 -> 2
		total -> 12
		return total to Global execution context
		DELETE this execution context
	return2 = 12
- Call Stack -> function into function
