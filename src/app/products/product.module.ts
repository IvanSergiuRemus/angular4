import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ProductService } from '../products/product.service';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-details.component';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './../product-routing.module';



@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [ 
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
