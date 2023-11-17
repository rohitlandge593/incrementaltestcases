import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplService {
  private url='https://8081-afdcbdaefbcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/api/Admin/GetPlayer';

  constructor(private http:HttpClient) { }

  addPlayers(data:any)
  {
    let responseData:any="";
    let httpheaders:HttpHeaders = new HttpHeaders({
      Accept:'application/json'
    })
    this.http.post(this.url,data,{headers:httpheaders})
        .subscribe(res=>{
            responseData=res;
        },
        err=>{
            responseData=err;
        })
        return responseData;
 
  }

  getAllPlayers(data:any):Observable<any[]>
  {
    let httpHeaders:HttpHeaders = new HttpHeaders({
      Accept:'application/json'
    })
    return this.http.get<any[]>(this.url,data)
  }
  updatePlayer(id:number,data:any)
  {
    
  }
  deletePlayer(id:number)
  {

  }
  getPlayerById(id:number)
  {

  }
}
