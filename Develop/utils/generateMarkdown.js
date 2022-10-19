// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
     return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
    case 'GNU v3.0':
      return "[![License: GNU v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)";
    case 'Open Database':
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/')";
    case 'Mozilla Public':
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://www.boost.org/LICENSE_1_0.txt)";
   default:
    return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'Apache 2.0') {
  return 'https://www.apache.org/licenses/LICENSE-2.0'
}
if (license === 'GNU v3.0') {
  return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
}
if (license === 'MIT') {
  return 'https://choosealicense.com/licenses/mit/'
}
if (license === 'Open Database') {
  return 'https://opendatacommons.org/licenses/odbl/'
}
if (license === 'Mozilla Public'){
  return 'https://www.boost.org/LICENSE_1_0.txt'
}else{
  return ``
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
  return ``;
} else {
  return `## License
  The project is protected under the ${license} license. Please follow the following link if you'd like more details about this license ${renderLicenseLink(license)}`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Contact Me
  GitHub: https://github.com/${data.github}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
