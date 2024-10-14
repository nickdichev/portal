import AppHeader from '@/components/ui/app_header'
import BrandHeader from '@/components/stockists/index/brand_header';
import FAQ from '@/components/stockists/index/faq';
import FeaturedStockists from '@/components/stockists/index/featured_stockists';
import StockistsList from '@/components/stockists/index/stockists_list';
import Testimonials from '@/components/stockists/index/testimonials';

import { getBrand, getBrandRating } from '@/lib/brands'
import { getFeaturedStockists, getStockists } from '@/lib/stockists'
import { getServerSidePocketBase } from '@/app/auth/actions';

export default async function StockistsPage({ params }: { params: { slug: string } }) {
  const pb = await getServerSidePocketBase();

  const brand = await getBrand(pb, params.slug);
  const brandRating = await getBrandRating(pb, brand.id);
  const stockists = await getStockists(pb, brand.id);
  const featuredStockists = await getFeaturedStockists(pb);

  const breadcrumbs = [
    { label: 'brands', href: '/brands' },
    { label: brand.name, href: `/brands/${brand.slug}` },
    { label: 'stockists', href: `/brands/${brand.slug}/stockists` },
  ]

  const authStore = pb.authStore;

  return <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">
    <AppHeader breadcrumbs={breadcrumbs} user={authStore.isValid ? authStore.model : null} />

    <BrandHeader brand={brand} brand_rating={brandRating} />
    <FeaturedStockists featuredStockists={featuredStockists} />
    <StockistsList brand={brand} stockists={stockists} />
    <Testimonials />
    <FAQ />
  </div>
}