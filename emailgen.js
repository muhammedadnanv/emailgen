const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
  rl.question('Enter your last name: ', (lastName) => {
    rl.question('Enter your domain: ', (domain) => {
      const email = generateEmail(firstName, lastName, domain);
      console.log(`Generated Email: ${email}`);
      rl.close();
    });
  });
});

function generateEmail(firstName, lastName, domain) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain.toLowerCase()}`;
}
