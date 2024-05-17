import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private fetchService:FetchService){}
  emp: { login: string, id: number, url:string }[] = [];
  searchText:any;
  ngOnInit(): void {
    this.fetchService.getData().subscribe(data => {
      this.emp = data;
    });
}
}