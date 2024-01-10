import { stock } from "../data/Stock"

export const pedirProductos = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(stock)
            reject(('Error'))
        }, 0) 
    })
}