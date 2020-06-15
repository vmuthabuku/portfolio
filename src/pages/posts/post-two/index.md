---
path: "/pointers-in-golang"
date: "15-6-2020"
title: "Introduction to pointers in golang "
author: " Vincent Muthabuku"
---

Pointers in golang gave me a hard time understanding them, for me that has been the biggest challenge when it comes to learning golang, so maybe I can give a brief walkthrough of what I used to help me understan pointers in Go.

A **Pointer** is a variable which is used to store the memory address of another variable.

**Operators**
Pointers comprise of two operators `*` and `&`. The `*` is used to *dereference* pointer variables, it is also used to represent/show that a variable is a pointer by putting it before the type of variable stored.
eg ``var length *int = 2`` .
The ``&`` is used to access the address of the variable and not the value. It is added before the variable.
Here is a simple example on how to declare, dereference,  get a variable's address and update a variable

```go
// declare length of variable
var length int  =  12
// declare a pointer on the width type and get it's address
var width *int  =  &length
// log length which is 12
fmt.Println("creature =", length)
// log the address
fmt.Println("address =", width)
// dereference the width and log it
// you should get 12
fmt.Println("*pointer dereferenced", *width)
// change pointer value
*width =  13
fmt.Println("*pointer dereferenced", *width)
fmt.Println("*length value", length)
```

**Note** After changing the pointer value i.e width, the value of the length also changes since they are in the same address,  This is one of the reasons why you should use a pointer instead of a value, i.e if you want to make a change to a variable or update it and make it "persist".

**Example:** 
When passing an argument by value:

```go
// Create a function called length that returns a number
func  length(x int) {
x =  12
}
func  main() {
x :=  5
length(x)
fmt.Println(x) // x is still 5
}
```

When passing an argument using pointers.
```go
func  length(x *int) {
*x =  12
}
func  main() {
x :=  5
length(&x)
fmt.Println(x) // x will return 12
}
```

**Conclusion**
From this I hope you have a brief understanding on the use of pointers.

If you want to read more on pointers you can check out the following links.

[GopherConUk]([https://www.youtube.com/watch?v=yEiaCx0fR9k](https://www.youtube.com/watch?v=yEiaCx0fR9k))

[golang-book]([http://www.golang-book.com/books/intro/8](http://www.golang-book.com/books/intro/8))

[gopher-guides]([https://www.digitalocean.com/community/conceptual_articles/understanding-pointers-in-go](https://www.digitalocean.com/community/conceptual_articles/understanding-pointers-in-go))

Originally published on [Dev](https://dev.to/vmuthabuku/pointers-in-go-53kj)
