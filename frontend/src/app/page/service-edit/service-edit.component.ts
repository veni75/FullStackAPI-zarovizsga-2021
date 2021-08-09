import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.scss']
})
export class ServiceEditComponent implements OnInit {

  service$: Observable<Service> = this.ar.params.pipe(
    switchMap( params => this.service.get(params.id) )
  );

  constructor(
    private service: ServiceService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.service.update(ngForm.value).subscribe(
      car => this.router.navigate(['/', 'services']),
      err => console.error(err)
    );
  }

}
