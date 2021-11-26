import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  diaryForm!:FormGroup
  title:any;
  text:any;
  modalReference:any;
  editData:any;
  diaries = [
    {title:'My Boyfriend',text:'He loves me so much but i am not sure i feel the same,i kinda like the idea of him but no him',date:new Date()},
    {title:'My Product Manager',text:'He gives me a lot of work which is sometomes too much but help my growth'},
    {title:'Bad Day',text:'I had my fair share of lagos madness today'},
    {title:'My Boyfriend',text:'He loves me so much but i am not sure i feel the same,i kinda like the idea of him but no him'},
    {title:'My Boyfriend',text:'He loves me so much but i am not sure i feel the same,i kinda like the idea of him but no him'}
  ]

  constructor(private modalService: NgbModal) { }
  
  open(content:any) {
    this.modalReference = this.modalService.open(content)
    this.modalReference.result.then(() => {  
    }, () => { 
    });
  }
  

  ngOnInit(): void {
    
    this.diaryForm = new FormGroup({
      title:new FormControl(''),
      text:new FormControl('')
    })
  }


  onSave() {
    this.diaries.push(this.diaryForm.value)
    this.diaryForm.reset();
    this.modalReference.close();
  }

  onEdit(data:any){
    this.editData = data;
    console.log('Here is the data');
    
  }
 
}
