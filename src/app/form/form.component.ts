import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    contact_type_id: new FormControl(null , [Validators.required]),
    name_1: new FormControl(null , [Validators.required]),
    salutation_id: new FormControl(null),
    address: new FormControl(null),
    postcode: new FormControl(null),
    city: new FormControl(null),
    country_id: new FormControl(null),
    mail: new FormControl(null),
    mail_second: new FormControl(null),
    phone_fixed: new FormControl(null),
    phone_fixed_second: new FormControl(null),
    phone_mobile: new FormControl(null),
    fax: new FormControl(null),
    url: new FormControl(null),
    skype_name: new FormControl(null),
    remarks: new FormControl(null),
    contact_group_ids: new FormControl(null),
    user_id: new FormControl(null , [Validators.required]),
    owner_id: new FormControl(null , [Validators.required]),
  })
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
  }
  submitForm(form: FormGroup) {

    this._AuthService.newContact(form.value).subscribe((data) => {
      console.log(data);

    })

  }

}
