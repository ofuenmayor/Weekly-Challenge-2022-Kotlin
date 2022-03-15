import { fizzBuzzer } from "./src/challenge0";

let array:number[] = [];
for (let i = 0; i <100; i++){
	array.push(i);
}

let arrayResult:(number|string)[] = fizzBuzzer(array);

arrayResult.forEach(element => console.log(element));
