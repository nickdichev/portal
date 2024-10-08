import { Brand, Review, BrandRating } from "@/models/Brand"
import { getPocketBase } from "./pocketbase"

export async function getBrand(slug: string): Promise<Brand> {
  const pb = getPocketBase();

  try {
    const record = await pb.collection('brands').getFirstListItem(`slug="${slug}"`, {
      expand: 'categories,reviews',
    });

    return record as unknown as Brand;
  } catch {
    throw new Error(`Brand with slug "${slug}" not found`)
  }
}

export async function getBrandReviews(brandId: string): Promise<Review[]> {
  const pb = getPocketBase();

  try {
    const records = await pb.collection('brand_reviews').getList(1, 50, {
      filter: `brand="${brandId}"`,
      sort: '-created',
    });

    return records.items as unknown as Review[];
  } catch {
    throw new Error(`Reviews for brand with id "${brandId}" not found`)
  }
}

export async function getBrandRating(brandId: string): Promise<BrandRating> {
  const pb = getPocketBase();

  try {
    const record = await pb.collection('brand_ratings').getOne(brandId);
    return record as unknown as BrandRating;
  } catch {
    throw new Error(`Rating for brand with id "${brandId}" not found`)
  }
}
