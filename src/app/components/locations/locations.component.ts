
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
 selector:'app-locations',
 standalone:true,
 templateUrl:'./locations.component.html',
 styleUrls:['./locations.component.scss']
})
export class LocationsComponent{
 langService=inject(LanguageService);
}
