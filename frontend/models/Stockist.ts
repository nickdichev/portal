export enum StockistCategory {
    Luxury = 'luxury',
    MultiBrand = 'multi_brand',
    Boutique = 'boutique'
}

export enum StockistType {
    Physical = 'physical',
    Ecommerce = 'ecommerce'
}

export enum PricePoint {
    Affordable = 'affordable',
    MidRange = 'mid_range',
    HighEnd = 'high_end'
}

export interface Stockist {
    id: string;
    name: string;
    price_range_low?: number;
    price_range_high?: number;
    category: StockistCategory;
    type: StockistType;
    price_point: PricePoint;
}