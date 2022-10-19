import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//get the list template instance from index
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//tupla
let values;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    console.log(values);
    if (type.value === 'invoice') {
        //spread opperator
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
