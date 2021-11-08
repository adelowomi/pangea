import React from "react";
import { Stack } from "react-bootstrap";
import Link from "next/link";
import { ProductButton, ProductImage, ProductName } from "./ProductCard.styles";
import { addItemToCart } from "./ProductCard.methods";
import { Product } from "../../utilities/types";
import * as CurrencyFormat  from "react-currency-format";

export default function ProductCard({
  product,
  currency,
}: {
  product: Product;
  currency: string;
}) {
  const handleAddToCart = () => {
    return addItemToCart(product.id);
  };

  return (
    <Stack className="p-5">
      <Stack>
        <Link href="">
          <ProductImage src={product.image_url} alt={product.title} />
        </Link>
        <ProductName>{product.title}</ProductName>
      </Stack>
      <div className="text-center">
        {
          // @ts-ignore}
          <CurrencyFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={`${currency} `}
            decimalScale={2}
            decimalSeparator={"."}
            suffix={`.00`}
            renderText={(value: string) => (
              <div>
                <p>{value}</p>
              </div>
            )}
          />
        }
        {/* <p>{`${currency} ${product.price}`}</p> */}
      </div>
      <div>
        <ProductButton onClick={handleAddToCart}>Add to Cart</ProductButton>
      </div>
    </Stack>
  );
}
