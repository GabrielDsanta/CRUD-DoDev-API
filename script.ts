


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

let Continuar = true

while(Continuar){
    let Pergunta = String(prompt("1 Ver Carros /// 2 Ver Carro por ID /// 3 Adicionar Carro /// 4 Atualizar Carro /// 5 Deletar Carro /// 5 Finalizar Programa"))
    switch(Pergunta){

        case "1":
        Get()
        break;

        case "2":
        let IdCar = Number(prompt("Qual o ID do Carro ?"))
        GetElementById(IdCar)
        break;

        case "3":
        let IdCarPut = Number(prompt("Qual o ID do Carro ?"))
        const Marca = String(prompt("Qual a Marca do Carro ?"))
        const Modelo = String(prompt("Qual o Modelo do Carro ?"))
        const Categoria = String(prompt("Qual a Categoria do Carro ?"))
        const Ano = Number(prompt("Qual o Ano do Carro ?"))
        const Km = Number(prompt("Qual o Km do Carro ?"))
        const Valor = Number(prompt("Qual o Valor do Carro ?"))

        const NewCarroPut = new Carro(Marca, Modelo, Categoria, Ano, Km, Valor)
        putData(IdCarPut, NewCarroPut)
            .then((data) => {
            console.log(data);
        });

        break;

        case "4":
        let IdCarDelete = Number(prompt("Qual o ID do Carro ?"))
        deleteData(IdCarDelete)
        break;

        case "5":
        Continuar = false
        break;

        default:
        alert("Opção Inválida")
        break;
    }
}



function Get(){
    return fetch('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function GetElementById(id: number){
    fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.id == id){
            const Marca = data.Marca
            const Modelo = data.Modelo
            const Ano = data.Ano
            const Valor = data.Valor

            const CarroPropriedades = {
                Marca: Marca,
                Modelo: Modelo,
                Ano: Ano,
                Valor: Valor,
            }
            console.log(CarroPropriedades)
        }
    });

}

function GetCarList(){
    let ListaCarros: string [] = []
    fetch('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev')
    .then((response) => response.json())
    .then((data) => {
        for (let index = 0; index < data.length; index++) {
            ListaCarros.push(data[index].Modelo)
        }
    });
    console.log(ListaCarros)
}

async function postData(url = '', data = {}) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/`, {
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

