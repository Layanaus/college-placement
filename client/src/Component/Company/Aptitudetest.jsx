import React, { useState, useEffect } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from '../User/Usernav';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Aptitudetest() {
  const login_id = localStorage.getItem('login_id');
  const { id } = useParams();
  const { c_id } = useParams();
  const { j_id } = useParams();

  console.log(id);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countdown, setCountdown] = useState(20 * 60);
  const [showContainer, setShowContainer] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [Answers, setAnswers] = useState([]);
  console.log('question', selectedAnswers);
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
      const response = await axios.get(`http://localhost:5000/add/view-question/${c_id}`);
      const { data } = response.data;
      setQuestions(data);
      setTotalMarks(data.length);
      setSelectedAnswers(Array(data.length).fill(''));
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
      const response = await axios.post(`http://localhost:5000/add/evaluate-answers/${c_id}`, {
        selectedAnswers,
      });

      const { score, totalMarks, passed, message } = response.data;

      setScore(score);
      setPassed(passed);
      setShowCongratulations(true);
      setShowContainer(false);

      const resultMessage = `${message} Your score is ${score}/${totalMarks}.`;

      try {
        const updateStatusResponse = await axios.get(`http://localhost:5000/register/update_appstatus/${id}/${passed ? 'Aptitude Passed' : 'Aptitude Failed'}`);
        if (updateStatusResponse.data.success) {
          console.log('Application status updated successfully');
        } else {
          console.log('Failed to update application status');
        }

        const addResultResponse = await axios.post('http://localhost:5000/result/add-result', {
          login_id: login_id,
          application_id: id,
          job_id: j_id,
          company_id: c_id,
          selectedAnswers,
          score,
          totalMarks,
          passed,
        });

        console.log('Evaluation results stored:', addResultResponse.data);
      } catch (error) {
        console.error('Error updating app status or storing evaluation results:', error);
      }

      window.scrollTo(0, 0);

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

  const handleAnswerSelection = (e) => {
    const { value } = e.target;
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
  }

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
          <form id="quiz-form" onSubmit={evaluateAnswers}>
            <div id="questions" className="carousel slide" data-ride="false">
              <div className="carousel-inner">
                {/* Question */}
                {questions.map((questionData, index) => (
                  <div key={index} className={`carousel-item ${currentQuestion === index ? 'active' : ''}`}>
                    <div className="question-section bg-light rounded p-4">
                      <h4>Question {index + 1}:</h4>
                      <p>{questionData.question}</p>
                      <div className="options">
                        {['option1', 'option2', 'option3', 'option4'].map((option, optionIndex) => (
                          <div className="form-check" key={optionIndex}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name={`q${index + 1}`}
                              id={`q${index + 1}${option}`}
                              value={option}
                              checked={selectedAnswers[currentQuestion] === option}
                              onChange={handleAnswerSelection}
                            />
                            <label className="form-check-label" htmlFor={`q${index + 1}${option}`}>
                              {option}) {questionData[option]}
                            </label>
                          </div>
                        ))}
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

export default Aptitudetest;
