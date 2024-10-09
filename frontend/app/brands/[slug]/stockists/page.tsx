import Breadcrumbs from '@/components/ui/breadcrumbs'
import BrandHeader from '@/components/ui/stockists/index/brand_header';
import FAQ from '@/components/ui/stockists/index/faq';
import FeaturedStockists from '@/components/ui/stockists/index/featured_stockists';
import Testimonials from '@/components/ui/stockists/index/testimonials';

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
    <Breadcrumbs items={breadcrumbs} />

    <BrandHeader brand={brand} brand_rating={brandRating} />
    <FeaturedStockists featuredStockists={featuredStockists} />
    <Testimonials />
    <FAQ />
  </div>
}