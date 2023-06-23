import React, { useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleChoiceChange = (index, event) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = event.target.value;
    setChoices(updatedChoices);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here
  };

  const faqData = [
    { question: 'who is the favorite girl for fazil?', answer1: 'shana',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
    { question: 'whats your name', answer1: 'Layana',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
    { question: 'Where are you from', answer1: 'Edappal',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
    { question: 'who is your favorite singer', answer: 'Manjari',answer2: 'layana',answer3: 'shamliya',answer4: 'vincy' },
    // Add more questions and answers as needed
  ];

  return (
    <>
    <Companynav/>
    <div className='container'>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#E2F0FF', padding: '20px', borderRadius: '5px' }}>
      <h1>Upload Question and Choices</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="question">Question:</label>
        <textarea id="question" name="question" rows="4" cols="50" value={question} onChange={handleQuestionChange} required></textarea>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {[1, 2, 3,'right'].map((index) => (
            <div key={index} style={{ marginRight: '10px' }}>
              <label htmlFor={`choice${index}`}>Choice {index}:</label>
              <input type="text" id={`choice${index}`} name="choices[]" value={choices[index - 1]} onChange={(event) => handleChoiceChange(index - 1, event)} required /><br /><br />
            </div>
          ))}
        </div>

        <input type="submit" value="Submit" style={{ marginTop: '10px' }} />
      </form>
    </div>


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', backgroundColor: '#E2F0FF', padding: '20px', borderRadius: '5px' }}>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer1}</p>
          <p>{faq.answer2}</p>
          <p>{faq.answer3}</p>
          <p>{faq.answer4}</p>
        </div>
      ))}
    </div>
    </div>

   


    <PublicUserFooter/>
    </>
  );
}

export default QuestionForm;
