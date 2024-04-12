import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Daily_Quiz_Data, Get_Daily_Quiz_Questions } from "../../store/Actions/DailyQuizAction";
import tick from "../../Assets/Images/tickMark.png";
import '../../Styles/Brainquest.css';
import Heading from '../Heading';
import { Update_Questions } from '../../store/Actions/QuestionAction';

function ProgressBar({ current, total, answeredQuestions }) {
    return (
        <div className="progress-container flex items-center justify-between absolute" id='circlePostion'>
            {Array.from({ length: total }, (_, index) => (
                <div key={index} className={`progress-circle ${answeredQuestions[index] ? 'answered' : ''}`}>
                    {answeredQuestions[index] ?
                        <div className='tickImg'><img src={tick} alt="tick" /></div> :
                        <div className='questionNum'>{index + 1}</div>
                    }
                </div>
            ))}
        </div>
    );
}

function ProgressBarLine({ current, total }) {
    const progress = (current / total) * 105;

    return (
        <div className="">
            <div className="progress-barLine">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

function DailyQuiz() {
    const dispatch = useDispatch();
    const Daily_Quiz_Questions = useSelector(
        (state) => state.DailyQuiz.Current_DailyQuiz_Question
    );
    const user = useSelector((state) => state.auth.user);
    const id = user._id;
    let questions = Daily_Quiz_Questions;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array.from({ length: questions.length }, () => null));
    const [showbg, setShowBg] = useState(true);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [nextBtnClicked, setNextBtnClicked] = useState(false);
    const [prevBtnClicked, setPrevBtnClicked] = useState(false);

    const [answeredQuestions, setAnsweredQuestions] = useState(() => {
        const initialArray = Array.from({ length: questions.length }, () => false);
        initialArray[0] = true;
        return initialArray;
    });

    useEffect(() => {
        dispatch(Get_Daily_Quiz_Questions(id));
    }, [id]);

    const handleNext = () => {
        setNextBtnClicked(true);
        const isCorrect = questions[currentQuestionIndex].answer === selectedAnswers[currentQuestionIndex];
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        const updatedAnsweredQuestions = [...answeredQuestions];
        updatedAnsweredQuestions[currentQuestionIndex + 1] = true;
        setAnsweredQuestions(updatedAnsweredQuestions);

        if (currentQuestionIndex === questions.length - 1) {
            setShowScore(true);
            setShowBg(false);
            handleSubmit();
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1); 
    };

    // const handleAnswerSelect = (answer) => {
    //     console.log(answer)
    //     console.log(currentQuestionIndex)
    //     const newSelectedAnswers = [...selectedAnswers];
    //     newSelectedAnswers[currentQuestionIndex] = answer;
    //     setSelectedAnswers(newSelectedAnswers);
    //     // console.log(selectedAnswers)
    //     console.log(questions[currentQuestionIndex]._id)
    //         const QuestionData_Update = {
    //             Question_id:questions[currentQuestionIndex]._id,
    //             Submitted_Answer:selectedAnswers[currentQuestionIndex]
    //           }
    //           console.log(QuestionData_Update)
    //           dispatch(Update_Questions(QuestionData_Update))
    
    // };

    const handleAnswerSelect = async (answer) => {
        // console.log(answer);
        // console.log(currentQuestionIndex);
        const newSelectedAnswers = [...selectedAnswers];
        console.log(newSelectedAnswers)
        newSelectedAnswers[currentQuestionIndex] = answer;
        console.log(newSelectedAnswers)
        setSelectedAnswers(newSelectedAnswers);
        // console.log(selectedAnswers)
        // console.log(questions[currentQuestionIndex]._id);
    
        const QuestionData_Update = {
            Question_id: questions[currentQuestionIndex]._id,
            Submitted_Answer: newSelectedAnswers[currentQuestionIndex]
        };
        // console.log(QuestionData_Update);
        await dispatch(Update_Questions(QuestionData_Update));
    };

    const handleSubmit = async () => {
        // e.preventDefault();
        const CorrectQuestions = questions.filter((question, index) => selectedAnswers[index] === question.answer);
        const updatedQuestions = questions.filter((question, index) => selectedAnswers[index] !== question.answer);
    
        dispatch(
           await Fetch_Daily_Quiz_Data({
                id: user._id,
                WrongQuestions: updatedQuestions,
                CorrectQuestions: CorrectQuestions
            })
        );
        // // console.log("----DISPATCH");
        // // console.log(questions);
        // // console.log(selectedAnswers);
        // const updatedQuestions = questions.filter((question, index) => {    
        //   if (selectedAnswers[index] === question.answer) {
        //     return false;
        //   }
        //   return true;
        // });
        // const CorrectQuestions = questions.filter((question, index) => {
        //   if (selectedAnswers[index] === question.answer) {
        //     return true; // Exclude the correct question from the updated questions array
        //   }
        //   return false; // Keep incorrect questions in the updated questions array
        // });
        // console.log(CorrectQuestions);
        // console.log(updatedQuestions);
    
        // dispatch(
        //   Fetch_Daily_Quiz_Data({
        //     id: user._id,
        //     WrongQuestions: updatedQuestions,
        //     CorrectQuestions: CorrectQuestions
        //   })
        // );
      };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            <Heading blueText="Daily" whiteText="Quiz" />
            <div className={showbg ? `Dailyquiz-container` : ""}>
                {showScore ? (
                    <div className="score-container">
                        <p className='text-white pt-4 text-bold'>Your Score: {score}/{questions.length}</p>
                        <div className="question-details">
                            <div className="correct-answers">
                                <h3 className='hdScroe font-bold'>CORRECT ANSWERS</h3>
                                {questions?.map((question, index) => {
                                    if (questions[index].answer === selectedAnswers[index]) {
                                        return (
                                            <div key={index} className="question-detail">
                                                <p className='selectedQue'>{question.question}</p>
                                                <p className='seleCorr'>Correct Answer: {question.answer}</p>
                                                <p className='yourAns'>Your Answer: {selectedAnswers[index]}</p>
                                                <hr />
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                            <div className="incorrect-answers">
                                <h3 className='hdScroeWrong font-bold'>INCORRECT ANSWERS</h3>
                                {questions?.map((question, index) => {
                                    if (questions[index].answer !== selectedAnswers[index] && selectedAnswers[index] !== null) {
                                        return (
                                            <div key={index} className="question-detail">
                                                <p className='selectedQue'>{question.question}</p>
                                                <p className='seleCorr'>Correct Answer: {question.answer}</p>
                                                <p className='yourAns'>Your Answer: {selectedAnswers[index]}</p>
                                                <hr />
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='relative DailyRelative'>
                            <ProgressBarLine current={currentQuestionIndex} total={questions.length} />
                            <ProgressBar current={currentQuestionIndex} total={questions.length} answeredQuestions={answeredQuestions} />
                        </div>
                        <div className="question-container">
                            <h2 className="DailyQuizQuestion font-poppins" id=''>{currentQuestion?.question}</h2>
                            <div className="DailyQuizanswer-options">
                                {currentQuestion?.options.map((answer, index) => (
                                    <div key={index} className="daliyPerQues custom-radio">
                                        <input
                                            type="radio"
                                            id={`answer-${index}`}
                                            name="answer"
                                            value={answer}
                                            onChange={() => handleAnswerSelect(answer)}
                                            checked={answer === selectedAnswers[currentQuestionIndex]}
                                            className="option"
                                            style={{ backgroundColor: 'red' }}
                                        />
                                        <label htmlFor={`answer-${index}`} className="font-poppins ansMain">{answer}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="DailyQuizebutton-container">
                            <button
                                className={`${currentQuestionIndex === 0 ? "invisible" : ""} DailyQuize-previous-button`}
                                onClick={handlePrevious}
                                disabled={currentQuestionIndex === 0}>
                                <span>
                                    <IoIosArrowBack className='font-semibold' />
                                </span>
                                Previous
                            </button>
                            <button
                                className="DailyQuize-next-button"
                                onClick={handleNext}
                                disabled={selectedAnswers[currentQuestionIndex] === undefined || showScore}>
                                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                                <span>
                                    <IoIosArrowForward className='font-semibold' />
                                </span>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default DailyQuiz;







