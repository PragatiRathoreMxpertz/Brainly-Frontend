
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Next from "../Assets/Images/arrow-down.png";
import pervious from "../Assets/Images/arrow-up.png";
import { Create_Progress, Create_Questions } from "../store/Actions/QuestionAction";
import { Fetch_weeklyperformance } from "../store/Actions/weeklyActions";
// import "../../components/css/Quest.css";
import '../Styles/Brainquest.css';


function ProgressBar({ current, total }) {
    const progress = (current / total) * 100;

    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="question-count">
                <span className="font-Inter question-count-question">Question:</span>  <span className="font-Inter count-question-count">{current} / {total}</span>
            </div>
        </div>
    );
}

const BrainQuest = ({questions}) => {
    const navigate = useNavigate();
    console.log(questions)
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log(user)
    const id = user._id;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions?.length).fill(null));
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
    const [submitting, setSubmitting] = useState(false);

 

    const handleAnswerSelection = (selectedAnswer) => {
        // console.log(selectedAnswer)
        // console.log(currentQuestionIndex)
        const correctAnswer = questions[currentQuestionIndex]?.Answer;
        const isCorrect = selectedAnswer === correctAnswer;
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = selectedAnswer;
            return newAnswers;
        });
        dispatchCreateQuestion(selectedAnswer);
        if (isCorrect) {
            setCorrectAnswerCount(prevCount => prevCount + 1);
        } else {
            setWrongAnswerCount(prevCount => prevCount + 1);
        }
    };

    const dispatchCreateQuestion = async (selectedAnswer) => {
        // console.log( user._id )
        // console.log(questions[currentQuestionIndex]?._id)
        // console.log(questions[currentQuestionIndex]?.Question)
        // console.log(questions[currentQuestionIndex]?.Option)
        // console.log(questions[currentQuestionIndex]?.Answer)
        // console.log(questions[currentQuestionIndex]?._id)
        // console.log(selectedAnswer)
        const formData = {
            StudentId: user?._id,
            QuestionsId: questions[currentQuestionIndex]?._id,
            question: questions[currentQuestionIndex]?.Question,
            options: questions[currentQuestionIndex]?.Option,
            answer: questions[currentQuestionIndex]?.Answer,
            submitedanswer: selectedAnswer,
            tag: "Science",
            difficultyLevel: "Easy",
            repetitionLevel: 0,
            repetitionInterval: 1,
            nextReviewDate: new Date(new Date().getTime() + 1 * 24 * 60  *60  *1000),
            lastRevieweDate: new Date(),
        };
        await dispatch(Create_Progress(formData));
        await dispatch(Create_Questions(formData));
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            handleSubmit();
        }
    };
    const handleSubmit = async () => {
        setSubmitting(true);
        const formData = {
            StudentId: user?._id,
            QuestionsCorrectCount: correctAnswerCount,
            QuestionsWrongCount: wrongAnswerCount,
            TotalquestionsattemptedCount: correctAnswerCount + wrongAnswerCount,
        };
        await dispatch(Fetch_weeklyperformance({ formData }));
        toast.success("You have Created Your DailyQuiz");
        setTimeout(() => {
            navigate('/ScienceFictionStories');
        }, 2000);
    };

    return (
        <div className="quiz-container">
            <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
            <div className="question-container">
                <h2 className="question font-poppins">{questions[currentQuestionIndex]?.Question}</h2>
                <div className="answer-options">
                    {questions[currentQuestionIndex]?.Option.map((answer, index) => (
                        <div key={index} className="answer-option custom-radio">
                            <input
                                type="radio"
                                id={`answer-${index}`}
                                name="answer"
                                value={answer}
                                onChange={() => handleAnswerSelection(answer)}
                                checked={answer === selectedAnswers[currentQuestionIndex]}
                                className="option"
                                style={{ backgroundColor: 'red' }}
                            />
                            <label htmlFor={`answer-${index}`} className="font-poppins answer-label">{answer}</label>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button
                        className={`previous-button ${currentQuestionIndex === 0 ? "invisible" : ""}`}
                        onClick={() => setCurrentQuestionIndex(prevIndex => prevIndex - 1)}
                        disabled={currentQuestionIndex === 0}
                    >
                        <span>
                            <img src={pervious} alt="Previous" />
                        </span>
                        Previous
                    </button>
                    <button
                        className="next-button"
                        onClick={handleNext}
                        disabled={selectedAnswers[currentQuestionIndex] === null || submitting}
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        <span>
                            <img src={Next} alt="Next" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BrainQuest;
