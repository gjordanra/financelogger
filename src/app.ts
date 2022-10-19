import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HassFormatter } from "./interfaces/HassFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//get the list template instance from index
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);
//tupla
let values : [string, string, number];

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc: HassFormatter;
	values = [tofrom.value, details.value, amount.valueAsNumber];
	console.log (values);
		if (type.value === 'invoice'){
			//spread opperator
			doc = new Invoice(...values);
		}else {
			doc = new Payment(...values);
		}
		list.render(doc,type.value,'end');
});
