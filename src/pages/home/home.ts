import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RepoProps, RepositoriesProvider } from '../../providers/repositories/repositories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: string;
  public repos: RepoProps[];

  constructor(public navCtrl: NavController, private repositoriesProvider: RepositoriesProvider) {    
  }
  

  public async findRepos() {
    try {
      const response: RepoProps[] = await this.repositoriesProvider.findRepos(this.username);
      this.repos = response;
      console.log(this.repos)
    } catch(err) {
      console.log(err);
    }
  } 

}
