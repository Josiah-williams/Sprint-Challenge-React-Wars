# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React js is One or many ways to write large applications.It is an open source javascript library that is used to build user interfaces specifically.

React Js trys to solve a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.


1. What does it mean to think in react?

It means thinking in Components. It means being able to break down an application in components

1. Describe state.

This is an objects that determines how React Components renders and behaves

1. Describe props.

Props is short for Properties.
It is a way we can pass object properties into Components by arguments

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are anything that affects something outside the scope of the function being executed.

Whenever props change, we will set the state inside useEffect.
example: useEffect(() => {
    setProfileState(props);
  }, [props]);
