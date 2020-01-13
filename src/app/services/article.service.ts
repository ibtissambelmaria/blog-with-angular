import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Article } from '../moduls/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private afs: AngularFirestore) { }

  getAll(){
    return this.afs.collection('articles').valueChanges();
  }
  saveArticle(data: Article){
    return this.afs.collection('articles').add(data);
  }
  getOneArticle(id: String){
  return  this.afs.collection('articles').doc(id).valueChanges();
  }
}
