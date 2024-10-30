import ProductContainer from "./components/ProductContainer";
import { Suspense } from "react";
import { fetchProducts } from "./services/fetchProduct";
import ErrorMessage from "./components/Shared/ErrorMessage";
export default async function Home() {
  const { isSuccess, data } = await fetchProducts();

  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        {isSuccess && (
          <div className="flex items-center justify-center">
            <ProductContainer resData={data} />
          </div>
        )}
        {!isSuccess && (
          <div className="w-screen h-screen flex items-center justify-center">
            <ErrorMessage
              title="Connection Error"
              message="Something went wrong"
            />
          </div>
        )}
      </Suspense>
    </div>
  );
}
