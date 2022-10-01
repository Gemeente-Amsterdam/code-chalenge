// Stadsdeel
export interface Idistrict {  
    id: number, 
    district: string,
    neighbourhoods?: [],
    Tag?: [],
}

// Wijk
export interface Ineighbourhood {  
    id: number, 
    neighbourhood: String,
}

// Tag
export interface Itag {  
    id: number, 
    tag: string,
}