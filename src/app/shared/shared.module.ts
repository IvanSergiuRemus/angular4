import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      StarComponent,
      ConvertToSpacesPipe
  ],
    
  exports : [
      StarComponent,
      CommonModule,
      FormsModule,
      ConvertToSpacesPipe
  ]
})
export class SharedModule { }
