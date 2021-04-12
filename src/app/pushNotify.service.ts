import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PushNotifyService{
  constructor(
    private http: HttpClient
  ) {}

  public pushNotify(title: string, body: string){
    let url = 'https://fcm.googleapis.com/fcm/send';
    return this.http.post(url, {})
  }
}
