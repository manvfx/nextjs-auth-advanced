import Link from "next/link";

const Header = () => {
   return (
      <div className=" p-4 flex justify-around items-center gap-8">
         <Link href={"/"} className=" bg-blue-500 rounded p-2 text-white">Home</Link>
         <div className=" flex justify-end items-center gap-4">
            <Link href={"/sign-in"} className=" bg-blue-500 rounded p-2 text-white">Sign in</Link>
            <Link href={"/sign-up"} className=" bg-blue-500 rounded p-2 text-white">Sign up</Link>
            <Link href={"/account"} className=" bg-blue-500 rounded p-2 text-white">Account</Link>
         </div>
      </div>
   );
}

export default Header;