import { Component, OnInit } from '@angular/core';
//import {HttpClientModule} from '@angular/common/http';


//import { HomeService } from '../../services/home.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  results: string[];
  NumUsr:string;
  NumUsrAct:string;
  Total:string;
  TotalG:string;

  homeURL:string = "https://flink-f82f5.firebaseio.com/Home.json";

  // Inject HttpClient into your component or service.
   constructor(private http: Http) {}

   ngOnInit(): void {
     // Make the HTTP request:
     this.http.get(this.homeURL).subscribe(data => {
       // Read the result field from the JSON response.
       this.NumUsr = data.json()['NumUsr'];
       this.NumUsrAct = data.json()['NumUsrAct'];
       this.TotalG = data.json()['TotalG'];
       this.Total = data.json()['Total'];

     });
   }
}
