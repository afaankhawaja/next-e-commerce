import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-4">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant="secondary" className="mb-2">
          {product.category}
        </Badge>
        <CardTitle className="text-lg font-semibold line-clamp-2 mb-2">
          {product.title}
        </CardTitle>
        <p className="text-sm text-gray-600 line-clamp-3 mb-2">
          {product.description}
        </p>
        <p className="text-lg font-bold text-green-600">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;