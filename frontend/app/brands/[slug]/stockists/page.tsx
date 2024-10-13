import AppHeader from '@/components/ui/app_header'
import BrandHeader from '@/components/stockists/index/brand_header';
import FAQ from '@/components/stockists/index/faq';
import FeaturedStockists from '@/components/stockists/index/featured_stockists';
import StockistsList from '@/components/stockists/index/stockists_list';
import Testimonials from '@/components/stockists/index/testimonials';

import { getBrand, getBrandRating } from '@/lib/brands'
import { getFeaturedStockists, getStockists } from '@/lib/stockists'

export default async function StockistsPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);
  const brandRating = await getBrandRating(brand.id);
  const stockists = await getStockists(brand.id);
  const featuredStockists = await getFeaturedStockists();

  const breadcrumbs = [
    { label: 'brands', href: '/brands' },
    { label: brand.name, href: `/brands/${brand.slug}` },
    { label: 'stockists', href: `/brands/${brand.slug}/stockists` },
  ]

  return <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">
    <AppHeader breadcrumbs={breadcrumbs} />

    <BrandHeader brand={brand} brand_rating={brandRating} />
    <FeaturedStockists featuredStockists={featuredStockists} />
    <StockistsList brand={brand} stockists={stockists} />
    <Testimonials />
    <FAQ />
  </div>
}