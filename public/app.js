import { Payment } from './classes/payment.js';
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//ENUMS
/* enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <T>{
    uid:number;
    resourceName:ResourceType;
    data: T
}
const docOne: Resource <object> = {
    uid: 3,
    resourceName: ResourceType.BOOK,
    data: {name: 'Pascal'}
}

const docTwo: Resource<String[]>={
    uid: 2,
    resourceName: ResourceType.PERSON,
    data:['bread', 'milk', 'toiletroll']
}

console.log(docOne, docTwo) */
//Tuples
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, true];
