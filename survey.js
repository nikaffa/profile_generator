// A survey app using READLINE Node module, which asks the user a bunch of questions and generates a profile description
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (ans) => {
  answers.push(ans);
  rl.question("What's an activity you like doing? ", (ans) => {
    answers.push(ans);
    rl.question("What do you listen to while doing that? ", (ans) => {
      answers.push(ans);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (ans) => {
        answers.push(ans);
        rl.question("What's your favourite thing to eat for that meal? ", (ans) => {
          answers.push(ans);
          rl.question("Which sport is your absolute favourite? ", (ans) => {
            answers.push(ans);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (ans) => {
              answers.push(ans);
              console.log(`${answers[0]} loves ${answers[1]} while ${answers[2]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});