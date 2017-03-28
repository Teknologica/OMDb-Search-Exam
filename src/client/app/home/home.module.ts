import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OmdbService } from '../shared/omdb/omdb.service';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [OmdbService]
})
export class HomeModule { }
