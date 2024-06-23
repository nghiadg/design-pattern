# Facade pattern

## Intent

Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

## What problems does Facade pattern solve?

If we have to make code work with a broad set of objects that belong to a sophisticated library of framework, etc. The business logic of your classes would be hard to comprehend and maintain.

## Solution

A facade is a class that hides complexities of the system and provides a simple interface.

Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.

## How to Implement?

1. Check whether it's possible to provide a simpler interface that what an existing subsystem already provides.

2. Declare and implement this interface in a new facade class. The facade should redirect the calls from the client code to appropriate objects of the subsystem.

3. Make all the client code communicate with the subsystem only via the facade.

4. If the facade becomes too big, consider extracting part of its behavior to a new, refined facade class.
