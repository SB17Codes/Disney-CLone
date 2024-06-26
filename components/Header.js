import Image from "next/image";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";

import { useRouter } from "next/router";
import { getSession, useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12 ">
      <Image
        src="/images/logo.svg"
        height={80}
        width={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6 ">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          onClick={signIn}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 "
        >
          Login
        </button>
      ) : (
        <div className="ml-auto flex space-x-4">
          <img
            className=" h-10 w-10 rounded-full object-cover cursor-pointer"
            src={session?.user?.image}  
                      alt=""
          ></img>
          <button
            onClick={signOut}
            className="ml-auto uppercase border px-2 py-1 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 "
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
