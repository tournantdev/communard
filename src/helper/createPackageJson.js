import chalk from 'chalk'
import path from 'path'
import fs from 'fs'
import { promisify } from 'util'

const writeFile = promisify(fs.writeFile)

import template from '../templates/package-template'

function addInformation(options) {
	const copy = { ...template }

	copy.version = options.version
	copy.description = options.description

	return JSON.stringify(copy, null, 2).replace(/({componentName})/g, options.name)
}

export default async function createPackageJson(options) {
	const pkg = addInformation(options)
	const pkgPath = path.resolve(process.cwd(), `packages/${options.name}`, 'package.json')

	console.log('📦  Creating package.json')

	try {
		await writeFile(pkgPath, pkg, 'utf8')
	} catch (e) {
		console.error('%s Failed to create package.json', chalk.red.bold('🚨 ERROR'))
		console.error(e)
		process.exit(1)
	}

	console.log('%s package.json created', chalk.green.bold('✅ DONE'))

	return true
}
