import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ButtonAppDefaultComponent } from './button-app-default/button-app-default';
import { BatataComponent } from './batata/batata';
@NgModule({
	declarations: [ButtonAppDefaultComponent,
    BatataComponent],
	imports: [IonicModule],
	exports: [ButtonAppDefaultComponent,
    BatataComponent]
})
export class ComponentsModule {}
