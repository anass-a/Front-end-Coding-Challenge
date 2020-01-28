import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { Repository } from 'src/app/models/Repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  currentPage = 1;
  repositories: Repository[] = [];
  data: any[];
  dataArrived:boolean=true;

  constructor(private repositoryService: RepositoryService) { }

  onScroll() {
    this.fetchData();
  }

  fetchData() {
    if(this.dataArrived){
      this.dataArrived=false;
      this.repositoryService.getRepositories(this.currentPage).subscribe((response: any) => {
        this.data = response.items;
        const newRepo = this.data.map(element =>
          new Repository(element.id, element.name, element.description, element.stargazers_count,
            element.open_issues_count, element.pushed_at, element.owner.avatar_url,element.created_at,element.owner.login));
        this.repositories = this.repositories.concat(newRepo);
        this.dataArrived=true;
      })
      this.currentPage++;
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
