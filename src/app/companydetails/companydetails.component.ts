import { Component, OnInit } from '@angular/core';
import { CompanydetailsService } from '../companydetails.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  companyCode =0;
  showStockDtls = false;
  max=0;
  min=0;
  total=0;
  average=0;

  stockSearch={
    companycode:new Number(),
    fromDate : Date,
    toDate : Date
  }

  company={
    code:0,
    name:'',
    ceo:'',
    trunover: 0,
	  website :'',
    stockExchangeEnlisted:'',
    stockPrice:0
  }

  companyList: any[] =[];
  stockDetails:any[] =[];

  getCompanyList(){
    const observable = this.companyDetailsService.getCompanyList();
    observable.subscribe((response : any)=>{ //success handler
      console.log("companyList: "+response);
      this.companyList = response;
    },
    function(error : any){ //error handler
      console.log("Something went wrong while getting CompanyList" +error);
  })     
  }

  getCompanyDetails(){
    const observable = this.companyDetailsService.getCompanyDetails(this.companyCode);
    this.inItCompany(); 
    observable.subscribe((response : any)=>{ //success handler
      console.log("CompanyDetails: "+response);
      this.company = response;
    },
    function(error : any){ //error handler
      console.log("Something went wrong while getting CompanyDetails"+error);
  })
  }

  getStockDetails(){
    this.showStockDtls=true;
    this.stockSearch.companycode= this.companyCode;
    console.log("getstockdetails..."+this.stockSearch.companycode+" "+this.stockSearch.fromDate);
    const observable = this.companyDetailsService.getStockDetails(this.stockSearch);
    observable.subscribe((response : any)=>{ //success handler
      console.log("stockDetails: "+response);
      this.stockDetails = response;
  },
    function(error : any){ //error handler
      console.log("Something went wrong while getting StockList"+error);
  });
  }

  constructor(public companyDetailsService:CompanydetailsService) { }

  inItCompany(){
    this.company={
      code:0,
      name:'',
      ceo:'',
      trunover: 0,
      website :'',
      stockExchangeEnlisted:'',
      stockPrice:0
    };
    this.stockDetails =[];
    this.showStockDtls=false;
  }

  ngOnInit(): void {
    if(this.companyCode == 0){
      this.getCompanyList();
    }
  }

}
