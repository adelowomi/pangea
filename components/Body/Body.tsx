import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../../utilities/types";
import ProductCard from "../ProductCard/ProductCard";
import {
  FilterSelect,
  FilterSelectIconWrapper,
  SubHeadingTextWrapper,
} from "./Body.styles";

export default function Body({ products,currency }: { products: Product[],currency: string }) {
  return (
    <>
      <SubHeadingTextWrapper>
        <Row className="w-100 mx-auto container">
          <Col md={12} lg={6}>
            <div className="pr-5 pl-0">
              <h1 className="">All Products</h1>
              <p className="">A 360° look at Lumin</p>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="w-100 position-relative h-fit">
              <FilterSelect>
                <option  value="">
                  Filter by
                </option>
                <option value="all-products">All Products</option>
                <option value="new-products">New Products</option>
                <option value="sets">Sets</option>
                <option value="skincare">Skincare</option>
                <option value="hair-and-body">Hair &amp; Body Care</option>
                <option value="accessories">Accessories</option>
              </FilterSelect>
              <FilterSelectIconWrapper>
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
              </FilterSelectIconWrapper>
            </div>
          </Col>
        </Row>
      </SubHeadingTextWrapper>
      <div className="catalogue">
        <Container>
          <Row>
            {products && products.map((product, index) => {
              return (
                <Col key={index} lg={4} md={6} className="p-5">
                  <ProductCard product={product} currency={currency}/>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
