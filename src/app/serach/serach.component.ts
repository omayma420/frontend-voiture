import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent {

  ngOnInit() {}
  onSubmit(form:NgForm){
    console.log(form.value.search);

  }

}
