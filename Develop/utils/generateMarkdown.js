function renderLicenseBadge(license) {
	const badge = '';
	console.log(license);
	if (license === 'MIT') { 
		badge = '![badmath](https://img.shields.io/badge/License-MIT-blue)';
	} else if (license === 'Apache') { 
		badge = '![badmath](https://img.shields.io/badge/License-Apache-green)';
	} else if (license === 'GPL') { 
		badge = '![badmath](https://img.shields.io/badge/License-GPL-red)';
	} else if (license === 'Mozilla') { 
		badge = '![badmath](https://img.shields.io/badge/License-Mozilla-yellow)';
	}
	
	return badge;
}

function renderLicenseLink(license) {
	const link = '';
	if (license === 'MIT') { 
		link = 'https://choosealicense.com/licenses/mit/';
	} else if (license === 'Apache') { 
		link = 'https://choosealicense.com/licenses/apache-2.0/';
	} else if (license === 'GPL') { 
		link = 'https://choosealicense.com/licenses/gpl-3.0/';
	} else if (license === 'Mozilla') { 
		link = 'https://choosealicense.com/licenses/mpl-2.0/';
	}
	
	return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
	console.log(data);
	var badgeText = renderLicenseBadge(data.license)
	var linkText = renderLicenseLink(data.license)
	var sectionText = renderLicenseSection(data.license)
return `
# ${data.name}
## Description
${data.about}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${badgeText}
${linkText}
${sectionText}
## Questions
Questions? Please feel free to contact me at:
### ${data.githubUsername}
${data.githubLink}
${data.emailAddress}
## Contributors
`;
}

module.exports = generateMarkdown;