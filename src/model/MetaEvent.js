import { Node } from './Node';

export class MetaEvent extends Node {
    constructor(data, clazz) {
        super(data, clazz || MetaEvent);
    }

    valueAsArray() {
        return this.value().map(v => v.split(', ')); // Not a typo, comma is followed by a space
    }
}