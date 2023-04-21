import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-rg_pink p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            onClick={() => router.push("/")}
            src="https://api.logo.com/api/v2/images?format=webp&logo=logo_717ae50f-8c52-437f-9db3-45e2658be5b7&width=1000&primary=%23ffffff&secondary=%23ffffff&accent=%23ffffff&background=transparent&tertiary=%23ffffff&fit=contain&u=1670399832"
            className="h-10 px-4 cursor-pointer object-contain"
            alt="Logo"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-200 hover:bg-yellow-300">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="Search for Items"
          />

          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Accounts </p>
          </div>

          <div className="link">
            <p>My</p>
            <p className="font-extrabold md:text-sm">Orders </p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-200 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center bg-rg_pink-light text-white text-sm space-x-4 h-11  pl-6 justify-center lg:space-x-9 shadow-md">
        <Link href="/products/all-products">
          <p className="link flex items-center sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
        </Link>

        <Link href="/products/groceries">
          <p className="link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-500">
            Groceries
          </p>
        </Link>

        <Link href="/products/ethnic-foods">
          <p className="link hidden sm:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Ethnic Foods
          </p>
        </Link>

        <Link href="/products/oil">
          <p className="link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Oil
          </p>
        </Link>

        <Link href="/products/fish-meat-snail">
          <p className="link hidden sm:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Fish, Meat & Snail
          </p>
        </Link>

        <Link href="/products/food">
          <p className="link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Foods{" "}
          </p>
        </Link>

        <Link href="/products/snacks">
          <p className="link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Snack{" "}
          </p>
        </Link>

        <Link href="/products/drinks">
          <p className="link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Drinks{" "}
          </p>
        </Link>

        <Link href="/products/flour">
          <p className="link hidden lg:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Flour
          </p>
        </Link>

        <Link href="/products/beverages">
          <p className="link hidden lg:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Beverages
          </p>
        </Link>

        <Link href="/products/cooking-ingredient">
          <p className="link hidden lg:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200">
            Cooking Ingredients
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
