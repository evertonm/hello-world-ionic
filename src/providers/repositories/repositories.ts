import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

/*
  Generated class for the RepositoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface RepoProps {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
    login: string;
  }
}

@Injectable()
export class RepositoriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RepositoriesProvider Provider');
  }

  public findRepos(username: string) {    
    return this.http.get<RepoProps[]>(`https://api.github.com/users/${username}/repos`).toPromise();
  }  

}
