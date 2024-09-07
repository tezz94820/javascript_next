# chapter-1 :- Execution Context

There are 2 parts in which whole functionality of javascript works.
1. Memory :- In this everything is saved in the form of key-value pair.so variables and fucntions are stored in the key-value pair format.

2. code :- in this there is a single thread which operates and synchronously each line of code is executed.

Therefore ,, ## javascript is synchronous single threaded language.

# chapter :- 2 :- How the code is executed and how complete execution context is created
```
var a = 2
function square(n){
    var ans = n*n
    return ans
}
var square2 = square(2)
var square4 = square(4)
```

1. The Global execution context will be created for this code where all the variables a square to n square 4 will be assigned undefined to it and the function square will Store all the function code in the form of string.
2. There are two phases in which the code execution works first is the memory creation and the second is the code execution. Memory creation is the fees which we just earlier discussed and then the code execution starts. At the code execution a = 2 is set in place of undefined. then it goes to square 2 and then it calls for a square function.
3. For square function a whole new execution context will be created this time this is a local execution context. In this again there will be two faces that is memory creation and code execution . In memory creation answer will be assigned as undefined. Then why code execution the answer will get it value as n x n. When it hits return it Returns all the value of answer to square2 variable and delete all its local execution context.
4. After they same happens for square4 variable and the complete program ends when the complete program and the Global execution context will also be deleted

# CALL STACK
1. Call start maintains the order of execution of the all execution context
2. In the above code the Global execution context will be in the bottom of the stack and then a new execution context is created for square 2 variable function call . so now the condition is at the bottom there is the Global execution context and above it is the local ka execution context of square 2. After returning the value from square to function the local execution context is destroyed.
3. Again for the square 4 new execution context is created and put top of the stack above Global execution context. When the square 4 function execution context returns the value it again goes back to the Global execution context
4. When the complete program get over. The Global execution context is removed from the stack and the whole program is stopped giving the final answer
5. Now call stack has variant different names like execution context stack,program stack,machine stack,control stack,runtime stack


# CHAPTER-3 :- HOISTING :- in hoisting folder 
# CHAPTER :- what happens at the start of javascript program : this and window object

1. At the start of the JavaScript program three things happen. 
    1. A global execution context is created 
    2. Window object is created 
    3. This keyword is created 
2. Even if your JavaScript file is empty even then this three things happen.
3. For the Global execution context this keyword refers to the window object . So if you write (this==window) you will get true
4. For browser that object is called as a window object as it is a Chrome v8 engine. For Mozilla it may be called different and for node it may be called different
5. Whenever you add a variable in a global space that gets attached to the window object.
```
var a=10
function b(){
var x = 11;
}
console.log(window.a) //10
console.log(a)  //10
console.log(x) //notDefined
```
6. so whenever window is not written for global variables it is assumed that we aare talking about global window objet.so 
```
window.a == a //true
this == Window //true
a == this.a //true
```

7. JavaScript is a loosely tide language means you can assigned string integers date everything to a variable. It is even possible that you first join a variable as integer and then assign it as string , it is totally possible in this case.

# SCOPE CHAIN and LEXICAL ORDER 
1. Lexical :- lexical means in hierarchy. Here lexical means that in call stack when one functions execution context is above the another functions execution context, both these two execution context are in hierarchy.
Inside scope_lexical folder


# let && const

1. Are let and const hoisted :- yes but it is in temporal dead zone.
2. Normal var variables are hoisted and stored in the global object. But let and const variables are even hoisted but they re not in the global object.
    they are in the temporal dead zone that is some other space other than the global window.



