import { getBrand } from '@/lib/brands'

export default async function StockistsPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);

  return <div>{brand.name}</div>
}