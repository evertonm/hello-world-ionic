import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RepoProps } from '../../providers/repositories/repositories';

/**
 * Generated class for the ButtonAppDefaultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-app-default',
  templateUrl: 'button-app-default.html'
})
export class ButtonAppDefaultComponent {

  @Input('title') title: string;
  @Input('repos') repos: RepoProps[];

  constructor(private navCtrl: NavController) {
    console.log('Hello ButtonAppDefaultComponent Component');
  }

  public pushPage() {
    if(!this.repos || this.repos.length === 0) {
      return alert('Não possui nenhum repositório para configurar');
    }
    this.navCtrl.push("SettingsPage", {repos: this.repos, text: 'oi'});
  }

}
