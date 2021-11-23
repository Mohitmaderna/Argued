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
  loading: boolean = true;

  constructor(private apiService: ApiServices) {this.getAllcategories()
  }

  ngOnInit(): void {
    this.getAllcategories()
  }

  getAllcategories(){
    this.apiService.get('category').subscribe( (res:any) => {
      if (res) {
      this.hideloader();
      }
      this.catagories = res.data;
      this.catagories.forEach((element: { _id: any; }) => {
       if(element._id) {
         this._id = element._id;
        }
      });
    }, err => {
      this.catagories = [];
    });
  }

  getAllsubcategories(_id: any){
    this.apiService.get(`category/${_id}`).subscribe( (res:any)=> {
      this.subcategory = res.data.subcategories;
    });
  }

  hideloader() {
    this.loading = false;
  }
}
