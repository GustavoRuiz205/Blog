import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
 
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  CardDescription:string=""
  @Input()
  Id:string="0"
  
  constructor(){
  }

  ngOnInit(): void {
  }

}
