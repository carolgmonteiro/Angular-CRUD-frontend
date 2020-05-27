// crea el modelo de atributos de los productos

export interface Product {
    // interrogacao no id e porque opcional - criar produto sem ID e o backend da o ID
    id?: number,
    name: string,
    price: number
}