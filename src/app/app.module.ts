import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderModule } from './provider/provider.module';
import { SettingModule } from './setting/setting.module';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProviderModule,
        SettingModule,
        MainComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
