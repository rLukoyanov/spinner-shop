const API = "http://localhost:8080";

export const getProducts = () =>
  fetch(`${API}/products`).then((res) => res.json());

export const getProductsById = (id) =>
  fetch(`${API}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
