import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {
  // tslint:disable-next-line: no-any
  public intercept(req: HttpRequest<any>,  next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('search')) {
      return next.handle(req.clone({
        // tslint:disable-next-line: max-line-length
        url: `${environment.API_URL}search?key=${environment.API_KEY}&type=video&part=snippet&maxResults=8&q=${req.url.replace('search', '')}`
      }));
    } else if (req.url.includes('videos')) {
      return next.handle(req.clone({
        // tslint:disable-next-line: max-line-length
        url: `${environment.API_URL}videos?key=${environment.API_KEY}&part=snippet,statistics&id=${req.url.replace('videos', '')}`
      }));
    }
  }
}
