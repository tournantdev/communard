import validateName from 'validate-npm-package-name'

export default function validatePackageName(name) {
	const validated = validateName(name)

	if (validated.validForNewPackages) return { valid: true }

	const { errors = [], warnings = [] } = validated
	const messages = [...errors, ...warnings]

	return { messages, valid: false }
}
