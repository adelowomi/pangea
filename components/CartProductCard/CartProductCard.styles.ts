import styled from "styled-components";

export const CartProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // flex: 1 1 0%;
  margin-bottom: 0.25rem;
  overflow-y: auto;
`;

export const CartProductCardD = styled.div`
  flex-direction: column;
  display: flex;
  /* flex: 1 1 0%; */
  background: rgb(255, 255, 255);
  padding: 0.75rem;
  color: rgb(30, 45, 43);
  position: relative;
`;

export const RemoveItemButton = styled.button`
  display: inline-block;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: auto;
  border: 0px;
  line-height: inherit;
  font-weight: inherit;
  font-family: inherit;
  min-height: auto;
  min-width: auto;
  height: auto;
  padding: 0rem;
  background: none;
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
`;

export const RemoveItemButtonSvg = styled.svg`
  vertical-align: middle;
  display: inline-block;
  line-height: 1em;
  color: currentcolor;
  flex-shrink: 0;
  width: 0.8em;
  height: 0.8em;
`;

export const CartProductName = styled.p`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.9375rem;
  margin-bottom: 0;
`;

export const CartProductDescription = styled.p`
  font-family: sans-serif;
  font-size: 0.6875rem;
  line-height: 1.03rem;
  opacity: 0.8;
  margin-top: 0.25rem;
`;

export const CartProductImageWrapper = styled.div`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  width: 80px;
  margin-left: 0.5rem;
`

export const CartProductImage = styled.img`
  width: 100%;
  max-width: 60px;
`

export const CartProductPriceSection = styled.div`
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: flex;
  margin-top: 0.5rem;
`;

export const CartProductQuantityWrapper = styled.div`
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  display: flex;
  border: 1px solid #e2e6e3;
  width: 72px;
`;
export const CartProductQuantity = styled.p`
  margin-bottom: 0;
`;

export const CartQuantityButtons = styled.button`
  border: none;
  background: none;
  position: relative;
  width: 25px;
  height: 25px;
  
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

