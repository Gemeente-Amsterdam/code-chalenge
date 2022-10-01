// Stadsdeel
export interface District {  
    id: number, 
    district: string,
    neighbourhoods: [],
    Tag?: [],
}

// Wijk
export interface neighbourhood {  
    id: number, 
    neighbourhood: String,
}

// Tag
export interface Tag {  
    id: number, 
    tag: string,
}