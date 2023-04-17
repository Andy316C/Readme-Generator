const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title,description,ToC,license,installation, usage,contribution, test,questions,username}) =>
  `
  <div id='title'>

  # Title

  ## ${title}
  </div>
  <br>

  <div id='desc'>

  ## Description
  ${description}

  </div>
  <br>

  ## License
  ${license}

  <br>
  
  ## Table of contents
  <ol>
  <li><a href='#title'>Title</a></li>
  <li><a href='#desc'>Description</a></li>
  <li><a href='#install'>Istallation</a></li>
  <li><a href='#usage'>Usage</a></li>
  <li><a href='#cont'>Contribution</a></li>
  <li><a href='#test'>Testing</a></li>
  <li><a href='#questions'>Questions</a></li>
  </ol>
  <br>

  <div id='install'>

  ## Installation
  ${installation}

  </div>
  <br>

  <div id='usage'>

  ## Usage Info
  ${usage}
  </div>
  <br>

  <div id='cont'>

  ## Contribution Guidelines
  ${contribution}
  </div>
  <br>

  <div id='test'>

  ## Testing
  ${test}
  </div>
  <br>
  
  <div id='questions'>
  
  ## Questions
  ${questions}

  <a href='https://github.com/${username}'>Github Account</a>

  </div>


  `

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation information:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution guidelines:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Testing process:',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Questions?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'what is your Github username?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateReadme(answers);

    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


  
  /*
  GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/
