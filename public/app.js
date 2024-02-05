"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: "Victor",
    age: 24,
    speak(text) { console.log(text); },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const invoice_js_1 = require("./classes/invoice.js");
const invOne = new invoice_js_1.Invoice('mario', 'work on the mario website', 2500);
const invTwo = new invoice_js_1.Invoice('Tito', 'work on the Tito website', 1500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
