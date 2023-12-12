
export const quizQuestions_4 = {
  questions: [
    {
      question: 'What is the initial phase in a React component’s lifecycle?',
      choices: [
        'Initialization',
        'Mounting',
        'Updating',
        'None of the above'
      ],
      correctAnswer: 'Initialization'
    },
    {
      question: 'Which lifecycle method is invoked immediately after a component is mounted?',
      choices: [
        'componentDidMount',
        'componentWillMount',
        'componentDidUpdate',
        'None of the above'
      ],
      correctAnswer: 'componentDidMount'
    },
    {
      question: 'What is the purpose of the componentDidUpdate lifecycle method in React?',
      choices: [
        'To perform cleanup before a component is unmounted.',
        'To update the component state based on changes in props or state.',
        'To perform initial setup for a component.',
        'None of the above'
      ],
      correctAnswer: 'To update the component state based on changes in props or state.'
    },
    {
      question: 'Which lifecycle method is used for handling cleanup in a React component?',
      choices: [
        'componentWillUnmount',
        'componentDidUnmount',
        'componentWillUpdate',
        'None of the above'
      ],
      correctAnswer: 'componentWillUnmount'
    },
    {
      question: 'When does the componentDidMount method get called?',
      choices: [
        'Before the component is unmounted.',
        'After the component is rendered for the first time.',
        'When the component receives updated props.',
        'None of the above'
      ],
      correctAnswer: 'After the component is rendered for the first time.'
    },
    {
      question: 'Which lifecycle method should be used to perform asynchronous tasks in a React component?',
      choices: [
        'componentDidUpdate',
        'componentWillUpdate',
        'componentWillUnmount',
        'None of the above'
      ],
      correctAnswer: 'None of the above (use componentDidUpdate with caution for asynchronous tasks)'
    },
    {
      question: 'What happens when a component is unmounted in React?',
      choices: [
        'The component is destroyed and removed from the DOM.',
        'The component remains in the DOM but is not visible.',
        'The component enters a dormant state without any functionality.',
        'None of the above'
      ],
      correctAnswer: 'The component is destroyed and removed from the DOM.'
    },
    {
      question: 'How can lifecycle methods in React be used to optimize performance?',
      choices: [
        'By manually managing component state.',
        'By using hooks like useMemo and useCallback.',
        'By avoiding the use of lifecycle methods.',
        'None of the above'
      ],
      correctAnswer: 'By using hooks like useMemo and useCallback.'
    },
    {
      question: 'What is the purpose of the shouldComponentUpdate method in React?',
      choices: [
        'To determine if a component should be updated or not.',
        'To force a component to re-render regardless of changes.',
        'To handle side effects in a component.',
        'None of the above'
      ],
      correctAnswer: 'To determine if a component should be updated or not.'
    },
    {
      question: 'Which phase of the lifecycle is not applicable to functional components in React?',
      choices: [
        'Initialization',
        'Mounting',
        'Updating',
        'Functional components cover all phases of the lifecycle'
      ],
      correctAnswer: 'Functional components cover all phases of the lifecycle'
    },
  ]  
}