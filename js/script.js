function checkAllAnswers() {
  // Đáp án đúng
  const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "a",
    q4: "b",
    q5: "c",
  };

  // Lấy tất cả các câu hỏi từ form
  const resultsDiv = document.getElementById("results");
  let output = "<h3>Results:</h3>";
  let correctCount = 0;

  // Lặp qua từng câu hỏi
  for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selected) {
      if (selected.value === correctAnswer) {
        output += `<p style="color: green;">${question.toUpperCase()}: Correct!</p>`;
        correctCount++;
      } else {
        output += `<p style="color: red;">${question.toUpperCase()}: Incorrect. Correct answer is "${correctAnswer.toUpperCase()}".</p>`;
      }
    } else {
      output += `<p style="color: orange;">${question.toUpperCase()}: No answer selected!</p>`;
    }
  }

  // Hiển thị tổng số đúng/sai
  output += `<h4>You got ${correctCount}/${
    Object.keys(correctAnswers).length
  } correct!</h4>`;
  resultsDiv.innerHTML = output;
  resultsDiv.style.display = "block";
}
