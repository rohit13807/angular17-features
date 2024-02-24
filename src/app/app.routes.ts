import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignalComponent } from './signal/signal.component';
import { TodoComponent } from './todo/todo.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'to-do', component: TodoComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'signal', component: SignalComponent },
    { path: '**', component: NotFoundComponent }
];
