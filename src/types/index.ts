export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stringImage?: string;
    image?: File | null;
    isBestSeller?: boolean;
    salesCount?: number;
    active: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface TestimonialType {
    id: string;
    name: string;
    message: string;
    rating: number;
}

export interface ReviewType {
    id: string;
    name: string;
    rating: number;
    comment: string;
    product?: string;
}

export interface UserDetails {
    name: string;
    phone: string;
    address: string;
}

export interface Juice {
    id?: number;
    nama: string;
    deskripsi: string;
    harga: number;
    tipe: string;
    foto: string;
}

export type JuiceType = "Buah" | "Sayur" | "Campuran";

export interface JuiceContextType {
    juices: Juice[];
    tambahJuice: (juice: Product) => void;
    editJuice: (juice: Product) => void;
    hapusJuice: (id: number) => void;
}

export interface LoginType {
    token: string;
}

export interface DashboardType {
    juiceCount: number;
    categoryCount: number;
}
