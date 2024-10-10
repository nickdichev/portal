import Image from 'next/image'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

import Breadcrumbs from '@/components/ui/breadcrumbs'
import Header from '@/components/brands/show/header'
import InfoCard from '@/components/brands/show/info_card'
import ProductGallery from '@/components/brands/show/product_gallery'
import Video from '@/components/brands/show/video'
import Linesheets from '@/components/brands/show/linesheets'
import Stockists from '@/components/brands/show/stockists'
import Rating from '@/components/brands/show/rating'
import Reviews from '@/components/brands/show/reviews'

import { getBrand, getBrandRating, getBrandReviews, getBrandProfile, getBrandImageUrls } from '@/lib/brands'

export const revalidate = 15

export default async function BrandShowPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);
  const brandRating = await getBrandRating(brand.id);
  const reviews = await getBrandReviews(brand.id);
  const brandProfile = await getBrandProfile(brand.id);

  const heroImage = await getBrandImageUrls(brand.id, 'hero_image');
  const product_gallery = await getBrandImageUrls(brand.id, 'product_gallery');
  const logo = await getBrandImageUrls(brand.id, 'logo');

  const suggestedBrands = [
    { name: 'LAGENCE', image: '/placeholder.svg' },
    { name: 'ESSE', image: '/placeholder.svg' },
    { name: 'CAES', image: '/placeholder.svg' },
    { name: 'TOTEME', image: '/placeholder.svg' },
  ]

  const linesheets = [
    { season: 'Spring Summer 2024', image: '/placeholder.svg', isNew: true },
    { season: 'Fall / Winter 2024', image: '/placeholder.svg', isNew: false },
    { season: 'Resort 2024', image: '/placeholder.svg', isNew: true },
    { season: 'Holiday 2023', image: '/placeholder.svg', isNew: false },
    { season: 'Pre-Fall 2024 Collection with Extended Name', image: '/placeholder.svg', isNew: true },
  ]

  const stockists = [
    { name: 'Nordstrom', location: 'New York, NY', type: 'Department Store' },
    { name: 'Saks Fifth Avenue', location: 'Los Angeles, CA', type: 'Luxury Department Store' },
    { name: 'Neiman Marcus', location: 'Chicago, IL', type: 'Luxury Department Store' },
    { name: 'Bloomingdale\'s', location: 'Miami, FL', type: 'Department Store' },
    { name: 'Shopbop', location: 'Online', type: 'E-commerce' },
    { name: 'Net-a-Porter', location: 'Online', type: 'Luxury E-commerce' },
  ]

  const breadcrumbs = [
    { label: 'brands', href: '/brands' },
    { label: brand.name, href: `/brands/${brand.slug}` },
  ]

  return (
    <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">
      <Breadcrumbs items={breadcrumbs} />

      {heroImage && (
        <div className="relative mb-4 h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
          <Image src={heroImage as string} alt={`${brand.name} hero image`} layout="fill" objectFit="cover" />
        </div>
      )}

      <Header props={{ brand, brandRating, brandProfile, isSaved: true }} />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Mobile-first Right Column (will be on top for mobile) */}
        <div className="md:w-1/3 md:order-2">

          {/* Message Brand */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full p-2 flex-shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-sm">SECULAR Wholesale</p>
                  <p className="text-xs text-muted-foreground">5 unread messages</p>
                </div>
                <Button variant="outline" size="sm" className="flex-shrink-0 whitespace-nowrap">
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Brands */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Suggested Brands</h3>
              <div className="grid grid-cols-2 gap-3">
                {suggestedBrands.map((brand, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="aspect-w-3 aspect-h-4 w-full mb-2">
                      {/* <Image
                        src={brand.image}
                        alt={brand.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      /> */}
                    </div>
                    <p className="text-sm font-medium text-center truncate w-full">{brand.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3 md:order-1">
          <InfoCard brand={brand} />
          {product_gallery && product_gallery.length > 0 && (
            <ProductGallery productImages={product_gallery as string[]} />
          )}
          <Video video_url={brand.video_url} />
          <Linesheets linesheets={linesheets} />
          <Stockists slug={brand.slug} stockists={stockists} />
        </div>
      </div>

      <Rating brandRating={brandRating} />
      <Reviews reviews={reviews} />
    </div>
  )
}
