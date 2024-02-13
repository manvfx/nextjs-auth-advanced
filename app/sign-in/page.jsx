import SignInComponent from "@/components/signInComp";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Home = async () => {

   const session=await getServerSession(authOptions);
   if(session){
      redirect("/account")
   }



   return (
      <main className="">
         <SignInComponent/>
      </main>
   );
}

export default Home;

