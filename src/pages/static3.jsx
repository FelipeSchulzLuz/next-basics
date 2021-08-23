export async function getStaticProps() {
  // In production mode, the page will be serve static
  const resp = await fetch("http://localhost:3000/api/products");
  const products = await resp.json();

  return {
    revalidate: 60,  //** update every 60** seconds
    props: {
      title: "Static Page 3",
      number: Math.random(),
      products,
    },
  };
}

export default function Estatico3(props) {
  function renderProducts() {
    return props.products.map((product) => (<li key={product.id}>{product.name} tem preço de R${product.price}</li>));
  }

  return (
    <div>
      <h1>Estatico #03</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
