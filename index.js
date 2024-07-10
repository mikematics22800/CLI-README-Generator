// Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'node:fs';

// Import questions array
import questions from './libs/questions.js';

// Import licenses array
import licenses from './libs/licenses.js';

// Callback function to write README file with user inputs
const generateREADME = (answers) => {
  const license = licenses[licenses.findIndex(license => license.name == answers.license)]
  const contents = (
`# ${answers.title}
## Description
${answers.description}
## Installation
\`\`\`
${answers.installation}
\`\`\`
## Usage
${answers.usage}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## License
[![alt text](${license.badge})](${license.url})
## Questions
Check my [Github Page](https://github.com/${answers.username}) or email me at ${answers.email}.`
  )
  fs.writeFile('./README.md', contents, (error) => {
    if (error) {
      console.log('An error has occurred. Ensure you have write permissions to the root directory.')
      console.log(error);
    } else {
      console.log('README file created successfully!');
    }
  })
}

// Prompt inquirer questions then generate README
inquirer.prompt(questions).then((answers) => {
  generateREADME(answers)
}).catch((error) => {
  console.log(error)
});