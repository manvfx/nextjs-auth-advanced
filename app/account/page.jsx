import SignOut from "@/components/signOut";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async () => {

   const session=await getServerSession(authOptions);
   if(!session){
      redirect("/sign-in")
   }

   return (
      <main className=" flex  flex-col gap-16 my-16">
         <div className=" flex flex-col gap-20">
            <div className=" bg-blue-600 text-white rounded p-4">account page</div>
         </div>
         <div className=" flex flex-col gap-4 bg-indigo-200 rounded-md p-8">
            <div>{session.user.name}</div>
            <div>{session.user.email}</div>
            <div>{session.user.image}</div>
            {/* <Image alt="" width={60} height={60} src={session.user.image}/> */}
         </div>
         <SignOut/>
      </main>
   );
}

export default Home;

