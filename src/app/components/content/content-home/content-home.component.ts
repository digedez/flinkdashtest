import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent implements OnInit {

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


   public lineChartData:Array<any> = [
     {data: [5, 19, 20, 33, 50 ], label: 'Usuarios'},
     //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
     //{data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
   ];
   public lineChartLabels:Array<any> = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
     public lineChartOptions:any = {
       responsive: true
   };

   public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: '#64B5F6',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },

    /*
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    */
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  // events
   public chartClicked(e:any):void {
     console.log(e);
   }

   public chartHovered(e:any):void {
     console.log(e);
   }
}
