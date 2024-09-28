export interface Category {
    id: string;
    name: string;
    parent_categories?: Category[];
}

type Expandable<T> = T | { expand: { [K in keyof T]: T[K] } };

export interface Brand {
    id: string;
    name: string;
    slug: string;
    description?: string;
    company?: string;
    headquarters?: string;
    website?: string;
    year_established?: number;
    price_range_low?: number;
    price_range_high?: number;
    expand?: {
        categories?: Category[];
    };
}