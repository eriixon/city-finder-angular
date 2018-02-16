export const Countries = ['USA', 'Canada', 'Mexico'];

export class Finder {
    constructor(
        public city: string,
        public country: string
    ) {}
}

export class FoundCity {
    constructor(
        public city: string,
        public county: string,
        public municipality: string,
        public state: string,
        public country: string
    ) { }
}
