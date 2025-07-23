"use client"; // This component now uses hooks, so it must be a Client Component

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/cartStore'; // Import our store

const Header = () => {
  const { items } = useCartStore(); // Get the items from the cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl tracking-tight">
          BroomGhost SA
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/cart" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span>({totalItems})</span> {/* Display the real count */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;