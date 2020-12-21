import { Question } from "./Question-Interface";

export const questions: Question[] = [
    {
        id: 1,
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answer: 'New York', selected: false },
            { answer: 'Paris', selected: false },
            { answer: 'Ameraica', selected: false },
            { answer: 'London', selected: false },
        ],
        correct: 'Paris',
        userAnswer: { answer: "" },
    },
    {
        id: 2,
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answer: 'Jeff Bezos', selected: false },
            { answer: 'Elon Musk', selected: false },
            { answer: 'Bill Gates', selected: false },
            { answer: 'Tony Stark', selected: false },
        ],
        correct: 'Elon Musk',
        userAnswer: { answer: "" },
    },
    {
        id: 3,
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answer: 'Apple', selected: false },
            { answer: 'Intel', selected: false },
            { answer: 'Amazon', selected: false },
            { answer: 'Microsoft', selected: false },
        ],
        correct: 'Apple',
        userAnswer: { answer: "" },
    },
    {
        id: 4,
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answer: '1', selected: false },
            { answer: '4', selected: false },
            { answer: '6', selected: false },
            { answer: '7', selected: false }
        ],
        correct: '7',
        userAnswer: { answer: "" },
    },


];

