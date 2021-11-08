import styled from "styled-components";

export const ProductButton = styled.button`
  display: flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  vertical-align: middle;
  outline: none;
  border: 0px;
  line-height: 1.2;
  padding-top: 2px;
  font-weight: 600;
  font-family: "FF Bau Regular", sans-serif;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 52px;
  background: rgb(75, 85, 72);
  color: rgb(252, 252, 249);
  width: 100%;
  max-width: 100%;
  white-space: normal;

  @media screen and (min-width: 992px) {
    max-width: 157 px;
  }
  @media screen and (min-width: 992px) {
    min-width: 190 px;
  }
`;

export const ProductImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 170px;
  flex: 1 1 0%;
`;

export const ProductName = styled.h2`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.7;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
