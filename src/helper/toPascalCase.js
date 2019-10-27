/**
 * Convert a string to Pascal Case (removing non alphabetic characters).
 *
 * Courtesy of https://gist.github.com/jacks0n/e0bfb71a48c64fbbd71e5c6e956b17d7
 *
 * @example
 * 'hello_world'.toPascalCase() // Will return `HelloWorld`.
 * 'fOO BAR'.toPascalCase()     // Will return `FooBar`.
 *
 * @returns {string}
 *   The Pascal Cased string.
 */
export default function(val) {
	return val.match(/[a-z]+/gi)
		.map(function(word) {
			return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
		})
		.join('')
}
