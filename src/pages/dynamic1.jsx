export function getServerSideProps() {
  console.log("[Server] generating components to component...");
  return {
    props: { number: Math.random() },
  };
}

export default function Dynamic1(props) {
  return (
    <div>
      <h1>Dynamic #01</h1>
      <h2>{props.number}</h2>
    </div>
  );
}
