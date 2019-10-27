import parseArguments from './helper/parseArguments'
import promptForConfig from './helper/promptForConfig'

export async function scaffold(args) {
	let options = parseArguments(args)

	options = await promptForConfig(options)

	console.log(options);
}
