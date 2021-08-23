export async function getServerSideProps() {
  // In production mode, the page will be serve static
  const resp = await fetch("http://localhost:3000/api/products");
  const products = await resp.json();

  return {
    props: {
      title: "Dynamic Page 02",
      products,
    },
  };
}

export default function Estatico3(props) {
  function renderProducts() {
    return props.products.map((product) => (
      <li key={product.id}>
        ID: {product.id}, {product.name} tem preço de R${product.price}
      </li>
    ));
  }

  return (
    <div>
      <h1>Dynamic #02</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
