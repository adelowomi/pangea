import styled from "styled-components";

export const SubHeadingTextWrapper = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 4rem;
  padding-bottom: 14px;

  @media screen and (min-width: 992px) {
    padding-top: 5rem;
    padding-bottom: 4rem;
  }
  @media screen and (min-width: 992px) {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
`;

export const FilterSelect = styled.select`
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
  height: 50px;
  font-size: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background: #fff;
  border: 1px solid #cdd1ce;
  border-radius: 0;
  webkit-appearance: none;
  padding-right: 2rem;
`;

export const FilterSelectIconWrapper = styled.div`
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
