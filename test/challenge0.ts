import {expect} from 'chai';
import { fizzBuzzer } from '../src/challenge0';

describe('Challenge 0 Fizz ',()=>{
	it('when recibe a multiple of 3 get fizz', () => {
		let example: any[] = [2,3,6,9];
		const result = fizzBuzzer(example);
		expect(result).to.have.all.members([2,'fizz','fizz','fizz']);
	});
	it('when recibe a multiple of 5 get buzz', () => {
		let example: any[] = [5,10,20,25,4];
		const result = fizzBuzzer(example);
		expect(result).to.have.all.members(['buzz','buzz','buzz','buzz',4]);
	});
	it('when recibe a multiple of 3 and 5 get fizz buzz', () => {
		let example: any[]= [2,15,30,3,5];
		const result = fizzBuzzer(example);
		expect(result).to.have.all.members([2,'fizz buzz','fizz buzz','fizz','buzz']);
}); });
