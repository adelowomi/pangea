import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";
import { CartItem, Product } from "../../utilities/types";
import CartProductCard from "../CartProductCard/CartProductCard";
import { CurrencyList } from "../Navigation/Navigation";
import { getCartItems } from "../ProductCard/ProductCard.methods";
import * as CurrencyFormat from "react-currency-format";
import {
  CartContentWrapper,
  CartDrawer,
  CurrencySelect,
  CurrencySelectIconWrapper,
  ApplyCouponWrapper,
  CheckoutWrapper,
  SubtotalWrap,
  SubtotalTitle,
  SubtotalAmount,
  CheckoutButton,
  MultipleCardsWrapper,
} from "./Cart.styles";

export default function Cart({
  open,
  close,
  products,
  currentCurrency,
}: {
  open: boolean;
  close: any;
  products: Product[];
  currentCurrency: string;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>();
  const [currency, setCurrency] = useState(currentCurrency);
  const [total, setTotal] = useState<number>(0);
  const [productsState, setProductsState] = useState<Product[]>(products);
  const router = useRouter();

  const reloadProducts = async (currency?: any) => {
    setCurrency(currency);
    await router.push({
      query: {
        currency: currency,
        cart: true,
      },
    });
    router.reload();
  };

  const calculateTotal = (items: CartItem[]) => {
    let total = 0;
    items &&
      items.map((item, index) => {
        const product = products.filter(
          (product) => item.productId == product.id
        )[0];
        const value = (product.price as unknown as number) * item.quantity;
        total += value;
        return;
      });
    setTotal(total);
  };

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    calculateTotal(items);
  }, []);

  return (
    <CartDrawer open={open}>
      <CartContentWrapper>
        <div>
          <h5 className="text-center">My Shopping Cart</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="arrow-button" onClick={() => close(false)}>
            <div className="arrow-wrapper">
              <svg viewBox="0 0 256 512" focusable="false" className=" arrow">
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                ></path>
              </svg>
            </div>
          </button>

          <div className="position-relative w-auto ">
            <CurrencySelect
              onChange={async (e) => await reloadProducts(e.target.value)}
            >
              {CurrencyList.map((cur, index) => {
                return (
                  <option
                    key={index}
                    value={cur.value}
                    selected={cur.value == currency ? true : false}
                  >
                    {cur.value}
                  </option>
                );
              })}
            </CurrencySelect>
            <CurrencySelectIconWrapper>
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                focusable="false"
                aria-hidden="true"
                style={{ width: "1em", height: "1em", color: "currentcolor" }}
              >
                <path
                  fill="currentColor"
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                ></path>
              </svg>
            </CurrencySelectIconWrapper>
          </div>
        </div>
        <MultipleCardsWrapper>
          {cartItems && cartItems?.length > 0
            ? cartItems.map((item, index) => {
                const product = products.filter(
                  (product) => item.productId == product.id
                )[0];
                return <CartProductCard key={index} product={product} currency={currency}/>;
              })
            : null}
        </MultipleCardsWrapper>

        <ApplyCouponWrapper>
          <div className="flex-row d-flex justify-content-between align-items-center">
            <p
              className="mb-0"
              style={{
                fontSize: "0.6875rem",
                textTransform: "uppercase",
                lineHeight: "0.875rem",
              }}
            >
              APPLY A DISCOUNT CODE
            </p>
            <button className="arrow-button">
              <div className="arrow-wrapper">
                <svg viewBox="0 0 256 512" focusable="false" className=" arrow">
                  <path
                    fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </ApplyCouponWrapper>

        <CheckoutWrapper>
          <SubtotalWrap>
            <SubtotalTitle>Subtotal</SubtotalTitle>
            {
              // @ts-ignore}
              <CurrencyFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={`${currency} `}
                decimalScale={2}
                decimalSeparator={"."}
                suffix={`.00`}
                renderText={(value: string) => (
                  <div>
                    <SubtotalAmount>{value}</SubtotalAmount>
                  </div>
                )}
              />
            }
            {/* <SubtotalAmount>{`${currency} ${total}`}</SubtotalAmount> */}
          </SubtotalWrap>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </CheckoutWrapper>
      </CartContentWrapper>
    </CartDrawer>
  );
}
