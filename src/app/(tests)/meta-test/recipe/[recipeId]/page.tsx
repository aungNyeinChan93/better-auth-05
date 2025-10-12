import React from "react";
import { getRecipe, RecipeCard } from "../../page";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { recipeId: string };
}): Promise<Metadata> {
  const recipe = await getRecipe(params?.recipeId);
  return {
    title: recipe?.name,
    description: recipe?.mealType[0],
  };
}

const RecipeDetailPage = async ({
  params,
}: {
  params: Promise<{ recipeId: string }>;
}) => {
  const { recipeId } = await params;
  const recipe = await getRecipe(recipeId);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <div>
          <h3 className="text-red-500 text-2xl font-bold">{recipe?.name}</h3>
          <RecipeCard {...recipe} />
          <Link className="py-2 px-4 bg-red-50 rounded" href={"/meta-test"}>
            ↙️
          </Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RecipeDetailPage;
