import { useState, useEffect } from "react";

export default function Question() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/question/123")
      .then((resp) => resp.json())
      .then(setQuestion);
  }, []);

  function renderizeAnswers() {
    if (question) {
      return question.answers.map((answer, i) => <li key={i}>{answer}</li>);
    }
  }

  return (
    <div>
      <h1>Questions</h1>
      <div>
        <label>Question:</label>
        <h4>{question?.question}</h4>
        <ul>{renderizeAnswers()}</ul>
      </div>
    </div>
  );
}
