import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';



@Component({
  selector: 'app-root',
  templateUrl: ('./home.component.html'),
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {


  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
  }
}
