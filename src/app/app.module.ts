import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule, RoutedComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { KaryawanComponent } from './karyawan/karyawan.component';
import { PemainComponent } from './pemain/pemain.component';
import { PostsComponent } from './posts/posts.component';
import { KaryawanCreateComponent } from './karyawan-create/karyawan-create.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    KaryawanComponent,
    PemainComponent,
    PostsComponent,
    KaryawanCreateComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
