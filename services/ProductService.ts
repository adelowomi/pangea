import { createApolloClient } from "../utilities/Client";
import { PRODUCTS_QUERY } from "../utilities/Queries";
import { Currency, GqlResponse, Product } from "./../utilities/types";
const client = createApolloClient();

export class ProductService {
  public getAllProducts = async (currency?:string): Promise<GqlResponse<Product[]>> => {
    console.log({currency});
    
    try {
      const { data } = await client.query({
        query: PRODUCTS_QUERY,
        variables: { currency: currency ? currency : 'NGN' },
      });
      if (data.products) {
        return Promise.resolve<GqlResponse<Product[]>>({
          data: data.products,
          status: true,
          error: undefined,
        });
      }
      return Promise.reject<GqlResponse<Product[]>>({
        error: data,
        data: null,
        status: false,
      });
    } catch (error) {
      return Promise.reject<GqlResponse<Product[]>>({
        error,
        data: null,
        status: false,
      });
    }
  };
}
