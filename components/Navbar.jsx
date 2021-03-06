import React from 'react';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import {
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
const Navbar = ({ auth }) => {


  const { totalUniqueItems } = useCart();
  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between ">
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
              <Link href="/about" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  <QuestionMarkCircleIcon className="w-4"></QuestionMarkCircleIcon>
                </div>
              </Link>
              <Link href="/sign-in" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  Sign In
                </div>
              </Link>
            </div>
          ) : (
            <div className="ml-10 flex gap-2">
              <Link href="/about" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  <QuestionMarkCircleIcon className="w-4"></QuestionMarkCircleIcon>
                </div>
              </Link>
              <Link href="/profile" passHref>
                <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                  <UserCircleIcon className="w-4"></UserCircleIcon>
                </div>
              </Link>
              {/* {totalUniqueItems > 0 && (
                <Link href="/cart" passHref>
                  <div className="btn btn-sm btn-outline btn-primary border-mgreen">
                    <ShoppingCartIcon className="w-4"></ShoppingCartIcon>
                    {totalUniqueItems > 0 && totalUniqueItems}
                  </div>
                </Link>
              )} */}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
