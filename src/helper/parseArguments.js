import arg from 'arg'

export default function parseArguments(rawArgs) {
  const args = arg(
		{
			'--name': String,
			'--version': String,
			'--description': String,
			'-n': '--name',
			'-v': '--version',
			'-d': '--description'
		},
		{
			argv: rawArgs.slice(2)
		}
  )

  return {
		name: args['--name'],
		version: args['--version'],
		description: args['--description'],
	}
}