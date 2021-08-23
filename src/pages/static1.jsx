export function getStaticProps() {
  // In production mode, the page will be serve static
  return { props: { title: "Static Page", number: Math.random() } };
}

export default function Estatico1(props) {
  return (
    <div>
      <h1>Estatico #01</h1>
      {props.title}
      {props.number}
    </div>
  );
}
