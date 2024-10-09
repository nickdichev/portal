import Breadcrumbs from '@/components/ui/breadcrumbs'
import BrandHeader from '@/components/ui/stockists/index/brand_header';

import { getBrand, getBrandRating } from '@/lib/brands'

export default async function StockistsPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);
  const brandRating = await getBrandRating(brand.id);

  const breadcrumbs = [
    { label: 'brands', href: '/brands' },
    { label: brand.name, href: `/brands/${brand.slug}` },
    { label: 'stockists', href: `/brands/${brand.slug}/stockists` },
  ]

  return <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">
    <Breadcrumbs items={breadcrumbs} />

    <BrandHeader brand={brand} brand_rating={brandRating} />
  </div>
}