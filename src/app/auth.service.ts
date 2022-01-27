import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders({
    'Accept': "application/json",
    'Content-Type': 'application/json',
    'Authorization': "Bearer eyJraWQiOiI2ZGM2YmJlOC1iMjZjLTExZTgtOGUwZC0wMjQyYWMxMTAwMDIiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYWR5LmVsc2hhaGF0QGdtYWlsLmNvbSIsImxvZ2luX2lkIjoiZTI2MjMyNWUtNzk2NS00YmYzLTg0OTktNmM1NjA5M2M2YzQwIiwiY29tcGFueV9pZCI6Imh2bnY4am1yZGJpbyIsInVzZXJfaWQiOjMwOTI0MiwiYXpwIjoiZXZlcmxhc3QtdG9rZW4tb2ZmaWNlLWNsaWVudCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWxsIHRlY2huaWNhbCIsImlzcyI6Imh0dHBzOlwvXC9pZHAuYmV4aW8uY29tIiwiZXhwIjozMjE5NTI4NDI0LCJpYXQiOjE2NDI3Mjg0MjQsImNvbXBhbnlfdXNlcl9pZCI6MSwianRpIjoiZTc2M2ZkMzgtYTUyYy00ZTRjLWIyMzYtM2VkMDI0MTEzOTM4In0.Y_Mt5PYo6ijeD-zTxsRVXlv8bV9LFIWFp4Zt9MIOyzTcTOoPS6wckcM0ew0Dld_Ksd-oLZACntQgWwLAlS1dBlnbXfNC6ayXUa7ltiJXDrZuh4dU7meUCPlgcK9M2bsiSi_BEK-u5uXfCuellh2GfdZSq4CCgYOaF1eb6n3eJvun1VVUdZ8zRt2e53LWu7tt1YRyXCPO4tTWBiGMLepcXg0KUiUsky0sVncpIWiN6tWCrYCuS8q7AoKf60PG6yKoqqPTME6W0nLNUkUg7EStINOy5K50GYmz8K10YDwEkejDSZ1fhJSmL6zdcKQmGxJ2JO8EW28S0vkanx2J8yra5QtGCi2MzY2S4xRIdzSfyMQxDOkCfrEJKoJgjByzMYtcGf1wEJ3C-7LxzbyFLK83HvAZVNoYnXzRYT_DB_DsHHlmu5s8qxtHF7OUkkYlywMqVG6RPLCUo-FKYy4n3K8X9GDHOw65d7JWM8_fNVi6QaGkHELPFCUyJ7vk1_5Oxbrag5sqT7LFBl8g_4T9KHCKMyqQOT5qZC1DvdMfuSNAukyNVRvItSvvdJB28T006XhuU3aYaCwWvPru06KnLZVHAcBR86Vurb2H7LY_Z3UDHWdPL5fQfmRCqslkGEXGUlVe2DqiaAyNj5SizpqrXGsse5OQrzgopm7rkn_0nLAPKIU"
  });

  constructor(private _HttpClient: HttpClient) { }

  newContact(formData: any): Observable<any> {
    return this._HttpClient.post("https://api.bexio.com/2.0/contact", formData, { headers: this.headers})
  }

  getAllListContact(): Observable<any>{
    return this._HttpClient.get("https://api.bexio.com/2.0/contact" , { headers: this.headers})
  }

}
