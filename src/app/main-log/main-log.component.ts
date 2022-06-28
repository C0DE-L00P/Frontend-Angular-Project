import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-log',
  templateUrl: './main-log.component.html',
  styleUrls: ['./main-log.component.scss']
})
export class MainLogComponent implements OnInit {

  constructor(private router : Router) { }

  hasabackground:boolean=true;
  hasabackgrounde:boolean=false;

  
  ngOnInit(): void {
    this.router.navigate(["/logInPage/logIn"])
  }

}
