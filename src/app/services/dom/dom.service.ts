import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor() { }

  el(seletor) {
    let e = document.querySelector(seletor)
    
    function all(callback) {
      document.querySelectorAll(seletor).forEach(data => {
        callback(data)
      })
    }
    
    function addClass(classe) {
      e.classList.add(classe)
    }

    function removeClass(classe) {
      e.classList.remove(classe)
    }

    function setAttribute(chave, valor) {
      e.setAttribute(chave, valor)
    }

    return {addClass, removeClass, setAttribute, all}
  }

  removeClass(elemento, classe) {
    elemento.classList.remove(classe)
  }
}
