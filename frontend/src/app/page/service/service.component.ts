import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  list$: Observable<Service[]> = this.service.getAll();

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }

}
