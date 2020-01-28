import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate} from '@angular/common';

@Injectable()
export class RepositoryService{
    url:string;
    date:Date;

    constructor(private http:HttpClient)
        { }

    getRepositories(page){
        this.date=new Date();
        this.date.setDate(this.date.getDate() - 30);
        this.url="https://api.github.com/search/repositories?q=created:>"+formatDate(this.date, 'yyyy-MM-dd', 'en')+"&sort=stars&order=desc&page="+page;
        return this.http.get(this.url)
    }
}