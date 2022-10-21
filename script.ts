


class Carro{
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Km: number
    Valor: number

    constructor(marca: string, modelo: string, categoria: string, ano: number, km: number, valor: number){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Km = km
        this.Valor = valor
    }
}

const NewCarro = new Carro("ford", "fordka", "Casual", 200, 30000, 110000)

// Exemplo De Uso Das Function//
putData(3, NewCarro)
.then((data) => {
    console.log(data);
});



function Get(){
    return fetch('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function GetElementById(id: number){
    return fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

async function postData(id: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function putData(id: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteData(id: number, data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
    });
    return response.json();
}

