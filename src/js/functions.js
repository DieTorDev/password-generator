import {
	passwordLenghtElement,
	labelLengthElement,
	buttonClickElement,
	options,
	output
} from './dom';

const algorithm = {
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	numbers: '0123456789',
	symbols: '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'
};

const keysArray = Object.keys(algorithm);

let finalAlgorithm = '';

const getLength = () => {
	labelLengthElement.textContent = `Length: ${Math.floor(
		passwordLenghtElement.value
	)}`;
};

const disabledButton = isActiveDisabled => {
	buttonClickElement.disabled = isActiveDisabled;
};

const changeAlgorithm = value => {
	finalAlgorithm = '';
	let checkActive = true;
	for (let i = 0; i < 4; i++) {
		if (options.children[i].children[1].checked) {
			finalAlgorithm += algorithm[keysArray[i]];
			checkActive = false;
		}
	}
	disabledButton(checkActive);
};

const generateRandomNumber = () => {
	const randomNumber = Math.floor(Math.random() * finalAlgorithm.length - 1);
	return randomNumber;
};

const printRandomPassword = () => {
	output.textContent = '';
	for (let i = 0; i < Math.floor(passwordLenghtElement.value); i++) {
		const random = generateRandomNumber();
		output.textContent += finalAlgorithm.charAt(random);
	}
};

export { printRandomPassword, changeAlgorithm, getLength };
