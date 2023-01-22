import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  profileId:any;
  character:any;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");
    this.http
      .get("https://rickandmortyapi.com/api/character/" + this.profileId)
      .subscribe((res) => {
        this.character = res;
      });
  }

}
