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
    } else {
      setShowContainer(false);
      setShowCongratulations(true);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
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
                {/* Question */}
                {Array.from(Array(totalQuestions), (_, index) => (
                  <div key={index} className={`carousel-item ${currentQuestion === index ? 'active' : ''}`}>
                    <div className="question-section bg-light rounded p-4">
                      <h4>Question {index + 1}:</h4>
                      <p>{`Question ${index + 1} text goes here`}</p>
                      <div class="options">
  <div class="form-check">
    <input class="form-check-input" type="radio" name={`q${index + 1}`} id={`q${index + 1}a`} value="a" />
    <label class="form-check-label" for={`q${index + 1}a`}>a) Option A</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name={`q${index + 1}`} id={`q${index + 1}b`} value="b" />
    <label class="form-check-label" for={`q${index + 1}b`}>b) Option B</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name={`q${index + 1}`} id={`q${index + 1}c`} value="c" />
    <label class="form-check-label" for={`q${index + 1}c`}>c) Option C</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name={`q${index + 1}`} id={`q${index + 1}d`} value="d" />
    <label class="form-check-label" for={`q${index + 1}d`}>d) Option D</label>
  </div>
</div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={nextQuestion} style={{ width: '100%' }}>
              {currentQuestion < totalQuestions - 1 ? 'Next' : 'Finish'}
            </button>
          </form>
        </div>
      )}
      {showCongratulations && (
        <div className="container text-center" style={{ marginTop: '10%' }}>
          <h1>Congratulations!</h1>
          <p>You have completed the aptitude test.</p>
        </div>
      )}
      <PublicUserFooter />
    </>
  );
}

export default Aptitudetest;
