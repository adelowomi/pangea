import styled, { css } from "styled-components";

export const NavWrapper = styled.div<{ fixed: boolean }>`
  height: 70px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1100;
  box-shadow: grey 0px 2px 3px -3px;
  position:${(props) => props.fixed ? 'fixed' : ''};
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const LogoWrapper = styled.div`
  display: inline-block;
  width: 163px;
  height: 44px;
  margin-right: 4rem;
`;

export const NavItemWrapper = styled.div`
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

export const LeftNavItemWrapper = styled.div`
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: -0.25rem;
`;

export const NavItem = styled.a`
  font-size: 14px;
  line-height: 17px;
  margin-right: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-transition: color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
  display: none;
  cursor: pointer;
  text-decoration: none;
  color: black;

  @media only screen and (min-width: 992px) {
    display: block;
  }

  //   @media only screen and (min-width: 768px){
  //     display: none;
  //   };
`;

export const NavItemStyle = css`
  font-size: 14px;
  line-height: 17px;
  margin-right: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-transition: color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
  display: none;
`;

export const CartImageAnchor = styled.a`
  webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0rem;
  text-decoration: none;
  color: black;
`;

export const CArtImage = styled.img`
  width: 25px;
  min-width: 25px;
  height: 21px;
`;

export const CartCounter = styled.p`
  font-family: FF Bau Regular, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  font-size: 0.6875rem;
  font-size: 0.8125rem;
  margin-left: 1px;
  margin-bottom: 1.75rem;

  @media screen and (min-width: 992px) {
    line-height: 1.5;
  }
`;

export const LanguageSelectWrapper = styled.div`
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  width: 84px;
  min-width: 84px;
  padding: 0rem;
  position: relative;
  top: initial;
  right: initial;
  left: initial;
  z-index: initial;
  margin-left: 1.5rem;
`;

export const LanguageSelect = styled.select`
  width: 100%;
  outline: 0;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  padding-top: 2px;
  padding-bottom: 1px;
  line-height: normal;
  color: currentColor;
  height: 24px;
  font-size: 0.6875rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 1 px solid #cdd1ce;
  border-radius: 0;
  webkit-appearance: none;
  background: transparent;
  border-color: #acafad;
  padding-right: 2rem;

  @media screen and (min-width: 992px) {
    height: 32px;
    font-size: 0.8125rem;
  }
`;

export const LanguageSelectIconWrapper = styled.div`
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


export const NavContentWrapper = styled.div`
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 64px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: 0rem;
  margin-right: 0rem;
  padding-top: 0.5rem;
  color: #000;
  border-bottom: 0;
  border-color: #292929;
  width: 100%;

  @media screen and (min-width: 992px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  } ;
`;
