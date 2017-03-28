import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OmdbService } from '../shared/omdb/omdb.service';

@NgModule({
  imports: [DetailsRoutingModule, SharedModule],
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  providers: [OmdbService]
})
export class DetailsModule { }
