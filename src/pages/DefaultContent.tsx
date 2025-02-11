import { useEffect, useState } from "react"
import { PageTitle, Spacer } from "../utils"

/**
 * デフォルトのコンテンツ
 */
export function DefaultContent(): JSX.Element {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info(`[DefaultPage] count: [${count}]`)
  }, [count])

  return (
    <>
      <PageTitle>デフォルトのコンテンツ</PageTitle>
      <Spacer />

      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
      <p className="read-the-docs">
        &nbsp;
      </p>
    </>
  )
}
