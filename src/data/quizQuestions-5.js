
export const quizQuestions_5 = {
  questions: [
    {
      question: 'What is the purpose of the useState hook in React?',
      choices: [
        'To manage component lifecycle methods.',
        'To handle asynchronous operations within components.',
        'To manage state in functional components.',
        'None of the above'
      ],
      correctAnswer: 'To manage state in functional components.'
    },
    {
      question: 'How does the useEffect hook differ from componentDidMount and componentDidUpdate lifecycle methods?',
      choices: [
        'useEffect cannot be used for side effects.',
        'useEffect runs after the component is mounted and after every update.',
        'useEffect cannot be used with functional components.',
        'None of the above'
      ],
      correctAnswer: 'useEffect runs after the component is mounted and after every update.'
    },
    {
      question: 'What is the useContext hook used for in React?',
      choices: [
        'To manage context in class components.',
        'To handle side effects in functional components.',
        'To consume context and access values provided by a Context Provider.',
        'None of the above'
      ],
      correctAnswer: 'To consume context and access values provided by a Context Provider.'
    },
    {
      question: 'What are the advantages of using custom hooks in React?',
      choices: [
        'Custom hooks cannot be created in React.',
        'They allow reusing stateful logic between components.',
        'They replace the need for functional components.',
        'None of the above'
      ],
      correctAnswer: 'They allow reusing stateful logic between components.'
    },
    {
      question: 'Which hook is used for handling side effects that don’t require cleanup?',
      choices: [
        'useEffect',
        'useReducer',
        'useCallback',
        'None of the above'
      ],
      correctAnswer: 'useEffect'
    },
    {
      question: 'In React, how can you create a custom hook?',
      choices: [
        'By defining a function that starts with "use" and calls other hooks.',
        'Custom hooks cannot be created in React.',
        'By extending the React.Component class.',
        'None of the above'
      ],
      correctAnswer: 'By defining a function that starts with "use" and calls other hooks.'
    },
    {
      question: 'What is the main difference between useState and useReducer hooks in React?',
      choices: [
        'useState is used for functional components, and useReducer is used for class components.',
        'useState is simpler and more suitable for managing simpler state, while useReducer is more powerful and suitable for complex state logic.',
        'useState does not allow updating state, while useReducer does.',
        'None of the above'
      ],
      correctAnswer: 'useState is simpler and more suitable for managing simpler state, while useReducer is more powerful and suitable for complex state logic.'
    },
    {
      question: 'How can you optimize the performance of custom hooks in React?',
      choices: [
        'By ensuring that custom hooks return different values for each render.',
        'Performance optimization is not possible with custom hooks.',
        'By avoiding the use of hooks within custom hooks.',
        'None of the above'
      ],
      correctAnswer: 'By ensuring that custom hooks return different values for each render.'
    },
    {
      question: 'Which hook is used for handling previous state values in React?',
      choices: [
        'usePreviousState',
        'useMemo',
        'useRef',
        'None of the above'
      ],
      correctAnswer: 'useRef'
    },
    {
      question: 'What is the primary purpose of using the useCallback hook in React?',
      choices: [
        'To memoize functions and prevent unnecessary re-renders.',
        'To handle asynchronous operations within components.',
        'To manage global state in React applications.',
        'None of the above'
      ],
      correctAnswer: 'To memoize functions and prevent unnecessary re-renders.'
    },
  ]  
}