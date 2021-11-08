import gql from "graphql-tag";

export const PRODUCTS_QUERY = gql`
query($currency:Currency){
    products{
      id
      title
      image_url
      price(currency:$currency)
      product_options{
        title
        prefix
        suffix
        options{
          id
          value
        }
      }
    }
  }
`;