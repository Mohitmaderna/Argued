import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/Services/api.service';


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
  show: boolean = true;
 

  constructor(private apiService: ApiServices) { }

  ngOnInit(): void {
 
  this.getAllcategories()
 
  
  }
   
  getAllcategories(){
    this.apiService.get('category').subscribe( (res:any) => {
      console.log(res);
      this.catagories = res.data;
      this.show = true;
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
      console.log(this.catagories)
    }, err => {
      this.catagories = [];
    }
    );
  }

  getAllsubcategories(id: any){
    this.apiService.get('category/' + id).subscribe( (res:any)=> {
      console.log(res);
      this.subcategory = res.data;

    });
  }
}
