import Image from 'next/image'
import { Star, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon, ChevronDown, ChevronUp, Heart, Flag, Play, MessageCircle, Calendar, MapPin, Info } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import PocketBase from 'pocketbase';
import { Brand } from '@/models/Brand'

import BrandHeader from '@/components/ui/brands/show/brand_header'
import BrandCard from '@/components/ui/brands/show/brand_card'
import ProductGallery from '@/components/ui/brands/show/product_gallery'
import BrandVideo from '@/components/ui/brands/show/brand_video'
import BrandLinesheets from '@/components/ui/brands/show/brand_linesheets'
import Stockists from '@/components/ui/brands/show/stockists'

async function getBrand(slug: string): Promise<Brand> {
  const pb = new PocketBase('http://127.0.0.1:8090');

  try {
    const record = await pb.collection('brands').getFirstListItem(`slug="${slug}"`, {
      expand: 'categories',
    });

    return record as unknown as Brand;
  } catch (error) {
    throw new Error(`Brand with slug "${slug}" not found`)
  }
}

export default async function BrandShowPage({ params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);

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

      <BrandHeader props={{ brand, isSaved: true }} />

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
          <BrandCard brand={brand} />
          <ProductGallery productImages={productImages} />
          <BrandVideo video_url={brand.video_url} />
          <BrandLinesheets linesheets={linesheets} />
          <Stockists stockists={stockists} />
        </div>

      </div>
    </div>
  )
}

// export default async function Component({ params }: { params: { slug: string } }) {
//   const [isSaved, setIsSaved] = useState(false)
//   const [isExpanded, setIsExpanded] = useState(false)
//   const [animate, setAnimate] = useState(false)

//   const linesheetsRef = useRef<HTMLDivElement>(null)
//   const stockistsRef = useRef<HTMLDivElement>(null)
//   const reviewsRef = useRef<HTMLDivElement>(null)
//   const ratingRef = useRef<HTMLDivElement>(null)
//   const controls = useAnimation()
//   const isInView = useInView(ratingRef, { once: true })




//   const ratingCategories = [
//     { name: 'Product Quality', rating: 4.7, description: 'Assesses the overall quality and durability of the products.' },
//     { name: 'Design & Style', rating: 4.9, description: 'Evaluates the aesthetic appeal and trendiness of the designs.' },
//     { name: 'Price & Value', rating: 4.5, description: 'Considers the pricing in relation to the perceived value.' },
//     { name: 'Customer Service', rating: 4.3, description: 'Rates the responsiveness and helpfulness of customer support.' },
//     { name: 'Order & Delivery', rating: 4.6, description: 'Judges the efficiency and reliability of the ordering and delivery process.' },
//   ]

//   const calculateOverallRating = (categories) => {
//     const sum = categories.reduce((acc, category) => acc + category.rating, 0)
//     return (sum / categories.length).toFixed(1)
//   }

//   const overallRating = calculateOverallRating(ratingCategories)

  // useEffect(() => {
//     const handleScroll = () => {
//       if (headerRef.current && window.innerWidth >= 768) {
//         const headerRect = headerRef.current.getBoundingClientRect()
//         const headerTop = headerRef.current.offsetTop
//         setIsSticky(window.scrollY > headerTop && headerRect.top <= 0)
//       } else {
//         setIsSticky(false)
//       }

//       const scrollPosition = window.scrollY + 100

//       navigationTabs.forEach(tab => {
//         if (tab.ref.current) {
//           const element = tab.ref.current
//           if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
//             setActiveTab(tab.id)
//           }
//         }
//       })
//     }

//     updateVisibleImages()
//     window.addEventListener('resize', updateVisibleImages)
//     window.addEventListener('scroll', handleScroll)

//     const timer = setTimeout(() => setAnimate(true), 500)

//     return () => {
//       window.removeEventListener('resize', updateVisibleImages)
//       window.removeEventListener('scroll', handleScroll)
//       clearTimeout(timer)
//     }
//   }, [])

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [controls, isInView])

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded)
//   }

//   const toggleSave = () => {
//     setIsSaved(!isSaved)
//   }

//   const scrollToSection = (id: string) => {
//     const tab = navigationTabs.find(tab => tab.id === id)
//     if (tab && tab.ref.current) {
//       tab.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }


//   return (
//     <div className="max-w-[1200px] mx-auto bg-gray-100 p-4">

//       {/* Image Carousel */}
//       <div className="relative mb-4 h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
//         <Image src="/placeholder.svg" alt="Fashion model" layout="fill" objectFit="cover" />
//       </div>


          {/* Product Gallery */}

//           {/* Single Large Video Section */}

//           {/* Linesheets */}

//           {/* Stockists */}

//       {/* Overall Rating */}
//       <div ref={ratingRef} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-lg relative overflow-hidden mb-4">
//         {/* Subtle background pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
//         </div>

//         <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">Overall Rating</h3>
//         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 relative z-10">
//           <div className="relative w-48 h-48 flex-shrink-0 lg:mt-4">
//             <svg className="w-full h-full transform -rotate-90">
//               <circle
//                 className="text-gray-200"
//                 strokeWidth="6"
//                 stroke="currentColor"
//                 fill="transparent"
//                 r="90"
//                 cx="96"
//                 cy="96"
//               />
//               <motion.circle
//                 className="text-primary drop-shadow-md"
//                 strokeWidth="6"
//                 strokeDasharray={565.5}
//                 strokeDashoffset={565.5 - (565.5 * overallRating) / 5}
//                 strokeLinecap="round"
//                 stroke="currentColor"
//                 fill="transparent"
//                 r="90"
//                 cx="96"
//                 cy="96"
//                 initial={{ strokeDashoffset: 565.5 }}
//                 animate={controls}
//                 variants={{
//                   visible: { strokeDashoffset: 565.5 - (565.5 * overallRating) / 5 },
//                 }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//               />
//             </svg>
//             <motion.div
//               className="absolute inset-0 flex flex-col items-center justify-center"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={controls}
//               variants={{
//                 visible: { scale: 1, opacity: 1 },
//               }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               <span className="text-4xl font-bold text-gray-800">{overallRating}</span>
//               <div className="flex mt-1">
//                 {[...Array(5)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={controls}
//                     variants={{
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                     transition={{ delay: 0.7 + i * 0.1 }}
//                   >
//                     <Star
//                       className={`h-5 w-5 ${i < Math.floor(overallRating)
//                           ? 'text-yellow-400'
//                           : 'text-gray-300'
//                         } drop-shadow`}
//                       fill="currentColor"
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//           <div className="flex-1 w-full max-w-3xl">
//             {ratingCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="mb-3 last:mb-0"
//               >
//                 <div className="flex justify-between items-center mb-1">
//                   <div className="flex items-center">
//                     <span className="text-sm font-medium text-gray-700 mr-1">{category.name}</span>
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger>
//                           <Info className="h-3 w-3 text-gray-400" />
//                         </TooltipTrigger>
//                         <TooltipContent side="right">
//                           <p className="text-xs">{category.description}</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                   <span className="text-xs font-bold text-gray-800">{category.rating}</span>
//                 </div>
//                 <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
//                   <motion.div
//                     className="h-full bg-primary rounded-full"
//                     style={{ width: `${(category.rating / 5) * 100}%` }}
//                     initial={{ width: 0 }}
//                     animate={controls}
//                     variants={{
//                       visible: { width: `${(category.rating / 5) * 100}%` },
//                     }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     whileHover={{ scale: 1.03 }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Customer Review */}
//       <div className="bg-white rounded-lg p-4 shadow">
//         <div className="flex items-start mb-4">
//           <div className="bg-teal-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3">
//             CA
//           </div>
//           <div className="flex-grow">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               <div>
//                 <h3 className="font-semibold text-sm">Channa A.</h3>
//                 <p className="text-xs text-gray-600">buyer</p>
//                 <p className="text-xs text-gray-600">specialty retailer, 11 social</p>
//                 <p className="text-xs text-gray-600">California, USA</p>
//               </div>
//               <div className="mt-2 sm:mt-0 sm:text-right">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-600">May 8th, 2024</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <h4 className="font-semibold text-sm mb-2">"TrendSetters Apparel: Stylish Choices with Seamless Delivery, Despite Slower Customer Service"</h4>
//         <div className="mb-2">
//           <h5 className="font-semibold text-sm">pros: what did you like?</h5>
//           <p className="text-xs text-gray-600">The range of styles and designs is fantastic. TrendSetters keeps up with fashion trends, and it's easy to find pieces that resonate with our customers' tastes. Additionally, their order and delivery process is seamless and reliable.</p>
//         </div>
//         <div className="mb-2">
//           <h5 className="font-semibold text-sm">cons: what did you dislike?</h5>
//           <p className="text-xs text-gray-600">The customer service could be more efficient. There were a couple of occasions where it took several days to get a response to inquiries, and resolving issues seemed slower than ideal.</p>
//         </div>
//         <div>
//           <h5 className="font-semibold text-sm">overall: how was your experience?</h5>
//           <p className="text-xs text-gray-600">My overall experience with TrendSetters Apparel has been very positive. Despite some hiccups with customer service, the...</p>
//           <a href="#" className="text-xs text-teal-500">read more</a>
//         </div>
//       </div>
//     </div>
//   )
// }