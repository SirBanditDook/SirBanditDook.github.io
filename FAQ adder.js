      const faqData = [
        {
          question: "Who are you?",
          answer: "My name is Bandit! I'm a ferret \"kemonomimi\" (which is just someone who's trying to not be a furry, just someone who likes having a tail). I'm a \"streamer\" who mainly likes to program, hence this website, play any game that peaks my interest and sit there with my girlfriend Raekomiii!"
        },
        {
            question: "What is this website?",
            answer: "This website is just somewhere to show who I am, test out features and just generally mess around! (if you're hiring... please hire me even though I might not know everything I can LEARN)"
        },
        {
          question: "When do you stream?",
          answer: "I stream honestly whenever I can AND have the... want(?) to. So there isn't a set schedule but there are more likely days, like Fridays and Saturdays."
        }
      ];

      const faqsContainer = document.getElementById('faqs-container'); // Changed 'FAQs-container' to 'faqs-container'

      faqData.map((item) => {

        let faqItem = document.createElement('article');
        faqItem.classList.add('faq-item');

        faqItem.innerHTML = `
            <div class="item-question">
                <span class="question-text">${item.question}</span>
                <span class="arrow-icon">
                    ▼
                </span>
            </div>
            <div class="answer-wrapper">
                <div class="item-answer">
                    <span class="answer-text">${item.answer}</span>
                </div>
            </div>
    `;
        faqsContainer.append(faqItem);
      });

      const questions = document.querySelectorAll('.item-question');

      questions.forEach(function(item){
          item.addEventListener(('click'), function(e) {
              const parent = e.currentTarget.parentElement;
              parent.classList.toggle('show-answer');
          })
      })