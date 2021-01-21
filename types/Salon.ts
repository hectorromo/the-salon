export interface Salon {
    id: string;
    name: string;
    slug: string;
    cutting_price: string;
    cutting_time: string;
    street: string;
    postal_address: string;
    schedule: string;
    opening_hours: {
        start: string;
        end: string;
    },
    phone: string;
    website: string;
    description: string;
    rating: number,
    reviews_count: number,
    img_url: string,
}