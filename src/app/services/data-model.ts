import { SafeResourceUrl } from '@angular/platform-browser';

export const Countries = ['USA', 'Canada', 'Mexico'];

export interface IFoundCity {
  city: string;
  county: string;
  municipality: string;
  state: string;
  country: string;
  links: number;
}

export class FoundCity implements IFoundCity {
  constructor(
    public city: string,
    public county: string,
    public municipality: string,
    public state: string,
    public country: string,
    public links: number
  ) {}
}

export class Request {
  public city: string;
  public country: string;
}
