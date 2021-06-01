const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Java", "3: C"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join("\n")} \n (Write option number)`
      )
    );
    console.log(answer);

    // Register Answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
  },
  displayResults() {
    console.log(this.answers);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(`${this.options[i].slice(2)}:${this.answers[i]}\n`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// document.querySelector('.poll-result').innerHtml=poll.displayResult;
