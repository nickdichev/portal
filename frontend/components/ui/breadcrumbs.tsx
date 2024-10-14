import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm overflow-x-auto whitespace-nowrap">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:underline">portal</Link>
          <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
