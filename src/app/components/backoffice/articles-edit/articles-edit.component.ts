import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/moduls/article';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl("",[Validators.required, Validators.minLength(10)]),
    body: new FormControl("",[Validators.required]),
    price: new FormControl(0,[Validators.required, Validators.pattern('[0-9.]+')]),
    active: new FormControl(false)
  })
  

  constructor(private route: ActivatedRoute) { 
   
  }

  
  ngOnInit() {
    let id =this.route.snapshot.params.id;
    console.log(id);
  }
  retreiveOneArticle(){
    this.ArticleService.getOneAerticle(this.id)
    .subscribe((res: Article)=>{
      
    })
  }

}
