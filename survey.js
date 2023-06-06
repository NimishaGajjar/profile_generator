const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = [
  'What is your name? Nicknames are also acceptable:)',
  'What is an activity you like doing?',
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What is your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!',
];

rl.question(question[0], (name) => {
  rl.question(question[1], (activity) => {
    rl.question(question[2], (listen) => {
      rl.question(question[3], (meal) => {
        rl.question(question[4], (favFood) => {
          rl.question(question[5], (sport) => {
            rl.question(question[6], (superpower) => {

              console.log(`\n${name} loves listening to ${listen} while ${activity}, devouring ${favFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




