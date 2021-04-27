import { Injectable } from '@angular/core';
import { DomService } from '../dom/dom.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private dom: DomService
  ) { }

  el = this.dom.el
  removeClass = this.dom.removeClass
  
  ativarItem(item) {
    this.el(".item").all(data => {
      this.removeClass(data, 'active')
    })

    this.el(item).addClass("active")
  }
}
