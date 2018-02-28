import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IFoundCity } from '../services/data-model';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  private mapLink = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB-V9QUKxnbFAnWr_9UZP6la0neIBYteZ4&q=';
  private wikiLink = 'https://en.wikipedia.org/wiki/';
  private citydataLink = 'http://www.city-data.com/city/';

  constructor(private sanitizer: DomSanitizer) {}
  transform(city: IFoundCity) {
    if (city.links === 0) {
      const link = `${this.mapLink}${city.country}+${city.state}+${city.city}`;
      city.links = 1;
      return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
    if (city.links === 1) {
      const link = `${this.wikiLink}${city.city},_${city.state}`;
      city.links = 2;
      return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
    if (city.links === 2) {
      const link = `${this.citydataLink}${city.city}-${city.state}.html`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
  }
}
