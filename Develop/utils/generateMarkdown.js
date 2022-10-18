// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'No license') {
  return ``;
  } else {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'Apache License 2.0') {
  return 'https://www.apache.org/licenses/LICENSE-2.0'
}
if (license === 'GNU License v3.0') {
  return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
}
if (license === 'MIT License') {
  return 'https://choosealicense.com/licenses/mit/'
}
if (license === 'Boost Software License 1.0') {
  return 'https://www.boost.org/LICENSE_1_0.txt'
}
if (license === 'Mozilla Public License'){
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
  The project is protected under the ${license} license.`
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
