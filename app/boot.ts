import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {
    LoginService, 
    PostService, 
    HeadersService
} from './service'

bootstrap(AppComponent,[
            HeadersService, 
            HTTP_PROVIDERS, 
            LoginService, 
            PostService
        ]);