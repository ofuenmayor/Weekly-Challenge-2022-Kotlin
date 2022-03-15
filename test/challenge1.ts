import { expect } from "chai";
import AnagramValidator from '../src/challenge1';

describe('find it is a word is anagram from the other', () => {
	it('should ramo it is anamgram of amor ', () => {
		let wordOne:string = 'ramo';
		let wordTwo:string = 'amor';

		let isAnagram:boolean = new AnagramValidator().validate(wordOne,wordTwo);

		expect(isAnagram).to.be.true;
	});

	it('should arc it is anamgram of car', () => {
		let wordTwo:string = 'car';
		let wordOne:string = 'arc';

		let isAnagram:boolean = new AnagramValidator().validate(wordOne,wordTwo);

		expect(isAnagram).to.be.true;
	});

	it('should dunk it is anamgram of drunk', () => {
		let wordOne:string = 'dunk';
		let wordTwo:string = 'dran';

		let isAnagram:boolean = new AnagramValidator().validate(wordOne,wordTwo);

		expect(isAnagram).to.be.false;
	});
});
