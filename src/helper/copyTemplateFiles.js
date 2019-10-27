import chalk from 'chalk'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'

const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)
const copy = promisify(ncp)

const TEMPLATE_PATH = path.resolve(__dirname, '../', 'template-folder')
const PACKAGE_ROOT = path.resolve(process.cwd(), 'packages')

const destinationFolder = (componentName) => path.resolve(PACKAGE_ROOT, componentName)

async function copyTemplateFiles(componentName) {
	return copy(TEMPLATE_PATH, destinationFolder(componentName), {
		clobber: false
	})
}

async function createPackagesDirectory() {
	return mkdir(PACKAGE_ROOT)
}

export default async function copyTemplate({ name }) {
	if (!fs.existsSync(PACKAGE_ROOT)) {
		await createPackagesDirectory()
	}

	if (fs.existsSync(destinationFolder(name))) {
		console.error('%s Component folder already exists', chalk.red.bold('🚨 ERROR'))
		process.exit(1);
	}

	try {
		await access(TEMPLATE_PATH, fs.constants.R_OK);
	} catch (err) {
		console.error('%s Invalid template name', chalk.red.bold('🚨'))
		process.exit(1);
	}

	console.log('%s Copying project files', chalk.bold('🗄 '))

	try {
		await copyTemplateFiles(name)
	} catch (e) {
		console.error('%s Error copying files', chalk.red.bold('🚨 ERROR'))
		console.error(e);
		process.exit(1)
	}

	console.log('%s Project ready', chalk.green.bold('✅ DONE'))
	return true
}

