import CartSectionComponent from "@/components/organisms/CartSection";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default function MyCart() {
  return (
    <main>
      <Navbar />
      <CartSectionComponent />
      <Footer />
    </main>
  );
}
