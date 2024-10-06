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
    video_url?: string;
    expand?: {
        categories?: Category[];
        reviews?: Review[];
    };
}

export interface Review {
    id: string;
    created: string;
    rating: number;
    subrating_product_quality: number;
    subrating_order_fulfillment: number;
    subrating_support: number;
    subrating_brand_reputation: number;
    headline: string;
    overall: string;
    pros: string;
    cons: string;
    likes: number;
    dislikes: number;
    images?: string[];
    // Not implemented yet
    isAnonymous: boolean;
    isAudioReview: boolean;
    audioUrl?: string;
    isVerified: boolean;
}