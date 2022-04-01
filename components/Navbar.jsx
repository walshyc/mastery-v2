import React from 'react';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { ShoppingCartIcon } from '@heroicons/react/outline';
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
            {auth === 'not-authenticated' ? (
              ''
            ) : (
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a className="text-base font-medium text-mgreen hover:text-green-50">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {auth === 'not-authenticated' ? (
            <div className="ml-10 flex gap-2">
              <Link href="/sign-in" passHref>
                <div className="inline-block bg-transparent py-2 px-4 border border-mgreen rounded-lg text-base font-medium text-mgreen hover:bg-green-100 cursor-pointer">
                  Sign In
                </div>
              </Link>
            </div>
          ) : (
            <div className="ml-10 flex gap-2">
              <Link href="/enter" passHref>
                <div className="inline-block bg-transparent py-2 px-4 border border-mgreen rounded-lg text-base font-medium text-mgreen hover:bg-green-100 cursor-pointer">
                  Enter
                </div>
              </Link>
              <Link href="/cart" passHref>
                <div className="flex gap-2 bg-transparent py-2 px-4 border border-mgreen rounded-lg text-base font-medium text-mgreen hover:bg-green-100 cursor-pointer">
                  <ShoppingCartIcon className="w-4"></ShoppingCartIcon>
                  {totalUniqueItems > 0 && totalUniqueItems}
                </div>
              </Link>
            </div>
          )}
         
        </div>

        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {auth === 'not-authenticated' ? (
            ''
          ) : (
            navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-medium text-mgreen hover:text-green-900">
                  {link.name}
                </a>
              </Link>
            ))
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
