import styled from "styled-components";

export const CartDrawer = styled.div<{ open: boolean }>`
  height: 100%;
  background: rgb(242, 242, 238);
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  z-index: 1400;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-out;
`;

export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(213, 216, 214, 0.8);
  z-index: 1300;
  top: 0;
  right: 0;
`;

export const CartContentWrapper = styled.div`
  flex-direction: column;
  display: flex;
  padding: 1rem;
  min-height: 345px;
  max-width: 100%;
  max-height: 100%;
  flex: 1 1 0%;
  margin: 0.25rem 0.4rem;

  @media screen and (min-width: 768px) {
    margin: 0.5625rem 0.875rem;
    height: 100%;
  }
`;

export const CartCloseIconWrapper = styled.div`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  border-radius: 9999px;
  border: 1px solid rgb(198, 204, 199);
  width: 1.5rem;
  height: 1.5rem;
`;

export const CurrencySelect = styled.select`
  width: 100%;
  outline: 0px;
  position: relative;
  appearance: none;
  transition: all 0.2s ease 0s;
  padding: 2px 1.5rem 1px;
  line-height: normal;
  color: currentcolor;
  height: 38px;
  background: transparent;
  border-radius: 0px;
  border: 0px;
  font-size: 0.81rem;

  @media screen and (min-width: 992px) {
    height: 52px;
  }
`;

export const CurrencySelectIconWrapper = styled.div`
  color: currentColor;
  font-size: 1.25rem;
  position: absolute;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: 1.5rem;
  height: 100%;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  right: 0.5rem;
  pointer-events: none;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const ApplyCouponWrapper = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #6e7b70;
  border-bottom: 1px solid #6e7b70;
  margin-bottom: 1.2rem;
`;

export const CheckoutWrapper = styled.div`
  margin-top: 1.25rem;
`;

export const SubtotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;
export const SubtotalTitle = styled.h5`
  letter-spacing: 0.5px;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0;
`;
export const SubtotalAmount = styled.p`
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 600;
  margin-bottom: 0;
`;
export const CheckoutButton = styled.button`
  border: none;
  line-height: 1.2;
  padding-top: 2px;
  font-weight: 600;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 52px;
  background: rgb(75, 85, 72);
  color: rgb(252, 252, 249);
  width: 100%;
  margin-top: 0.25rem;
  text-transform: uppercase;
`;

export const MultipleCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  margin-bottom: 0.25rem;
  overflow-y: auto;
`;
