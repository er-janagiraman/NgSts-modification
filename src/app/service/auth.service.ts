import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonDto } from '../table/table.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string ="http://localhost:9090";

  constructor(private http: HttpClient) { }

  save(input : any) {

    const headers={
      "Content-type": "application/json"
    }
    return this.http.post<CommonDto>(`${this.baseUrl}` + "/save",input,{headers});
  }

  fetch(){
    return this.http.get<CommonDto>(`${this.baseUrl}`+"/fetch");
  }
  edit(input : any) {

    const headers={
      "Content-type": "application/json"
    }
    return this.http.post<CommonDto>(`${this.baseUrl}` + "/edit",input,{headers});
  }

  delete(name : string) {

    const headers={
      "Content-type": "application/json"
    }
    return this.http.post<CommonDto>(`${this.baseUrl}` + "/delete?name="+name,{headers});
  }

  register(input : any) {

    const headers={
      "Content-type": "application/json"
    }
    return this.http.post<CommonDto>(`${this.baseUrl}` + "/register",input,{headers});
  }

  login(input : any) {

    const headers={
      "Content-type": "application/json"
    }
    return this.http.post<CommonDto>(`${this.baseUrl}` + "/login",input,{headers});
  }

  edit1(name : string):Observable<any> {

    const headers={
      "Content-type": "application/json"
    }
    return this.http.post<CommonDto>(`${this.baseUrl}` + "/edit1?ename="+name,{},{headers});
  }

}
