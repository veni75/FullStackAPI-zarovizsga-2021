import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from 'src/app/model/race';
import { RaceService } from 'src/app/service/race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  list$: Observable<Race[]> = this.service.getAll();

  constructor(
    private service: RaceService
  ) { }

  ngOnInit(): void {
  }

}
