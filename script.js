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
const NewCarro = new Carro("ford", "fordka", "Casual", 200, 30000, 110000);
// Exemplo De Uso Das Function//
putData(3, NewCarro)
    .then((data) => {
    console.log(data);
});
function Get() {
    return fetch('https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev')
        .then((response) => response.json())
        .then((data) => console.log(data));
}
function GetElementById(id) {
    return fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
function postData(id, data = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://apigenerator.dronahq.com/api/_QipxZpA/CRUDDoDev/${id}`, {
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
