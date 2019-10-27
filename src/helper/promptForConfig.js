const inquirer = require('inquirer')

module.exports = async function promptForConfig(options) {
	const questions = []

	if (!options.name) {
		questions.push({
			type: 'input',
			name: 'name',
			message: 'Enter component name.',
			validate: (val) => val.length > 0 || 'Please enter a name.',
			transformer: (val) => `@tournant/${val}`
		})
	}

	if (!options.version) {
		questions.push({
			type: 'input',
			name: 'version',
			message: 'Enter component version.',
			default: () => '0.0.1',
			validate: val => {
				const semantic = /^\d\.\d\.\d$/

				if (val.match(semantic)) return true

				return 'Please enter a valid semantic version number.'
			},
		})
	}

	if (!options.description) {
		questions.push({
			type: 'input',
			name: 'description',
			message: 'Enter component description (optional).',
		})
	}

	const answers = await inquirer.prompt(questions)

	return {
		...options,
		name: options.name || answers.name,
		version: options.version || answers.version,
		description: options.description || answers.description || ''
	}
}
