import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from '../User/Usernav';
import axios from 'axios';

function Aptitudetest() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countdown, setCountdown] = useState(5 * 60); // 5 minutes in seconds
  const [showContainer, setShowContainer] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [passed, setPassed] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/add/view-question');
      const { data } = response.data;
      setQuestions(data);
      setTotalMarks(data.length);
      setSelectedAnswers(Array(data.length).fill('')); // Initialize selected answers array
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowContainer(false);
      evaluateAnswers();
    }
  };

  const evaluateAnswers = async () => {
    try {
      const response = await axios.post('http://localhost:5000/add/evaluate-answers', {
        selectedAnswers,
      });

      const { score, totalMarks, passed, message } = response.data;

      setScore(score);
      setPassed(passed);
      setShowCongratulations(true);
      setShowContainer(false);

      const resultMessage = `${message} Your score is ${score}/${totalMarks}.`;

      // Scroll to the top of the page
      window.scrollTo(0, 0);

      // Display the evaluation results
      const evaluationResults = (
        <div className="container text-center" style={{ marginTop: '10%' }}>
          <h1>Congratulations!!!</h1>
          <p>{resultMessage}</p>
          {passed ? <p>You passed the aptitude test!</p> : <p>You failed the aptitude test. Please try again.</p>}
        </div>
      );

      setEvaluationResults(evaluationResults);
    } catch (error) {
      console.error('Error evaluating answers:', error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setShowContainer(false);
    evaluateAnswers();
  };

  const handleAnswerSelection = (e) => {
    const { name, value } = e.target;
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestion] = value;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return formattedMinutes + ':' + formattedSeconds;
  };

  return (
    <>
      <Usernav />
      {showContainer && (
        <div className="container text-center">
          <h1>Aptitude Test</h1>
          <hr />
          <div id="timer" className="text-center">
            <h3 id="countdown">{formatTime(countdown)}</h3>
          </div>
          <hr />
          <form id="quiz-form" onSubmit={submitForm}>
            <div id="questions" className="carousel slide" data-ride="false">
              <div className="carousel-inner">
                {/* Question */}
                {questions.map((questionData, index) => (
                  <div key={index} className={`carousel-item ${currentQuestion === index ? 'active' : ''}`}>
                    <div className="question-section bg-light rounded p-4">
                      <h4>Question {index + 1}:</h4>
                      <p>{questionData.question}</p>
                      <div className="options">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index + 1}`}
                            id={`q${index + 1}a`}
                            value="a"
                            checked={selectedAnswers[currentQuestion] === 'a'}
                            onChange={handleAnswerSelection}
                          />
                          <label className="form-check-label" htmlFor={`q${index + 1}a`}>
                            a) {questionData.option1}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index + 1}`}
                            id={`q${index + 1}b`}
                            value="b"
                            checked={selectedAnswers[currentQuestion] === 'b'}
                            onChange={handleAnswerSelection}
                          />
                          <label className="form-check-label" htmlFor={`q${index + 1}b`}>
                            b) {questionData.option2}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index + 1}`}
                            id={`q${index + 1}c`}
                            value="c"
                            checked={selectedAnswers[currentQuestion] === 'c'}
                            onChange={handleAnswerSelection}
                          />
                          <label className="form-check-label" htmlFor={`q${index + 1}c`}>
                            c) {questionData.option3}
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`q${index + 1}`}
                            id={`q${index + 1}d`}
                            value="d"
                            checked={selectedAnswers[currentQuestion] === 'd'}
                            onChange={handleAnswerSelection}
                          />
                          <label className="form-check-label" htmlFor={`q${index + 1}d`}>
                            d) {questionData.option4}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={nextQuestion}
              style={{ width: '100%' }}
            >
              {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </form>
        </div>
      )}
      {showCongratulations && evaluationResults}
      <PublicUserFooter />
    </>
  );
}

export default Aptitudetest;