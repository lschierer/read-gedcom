import { Node } from './Node';

export class Adoption extends Node {
    HUSBAND = 'HUSB';
    WIFE = 'WIFE';
    BOTH = 'BOTH';

    constructor(data) {
        super(data, Adoption);
    }
}