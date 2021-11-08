import { CartItem } from "../../utilities/types";
import Router from "next/router";

export const getCartItems = (): CartItem[] => {
  const existingCartItems = localStorage.getItem("cart");
  const items = (existingCartItems &&
    JSON.parse(existingCartItems)) as unknown as CartItem[];
  return items;
};

export const getSingleCartItem = (productId: number): CartItem => {
  const items = getCartItems();
  return items.filter((item) => item.productId === productId)[0];
};

export const addItemToCart = (productId: number) => {
  const items = getCartItems();

  const existingItem =
    items && items.filter((item) => item.productId == productId);

  if (existingItem && existingItem.length > 0)
    return incrementQuantity(productId);

  return addNewItemToCart(items, productId);
};

export const addNewItemToCart = async(
  items: CartItem[],
  productId: number
) => {
  const newCartItem = items
    ? [...items, { productId: productId, quantity: 1 }]
    : [{ productId: productId, quantity: 1 }];
  localStorage.setItem("cart", JSON.stringify(newCartItem));
  await Router.push({query:{cart: true,currency:Router.query.currency}});
  Router.reload();
};

export const removeItemFromCart = (productId: number): void => {
  const items = getCartItems();
  const newCartItems = items.filter((item) => item.productId != productId);
  localStorage.setItem("cart", JSON.stringify(newCartItems));
  Router.push({query:{cart: true,currency:Router.query.currency}});
  Router.reload();
};

export const incrementQuantity = (
  productId: number,
  setRerender?: any,
  rerender?: boolean
): void => {
  const items = getCartItems();
  const modifiedItems = items.map((item, index) => {
    item.productId == productId ? (item.quantity = item.quantity + 1) : null;
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(modifiedItems));
  setRerender && setRerender(!rerender);
  Router.push({query:{cart: true,currency:Router.query.currency}});
  Router.reload();
  return;
};

export const reduceQuantity = (
  productId: number,
  setRerender?: any,
  rerender?: boolean
): void => {
  const items = getCartItems();
  const thisItem = getSingleCartItem(productId);
  if (thisItem.quantity == 1) {
    removeItemFromCart(productId);
    return;
  }
  const modifiedItems = items.map((item, index) => {
    item.productId == productId ? (item.quantity = item.quantity - 1) : null;
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(modifiedItems));
  setRerender && setRerender(!rerender);
  return;
};

export const countCartItems = (): number => {
  if (typeof window !== "undefined") {
    return getCartItems()?.length ?? 0;
  }
  return 0;
};
