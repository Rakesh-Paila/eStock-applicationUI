import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService {
  COMPANY_SERVICE ='http://ecompanymicroserviceenv-env.eba-ezguq8if.eu-north-1.elasticbeanstalk.com/';
  //'http://localhost:8081/';
  //'http://localhost:8989/api/v1.0/market/company/';//'http://localhost:8081/';
  STOCK_SERVICE ='http://estockmicroservice-env.eba-yvxhhm8e.eu-north-1.elasticbeanstalk.com/';
  //'http://localhost:8082/';
  //'http://localhost:8989/api/v1.0/market/stock/';//'http://localhost:8082/';

  searchStock :any;

  constructor (public http:HttpClient) { }

  getCompanyList(){
    var url = this.COMPANY_SERVICE+"companyList";
    return this.http.get(url);
  }

  getCompanyDetails(companyCode : any){
    var url = this.COMPANY_SERVICE+"info/"+companyCode;
    return this.http.get(url);
  }

  getStockDetails(search={ companycode: new Number(), fromDate : Date, toDate : Date }){
    var url = this.STOCK_SERVICE+"get/";
    this.searchStock = search;
    var fromDate: String =this.searchStock.fromDate;
    var toDate: String =this.searchStock.toDate;
    url = url+this.searchStock.companycode+"/"+fromDate+"/"+toDate;
    console.log(url);
    return this.http.get(url);
    //   +"companycode="+this.searchStock.companycode+"&fromDate="+
    // this.searchStock.fromDate+"&toDate="+this.searchStock.toDate);

  }
  

}
