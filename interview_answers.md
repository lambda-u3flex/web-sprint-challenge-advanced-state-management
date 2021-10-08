# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- We use the context API when we have global data that many components share (things like user or theme) or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions: describes the event that is dispatched
- reducers: updates the state in a predictable way
- store: the state of your app is stored in an immutable, single state object

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- Allows action creators to return functions AND action objects
- Allows action creators functions to dispatch actions themselves
- Allows for dispatch to happen asynchronously
- Allows several dispatches to be executed within ONE action

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- ContextAPI just because the setup is easy and you can get to building quickly.
