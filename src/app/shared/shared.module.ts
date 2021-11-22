import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

const COMPONENTS = [
    HeaderComponent,SidenavComponent,
]
@NgModule({
    declarations: [...COMPONENTS],

    exports: [...COMPONENTS],
    
    imports: [CommonModule],

})

export class SharedModule {

}