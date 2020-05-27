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
    this.httpOptions = {};
  }

  public getElement(url: string){
    return this.httpClient.get(this.commonUrl + url, this.httpOptions);
  }

  public getElementById(url: string, id: string) {
      return this.httpClient.get(this.commonUrl + url + '/' + id, this.httpOptions).subscribe(
        error =>{
            handleError(error);
        });
  }

}

function handleError(error) {
  console.error('An error occurred', error);
}
