import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {HomeComponent,LoginComponent,AddPostComponent} from './component'

@Component({
    selector: 'my-app',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],    
    template: (`
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"> BLOG </a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">                
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/Home']">Home</a></li>
                    <li><a [routerLink]="['/Login']">Login</a></li>
                    <li><a [routerLink]="['/AddPost']">Add Post</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div style="padding-top:50px">
        <router-outlet></router-outlet>
    </div>
    `)
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/Login', name: 'Login', component: LoginComponent },
    { path: '/Addpost', name: 'AddPost', component: AddPostComponent }])
export class AppComponent {  
     
}
