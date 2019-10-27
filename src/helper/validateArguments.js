import chalk from 'chalk'

import validatePackageName from './validators/packageName'
import validateVersion from './validators/version'

export default function validateArguments({ name, version }) {
	// if values are not given via arguments the prompt will validate them and we can let them pass here
	const validName = name ? validatePackageName(name) : { valid: true }
	const validVersion = version ? validateVersion(version) : true

	if (!validName.valid) {
		console.error(`%s Package name given is not valid.\nErrors:\n${validName.messages.join(', ')}`, chalk.red.bold('🚨 ERROR'))
	}

	if (!validVersion) {
		console.error('%s Given version number is invalid', chalk.red.bold('🚨 ERROR'))
	}

	return Boolean(validName.valid && validVersion)
}
