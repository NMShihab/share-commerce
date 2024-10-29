export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/product");
  if (!response.ok) {
    return { isSuccess: false, data: null };
  }
  const data = await response.json();
  return { isSuccess: true, data };
};
