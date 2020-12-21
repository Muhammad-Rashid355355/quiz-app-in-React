import React, { Fragment, useState } from 'react'
import Countdown from "react-countdown";
import { Link, Redirect } from 'react-router-dom';
import { questions as qs } from '../question';

const NewScreen = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState(qs);
    const [showScore, setShowScore] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const [score, setScore] = useState(0);

    let array: string[] = []

    const scoredData = () => {
        qs.forEach((itm) => {
            let correctAns = itm.correct
            let userSelected = itm.userAnswer.answer
            if (correctAns === userSelected) {
                array.push(correctAns)
                setScore(array.length)
            }
            return itm.userAnswer.answer
        })

    }



    const submitHandler = (currentQuestion: number, index: number) => {

        // add active class
        questions[currentQuestion].answerOptions.forEach((itm) => {
            itm.selected = false
        });
        questions[currentQuestion].answerOptions[index].selected = true;
        setQuestions([...questions]);


        questions[currentQuestion].userAnswer = questions[currentQuestion].answerOptions[index];
        if (questions[currentQuestion].answerOptions) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }



    const nextQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setDisabled(true)
        } else {
            setShowScore(true);
        }
        scoredData()
    };


    const Completionist = () => <span>You are good to go!</span>;
    const timeCounter = ({ hours, minutes, seconds, completed }: any) => {
        if (completed) {
            return <Redirect to="/" >You are good to go</Redirect>
        } else {
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    }



    return (
        <div>
            {/* < Countdown className="text-center"
                date={Date.now() + 10000}
                renderer={timeCounter}
            /> */}

            {showScore ? (
                <div className='container text-center'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <div className='modal-body'>
                                    <h2>You Scored {' '}
                                        {Math.floor(score / questions.length * 100)} {' '}
                                          out of 100 </h2>
                                    <h4>{Math.floor(score / questions.length * 100) >= 80 ?
                                        <h2 className="text-success">Excellent</h2> : Math.floor(score / questions.length * 100) >= 40 ? <h2 className="text-primary">Normal</h2>
                                            : <h2 className="text-danger">Fail</h2>
                                    }</h4>
                                    <div className='col-xs-3 col-xs-offset-5'>
                                        <div id='loadbar' style={{ display: 'none' }}>
                                            <div className='blockG' id='rotateG_01' />
                                            <div className='blockG' id='rotateG_02' />
                                            <div className='blockG' id='rotateG_03' />
                                            <div className='blockG' id='rotateG_04' />
                                            <div className='blockG' id='rotateG_05' />
                                            <div className='blockG' id='rotateG_06' />
                                            <div className='blockG' id='rotateG_07' />
                                            <div className='blockG' id='rotateG_08' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>) : (
                    <Fragment>


                        <h2 className="text-center">Quiz App with React-TypeScript</h2>
                        <div className='modal-dialog'>
                            <div className='modal-content'>

                                <div className='modal-header'>


                                    <h3>
                                        <span className='label label-warning' id='qid'>
                                            {currentQuestion + 1}
                                        </span>{' '}
                                        {questions[currentQuestion].questionText}
                                    </h3>
                                </div>
                                <div className='modal-body'>
                                    <div className='col-xs-3 col-xs-offset-5'>
                                        <div id='loadbar' style={{ display: 'none' }}>
                                            <div className='blockG' id='rotateG_01' />
                                            <div className='blockG' id='rotateG_02' />
                                            <div className='blockG' id='rotateG_03' />
                                            <div className='blockG' id='rotateG_04' />
                                            <div className='blockG' id='rotateG_05' />
                                            <div className='blockG' id='rotateG_06' />
                                            <div className='blockG' id='rotateG_07' />
                                            <div className='blockG' id='rotateG_08' />
                                        </div>
                                    </div>
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <div id="myDIV">
                                            <button id="btn" className={"answerButtons btn btn-block element-animation1 " + (answerOption.selected ? ' active' : '')}
                                                onClick={
                                                    (e) => submitHandler(currentQuestion, index)}
                                            >

                                                <span className='btn-label float-left'>
                                                    <i className='glyphicon glyphicon-chevron-right' />
                                                </span>{' '}
                                                <span className=
                                                    "seeText">{answerOption.answer
                                                    }</span>
                                            </button>
                                        </div>
                                    ))}
                                    <div className='modal-footer text-muted'>

                                        <Link to="/" >
                                            <button className="btn btn-danger" style={{
                                                float: "left",
                                                backgroundColor: "red"
                                            }} >Cancel</button>
                                        </Link>
                                        <button
                                            onClick={(e) =>
                                                nextQuestion(e)}
                                            className="btn btn-primary"
                                            id="next"
                                            disabled={disabled}
                                        >Next</button>
                                        <span id='answer' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Fragment>
                )
            }

        </div >
    )
}

export default NewScreen
