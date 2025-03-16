import { getAllProducts } from "@/sanity/lib/client";
import SalesBanner from "./component/layout/SalesBanner";
import ProductGrid from "./component/product/ProductGrid";

export default async function Home() {
  const Products =await getAllProducts()
  return (
    <div>
      <SalesBanner/>
      <section className="container mx-auto py-8">
      <ProductGrid products={Products}/>
      </section>
    </div>
  );
}
