// Import licenses array
import licenses from './licenses.js';

// Declare array of license names by mapping through licenses
const licenseNames = licenses.map((license) => {
  return license.name;
})

// Declare and export questions array for user input
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
    choices: licenseNames
  }
];

export default questions;