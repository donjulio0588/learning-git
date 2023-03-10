//var
const PI: number = 3.14

//interface
interface Person {
    id: number;
    name: string;
}

//function
function generateRandommNumber(): number {
    return ~~(Math.random() * 100)
}


export { generateRandommNumber, PI, Person}