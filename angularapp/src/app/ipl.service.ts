import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplService {
  private url='https://8081-afdcbdaefbcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/api/Admin/GetPlayer';

  constructor(private http:HttpClient) { }
  getAllPlayers():Observable<any[]>
  {
    return this.http.get<any[]>(this.url+'/GetPlayer')
  }
  
}
