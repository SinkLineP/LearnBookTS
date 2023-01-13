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

