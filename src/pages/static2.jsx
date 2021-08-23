export function getStaticProps() {
  // In production mode, the page will be serve static
  return {
    revalidate: 60,
    props: {
      title: "Static Page 2",
      number: Math.random(),
    },
  };
}

export default function Estatico2(props) {
  return (
    <div>
      <h1>Estatico #02</h1>
      {props.title}
      {props.number}
    </div>
  );
}
