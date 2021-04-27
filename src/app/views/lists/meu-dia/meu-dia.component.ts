import { Component, OnInit } from '@angular/core';
import { DomService } from 'src/app/services/dom/dom.service';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-meu-dia',
  templateUrl: './meu-dia.component.html',
  styleUrls: ['./meu-dia.component.css']
})
export class MeuDiaComponent implements OnInit {

  constructor(
    private dom : DomService,
    private manager: ManagerService
  ) { }

  el = this.dom.el
  ativarItem = this.manager.ativarItem
  removeClass = this.dom.removeClass

  ngOnInit(): void {
    this.ativarItem('.meu-dia') 
  }

}
