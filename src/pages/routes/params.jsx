import { useRouter } from "next/router";
import Link from "next/link";

function Params() {
  const router = useRouter();

  const id = router.query.id;
  const name = router.query.name;

  return (
    <div>
      <h1>
        Routes Params: {id} e {name}
      </h1>
    </div>
  );
}
export default Params;
