import { Component, OnInit } from '@angular/core';
import { ArtcleService } from '../artcle.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private dataListService: ArtcleService
  ) { }

  ngOnInit() {
    this.registerForm = this.createForm();
  }

  createForm(){
    return this._formBuilder.group({
      firstName: [],
      lastName: []
    })
  }

  submit(){
    this.dataListService.addUser(this.registerForm.value).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
