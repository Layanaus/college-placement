import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

function QuestionForm() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);
  
  const usersPerPage = 10;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/add/view-question');
      const { data } = response.data;
      setFaqData(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleChoiceChange = (index, event) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = event.target.value;
    setChoices(updatedChoices);
  };

  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  
const handleDeleteQuestion = async (index) => {
  try {
    const questionId = faqData[index]._id;
    
    const updatedFaqData = [...faqData];
    updatedFaqData.splice(index, 1);
    setFaqData(updatedFaqData);
   
    await axios.delete(`http://localhost:5000/add/delete-question/${questionId}`);
  } catch (error) {
    console.error('Error deleting question:', error);
  }
};
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newQuestion = {
        question,
        option1: choices[0],
        option2: choices[1],
        option3: choices[2],
        option4: choices[3],
        answer: correctAnswer,
      };

      await axios.post('http://localhost:5000/add/create_question', newQuestion);
      fetchQuestions();

      setQuestion('');
      setChoices(['', '', '', '']);
      setCorrectAnswer('');
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  return (
    <>
      <Companynav />
      <div className="qucontainer">
        <div className="quform-container">
          <h1 className="quform-title">Upload Question and Choices</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="question" className="quform-label">
              Question:
            </label>
            <textarea
              id="question"
              name="question"
              rows="4"
              cols="50"
              value={question}
              onChange={handleQuestionChange}
              className="form-input"
              required
            ></textarea>

            <div className="choices-container" style={{ display: 'flex' }}>
              <div style={{ marginRight: '20px' }}>
                <label htmlFor="choice1" className="quform-label">
                  Option 1:
                </label>
                <input
                  type="text"
                  id="choice1"
                  name="choices[]"
                  value={choices[0]}
                  onChange={(event) => handleChoiceChange(0, event)}
                  className="form-input"
                  required
                />
              </div>

              <div style={{ marginRight: '20px' }}>
                <label htmlFor="choice2" className="quform-label">
                  Option 2:
                </label>
                <input
                  type="text"
                  id="choice2"
                  name="choices[]"
                  value={choices[1]}
                  onChange={(event) => handleChoiceChange(1, event)}
                  className="form-input"
                  required
                />
              </div>

              <div style={{ marginRight: '20px' }}>
                <label htmlFor="choice3" className="quform-label">
                  Option 3:
                </label>
                <input
                  type="text"
                  id="choice3"
                  name="choices[]"
                  value={choices[2]}
                  onChange={(event) => handleChoiceChange(2, event)}
                  className="form-input"
                  required
                />
              </div>

              <div style={{ marginRight: '20px' }}>
                <label htmlFor="choice4" className="quform-label">
                  Option 4:
                </label>
                <input
                  type="text"
                  id="choice4"
                  name="choices[]"
                  value={choices[3]}
                  onChange={(event) => handleChoiceChange(3, event)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="correctAnswer" className="quform-label">
                Correct Answer:
              </label>
              <input
                type="text"
                id="correctAnswer"
                name="correctAnswer"
                value={correctAnswer}
                onChange={handleCorrectAnswerChange}
                className="form-input"
                required
              />
            </div>

            <input type="submit" value="Submit" className="quform-submit" />
          </form>
        </div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div className="question-card" key={index}>
              <h3>
                Question {index + 1}: {faq.question}
              </h3>
              <ol>
                <li>Option 1: {faq.option1}</li>
                <li>Option 2: {faq.option2}</li>
                <li>Option 3: {faq.option3}</li>
                <li>Option 4: {faq.option4}</li>
              </ol>
              <p className="answer">Correct Answer: {faq.answer}</p>
              <span
                className="delete-button"
                onClick={() => handleDeleteQuestion(index)}
              >
                Delete
              </span>
            </div>
          ))}
        </div>

        <div className="row justify-content-center" style={{ marginTop: '20px' }}>
          <nav aria-label="Page navigation justify-content-center">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <PublicUserFooter />
    </>
  );
}

export default QuestionForm;