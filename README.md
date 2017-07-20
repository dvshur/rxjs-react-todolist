# RxJS state management inspired by Redux 

This is a prototype of a RxJS-based architecture taking best Redux ideas but implementing them with asynchronous data streams.

The problem with Redux is the fact that it is fully synchronous. It uses middleware for handling async logic and side effects. But modern applications generally have a lot of async stuff going on, and dividing business logic between redux core (reducers) and async handlers (middleware) simply because part of it is asynchronous does not seem justified.

RxJS, on the other hand, is perfectly capable of handling both sync and async logic by itself. So the idea here is to take some of best Redux parts, but implement it with RxJS core to make a state management system that does not care whether business logic scenarios occur synchronously or asynchronously.