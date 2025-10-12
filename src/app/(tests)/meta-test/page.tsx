import { Metadata } from "next";
import Link from "next/link";
import React, { ReactNode, Suspense, use } from "react";

export const metadata: Metadata = {
  title: "meta test",
  description: "metadata testing desc",
};

// data layer
export async function getAllRecipes() {
  const { recipes } = await fetch(`https://dummyjson.com/recipes`).then((res) =>
    res.json()
  );
  return recipes;
}

export async function getAllProducts() {
  const { products } = await fetch(`https://dummyjson.com/products`).then(
    (res) => res.json()
  );
  return products;
}

export async function getProduct(id: string) {
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );
  return product;
}

export async function getRecipe(id: string) {
  const recipe = await fetch(`https://dummyjson.com/recipe/${id}`).then((res) =>
    res.json()
  );
  return recipe;
}

// main
const MetaDataTestPage = async () => {
  return (
    <React.Fragment>
      <main className="max-w-4xl mx-auto w-full min-h-screen">
        <Suspense fallback={"loading ... "}>
          <UI
            recipeFn={(recipe) => <RecipeCard key={recipe.id!} {...recipe} />}
            productFn={(p) => <ProductCard key={p.id} {...p} />}
          />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default MetaDataTestPage;

// presentation layer
export function UI({
  recipeFn,
  productFn,
}: {
  recipeFn: (item: any) => ReactNode;
  productFn: (item: any) => ReactNode;
}) {
  const [recipes, products] = use(
    Promise.all([getAllRecipes(), getAllProducts()])
  );
  return (
    <>
      <div className="flex justify-around">
        <div className="grid grid-cols-2 gap-1">
          {recipes &&
            Array.isArray(recipes) &&
            recipes?.map((recipe) => recipeFn(recipe))}
        </div>
        <div className="grid grid-cols-2 gap-1">
          {products &&
            Array.isArray(products) &&
            products?.map((product) => productFn(product))}
        </div>
      </div>
    </>
  );
}

// components
export async function ProductCard({
  thumbnail,
  id,
}: {
  thumbnail?: string;
  id: string | number;
}) {
  return (
    <Link href={`/meta-test/product/${id}`}>
      <img
        src={thumbnail}
        className="w-400 h-400 object-contain p-2 rounded"
        alt="img"
      />
    </Link>
  );
}

export async function RecipeCard({
  image,
  id,
}: {
  image?: string;
  id: string | number;
}) {
  return (
    <Link href={`/meta-test/recipe/${id}`}>
      <img
        src={image}
        className="w-120 h-120 object-contain p-2 rounded"
        alt="img"
      />
    </Link>
  );
}
