import { ComponentPropsWithoutRef, CSSProperties, forwardRef, Ref, useEffect, useRef, useState } from "react"

interface MyRectangle {
  x: number,
  y: number,
  width: number,
  height: number,
}

function xxx(props: MyRectangle): void {
  console.log(props);
}

type RectangleProperties = {
  x: MyRectangle["x"]
  y: MyRectangle["y"]
  width: MyRectangle["width"]
  height: MyRectangle["height"]
}

/**
 * 何らかの UI コンポーネント
 *
 * @param 位置、およびサイズ
 */
// @ts-ignore
function UiComponent2(props: RectangleProperties): JSX.Element {
  console.log(props);
  return <div></div>
}

type UiComponent3Properties = RectangleProperties & {
  color?: string
}

/**
 * 何らかの UI コンポーネント
 *
 * @param 位置、およびサイズ、拡張プロパティ
 */
// @ts-ignore
function UiComponent3({ color = "#ffffff", ...props }: UiComponent3Properties): JSX.Element {
  xxx(props)
  const style: CSSProperties = {
    position: "absolute",
    left: props.x,
    top: props.y,
    width: props.width,
    height: props.height,
    backgroundColor: color,
  }
  return <div style={style}></div>
}

// @ts-ignore
function UiComponent4(props: ComponentPropsWithoutRef<"div">): JSX.Element {
  return <div></div>
}

type Props = {

}

/**
 * フルスクリーン UI コンポーネント
 */
function MyComponent1({ }: Props): JSX.Element {
  return (
    <>
      <h1>MyComponent1</h1>
    </>
  )
}

type ChildProps = {
  field1?: string
}

// @ts-ignore
function MyChild1(props: ChildProps, ref: Ref<HTMLDivElement>): JSX.Element {
  return (
    <div>
      MyChild1
    </div>
  )
}

const ChildWrapper = forwardRef<HTMLDivElement, ChildProps>(MyChild1);

function PageFooter(): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div style={{ border: "1px solid black", backgroundColor: "#202020", color: "#ffffff", padding: "8px", width: "100%" }} ref={parentRef}>
      footer
      <ChildWrapper ref={parentRef} />
    </div>
  )
}

/**
 * ページを構成する基本コンポーネント
 */
export function DefaultPage(): JSX.Element {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info(`[App] count: [${count}]`)
  }, [count])

  // ランダムな数値によって、コンテンツを変化させています。
  const randomValue = Math.random() * 100

  useEffect(() => {
    console.info(`[App] randomValue: [${randomValue}]`)
  }, [randomValue])

  if (90 <= randomValue) {
    return (
      <>
        <h2>90 以上のページ</h2>
        <MyComponent1 />
      </>
    )
  }

  return (
    <div style={{ padding: "0", width: "100%", border: "0px solid black" }}>
      <h1>Vite + React のコンテンツ</h1>
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
      <PageFooter />
    </div>
  )
}
