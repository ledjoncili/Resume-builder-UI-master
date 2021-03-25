import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resume } from './Model/resume';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  postResume(resume:Resume):any{
    return  this.http.post(this.baseUrl + 'resume',resume);
   }

   getResume(resume:string):any{

    var start = new Date().getTime();
   var end = start;
   while(end < start + 2000) {
     end = new Date().getTime();
  }

    const httpOptions = {
      // 'responseType'  : 'arraybuffer' as 'json'
        'responseType'  : 'blob' as 'json'        //This also worked
    };
    return  this.http.get(this.baseUrl + 'api/resumef?filename='+resume,httpOptions);
   }
}
