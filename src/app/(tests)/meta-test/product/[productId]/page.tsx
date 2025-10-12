import { Metadata } from "next";
import React from "react";
import { getProduct, ProductCard } from "../../page";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct(params.productId);

  return {
    title: product.title,
    description: product.description,
  };
}

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const product = await getProduct(productId);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <div>
          <h3 className="text-red-500 text-2xl font-bold">{product?.title}</h3>
          <ProductCard {...product} />
          <Link className="py-2 px-4 bg-red-50 rounded" href={"/meta-test"}>
            ↙️
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductDetailPage;
