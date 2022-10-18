import { HassFormatter } from "../interfaces/HassFormatter.js";

export class Invoice implements HassFormatter {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
};