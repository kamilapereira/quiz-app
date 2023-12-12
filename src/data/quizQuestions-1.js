
export const quizQuestions_1 = {
  questions: [
    {
      question: 'In ReactJS, what is the primary purpose of a functional component?',
      choices: [
        'To manage state',
        'To define the structure of the application',
        'To handle user events',
        'To encapsulate UI logic and return JSX'
      ],
      correctAnswer: 'To encapsulate UI logic and return JSX',
    },
    {
      question: 'Which of the following accurately describes props in ReactJS?',
      choices: [
        'Props are used for internal component communication',
        'Props are immutable and passed from parent to child components',
        'Props are used only for functional components',
        'Props are variables declared within components'
      ],
      correctAnswer: 'Props are immutable and passed from parent to child components',
    },
    {
      question: 'How can you access the data passed through props in a functional component?',
      choices: [
        'Using this.props',
        'Accessing directly as variables',
        'By calling a function',
        'Via props parameter in the component function'
      ],
      correctAnswer: 'Via props parameter in the component function',
    },
    {
      question: 'Which of the following best describes the purpose of the "key" attribute in React when rendering lists?',
      choices: [
        'It identifies elements uniquely within a list',
        'It\'s used to add styling to list elements',
        'It helps in defining event handlers for list items',
        'It\'s not necessary when rendering lists'
      ],
      correctAnswer: 'It identifies elements uniquely within a list',
    },
    {
      question: 'What happens when a component’s state or props change in React?',
      choices: [
        'The component is re-rendered',
        'The component is destroyed and re-initialized',
        'The component is re-rendered only if explicitly stated',
        'React doesn’t support state or props changes'
      ],
      correctAnswer: 'The component is re-rendered',
    },
    {
      question: 'Can you have state in a functional component?',
      choices: [
        'Yes, always',
        'No, never',
        'Yes, using the useState hook',
        'Yes, by declaring it explicitly'
      ],
      correctAnswer: 'Yes, using the useState hook',
    },
    {
      question: 'Which lifecycle method is used in functional components for operations that need to run after the component renders?',
      choices: [
        'componentDidUpdate',
        'useEffect',
        'componentWillUnmount',
        'renderEffect'
      ],
      correctAnswer: 'useEffect',
    },
    {
      question: 'In functional components, how can you update the state?',
      choices: [
        'By calling this.setState()',
        'By directly modifying state',
        'By using the useState hook function',
        'State cannot be updated in functional components'
      ],
      correctAnswer: 'By using the useState hook function',
    },
    {
      question: 'Which hook is used for performing side effects in functional components?',
      choices: [
        'useEffect',
        'useSideEffect',
        'performEffect',
        'sideEffectHook'
      ],
      correctAnswer: 'useEffect',
    },
    {
      question: 'What are the benefits of using functional components over class components in React?',
      choices: [
        'Functional components have better performance',
        'Functional components are easier to understand',
        'Functional components can use lifecycle hooks',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
    },
  ],
}