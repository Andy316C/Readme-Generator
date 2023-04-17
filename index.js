const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title,description,license,installation, usage,contribution, test,questions,username,email}) =>

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

  Github Repository <br>
  <a href='https://github.com/${username}'>Github Account</a>
  <br>
  For more questions please Email the following email address <br>
  ${email}

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
      name: 'license',
      message: 'License (select 1 ,2 or 3)  1: MIT License  2: Apache License 2.0  3: Boost Software license 1.0',
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
    {
      type: 'input',
      name: 'email',
      message: 'Email address for contact info',
    },
  ])
  .then((answers) => {
    if(answers.license == 1){
      answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) MIT License Copyright (c) Year Full name Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
    }else if(answers.license == 2){
      answers.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  Copyright [yyyy] [name of copyright owner] Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License."
    }else if(answers.license == 3){
      answers.license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) Boost Software License - Version 1.0 - August 17th, 2003 Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the 'Software') to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following: The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE "
    }
    const htmlPageContent = generateReadme(answers);
    
    
    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md')
    );
  });


