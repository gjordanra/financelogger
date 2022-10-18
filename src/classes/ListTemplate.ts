import { HassFormatter } from "../interfaces/HassFormatter.js";

export class ListTemplate {
    constructor (private container:HTMLUListElement){}

    render(item:HassFormatter, heading: string, position: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (position === 'start'){
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }

    };

};

/*
1- register a list container in the constructor
2- create a render metod to render a new li to the container
    --accepts arguments: invoice or payment, a heading, a position
    --create the html template (li, h4, p)
    --add the li template to the start or end of the list
*/ 