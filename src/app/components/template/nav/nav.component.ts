import { Component, OnInit } from '@angular/core';

//decorator - passa a ser componeente quando tem decorator
@Component({
  //nome da tag do componente
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
