import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";

export let APP_CONFIG= new InjectionToken<AppConfig>('app.config');
class AppConfig{
    apiEndPoint!: string;
}
export const APP_ID_CONFIG: AppConfig = {
    apiEndPoint: environment.apiEndpoint

};

@NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        providers: [{
                provide:APP_CONFIG,
                useValue:APP_ID_CONFIG
            }]
        })
       
export class AppConfigModule{

}