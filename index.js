// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'node:fs';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select license:',
    choices: [
      'Academic Free License v3.0 (AFL-3.0)', 
      'Apache license 2.0 (Apache-2.0)', 
      'Artistic license 2.0 (Artistic-2.0)', 
      'Boost Software License 1.0 (BSL-1.0)', 
      'BSD 2-clause "Simplified" license (BSD-2-Clause)', 
      'BSD 3-clause "New" or "Revised" license (BSD-3-Clause)',
      'BSD 3-clause Clear license (BSD-3-Clause-Clear)',
      'BSD 4-clause "Original" or "Old" license (BSD-4-Clause)',
      'BSD Zero-Clause license (0BSD)',
      'Creative Commons license family (CC)',
      'Creative Commons Zero v1.0 Universal (CC0-1.0)',
      'Creative Commons Attribution 4.0 (CC-BY-4.0)',
      'Creative Commons Attribution ShareAlike 4.0 (CC-BY-SA-4.0)',
      'Do What The F*ck You Want To Public License (WTFPL)',
      'Educational Community License v2.0 (ECL-2.0)',
      'Eclipse Public License 1.0 (EPL-1.0)',
      'Eclipse Public License 2.0 (EPL-2.0)',
      'European Union Public License 1.1 (EUPL-1.1)',
      'GNU Affero General Public License v3.0 (AGPL-3.0)',
      'GNU General Public License family (GPL)',
      'GNU General Public License v2.0 (GPL-2.0)',
      'GNU General Public License v3.0 (GPL-3.0)',
      'GNU Lesser General Public License family (LGPL)',
      'GNU Lesser General Public License v2.1 (LGPL-2.1)',
      'GNU Lesser General Public License v3.0 (LGPL-3.0)',
      'ISC (ISC)',
      'LaTeX Project Public License v1.3c (LPPL-1.3c)',
      'Microsoft Public License (MS-PL)',
      'MIT (MIT)',
      'Mozilla Public License 2.0 (MPL-2.0)',
      'Open Software License 3.0 (OSL-3.0)',
      'PostgreSQL License (PostgreSQL)',
      'SIL Open Font License 1.1 (OFL-1.1)',
      'University of Illinois/NCSA Open Source License (NCSA)',
      'The Unlicense (Unlicense)',
      'zLib License (Zlib)'
    ]
  }
];

// TODO: Create a function to write README file
const generateREADME = (answers) => {
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
${answers.license}
## Questions
https://github.com/${answers.username}
Have additional questions? Email me at ${answers.email}.`
  )
  fs.writeFile('./README.md', contents, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('README file created successfully!');
    }
  })
}

inquirer.prompt(questions).then((answers) => {
  generateREADME(answers)
}).catch((error) => {
  console.log(error)
});