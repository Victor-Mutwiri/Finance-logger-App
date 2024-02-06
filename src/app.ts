import {Payment} from './classes/payment.js'
import {Invoice} from './classes/invoice.js'
import {HasFormatter} from './interfaces/hasformatter.js'

/* let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne = new Invoice('yoshi','web work', 2500)
docTwo = new Payment('mario','plumbing', 800)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const invOne = new Invoice('mario','work on the mario website', 2500)
const invTwo = new Invoice('Tito','work on the Tito website', 1500)

let invoices:Invoice[] = []
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format())
}) */


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value,amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value,amount.valueAsNumber)
    }
    console.log(doc)
})