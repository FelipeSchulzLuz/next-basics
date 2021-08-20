import { route } from "next/dist/server/router";
import Link from "next/link";
import router, { useRouter } from "next/router";


function navigateWithParams(path, query) {
  router.push({
    pathname: path,
    query: {
      id: query.id,
      name: query.name
    }
  })
}



function Routes() {
  return (
    <div>
      <h1>Routes Index</h1>
      <ul>
        <Link href="/routes/params?id=12&name=Ana">
          <li>QueryParams</li>
        </Link>
        <Link href="/routes/123/search">
          <li>Search</li>
        </Link>
        <Link href="/routes/123/Daniel">
          <li>Daniel</li>
        </Link>
        <Link href="/question">
          <li>Question</li>
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItens: "flex-start",
        }}
      >
        <button onClick={() => router.push("/routes/params?id=12&name=Ana")}>
          Query Params
        </button>
        <button onClick={() => router.push("/routes/123/search")}>
          Search
        </button>
        <button onClick={() => router.push("/routes/123/Daniel")}>
          Daniel
        </button>
        <button onClick={() => router.push("/question")}>
          Question
        </button>
      </div>
    </div>
  );
}

export default Routes;
