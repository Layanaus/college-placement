// import React, { useState } from 'react';
// import Companynav from './Companynav';
// import PublicUserFooter from '../Footer/PublicUserFooter';

// function QuestionForm() {
//   const [question, setQuestion] = useState('');
//   const [choices, setChoices] = useState(['', '', '', '']);

//   const handleQuestionChange = (event) => {
//     setQuestion(event.target.value);
//   };

//   const handleChoiceChange = (index, event) => {
//     const updatedChoices = [...choices];
//     updatedChoices[index] = event.target.value;
//     setChoices(updatedChoices);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Process the form data here
//   };

//   const faqData = [
//     { question: 'who is the favorite girl for fazil?', answer1: 'shana',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
//     { question: 'whats your name', answer1: 'Layana',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
//     { question: 'Where are you from', answer1: 'Edappal',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
//     { question: 'who is your favorite singer', answer: 'Manjari',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
//     // Add more questions and answers as needed
//   ];

//   return (
//     <>
//     <Companynav/>
//     <div className='container'>
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#E2F0FF', padding: '20px', borderRadius: '5px' }}>
//       <h1>Upload Question and Choices</h1>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <label htmlFor="question">Question:</label>
//         <textarea id="question" name="question" rows="4" cols="50" value={question} onChange={handleQuestionChange} required></textarea>

//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//           {[1, 2, 3,'right'].map((index) => (
//             <div key={index} style={{ marginRight: '10px' }}>
//               <label htmlFor={`choice${index}`}>Choice {index}:</label>
//               <input type="text" id={`choice${index}`} name="choices[]" value={choices[index - 1]} onChange={(event) => handleChoiceChange(index - 1, event)} required /><br /><br />
//             </div>
//           ))}
//         </div>

//         <input type="submit" value="Submit" style={{ marginTop: '10px' }} />
//       </form>
//     </div>


//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', backgroundColor: '#E2F0FF', padding: '20px', borderRadius: '5px' }}>
//       {faqData.map((faq, index) => (
//         <div key={index}>
//           <h3>{faq.question}</h3>
//           <p>{faq.answer1}</p>
//           <p>{faq.answer2}</p>
//           <p>{faq.answer3}</p>
//           <p>{faq.answer4}</p>
//         </div>
//       ))}
//     </div>
//     </div>

   


//     <PublicUserFooter/>
//     </>
//   );
// }

// export default QuestionForm;


import React, { useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';


function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const [faqData, setFaqData] = useState([
    { question: 'Who is the favorite girl for Fazil?', choices: ['Shana', 'Layana', 'Shamliya', 'Vincy'], correctAnswer: 'Vincy' },
    { question: 'What is your name?', choices: ['Layana', 'Layana', 'Shamliya', 'Vincy'], correctAnswer: 'Vincy' },
    { question: 'Where are you from?', choices: ['Edappal', 'Layana', 'Shamliya', 'Vincy'], correctAnswer: 'Edappal' },
    { question: 'Who is your favorite singer?', choices: ['Manjari', 'Layana', 'Shamliya', 'Vincy'], correctAnswer: 'Manjari' },
    // Add more questions and answers as needed
  ]);

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

  const handleDeleteQuestion = (index) => {
    const updatedFaqData = [...faqData];
    updatedFaqData.splice(index, 1);
    setFaqData(updatedFaqData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here
    const newFaq = {
      question,
      choices: [...choices, correctAnswer],
      correctAnswer,
    };
    setFaqData([...faqData, newFaq]);

    // Clear the form inputs
    setQuestion('');
    setChoices(['', '', '']);
    setCorrectAnswer('');
  };

  return (
    <>
    <Companynav/>
      <div className="qucontainer">
      <div className="quform-container">
  <h1 className="quform-title">Upload Question and Choices</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="question" className="quform-label">Question:</label>
    <textarea id="question" name="question" rows="4" cols="50" value={question} onChange={handleQuestionChange} className="form-input" required></textarea>

    <div className="choices-container" style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <label htmlFor="choice1" className="quform-label">Option 1:</label>
        <input type="text" id="choice1" name="choices[]" value={choices[0]} onChange={(event) => handleChoiceChange(0, event)} className="form-input" required />
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="choice2" className="quform-label">Option 2:</label>
        <input type="text" id="choice2" name="choices[]" value={choices[1]} onChange={(event) => handleChoiceChange(1, event)} className="form-input" required />
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="choice3" className="quform-label">Option 3:</label>
        <input type="text" id="choice3" name="choices[]" value={choices[2]} onChange={(event) => handleChoiceChange(2, event)} className="form-input" required />
      </div>

      <div style={{ marginRight: '20px' }}>
        <label htmlFor="choice4" className="quform-label">Option 4:</label>
        <input type="text" id="choice4" name="choices[]" value={choices[3]} onChange={(event) => handleChoiceChange(3, event)} className="form-input" required />
      </div>
  
<div>
    <label htmlFor="correctAnswer" className="quform-label">Correct Answer:</label>
    <input type="text" id="correctAnswer" name="correctAnswer" value={correctAnswer} onChange={handleCorrectAnswerChange} className="form-input" required />
    </div>  </div>
    <input type="submit" value="Submit" className="quform-submit" />
  </form>
</div>


        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div className="question-card" key={index}>
              <h3>Question {index + 1}: {faq.question}</h3>
              <ol>
                {faq.choices.slice(0, 4).map((choice, choiceIndex) => (
                  <li key={choiceIndex}>
                    Option {choiceIndex + 1}: {choice}
                  </li>
                ))}
              </ol>
              <p className="answer">
                Correct Answer: {faq.correctAnswer}
              </p>
              <span className="delete-button" onClick={() => handleDeleteQuestion(index)}>
                Delete
              </span>
            </div>
          ))}
        </div>
        
        <div className="row justify-content-center" style={{marginTop:'20px'}}>
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
      
      <PublicUserFooter/>
    </>
  );
}

export default QuestionForm;
