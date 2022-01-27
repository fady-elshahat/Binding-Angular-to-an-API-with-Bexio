import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.css']
})
export class ContactDataComponent implements OnInit {

  allList:any = []
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
    this._AuthService.getAllListContact().subscribe(
      (data) => {
        this.allList = data;
      }
    )


  }

}
