import { Translations } from "./translations";

export type Region = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

export interface ICountrie {
    name: Name
    tld: string[]
    cca2: string
    ccn3: string
    cca3: string
    cioc: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: Currencies
    idd: Idd
    capital: string[]
    altSpellings: string[]
    region: string
    subregion: string
    languages: Languages
    translations: Translations
    latlng: number[]
    landlocked: boolean
    borders: string[]
    area: number
    demonyms: Demonyms
    flag: string
    maps: Maps
    population: number
    gini: Gini
    fifa: string
    car: Car
    timezones: string[]
    continents: string[]
    flags: Flags
    coatOfArms: CoatOfArms
    startOfWeek: string
    capitalInfo: CapitalInfo
    postalCode: PostalCode
}

export interface Name {
    common: string
    official: string
    nativeName: NativeName
}

export interface NativeName {
    mkd: Mkd
}

export interface Mkd {
    official: string
    common: string
}

export interface Currencies {
    MKD: Mkd2
}

export interface Mkd2 {
    name: string
    symbol: string
}

export interface Idd {
    root: string
    suffixes: string[]
}

export interface Languages {
    mkd: string
}



export interface Demonyms {
    eng: Eng
    fra: Fra2
}

export interface Eng {
    f: string
    m: string
}

export interface Fra2 {
    f: string
    m: string
}

export interface Maps {
    googleMaps: string
    openStreetMaps: string
}

export interface Gini {
    "2018": number
}

export interface Car {
    signs: string[]
    side: string
}

export interface Flags {
    png: string
    svg: string
    alt: string
}

export interface CoatOfArms {
    png: string
    svg: string
}

export interface CapitalInfo {
    latlng: number[]
}

export interface PostalCode {
    format: string
    regex: string
}
