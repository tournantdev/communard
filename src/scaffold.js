import chalk from 'chalk'
import parseArguments from './helper/parseArguments'
import promptForConfig from './helper/promptForConfig'
import copyTemplateFiles from './helper/copyTemplateFiles'
import createPackageJson from './helper/createPackageJson'
import linkComponents from './helper/linkComponents'

export async function scaffold(args) {
	let options = parseArguments(args)

	const options = await promptForConfig(options)

	await copyTemplateFiles(options)
	await createPackageJson(options)

	await linkComponents()

	console.log(
		`%s Component folder for ${options.name} has been created.`,
		chalk.grey.bold('👾 END')
	)
}
