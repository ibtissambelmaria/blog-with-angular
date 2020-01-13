import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/moduls/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  articles: Article[]=[];
  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getAll()
        .subscribe((res: Article[]) => {
          this.articles = res;
          console.log(res)
        })
  }

}
