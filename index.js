const student = {
  ask: function(question, answer) {
    console.log(question);
    student.responds = answer;
  }
};

student.ask("Staying in bed?", function(answer) {});
