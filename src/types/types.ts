export interface SortValueState {
    sort: {
        sortValue: boolean;
    };
}

export interface FilterValueState {
    filter: {
        region: {
            name: string;
            value: string
        }
    }
}

export type CountryName = {
    common: string;
    official: string;
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
};

export type Currency = {
    name: string;
    symbol: string;
};

export type Idd = {
    root: string;
    suffixes: string[];
};

export type Translations = {
    [key: string]: {
        official: string;
        common: string;
    };
};

export type Demonyms = {
    eng: {
        f: string;
        m: string;
    };
    fra: {
        f: string;
        m: string;
    };
};

export type Car = {
    signs: string[];
    side: string;
};

export type StartOfWeek = string;

export type Country = {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [key: string]: Currency;
    };
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: {
        [key: string]: number;
    };
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: StartOfWeek;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string;
        regex: string;
    };
};

