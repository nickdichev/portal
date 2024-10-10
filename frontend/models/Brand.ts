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
    };
}

export interface BrandReview {
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

export interface BrandRating {
    avg_rating: number;
    avg_product_quality: number;
    avg_order_fulfillment: number;
    avg_support: number;
    avg_brand_reputation: number;
    review_count: number;
}

export interface BrandProfile {
    id: string;
    claimed: boolean;
}

export interface BrandImage {
    id: string;
    brand: string;
    logo: string;
    hero_image: string;
    product_gallery: string[];
}
