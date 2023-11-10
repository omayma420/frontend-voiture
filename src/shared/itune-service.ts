import  { Injectable, Inject } from "@angular/core";
import { Music } from "./music";
import { APP_CONFIG  } from "src/app/app-config/app-config.module";
import { HttpClient } from "@angular/common/http";
import {AppConfig} from "../app-config/app-config.module/AppConfig";
import { map } from 'rxjs/operators';

@Injectable()
export class ItuneService {
    private query: string='';  

   
    constructor(private http:HttpClient, @Inject(APP_CONFIG) private config:AppConfig){

    }
    public searchMusic(queryTitle:string) {
        this.query=queryTitle;
        
        this.http.get(`${this.config.apiEndPoint}Search?item=${this.query}`).pipe(
            map(data => {
                const res:any =data;
                console.log(res.results);
                return res.results ? res.results:[];

            })
        ).subscribe((music=>''))

    }
    
    public bookfactory(item:any):Music{
        return new Music (
            item.artistName,
            item.artistViewUrl,
            item.artwork30,
            item.artworkUrl60,
            item.artworkUrl100,
            item.trackId
        );
    }
    }