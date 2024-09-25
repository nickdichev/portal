import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ArrowRight, Menu, Facebook, Twitter, Instagram, Linkedin, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

// Main component for the Portal Wholesale homepage
// This component serves as the entry point for the homepage and manages the overall layout and state
export default function Component() {
  // Object containing category lists for different sections
  // This data structure allows for easy management and rendering of category information
  // TODO: Backend Dev - Consider fetching this data from an API or CMS for easier management
  const categories = {
    women: [
      'Dresses',
      'Jeans',
      'T-Shirts & Tank Tops',
      'Activewear',
      'Shirts & Blouses',
      'Bags & Backpacks',
      'Sneakers',
      'Intimates & Shapewear'
    ],
    men: [
      'Suits',
      'Jeans',
      'T-Shirts',
      'Activewear',
      'Dress Shirts',
      'Bags & Backpacks',
      'Sneakers',
      'Outerwear'
    ],
    children: [
      'Dresses',
      'Jeans',
      'T-Shirts',
      'Activewear',
      'School Uniforms',
      'Backpacks',
      'Sneakers',
      'Pajamas'
    ]
  }

  return (
    <>
      {/* Head component for setting meta tags and SEO information */}
      {/* These meta tags are crucial for SEO and social media sharing */}
      <Head>
        <title>Portal Wholesale - Connect Fashion Buyers and Brands</title>
        <meta name="description" content="Portal Wholesale is the premier platform connecting fashion buyers and wholesale brands. Discover, connect, and grow your fashion business." />
        <meta name="keywords" content="fashion wholesale, buyer platform, brand discovery, wholesale marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.portalwholesale.com" />
        {/* Open Graph tags for better social media sharing */}
        <meta property="og:title" content="Portal Wholesale - Connect Fashion Buyers and Brands" />
        <meta property="og:description" content="Discover and connect with top fashion wholesale brands on Portal Wholesale. Streamline your buying process and grow your business." />
        <meta property="og:image" content="https://www.portalwholesale.com/og-image.jpg" />
        <meta property="og:url" content="https://www.portalwholesale.com" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* TODO: SEO - Consider adding structured data for rich snippets */}
        {/* TODO: Backend Dev - Implement dynamic meta tags based on page content */}
      </Head>

      {/* Main container for the entire page */}
      {/* The gradient background creates a subtle, professional look */}
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white font-sans">
        {/* Header section with navigation */}
        {/* This header is sticky, ensuring it's always visible as users scroll */}
        <header className="bg-[#004B4F] shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo and brand name */}
            {/* The hover scale effect adds a subtle interactive element */}
            <div className="text-2xl font-bold text-white transition-transform hover:scale-105">
              <Link href="/" aria-label="Portal Wholesale Home">
                Portal Wholesale
              </Link>
            </div>
            {/* Navigation menu for desktop */}
            {/* This menu is hidden on mobile devices and replaced with a dropdown */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-white hover:text-[#30959A] font-medium transition-colors duration-200">About</Link>
              <Link href="/features" className="text-white hover:text-[#30959A] font-medium transition-colors duration-200">Features</Link>
              <Link href="/pricing" className="text-white hover:text-[#30959A] font-medium transition-colors duration-200">Pricing</Link>
              <Button variant="outline" className="border-[#30959A] text-white hover:bg-[#30959A] transition-colors duration-200">Sign In</Button>
              <Button className="bg-[#30959A] hover:bg-[#004B4F] text-white transition-colors duration-200">Get Started</Button>
            </nav>
            {/* Mobile menu dropdown */}
            {/* This dropdown menu is only visible on mobile devices */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link href="/about" className="w-full">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/features" className="w-full">Features</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/pricing" className="w-full">Pricing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/signin" className="w-full">Sign In</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/get-started" className="w-full font-semibold text-[#004B4F]">Get Started</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero section */}
          {/* This section introduces the main value proposition of Portal Wholesale */}
          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Where fashion buyers meet wholesale brands
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Connecting fashion buyers and brands in one transparent, efficient platform.
            </p>
            {/* Search input */}
            {/* This search bar is a key feature for users to find brands and products */}
            {/* TODO: Backend Dev - Implement search functionality and integrate with backend API */}
            <div className="max-w-2xl mx-auto relative mb-12 animate-fade-in-up animation-delay-400">
              <Input 
                type="text" 
                placeholder="Search for brands, categories, or styles..." 
                className="w-full py-6 pl-14 pr-4 text-gray-800 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#30959A] shadow-lg transition-shadow duration-200"
                aria-label="Search for brands, categories, or styles"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" aria-hidden="true" />
            </div>
            {/* Hero image */}
            {/* This image showcases the diversity of fashion items available on the platform */}
            {/* TODO: SEO - Ensure alt text is descriptive and relevant for image SEO */}
            <div className="relative h-64 md:h-96 mb-12">
              <Image
                src="/placeholder.svg?height=384&width=1024"
                alt="Diverse collection of fashion items representing Portal Wholesale's offerings"
                width={1024}
                height={384}
                className="rounded-2xl object-cover w-full h-full"
                priority
              />
            </div>
          </section>

          {/* Video section */}
          {/* This section showcases the brand story through a video */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
              {/* Video element */}
              {/* TODO: Backend Dev - Implement video streaming or CDN integration for optimal performance */}
              <video
                id="brandVideo"
                className="w-full"
                poster="/placeholder.svg?height=360&width=640"
                preload="metadata"
              >
                <source src="/brand-story.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Play/Pause button overlay */}
              {/* This button allows users to control video playback */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200 hover:bg-opacity-40"
              >
                Play Video
              </button>
            </div>
          </section>

          {/* Buyer and Brand sections */}
          {/* These sections highlight the benefits for both buyers and brands */}
          <section className="grid md:grid-cols-2 gap-8 mb-20">
            {/* For Fashion Buyers card */}
            <Card className="bg-white shadow-lg border-0 overflow-hidden flex flex-col transition-transform duration-200 hover:scale-105">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Fashion buyer browsing through a digital catalog"
                    width={384}
                    height={192}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">For Fashion Buyers</h2>
                <p className="text-gray-600 mb-6">
                  Discover curated brands, read authentic reviews, and streamline your wholesale buying process.
                </p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="w-5 h-5 mr-2 text-[#30959A] flex-shrink-0" aria-hidden="true" />
                    <span>Access thousands of premium brands</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="w-5 h-5 mr-2 text-[#30959A] flex-shrink-0" aria-hidden="true" />
                    <span>Compare products side-by-side</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="w-5 h-5 mr-2 text-[#30959A] flex-shrink-0" aria-hidden="true" />
                    <span>Read unbiased reviews from peers</span>
                  </li>
                </ul>
                <Button className="bg-[#30959A] hover:bg-[#004B4F] text-white px-8 py-3 text-lg rounded-full self-start transition-colors duration-200">
                  Start Discovering
                </Button>
              </CardContent>
            </Card>
            {/* For Fashion Brands card */}
            <Card className="bg-white shadow-lg border-0 overflow-hidden flex flex-col transition-transform duration-200 hover:scale-105">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Fashion brand showcasing their latest collection"
                    width={384}
                    height={192}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">For Fashion Brands</h2>
                <p className="text-gray-600 mb-6">
                  Showcase your collections, connect with buyers, and grow your wholesale business.
                </p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="w-5 h-5 mr-2 text-[#30959A] flex-shrink-0" aria-hidden="true" />
                    <span>Reach a global network of buyers</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="w-5 h-5 mr-2 text-[#30959A] flex-shrink-0" aria-hidden="true" />
                    <span>Manage your brand profile easily</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="w-5 h-5 mr-2 text-[#30959A] flex-shrink-0" aria-hidden="true" />
                    <span>Gain insights from buyer feedback</span>
                  </li>
                </ul>
                <Button className="bg-[#30959A] hover:bg-[#004B4F] text-white px-8 py-3 text-lg rounded-full self-start transition-colors duration-200">
                  List Your Brand
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Featured Categories section */}
          {/* This section showcases the main product categories available on the platform */}
          {/* TODO: SEO - Consider adding schema markup for product categories */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Categories</h2>
            {/* Tabs component for category selection */}
            {/* This allows users to easily switch between different category types */}
            <Tabs defaultValue="women" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="women">Women</TabsTrigger>
                <TabsTrigger value="men">Men</TabsTrigger>
                <TabsTrigger value="children">Children</TabsTrigger>
              </TabsList>
              {/* Render category content for each tab */}
              {/* This map function dynamically generates content based on the categories object */}
              {Object.entries(categories).map(([key, items]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((category) => (
                      <Card key={category} className="bg-white shadow-md border-0 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-105">
                        <CardContent className="p-4 flex items-center justify-center h-20">
                          <h3 className="text-sm font-semibold text-gray-800 text-center">{category}</h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            {/* View All Categories button */}
            {/* TODO: Backend Dev - Implement logic to show all categories when clicked */}
            <div className="mt-10 text-center">
              <Button className="bg-[#30959A] hover:bg-[#004B4F] text-white px-8 py-3 text-lg rounded-full transition-colors duration-200">
                View All Categories
              </Button>
            </div>
          </section>

          {/* Why Choose Portal Wholesale section */}
          {/* This section highlights the unique selling points of the platform */}
          <section className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Why Choose Portal Wholesale?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Comprehensive Directory feature */}
              <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105">
                <div className="mb-4 relative h-40 w-40">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Comprehensive directory icon"
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Directory</h3>
                <p className="text-gray-600">Access every fashion wholesale brand in one place, without barriers.</p>
              </div>
              {/* Transparent Reviews feature */}
              <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105">
                <div className="mb-4 relative h-40 w-40">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Transparent reviews icon"
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Transparent Reviews</h3>
                <p className="text-gray-600">Read and write authentic reviews from industry professionals.</p>
              </div>
              {/* Efficient Connections feature */}
              <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105">
                <div className="mb-4 relative h-40 w-40">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Efficient connections icon"
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Efficient Connections</h3>
                <p className="text-gray-600">Streamline communication between buyers and brands.</p>
              </div>
            </div>
          </section>

          {/* Call-to-Action section */}
          {/* This section encourages users to sign up or learn more about the platform */}
          <section className="bg-teal-50 p-12 rounded-2xl mb-20 transition-transform duration-200 hover:scale-105">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Fashion Revolution</h2>
              <p className="text-xl text-gray-600 mb-8">
                Be part of a community that's shaping the future of fashion wholesale. Whether you're a buyer or a brand, Portal Wholesale offers the tools and connections you need to thrive.
              </p>
              {/* TODO: Backend Dev - Implement user registration or lead capture functionality */}
              <Button className="bg-[#30959A] hover:bg-[#004B4F] text-white px-8 py-3 text-lg rounded-full transition-colors duration-200">
                Get Started Today
              </Button>
            </div>
          </section>

          {/* Featured Brands section */}
          {/* This section showcases popular or trending brands on the platform */}
          {/* TODO: SEO - Consider adding schema markup for organization or brand */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Render placeholder images for featured brands */}
              {/* TODO: Backend Dev - Replace with dynamic brand data from the database */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-full pb-[75%] transition-transform duration-200 hover:scale-105">
                  <Image
                    src={`/placeholder.svg?height=225&width=300&text=Brand ${i}`}
                    alt={`Featured Brand ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg absolute inset-0"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer section */}
        {/* This section contains important links, contact information, and social media links */}
        <footer className="bg-[#004B4F] text-white py-16">
          <div className="container mx-auto px-4">
            {/* Footer content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Company information and social links */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#30959A]">Portal Wholesale</h3>
                <p className="text-gray-300">Connecting fashion buyers and brands in one transparent, efficient platform.</p>
                <div className="flex space-x-4">
                  {/* Social media links */}
                  {/* TODO: Backend Dev - Update these links with actual social media profiles */}
                  <a href="https://www.facebook.com/portalwholesale" className="text-gray-300 hover:text-[#30959A] transition-colors duration-200" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.twitter.com/portalwholesale" className="text-gray-300 hover:text-[#30959A] transition-colors duration-200" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/portalwholesale" className="text-gray-300 hover:text-[#30959A] transition-colors duration-200" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/portalwholesale" className="text-gray-300 hover:text-[#30959A] transition-colors duration-200" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              {/* Quick Links */}
              {/* TODO: Backend Dev - Ensure these links are properly routed in the application */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#30959A]">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
                  <li><Link href="/for-buyers" className="text-gray-300 hover:text-white transition-colors duration-200">For Buyers</Link></li>
                  <li><Link href="/for-brands" className="text-gray-300 hover:text-white transition-colors duration-200">For Brands</Link></li>
                  <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</Link></li>
                </ul>
              </div>
              {/* Contact Information */}
              {/* TODO: Backend Dev - Replace with actual contact information */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#30959A]">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>1234 Fashion Avenue</li>
                  <li>New York, NY 10001</li>
                  <li>hello@portalwholesale.com</li>
                  <li>(123) 456-7890</li>
                </ul>
              </div>
            </div>
            {/* Separator line */}
            <Separator className="my-8 bg-[#30959A]" />
            {/* Copyright and legal links */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">© 2024 Portal Wholesale. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
