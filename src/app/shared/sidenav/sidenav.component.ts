import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/Services/api.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  catagories: any = [];
  subcategory: any = [];
  title: any;
  pictures: any;
  myArr = [];
  catagories_id: any;
  profile: any;
  _id: any;
  newItemEvent = new EventEmitter<string>();

  constructor(private apiService: ApiServices) {this.getAllcategories()
  }

  ngOnInit(): void {
 
  this.getAllcategories()
 
  
  }

  getAllcategories(){
    this.apiService.get('category').subscribe( (res:any) => {
      console.log(res);
      this.catagories = res.data;

      for(let i in res.data){
        this._id = res.data[i]._id;
        console.log(this._id);
      }
      console.log(this._id);
      //  this.catagories.forEach((element: any) => {
        
      //   this.profile = element.subcategories;
        
      //   console.log(this.profile)
      //  });
      // res.data.forEach((element:any) => {
      //   if(element.name === '1st Amendment'){
      //     this.catagories_id = element._id;
      //   }
        
      // });
    
      // for(let i in res.data){
      //   if("5e3aa5719d265a745118f484" === res.data[i]._id){
      //     console.log(res.data[i]._id)
      //   }
      // }
      this.getAllsubcategories(this._id)
      console.log(this.catagories)
    }, err => {
      this.catagories = [];
    });
    return  this.getAllsubcategories(this._id);
  }

  getAllsubcategories(_id: any){
//  console.log(_id)
    this.apiService.get(`category/${_id}`).subscribe( (res:any)=> {
      // console.log(_id);
      this.subcategory = res.data.subcategories;

      console.log(this.subcategory);
    });
  }
}
