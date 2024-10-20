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
  } catch {
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
  } catch {
    return null;
  }
}

export async function getSuggestedBrands(pb: PocketBaseInstance): Promise<SuggestedBrand[]> {
  try {
    const records = await pb.collection('suggested_brands').getFullList();
    return records as unknown as SuggestedBrand[];
  } catch {
    return [];
  }
}

export async function isBrandSaved(pb: PocketBaseInstance, brandId: string, userId: string): Promise<boolean> {
  try {
    const record = await pb.collection('user_saved_brands').getFirstListItem(`brand="${brandId}" && user="${userId}"`);
    return record !== null;
  } catch {
    return false;
  }
}

export async function saveBrand(pb: PocketBaseInstance, brandId: string, userId: string): Promise<void> {
  await pb.collection('user_saved_brands').create({ brand: brandId, user: userId });
}

export async function unsaveBrand(pb: PocketBaseInstance, brandId: string, userId: string): Promise<void> {
  const record = await pb.collection('user_saved_brands').getFirstListItem(`brand="${brandId}" && user="${userId}"`);
  await pb.collection('user_saved_brands').delete(record.id);
}

export async function toggleBrandSaved(pb: PocketBaseInstance, brandId: string, userId: string): Promise<boolean> {
  try {
    const isSaved = await isBrandSaved(pb, brandId, userId);
    if (isSaved) {
      await unsaveBrand(pb, brandId, userId);
      return false;
    } else {
      await saveBrand(pb, brandId, userId);
      return true;
    }
  } catch (error) {
    console.error("Error toggling brand saved status:", error);
    throw error;
  }
}
