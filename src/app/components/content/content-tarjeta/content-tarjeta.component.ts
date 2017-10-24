import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { AgmCoreModule } from '@agm/core';


// Declaramos las variables para jQuery
//declare var jQuery:any;
//declare var $:any;

@Component({
  selector: 'app-content-tarjeta',
  templateUrl: './content-tarjeta.component.html',
  styleUrls: ['./content-tarjeta.component.css']
})
export class ContentTarjetaComponent implements OnInit {


  constructor(private http: Http) { }

  Lista: string = ""
  Nombre:string;
  Apellidos:string;
  Email:string;
  Direccion:string;
  Telefono:string;
  Genero:string;
  FechaNacimiento:string;
  IFE:string;
  IFEConFoto:string;
  lat: number;
  lng: number;
  tarjetaURL:string = "https://flink-f82f5.firebaseio.com/SolTarjetas.json";
  Sol: string[] = [];
  Data: object;

  ngOnInit(): void {
    // HTTP Consulta de Solicitudes
    this.http.get(this.tarjetaURL).subscribe(data => {
      console.log(data.json());
      var length = Object.keys(data.json()).length;
      this.Data = data.json();

      let j = 1;
      for(var i in data.json()) {
        //Obtenemos datos de la primera solicitud
          if (j == 1) {
            this.Nombre = data.json()[i]["Nombre"];
            this.Apellidos = data.json()[i]["Apellidos"];
            this.Email = data.json()[i]["Email"];
            this.Direccion = data.json()[i]["Direccion"];
            this.Telefono = data.json()[i]["Telefono"];
            this.Genero = data.json()[i]["Genero"];
            this.FechaNacimiento = data.json()[i]["FechaNacimiento"];
            this.IFE = data.json()[i]["IFE"];
            this.IFEConFoto = data.json()[i]["IFEConFoto"];
            this.lat = data.json()[i]["lat"];
            this.lng = data.json()[i]["long"];
          }
          // Arma arreglo con todas las solicitudes
          this.Sol.push(i);
          console.log(this.Sol);
          j = j + 1;
      }

      //Genera Lista
      this.Lista = "<u id='mylist'>"
      for (let i = 0; i < this.Sol.length; i++) {
          var k;
          k = i + 1;
          //this.Lista = this.Lista +  '<li value="' + k + '"> ' + this.Sol[i] + "</li>" ;
          this.Lista = this.Lista +  '<li id="' + k + '" onclick="alerta()"> ' + this.Sol[i] + "</li>" ;


          //Agregar funcion onClick

          if (i == this.Sol.length - 1) {
              this.Lista = this.Lista + "</u>"
              document.getElementById("NoSol").innerHTML = this.Lista;
          }
          console.log(this.Lista);
      }

      var ul = document.getElementById("mylist");
      var li;
      var index;
      for (li = ul.firstChild; li; li = li.nextSibling) {
          if (li.nodeName.toUpperCase() === "LI") {
              //li.onclick = makeCallback(li.value);
              li.onclick = alerta();
          }
      }
      function alerta () {

          return function() {
          alert("testing 1");

          this.http.get(this.tarjetaURL).subscribe(data => {
          });

        };
      }


      function makeCallback(val) {
          return function() {
              //Hacer Get a sol -val
              //Actualizar valores de la pantalla
              //alert(val);
              let j = 1;
              for(var i in this.Data) {
                alert(i);
                //Obtenemos datos de la  solicitud seleccionada
                  if (j == val) {
                    this.Nombre = this.Data[i]["Nombre"];
                    this.Apellidos = this.Data[i]["Apellidos"];
                    this.Email = this.Data[i]["Email"];
                    this.Direccion = this.Data[i]["Direccion"];
                    this.Telefono = this.Data[i]["Telefono"];
                    this.Genero = this.Data[i]["Genero"];
                    this.FechaNacimiento = this.Data[i]["FechaNacimiento"];
                    this.IFE = this.Data[i]["IFE"];
                    this.IFEConFoto = this.Data[i]["IFEConFoto"];
                    this.lat = this.Data[i]["lat"];
                    this.lng = this.Data[i]["long"];
                  }

                  j = j + 1;
                }
            }
      }


    });



  }


//Renderear en código html

/*
Get item by ID:  SOLICITUDES
Genera código html links de li
Inserta ese código a ul
Al dar click ejecutar función para mostrar div con id de li
Oculatar los demas



*/

// poner links href a cada uno


/*
  initMap() {
    console.log("Rending map");

  var requestLatLng = {lat:7.5, lng: 6};
  var homeLatLng = {lat: 8, lng: 8};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: requestLatLng
  });
/*
  var infoReq = new google.maps.InfoWindow({content:"Peticion: <br>{{ new_user.reqDir}}"});
  var infoHome = new google.maps.InfoWindow({content:"Casa:<br>{{new_user.direccion}}" });

  var markerReq = new google.maps.Marker({
    position: requestLatLng,
    map:map,
    icon:"https://maps.gstatic.com/mapfiles/ms2/micons/ltblue-dot.png"
  });

  var markerHome = new google.maps.Marker({
    position: homeLatLng,
    map:map,
    icon:"https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png"
  });
  markerReq.addListener('click',function(){
    infoReq.open(map,markerReq);
  });
  markerHome.addListener('click',function(){
    infoHome.open(map,markerHome);
  });
    var workLatLng = {lat: {{new_user.coord.latWork}}, lng: {{new_user.coord.lonWork}}};
    var infoWork = new google.maps.InfoWindow({content:"Trabajo <br>{{new_user.Otros.dir}}"});
    var markerWork = new google.maps.Marker({
    position: workLatLng,
    map:map,
    icon:"https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png"
  });
    markerWork.addListener('click',function(){
    infoWork.open(map,markerWork);
  });

 }
 */
}
