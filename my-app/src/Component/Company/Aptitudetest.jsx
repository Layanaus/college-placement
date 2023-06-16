import React, { useState, useEffect } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

function Aptitudetest() {
  const totalQuestions = 3; // Update this value if you add more questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countdown, setCountdown] = useState(5 * 60); // 5 minutes in seconds
  const [showContainer, setShowContainer] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
    if(currentQuestion == totalQuestions -1)
    {
      setShowContainer(false)
      setShowCongratulations(true);
    }
  };

  const submitForm = () => {
    setShowContainer(false);
    setShowCongratulations(true);
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
    <Companynav />
    {showContainer && (
    <div className="container text-center">
      <h1>Aptitude Test</h1>
      <hr />
      <div id="timer" className="text-center">
        <h2 id="countdown">{formatTime(countdown)}</h2>
      </div>
      <hr />
      <form id="quiz-form" onSubmit={submitForm}>
        <div id="questions" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            {/* Question 1 */}
            <div className={`carousel-item ${currentQuestion === 0 ? 'active' : ''}`}>
              <div className="question-section bg-light rounded p-4">
                <h4>Question 1:</h4>
                <p>What is the capital of France?</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" id="q1a" value="a" />
                  <label className="form-check-label" htmlFor="q1a">
                    a) Paris
                  </label>
                  </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" id="q1b" value="b" />
                  <label className="form-check-label" htmlFor="q1b">
                    b) London
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" id="q1c" value="c" />
                  <label className="form-check-label" htmlFor="q1c">
                    c) Madrid
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" id="q1d" value="d" />
                  <label className="form-check-label" htmlFor="q1d">
                    d) Rome
                  </label>
                </div>
              </div>
            </div>
                {/* Question 2 */}
            <div className={`carousel-item ${currentQuestion === 1 ? 'active' : ''}`}>
              <div className="question-section bg-light rounded p-4">
                <h4>Question 2:</h4>
                <p>What is the square root of 64?</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" id="q2a" value="a" />
                  <label className="form-check-label" htmlFor="q2a">
                    a) 4
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" id="q2b" value="b" />
                  <label className="form-check-label" htmlFor="q2b">
                    b) 8
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" id="q2c" value="c" />
                  <label className="form-check-label" htmlFor="q2c">
                    c) 16
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" id="q2d" value="d" />
                  <label className="form-check-label" htmlFor="q2d">
                    d) 2
                  </label>
                  </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className={`carousel-item ${currentQuestion === 2 ? 'active' : ''}`}>
              <div className="question-section bg-light rounded p-4">
                <h4>Question 3:</h4>
                <p>What is the capital of France?</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" id="q3a" value="a" />
                  <label className="form-check-label" htmlFor="q3a">
                    a) Paris
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" id="q3b" value="b" />
                  <label className="form-check-label" htmlFor="q3b">
                    b) London
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" id="q3c" value="c" />
                  <label className="form-check-label" htmlFor="q3c">
                    c) Madrid
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" id="q3d" value="d" />
                  <label className="form-check-label" htmlFor="q3d">
                    d) Rome
                  </label>
                </div>
              </div>
            </div>

            {/* Add more questions here */}
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={nextQuestion} style={{ width: '100%' }}>
          {currentQuestion < totalQuestions - 1 ? 'Next' : 'Finish'}
        </button>

      </form>
 </div>

)}
{showCongratulations && (
        <div className="container text-center" style={{marginTop:'10%'}}>
          <h1>Congratulations!</h1>
          <p>You have completed the aptitude test.</p>
        </div>
      )}
    <PublicUserFooter/>
    </>
  );
}

export default Aptitudetest;