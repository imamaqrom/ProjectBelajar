import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PemainComponent } from './pemain/pemain.component';
import { KaryawanComponent } from './karyawan/karyawan.component';
import { PostsComponent } from './posts/posts.component';
import { KaryawanCreateComponent } from './karyawan-create/karyawan-create.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
	{path: '', component: LoginComponent},
	{path: 'pemain', component: PemainComponent},
	{path: 'karyawan', component: KaryawanComponent},
	{path: 'posts', component: PostsComponent},
	{path: 'karyawan-create', component: KaryawanCreateComponent},
	{path: 'login', component: LoginComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Routed Component berisi komponen yang kemudian akan di masukkan ke dalam declarations di app.module.ts
export const RoutedComponents = [
	PemainComponent,
	KaryawanComponent,
	PostsComponent,
	KaryawanCreateComponent,
	LoginComponent,
]