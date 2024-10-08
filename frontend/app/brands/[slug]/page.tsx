import Image from 'next/image'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

import { Brand, BrandRating, Review } from '@/models/Brand'

import Header from '@/components/ui/brands/show/header'
import InfoCard from '@/components/ui/brands/show/info_card'
import ProductGallery from '@/components/ui/brands/show/product_gallery'
import Video from '@/components/ui/brands/show/video'
import Linesheets from '@/components/ui/brands/show/linesheets'
import Stockists from '@/components/ui/brands/show/stockists'
import Rating from '@/components/ui/brands/show/rating'
import Reviews from '@/components/ui/brands/show/reviews'

import { getBrand, getBrandRating, getBrandReviews } from '@/lib/brands'

export const revalidate = 15

export default async function BrandShowPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);
  const brandRating = await getBrandRating(brand.id);
  const reviews = await getBrandReviews(brand.id);

  const suggestedBrands = [
    { name: 'LAGENCE', image: '/placeholder.svg' },
    { name: 'ESSE', image: '/placeholder.svg' },
    { name: 'CAES', image: '/placeholder.svg' },
    { name: 'TOTEME', image: '/placeholder.svg' },
  ]

  const productImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
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

  return (
    <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-4 overflow-x-auto whitespace-nowrap">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="text-gray-500 hover:underline">portal</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
          </li>
          <li className="flex items-center">
            <Link href="/brands" className="text-gray-500 hover:underline">brands</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
          </li>
          <li className="flex items-center">
            <a href="#" className="text-gray-500 hover:underline">womens</a>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
          </li>
          <li className="flex items-center">
            <a href="#" className="text-gray-500 hover:underline">contemporary</a>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
          </li>
          <li className="flex items-center">
            <span className="text-gray-700">{brand?.name}</span>
          </li>
        </ol>
      </nav>

      {/* Image Carousel */}
      <div className="relative mb-4 h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Fashion model" layout="fill" objectFit="cover" />
      </div>

      <Header props={{ brand, brandRating, isSaved: true }} />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Mobile-first Right Column (will be on top for mobile) */}
        <div className="md:w-1/3 md:order-2">
          {/* Brand Profile Image */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            {/* Logo Image */}
            <div className="w-2/3 mx-auto mb-4">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200 rounded-md overflow-hidden">
                {/* <Image src="/placeholder.svg" alt="SECULAR logo" layout="fill" objectFit="contain" /> */}
              </div>
            </div>
            {/* Brand Image */}
            <div className="aspect-w-2 aspect-h-3 bg-gray-200 rounded-md overflow-hidden">
              {/* <Image src="/placeholder.svg" alt="SECULAR brand profile" layout="fill" objectFit="cover" /> */}
            </div>
          </div>

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
          <ProductGallery productImages={productImages} />
          <Video video_url={brand.video_url} />
          <Linesheets linesheets={linesheets} />
          <Stockists stockists={stockists} />
        </div>
      </div>

      <Rating brandRating={brandRating} />
      <Reviews reviews={reviews} />
    </div>
  )
}
