import Image from "next/image";
import Link from "next/link";
import { BiSolidInvader } from "react-icons/bi";

export function Header() {
  return (
    <header className="w-full h-28 bg-slate-200 text-black px-2">
      <div className="max-w-screen-x1 mx-auto flex justify-center items-center  h-28 sm:justify-between sm:mx-2 md:mx-10 lg:mx-20 xl:mx-40">
        <nav className="flex justify-center items-center gap-5 ">
          <Link href="/">
            <Image
              className="w-full"
              src="https://firebasestorage.googleapis.com/v0/b/pessoal-8849f.appspot.com/o/jpgames%2Flogo-removebg-preview.png?alt=media&token=190a9673-25a5-4bec-b517-aa7f11c9b2f2"
              width={100}
              height={100}
              quality={100}
              alt="logo"
              priority={true}
            />
          </Link>

          <Link href="/" className="font-medium text-black hover:text-orange-600 transition-duration: 150ms;">Games</Link>
          <Link href="/profile"  className="font-medium hover:text-orange-600 transition-duration: 150ms;">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center ">
          <Link href="/profile">
            <BiSolidInvader size={30} color="#42a913" />
          </Link>
        </div>

      </div>
    </header>
  );
}
