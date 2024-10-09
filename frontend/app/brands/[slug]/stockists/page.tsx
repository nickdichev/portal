import Breadcrumbs from '@/components/ui/breadcrumbs'

import { getBrand } from '@/lib/brands'

export default async function StockistsPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);

  const breadcrumbs = [
    { label: 'brands', href: '/brands' },
    { label: brand.name, href: `/brands/${brand.slug}` },
    { label: 'stockists', href: `/brands/${brand.slug}/stockists` },
  ]

  return <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">
    <Breadcrumbs items={breadcrumbs} />
  </div>
}