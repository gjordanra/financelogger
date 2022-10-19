import { HassFormatter } from "../interfaces/HassFormatter.js";

export class Payment implements HassFormatter {
    readonly recipient: string;
    private details: string;
    public amount: number;

    constructor (client:string, details:string, amount:number){
        console.log (client, details, amount);
        this.recipient = client;
        this.details = details;
        this.amount = amount; 
    }
    format() {
        return `${this.recipient} is owed  $${this.amount} for ${this.details}`;
    }
};