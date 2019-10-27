import chalk from 'chalk'
import parseArguments from './helper/parseArguments'
import promptForConfig from './helper/promptForConfig'
import copyTemplateFiles from './helper/copyTemplateFiles'
import createPackageJson from './helper/createPackageJson'

export async function scaffold(args) {
	let options = parseArguments(args)

	options = await promptForConfig(options)

	console.log(options);

	await copyTemplateFiles(options)
	await createPackageJson(options)

	console.log(
		`%s Component folder for ${options.name} has been created.`,
		chalk.grey.bold('👾 END')
	)
}
