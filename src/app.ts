import {Payment} from './classes/payment.js'
import {Invoice} from './classes/invoice.js'
import {HasFormatter} from './interfaces/hasformatter.js'
import { ListTemplate } from './classes/listTemplate.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let values: [string, string, number]
    values= [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    
    list.render(doc,type.value, 'end')
})


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

let tup: [string,number,boolean] = ['ryu', 25, true]
