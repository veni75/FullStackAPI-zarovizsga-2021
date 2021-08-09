import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Race } from 'src/app/model/race';
import { RaceService } from 'src/app/service/race.service';

@Component({
  selector: 'app-race-edit',
  templateUrl: './race-edit.component.html',
  styleUrls: ['./race-edit.component.scss']
})
export class RaceEditComponent implements OnInit {

  race$: Observable<Race> = this.ar.params.pipe(
    switchMap( params => this.service.get(params.id) )
  );

  constructor(
    private service: RaceService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.service.update(ngForm.value).subscribe(
      car => this.router.navigate(['/', 'races']),
      err => console.error(err)
    );
  }

}
