"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Carro {
    constructor(marca, modelo, categoria, ano, km, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Km = km;
        this.Valor = valor;
    }
}
let Continuar = true;
while (Continuar) {
    let Pergunta = String(prompt("1 Ver Carros /// 2 Adicionar Carro /// 3 Atualizar Carro /// 4 Deletar Carro /// 5 Finalizar Programa"));
    switch (Pergunta) {
        case "1":
            Get();
            break;
        case "2":
            let Marca = String(prompt("Qual o Marca do Carro ?"));
            let Modelo = String(prompt("Qual o Modelo do Carro ?"));
            let Categoria = String(prompt("Qual a Categoria do Carro ?"));
            let Ano = Number(prompt("Qual o Ano do Carro ?"));
            let Km = Number(prompt("Qual os Km Rodados do Carro ?"));
            let Valor = Number(prompt("Qual o Valor do Carro ?"));
            const NewCarro = new Carro(Marca, Modelo, Categoria, Ano, Km, Valor);
            postData('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/', NewCarro)
                .then((data) => {
                console.log(data);
            });
            break;
        case "3":
            break;
        case "4":
            let IdCarDelete = Number(prompt("Qual o ID do Carro ?"));
            deleteData(IdCarDelete);
            break;
        case "5":
            Continuar = false;
            break;
        default:
            alert("Opção Inválida");
            break;
    }
}
// Exemplo De Uso Das Function//
// putData(3 /*id*/ , NewCarro /*Object*/)
// .then((data) => {
//     console.log(data);
// });
function Get() {
    return fetch('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev')
        .then((response) => response.json())
        .then((data) => console.log(data));
}
function GetElementById(id) {
    fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
function GetCarList() {
    let ListaCarros = [];
    fetch('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev')
        .then((response) => response.json())
        .then((data) => {
        for (let index = 0; index < data.length; index++) {
            ListaCarros.push(data[index].Modelo);
        }
    });
    console.log(ListaCarros);
}
function postData(url = '', data = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/`, {
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
    });
}
function putData(id, data = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`, {
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
    });
}
function deleteData(id, data = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`, {
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
    });
}
