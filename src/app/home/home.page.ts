import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  characters:any;
  constructor(private http : HttpClient) {}
  async ngOnInit() {
    this.http
      .get<any>("https://rickandmortyapi.com/api/character")
      .subscribe((res) => {
        console.log(res)
        this.characters = res.results;
      });
  }
}
