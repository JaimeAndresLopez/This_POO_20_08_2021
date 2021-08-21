// let obj = {
//     nombre:"Jaime",
//     saludar: function(){
//         console.log(this.nombre);
//     }
// }

// obj.saludar();

//Clases, se utiliza la palabra reservada class

// class humano{
//     genero='Masculino';
//     edad=28;
//     manos=2;
//     // pies=2; 
//     camina(){
//         this.pies=2;
//         return `Clase Yo puedo caminar con mis ${this.pies} pies.`;
//     }

// }
// const humanoObjetoMetodo={
//     // genero:'Masculino',
//     // edad:28,
//     // manos:2,
//     // pies:2,
//     camina: function(){
//         this.pies=2;
//         return`Objeto You puedo caminar con mis ${this.pies} pies.`;
//     }
// }
// let data= {
//     genero:'Masculino',
//     edad:28,
//     manos:2,
// }

// const humanoObjeto = Object.setPrototypeOf(data, humanoObjetoMetodo);

// console.log(humano);
// const inst = new humano();
// // humano.camina();
// console.log(inst);
// console.log(humanoObjeto);

class humanos{
    
    constructor(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
    caminar(){
        return `Clase yo puedo caminar con mis ${this.pies} pies`;
    }
}

let dataClase = {
    cabello: "Negro",
    altura: 187, 
    ojos: 28,
    manos: 2,
    dedos: 20,
    pies: 2
};
let dataClase2 = {
    cabello: "Morado",
    altura: 100, 
    ojos: 23,
    manos: 25,
    dedos: 58,
    pies: 4
};
const inst = new humanos(dataClase);
console.log(inst.caminar());
const inst2 = new humanos(dataClase2);
console.log(inst2.caminar());

console.error("Clase", inst2);

const humanosObjetosMetodos = {
    caminar : function(){
        return `Objeto yo puedo caminar con mis ${this.pies} pies`;
    },
    constructorHumanos: function(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
}
let dataObjeto = {
    cabello: undefined,
    altura: undefined, 
    ojos: undefined,
    manos: undefined,
    dedos: undefined,
    pies: undefined
}

const humanosObjetos = Object.setPrototypeOf(dataObjeto,humanosObjetosMetodos);
humanosObjetos.constructorHumanos({pies: 2});
console.log(humanosObjetos.caminar());
humanosObjetos.constructorHumanos({pies: 4});
console.log(humanosObjetos.caminar());


console.error("Objetos", humanosObjetos);
