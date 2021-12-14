import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SettingsPage),
  ],
})
export class SettingsPageModule {}
