import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RepoProps } from '../../providers/repositories/repositories';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public repos: RepoProps[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.repos = this.navParams.get('repos') ? this.navParams.get('repos') : [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  public configureItem(item: any) {
    alert(`Iniciando configuração no item ${item.name}`);
  }

}
