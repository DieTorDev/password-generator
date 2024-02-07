import { passwordLenghtElement, buttonClickElement, options } from './dom';

import { printRandomPassword, getLength, changeAlgorithm } from './functions';

passwordLenghtElement.addEventListener('input', getLength);
buttonClickElement.addEventListener('click', printRandomPassword);
options.addEventListener('change', changeAlgorithm);
