// only work with production, value of math.random not change

export function getStaticProps() {
  return {
    props: {
      number: Math.random(),
    },
  };
}

export default function PageStatic(props) {
  return (
    <div>
      <span>Aleatório: {props.number}</span>

    </div>
  );
}
