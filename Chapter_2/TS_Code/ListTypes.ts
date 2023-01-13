let TypeString: string; //для текстовых значений
let TypeBoolean: boolean; //для значений true/false
let TypeNumber: number; //для численных значений
let TypeSymbol: symbol; //уникальное значение, создаваемое вызовом конструктора Symbol
let TypeAny: any; //для переменных, способных содержать значения разных типов, которые могут быть вам известны в момент написания кода
let TypeUnknown: unknown; //аналог any, с которым нельзя производить не каких действий, не утвердив или сузив его до более конкретного типа
let TypeNever: never; //для представления невозможного кода
let TypeVoid: void; //отсутствие значения

//=======================

// const sym1 = Symbol("orderID");
// const sym2 = Symbol("orderID");
//
// sym1 === sym2 // false

//=========================

// const ord = Symbol("orderID");
// const myOrder = {
//     ord: "123",
// }
// console.log(myOrder['ord']); // 123

//========================

function getName(name): string | null { //возвращает string либо null
    return name;
}

const logger = () => { //never - возвращает значение, но работает без перерывно
    while (true) {
        console.log("The server is running")
    }
}

function logError(errorMessages: string): void { //void - не возвращает значение, завершает своё выполнение
    console.error(errorMessages);
}

//========================

let name1 = "Artem"; //Объявляет и иницилизирует переменную без явной анотации
let name2: string = "Artem"; //Объявляет и иницилизирует переменную c анотации типа

//=======================

const age = 18; //age - не объявляет тип

function getTax(income: number): number {
    return income * 0.15;
}

let yourTax = getTax(age); //getTax - не объявляет тип

//=========================

let name3: "Artem"; //Объявление типа засчёт литерала

