document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.quiz-form');
    const submitButton = document.querySelector('.submit-button');
  
    submitButton.addEventListener('click', (event) => {
      // Code xử lý
      event.preventDefault();
  
      const correctAnswers = ['c', 'b', 'b', 'a', 'b', 'b', 'a', 'a', 'd', 'a'];
      let score = 0;
  
      const userAnswers = [];
      const answerInputs = form.querySelectorAll('input[type="radio"]:checked');
  
      answerInputs.forEach((input) => userAnswers.push(input.value));
  
      userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          score++;
        }
      });
  
      alert(`Bạn đã trả lời đúng ${score}/10 câu`);
      window.location.href = 'index.html'; // chuyển hướng về trang chủ
    });
  });
  