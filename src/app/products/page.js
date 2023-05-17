import Card from "@/components/Card";
import React from "react";

export async function fetchProducts() {
  const resp = await fetch("https://api.escuelajs.co/api/v1/products");
  return resp.json();
}

export default async function Products() {
  const products = await fetchProducts();
  return (
    
    <div className="flex min-h-screen flex-wrap items-center justify-between">
      {products.map((product) => (
        <Card 
          key={product.id}
          id={product.id}
          title={product.title}
          images={product.images[0]}
          description={product.description}
        />
      ))}
    </div>
  );
}

