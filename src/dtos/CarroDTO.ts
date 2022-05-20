export interface CarroDTO {
    id: string,
    brand: string
    name: string
    about: string
    period: string,
    price: number,
    fuel_type: string,
    thumbnail: string,
    accessories: Acessory[],
    photos: Photo[]
}

interface Acessory {
    id: string,
    type: string,
    name: string
}

interface Photo {
    id: string,
    photo: string
}