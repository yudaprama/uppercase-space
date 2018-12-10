export default function uppercaseSpace (value: string) {
	return value.replace(/([A-Z])/g, ' $1').trim();
}
