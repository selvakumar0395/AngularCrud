import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerField } from  './registerField';

@Injectable({ 
  providedIn: 'root'
})
export class NodeServiceService {

  url = "http://localhost:4210";

  constructor( private http: HttpClient) { }

 insertData( fields )
 {
   return this.http.post(this.url+"/insertData",fields);
 }
 
 getData( )
 {
   return this.http.get(this.url+"/getdata");
 }

 deleteData(id)
 {
  return this.http.get(this.url+"/deletedata/"+id);
 }

 editValue(id)
 {
  return this.http.get(this.url+"/editData/"+id);
 }

 updateData(id,value)
 {
  return this.http.post(this.url+"/updateData/"+id,value);
 }
}
