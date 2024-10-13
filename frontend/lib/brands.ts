import { Brand, BrandReview, BrandRating, BrandProfile, SuggestedBrand } from "@/models/Brand"
import { PocketBaseInstance } from "./pocketbase"

export async function getBrand(pb: PocketBaseInstance, slug: string): Promise<Brand> {
  try {
    const record = await pb.collection('brands').getFirstListItem(`slug="${slug}"`, {
      expand: 'categories,reviews',
    });

    return record as unknown as Brand;
  } catch {
    throw new Error(`Brand with slug "${slug}" not found`)
  }
}

export async function getBrandReviews(pb: PocketBaseInstance, brandId: string): Promise<BrandReview[]> {
  try {
    const records = await pb.collection('brand_reviews').getList(1, 50, {
      filter: `brand="${brandId}"`,
      sort: '-created',
    });

    return records.items as unknown as BrandReview[];
  } catch {
    throw new Error(`Reviews for brand with id "${brandId}" not found`)
  }
}

export async function getBrandRating(pb: PocketBaseInstance , brandId: string): Promise<BrandRating> {
  try {
    const record = await pb.collection('brand_ratings').getOne(brandId);
    return record as unknown as BrandRating;
  } catch {
    throw new Error(`Rating for brand with id "${brandId}" not found`)
  }
}

export async function getBrandProfile(pb: PocketBaseInstance, brandId: string): Promise<BrandProfile | null> {
  try {
    const result = await pb.collection('brand_profiles').getFirstListItem(`brand="${brandId}"`) as BrandProfile;
    return result;
  } catch (error) {
    return null;
  }
}

export async function getBrandImageUrls(pb: PocketBaseInstance, brandId: string, key: 'logo' | 'product_gallery' | 'hero_image'): Promise<string | string[] | null> {
  try {
    const result = await pb.collection('brand_images').getFirstListItem(`brand="${brandId}"`);

    if (Array.isArray(result[key])) {
      return result[key].map(image => pb.files.getUrl(result, image));
    } else {
      return pb.files.getUrl(result, result[key]) as string;
    }
  } catch (error) {
    return null;
  }
}

export async function getSuggestedBrands(pb: PocketBaseInstance): Promise<SuggestedBrand[]> {
  try {
    const records = await pb.collection('suggested_brands').getFullList();
    return records as unknown as SuggestedBrand[];
  } catch {
    throw new Error(`Suggested brands not found`)
  }
}
