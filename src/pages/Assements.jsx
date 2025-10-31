import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const QUESTIONS = [
  // 15 sample questions — replace with your real questions later
  { id: 1, text: "1) Which subject do you enjoy most?", options: ["Math/Science", "Commerce", "Arts", "Vocational"] },
  { id: 2, text: "2) Do you like solving numerical problems?", options: ["Always", "Sometimes", "Rarely", "Never"] },
  { id: 3, text: "3) Do you enjoy working with computers?", options: ["Yes", "Sometimes", "No", "Not sure"] },
  { id: 4, text: "4) Are you comfortable with public speaking?", options: ["Yes", "Sometimes", "No", "Prefer not"] },
  { id: 5, text: "5) How do you rate your creative skills?", options: ["High", "Medium", "Low", "Not sure"] },
  { id: 6, text: "6) Do you like lab experiments?", options: ["Love them", "OK", "Dislike", "Never tried"] },
  { id: 7, text: "7) Do you prefer theory or practical work?", options: ["Practical", "Theory", "Both", "Depends"] },
  { id: 8, text: "8) Are you comfortable with programming?", options: ["Yes", "Learning", "No", "Not interested"] },
  { id: 9, text: "9) How much do you enjoy reading?", options: ["A lot", "Some", "A little", "Not at all"] },
  { id: 10, text: "10) Do you prefer teamwork or solo work?", options: ["Teamwork", "Solo", "Either", "Depends"] },
  { id: 11, text: "11) Are you interested in healthcare careers?", options: ["Yes", "Maybe", "No", "Not sure"] },
  { id: 12, text: "12) Do you like fieldwork/outdoor work?", options: ["Yes", "Sometimes", "No", "Never"] },
  { id: 13, text: "13) How do you handle deadlines?", options: ["Great", "Okay", "Struggle", "Need help"] },
  { id: 14, text: "14) Are you willing to relocate for college/job?", options: ["Yes", "Maybe", "No", "Unsure"] },
  { id: 15, text: "15) Do you enjoy research and deep study?", options: ["Yes", "Sometimes", "No", "Not sure"] },
];

function Assessments() {
  const navigate = useNavigate();

  // index of current question (0-based)
  const [currentIndex, setCurrentIndex] = useState(0);

  // selected option for the currently visible question
  const [selectedOption, setSelectedOption] = useState("");

  // array to collect user's answers: { questionId, selected }
  const [answers, setAnswers] = useState([]);

  // whether the quiz is finished
  const [finished, setFinished] = useState(false);

  // handle radio change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // handle submit for the current question
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return; // safety: button is disabled when no option

    // save the answer
    const q = QUESTIONS[currentIndex];
    setAnswers((prev) => [...prev, { questionId: q.id, selected: selectedOption }]);

    // reset selection for next question
    setSelectedOption("");

    // move to next question or finish
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((i) => i + 1);
      // optionally you could scroll to top here if the page is long
    } else {
  setFinished(true); // mark assessment complete
  alert("Assessment completed! Check your recommendations.");
}

  };

  // Optional: allow going back to previous question (not required but helpful)
  const handlePrevious = () => {
    if (currentIndex === 0) return;
    // remove last saved answer
    setAnswers((prev) => prev.slice(0, -1));
    setCurrentIndex((i) => i - 1);
    // restore previously selected option if you want (left empty here)
    setSelectedOption("");
  };

  // Visual progress percentage
  const progress = Math.round(((answers.length) / QUESTIONS.length) * 100);

  return (
    <div className="container py-4">
      <div className="card mx-auto" style={{ maxWidth: 800 }}>
        <div className="card-body">
          <h4 className="card-title">Assessment</h4>
          <p className="text-muted">Answer the questions to get personalized recommendations.</p>

          {/* Progress bar */}
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <small>Question {Math.min(currentIndex + 1, QUESTIONS.length)} of {QUESTIONS.length}</small>
              <small>{progress}%</small>
            </div>
            <div className="progress" style={{ height: 8 }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>

          {/* If finished -> show completion summary */}
          {finished ? (
            <div className="text-center">
              <h5 className="mb-3">Assessment complete 🎉</h5>
              <p className="text-muted">You answered {answers.length} questions.</p>
              {/* Show brief summary of answers */}
              <div className="text-start mb-3" style={{ maxHeight: 220, overflowY: "auto" }}>
                {answers.map((a, idx) => {
                  const qObj = QUESTIONS.find((q) => q.id === a.questionId);
                  return (
                    <div key={a.questionId} className="mb-2">
                      <strong>{idx + 1}. {qObj.text}</strong>
                      <div>Answer: <span className="text-primary">{a.selected}</span></div>
                    </div>
                  );
                })}
              </div>

              <button
  className="btn btn-success"
  onClick={() => navigate("/recommendations")}
>
  View Recommendations
</button>

            </div>
          ) : (
            // Question display
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h5>{QUESTIONS[currentIndex].text}</h5>
                </div>

                {/* Options */}
                <div className="mb-3">
                  {QUESTIONS[currentIndex].options.map((opt, idx) => {
                    const optionId = `q${QUESTIONS[currentIndex].id}_opt${idx}`;
                    return (
                      <div className="form-check mb-2" key={optionId}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name={`question_${QUESTIONS[currentIndex].id}`}
                          id={optionId}
                          value={opt}
                          checked={selectedOption === opt}
                          onChange={handleOptionChange}
                        />
                        <label className="form-check-label" htmlFor={optionId}>
                          {opt}
                        </label>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!selectedOption}
                  >
                    {currentIndex < QUESTIONS.length - 1 ? "Submit & Next" : "Submit & Finish"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assessments;
