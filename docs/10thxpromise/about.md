#About Future

As the name would suggest, futures express the idea that something is going to happen in the future. Or much rather: a future represents the result of a potentially asynchronous operation, that will become available at some point in time. It allows you to register a Callback to handle the operation's result once it is available.

## Why use futures?

We can already deal with asynchrony by means of plain old callbacks. Introducing futures has two advantages:

- Futures are values and that allows for composition
- Futures are very generic. They need not represent an asynchronous operation, they might just as well represent a lazy one or they may even hold a value that has been available from the very start. Writing a piece of code against futures allows you to work with and even intermix these three types of evaluation strategies.


Source: https://github.com/haxetink/tink_core#future
