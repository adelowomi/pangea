import React, { useState } from "react";
import { Product } from "../../utilities/types";
import {
  getSingleCartItem,
  incrementQuantity,
  reduceQuantity,
  removeItemFromCart,
} from "../ProductCard/ProductCard.methods";
import {
  CartProductCardD,
  CartProductCardWrapper,
  CartProductDescription,
  CartProductName,
  CartProductImageWrapper,
  CartProductImage,
  RemoveItemButton,
  RemoveItemButtonSvg,
  CartProductPriceSection,
  CartProductQuantityWrapper,
  CartProductQuantity,
  CartQuantityButtons,
} from "./CartProductCard.styles";
import * as CurrencyFormat from "react-currency-format";

export default function CartProductCard({
  product,
  currency,
}: {
  product: Product;
  currency: string;
}) {
  console.log({ product });

  const [rerender, setRerender] = useState<boolean>();
  return (
    <>
      <CartProductCardWrapper>
        <CartProductCardD>
          <RemoveItemButton onClick={() => removeItemFromCart(product.id)}>
            <RemoveItemButtonSvg viewBox="0 0 320 512" focusable="false">
              <path
                fill="currentColor"
                d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
              ></path>
            </RemoveItemButtonSvg>
          </RemoveItemButton>
          <div className="flex-row d-flex justify-content-between">
            <div className="flex-column d-flex" style={{ flex: "1 1 0%" }}>
              <CartProductName>{product.title}</CartProductName>
              <CartProductDescription className="mb-0">
                Dry / 13-24 / Two Month
              </CartProductDescription>
              <CartProductDescription className="mb-0">
                One time purchase of Two month supply
              </CartProductDescription>

              <div
                className="flex-row d-flex justify-content-between"
                style={{ marginTop: "0.25rem" }}
              >
                <CartProductQuantityWrapper>
                  <CartQuantityButtons
                    onClick={() =>
                      reduceQuantity(product.id, setRerender, rerender)
                    }
                  >
                    -
                  </CartQuantityButtons>
                  <CartProductQuantity>
                    {getSingleCartItem(product.id).quantity}
                  </CartProductQuantity>
                  <CartQuantityButtons
                    onClick={() =>
                      incrementQuantity(product.id, setRerender, rerender)
                    }
                  >
                    +
                  </CartQuantityButtons>
                </CartProductQuantityWrapper>
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
                        <CartProductPriceSection>
                          {value}
                        </CartProductPriceSection>
                      </div>
                    )}
                  />
                }
                {/* <CartProductPriceSection>{product.price}</CartProductPriceSection> */}
              </div>
            </div>

            <CartProductImageWrapper>
              <CartProductImage src={product.image_url} alt={product.title} />
            </CartProductImageWrapper>
          </div>
        </CartProductCardD>
      </CartProductCardWrapper>
    </>
  );
}
