import SignUp from "@/components/features/singup/SignUp";
import SignIn from "@/components/features/signin/SignIn";
import Products from "@/components/features/products/Products";

export default function Home() {
  return (
    <>
      <SignUp />
      <SignIn />
      <Products />
    </>  
  );
}
