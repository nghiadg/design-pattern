# Singleton pattern

## Intent

<strong>Singleton</strong> is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## What problems does the Singleton pattern solve?

### 1. Ensure that a class has just a single instance.

To control access some shared resource - for example, file.

### 2. Provide a global access point to that instance.

Just like a global variable. However, it also protects that instance from being overwritten by other code.

## Solution

Step 1: Make a default constructor private, to prevent other objects from using `new` operator with the Singleton class.

Step 2: Create a static creation method that acts as constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

## Real world

1. Websocket connection
