import { Component, OnInit } from '@angular/core';
import { DomService } from 'src/app/services/dom/dom.service';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dom: DomService,
    private manager: ManagerService
  ) { }

    el = this.dom.el
    removeClass = this.manager.removeClass
    ativarItem = this.manager.ativarItem

  currentUrl() {
    return (window.location.pathname).split('/')[2] || ""
  }

  temas = [
    "blue",
    "blue-o",
    "purple",
    "purple-o",
  ]
  
  ngOnInit(): void {
      this.ativarItem(`.${this.currentUrl()}`)
  }

}
