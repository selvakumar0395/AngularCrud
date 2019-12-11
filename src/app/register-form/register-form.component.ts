import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from  '@angular/forms';
import { NodeServiceService } from '../node-service.service';
import { registerField } from  '../registerField';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  finalresults : any ;
  msgs : any;
  deletemsg : any;
  btnsubmit = true;
  btnupdate = false;

  profileForm = new FormGroup({
    id: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    gender: new FormControl('')
  });

  constructor( private service: NodeServiceService) { }

  ngOnInit(){
    this.service.getData().subscribe(data => { 
      this.finalresults = data ;
    });
  }

  onsubmit()
  {
    this.service.insertData(this.profileForm.value).subscribe(data =>{
      this.msgs = data;
      this.ngOnInit();
    });
  }
  
  deletefnc(id)
  {
      this.service.deleteData(id).subscribe(data => { 
      this.deletemsg = "1 Record Deleted" ;
      this.ngOnInit();
    });
  }

  editData(id)
  {
      this.service.editValue(id).subscribe(data => { 
      this.profileForm.patchValue(data[0]);
      this.ngOnInit();
      this.btnsubmit = false ;
      this.btnupdate = true;
    });
  }
  
  onUpdate(id)
  {
    this.service.updateData(id,this.profileForm.value ).subscribe(data =>{
      this.msgs = data;
      this.ngOnInit();
      this.profileForm.reset();
        });
  }

}
