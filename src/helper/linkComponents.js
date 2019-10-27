import chalk from 'chalk'
import execa from 'execa'

export default async function linkComponents() {
	console.log('%s Linking packages', chalk.bold('🔗 '))

	try {
		await execa('lerna', ['link'])
	} catch (e) {
		console.error('%s Could not link packages', chalk.red.bold('🚨 ERROR'))
		console.error(e)
		process.exit(1)
	}

	return true
}
