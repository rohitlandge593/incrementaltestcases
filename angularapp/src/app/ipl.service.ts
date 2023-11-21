import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlayer } from './Model/iplayer';
import { ITeam } from './Model/iteam';

@Injectable({
  providedIn: 'root'
})
export class IplService {
  private url='https://8081-afdcbdaefbcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/api/Admin';

  constructor(private http:HttpClient) { }

  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  addPlayers(playerdata:IPlayer):Observable<IPlayer>
  {
    return this.http.post<IPlayer>(this.url+'/PostPlayers',playerdata,this.httpOptions);
 
  }
  

  getAllPlayers():Observable<IPlayer[]>
  {
    
    return this.http.get<IPlayer[]>(this.url+'/GetPlayer')
  }


  
  editPlayer(id:number,playerdata:IPlayer):Observable<IPlayer>
  {
    return this.http.put<IPlayer>(this.url+'/PutPlayer/'+id,playerdata,this.httpOptions)
  }
  


  deletePlayer(id:number,playerdata:IPlayer):Observable<IPlayer>
  {
    return this.http.delete<IPlayer>(this.url+'/DeletePlayer/'+id)
  }


  getPlayerById(id:number): Observable<IPlayer>
  {
    return this.http.get<IPlayer>(this.url+'/GetPlayer/'+id)
  }

  getTeams():Observable<ITeam[]>
  {
    return this.http.get<ITeam[]>(this.url+'/GetTeams')
  }

  addTeams(teamdata:ITeam):Observable<ITeam>
  {
    return this.http.post<ITeam>(this.url+'/PostTeams',teamdata,this.httpOptions)
  }

}
