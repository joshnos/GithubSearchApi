import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions: any;
  private commonUrl: any = 'https://api.github.com/';
  
  constructor(private httpClient: HttpClient) { 
    this.setHttpOptions();
  }

  private setHttpOptions() {
    this.httpOptions = new HttpHeaders({'Cache-Control':'public, max-age=7200, immutable'});
  }

  public getElement(url: string){
    return this.httpClient.get(this.commonUrl + url, this.httpOptions);
  }

}

function handleError(error) {
  console.error('An error occurred', error);
}
