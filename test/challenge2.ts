import {expect} from "chai";
import FiboGenerator from '../src/challenge2';


describe('fibonacci', () => {
	it('fibonacci should work with 10 members', () => {
		const result:number[] = new FiboGenerator().generate(0,1,10);
		expect(result).to.have.all.members([0,1,1,2,3,5,8,13,21,34,55])
	});

	it('fibonacci should work with 20 members', () => {
		const result:number[] = new FiboGenerator().generate(0,1,20);
		expect(result).to.have.all.members([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765])
	});

});
