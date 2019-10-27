export default function validateVersion(version) {
	const semantic = /^\d\.\d\.\d$/

	return version.match(semantic)
}
