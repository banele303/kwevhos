'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, ChevronDown } from 'lucide-react'
import { IconBrandWhatsapp } from '@tabler/icons-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cn(
        'text-base font-medium transition-colors hover:text-primary',
        pathname === href
          ? 'text-black dark:text-white'
          : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b bg-white',
      isScrolled && 'shadow-lg'
    )}>
      <div className="container flex h-24 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center pl-[2rem]">
            <Image
              src="/pest-logo.jpeg"
              alt="Kwevhos Business Enterprise Logo"
              width={312}
              height={96}
              quality={100}
              priority
              sizes="(max-width: 768px) 220px, 312px"
              className="h-24 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about-us">About Us</NavItem>
            <NavItem href="/services">Services</NavItem>
            {/* Industries dropdown removed as Environmental page is merged into About Us */}
            {/* Careers link removed */}
            <NavItem href="/contacts">Contacts</NavItem>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center gap-3 text-sm font-medium text-muted-foreground">
              <a href="tel:+27634582860" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                +27 63 458 2860
              </a>
              <a
                href="https://wa.me/27634582860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border px-3 py-1.5 hover:bg-accent"
                aria-label="WhatsApp"
              >
                <IconBrandWhatsapp size={18} />
              </a>
            </div>
            <Button asChild className="hidden md:inline-flex" variant="outline">
              <Link href="tel:+27634582860">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="pr-14 text-base  hover:bg-transparent focus:ring-0 md:hidden">
                  <Menu className="h-10 w-10 " />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="flex items-center pl-4">
                  <Image
                    src="/pest-logo.jpeg"
                    alt="Kwevhos Business Enterprise Logo"
                    width={312}
                    height={96}
                    quality={100}
                    sizes="(max-width: 768px) 220px, 312px"
                    className="h-24 w-auto object-contain"
                  />
                </Link>
                <nav className="mt-8 flex flex-col space-y-4">
                  <NavItem href="/">Home</NavItem>
                  <NavItem href="/about-us">About Us</NavItem>
                  <NavItem href="/services">Services</NavItem>
                  {/* Industries accordion removed */}
                  {/* Careers link removed */}
                  <NavItem href="/contacts">Contacts</NavItem>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="tel:+27634582860">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

