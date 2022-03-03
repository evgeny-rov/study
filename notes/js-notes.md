## Uppercase constants

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
Such constants are named using capital letters and underscores.

## Name things right

Talking about variables, there’s one more extremely important thing.
A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming.  
A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing   
code base rather than writing something completely separate from scratch.  
When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled.  
Or, in other words, when the variables have good names.

### Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing.  
It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.  
Agree on terms within your team and in your own mind.  
If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

## Numbers

BigInt type was recently added to the language to represent integers of arbitrary length.
A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

The unary plus or, in other words, the plus operator + applied to a single value,  
doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

## Operators

A regular equality check == has a problem. It cannot differentiate 0 from false

A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false

The nullish coalescing operator is written as two question marks ??.
The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

## Loops

The “do…while” loop
The condition check can be moved below the loop body using the do..while syntax:

do {
// loop body
} while (condition);
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special break directive.
The continue directive is a “lighter version” of break. It doesn’t stop the whole loop.  
Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

## Functions

A name should clearly describe what the function does. When we see a function call in the code,  
a good name instantly gives us an understanding what it does and returns.
A function is an action, so function names are usually verbal.
There exist many well-known function prefixes like:  
create…, show…, get…, check… and so on. Use them to hint what a function does.

Function Declaration: a function, declared as a separate statement, in the main code flow.
A Function Declaration can be called earlier than it is defined.

Function Expression: a function, created inside an expression or inside another syntax construct.  
Here, the function is created at the right side of the “assignment expression” =:

A Function Expression is created when the execution reaches it and is usable only from that moment.
