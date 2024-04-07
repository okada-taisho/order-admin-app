import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";


const AuthProvider = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const session:any = await getServerSession(authOptions);
  const user = session?.user;

  if(!user){
      redirect('/signin')
}else{
    return <>{children}</>;
  }

};

export default AuthProvider;

