import { Component, OnInit } from '@angular/core';
import { DomService } from 'src/app/services/dom/dom.service';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-importante',
  templateUrl: './importante.component.html',
  styleUrls: ['./importante.component.css']
})
export class ImportanteComponent implements OnInit {

  constructor(
    private dom : DomService,
    private manager: ManagerService
  ) { }

  el = this.dom.el
    removeClass = this.manager.removeClass
    ativarItem = this.manager.ativarItem
  
  ngOnInit(): void {
    this.ativarItem('.importante') 
  }

}
