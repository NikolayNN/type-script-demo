
//string
let str: string = 'string';

//number
let num: number = 10;

//boolean
let isTrue: boolean = true;

//other
let unknown: string | number = '1';
unknown = 1;

let numArray: number[] = [1, 2, 3];
let numArray2: Array<number> = [1, 2, 3];

let strArray: string[] = ['1', '2', '3'];
let strArray2: Array<string> = ['1', '2', '3'];

let boolArray: boolean[] = [true, false];
let boolArray2: Array<boolean> = [true, false];

let array: [number, number, number, string] = [1, 2, 3, '4'];

let array2: [boolean, string, number] = [true, 'str', 22];

// ===============

const myName: string = 'WFM';
const myAge: number = 50;

function getMyName(): string {
    return myName;
}

function getMyAge(): number {
    return myAge;
}

console.log(getMyName());
console.log(getMyAge());

// ================

function getMyAge2(age: number): number {
    return age
}

function getMyAge3(age: number, prefix: string): string {
    return prefix + age
}

function getMyAge4(age: number, prefix: string = 'WFM-'): string {
    return prefix + age
}

console.log(getMyAge4(20));

function consoleLog(str: string): void {
    console.log(str);
}

//====================================

let mySum: (num1: number, num2: number) => number;

function sum (num1: number, num2: number) {
    return num1 + num2;
}

mySum = sum;
console.log(mySum(15, 10));

