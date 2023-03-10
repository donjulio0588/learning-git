"use strict";
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of Items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const personCollection = new DataCollection();
personCollection.addItem({ id: 1, name: 'Julio', price: 254 });
personCollection.addItem({ id: 2, name: 'Paco', price: 412 });
personCollection.addItem({ id: 3, name: 'Felipe', price: 212 });
personCollection.addItem({ id: 4, name: 'Lorenzo', price: 475 });
//personCollection.getItems();
//personCollection.getItems();
console.log(personCollection.getNames());
