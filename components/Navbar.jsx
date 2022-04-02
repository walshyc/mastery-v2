import React from 'react';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline';
const Navbar = ({ auth }) => {
  const navigation = [
    { name: 'Enter', href: '/enter' },
    { name: 'Profile', href: '/profile' },
  ];

  const { totalUniqueItems } = useCart();
  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-900 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Mastery</span>
                <div className="font-bold uppercase text-2xl text-mgreen">
                  Mastery
                </div>
              </a>
            </Link>
          </div>
          {auth === 'not-authenticated' ? (
            <div className="ml-10 flex gap-2">
              <Link href="/sign-in" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  Sign In
                </div>
              </Link>
            </div>
          ) : (
            <div className="ml-10 flex gap-2">
              <Link href="/enter" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  Enter
                </div>
              </Link>
              <Link href="/cart" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  <ShoppingCartIcon className="w-4"></ShoppingCartIcon>
                  {totalUniqueItems > 0 && totalUniqueItems}
                </div>
              </Link>
              <Link href="/cart" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  <UserCircleIcon className="w-4"></UserCircleIcon>
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
