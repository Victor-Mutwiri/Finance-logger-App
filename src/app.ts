interface isPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}

const me:isPerson = {
    name: "Victor",
    age: 24,
    speak(text:string):void{console.log(text)},
    spend(amount:number):number{
        console.log('I spent', amount)
        return amount
    }
}

import {Invoice} from './classes/invoice.js'

const invOne = new Invoice('mario','work on the mario website', 2500)
const invTwo = new Invoice('Tito','work on the Tito website', 1500)

let invoices:Invoice[] = []
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})