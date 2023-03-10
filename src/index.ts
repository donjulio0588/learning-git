interface Person {
    id: number;
    name: string;
}

interface Employee extends Person {
    role: string;
}

interface Product {
    id: number;
    name: string;
    price: number
}

class DataCollection<T extends {id: number, name: string}> {
    private items: T[] = []

    addItem(newItem: T): void {
        this.items.push(newItem)
    }

    getItems(): void {
        console.log(`List of Items`, JSON.stringify(this.items))
    }

    getNames(): string[] {
        return this.items.map((item: T) => item.name)
    }

    getItemById(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id)
    }

}


const personCollection = new DataCollection<Product>();

personCollection.addItem({id: 1, name: 'Julio A.', price: 254})
personCollection.addItem({id: 2, name: 'Paco', price: 412})
personCollection.addItem({id: 3, name: 'Felipe', price: 212})
personCollection.addItem({id: 4, name: 'Lorenzo', price: 475})


//personCollection.getItems();
//personCollection.getItems();
console.log(personCollection.getNames())