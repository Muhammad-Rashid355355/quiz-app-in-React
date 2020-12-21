export interface Question {
    id: number,
    questionText: string,
    answerOptions: [
        { answer: string, selected: boolean },
        { answer: string, selected: boolean },
        { answer: string, selected: boolean },
        { answer: string, selected: boolean },

    ],
    correct: string,
    userAnswer: { answer: string }
}






