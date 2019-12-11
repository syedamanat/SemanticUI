import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $('.ui.sticky').sticky();

  }
}
