import chalk from 'chalk'
import parseArguments from './helper/parseArguments'
import validateArguments from './helper/validateArguments'
import promptForConfig from './helper/promptForConfig'
import copyTemplateFiles from './helper/copyTemplateFiles'
import createPackageJson from './helper/createPackageJson'
import linkComponents from './helper/linkComponents'

export async function scaffold(args) {
	let options = parseArguments(args)

	if (!validateArguments(options)) {
		console.error('%s Arguments were invalid. Aborting.', chalk.red.bold('🚨 ERROR'))

		process.exit(1)
	}

	options = await promptForConfig(options)

	await copyTemplateFiles(options)
	await createPackageJson(options)

	await linkComponents()

	console.log(
		`%s Created component folder for ${options.name} successfully.`,
		chalk.grey.bold('👾 END')
	)
}
