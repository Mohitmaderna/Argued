import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiServices {

    API: string;
    httpOptions!: { headers: HttpHeaders; };


    constructor(private http: HttpClient) {
       this.API = environment.API_URL;
    }
 
    // Get Method (Api data)
    get(path: string, params: HttpParams = new HttpParams()) {
        return this.http.get(`${this.API}${path}` , {params})
    }

}