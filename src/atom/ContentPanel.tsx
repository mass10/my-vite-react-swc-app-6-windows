import { UrlTestForm } from "../pages/UrlTestForm";
import { DefaultContent } from "../pages/DefaultContent";
import { FloatingLayoutPage } from "../pages/FloatingLayoutPage";
import { GridLayoutPage } from "../pages/GridLayoutPage";
import { Utils } from "../lib/utils";
import { YoutubePage } from "../pages/YoutubePage";
import { LargeCanvasPage1 } from "../pages/LargeCanvas1";
import { TransformOrZoomPage1 } from "../pages/ScaleOrZoomPage1";


type DefaultPageProps = {
  menuitem: string
}

function ContentCore(props: { menuitem: string }): JSX.Element {
  // コンテンツのルーティング
  if (0 <= props.menuitem.indexOf("https://www.youtube.com/")) {
    return <YoutubePage url={props.menuitem} />
  }
  else if (props.menuitem === "/embedded1") {
    return <YoutubePage url={"https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8"} />
  }
  else if (0 <= props.menuitem.indexOf("チャレンジ1")) {
    return <UrlTestForm update={Utils.generateRandomToken()} />
  }
  else if (props.menuitem === "フローティングなレイアウト") {
    return <FloatingLayoutPage />
  }
  else if (props.menuitem === "grid layout example") {
    return <GridLayoutPage />
  }
  else if (props.menuitem === "/large-canvas-1") {
    return <LargeCanvasPage1 />
  }
  else if (props.menuitem === "/scale-or-zoom") {
    return <TransformOrZoomPage1 />
  }
  else if (window.location.pathname === "/embedded1") {
    return <YoutubePage url={"https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8"} />
  }
  else if (window.location.pathname === "/floating-layout-example") {
    return <FloatingLayoutPage />
  }
  else if (window.location.pathname === "/grid-layout-example") {
    return <GridLayoutPage />
  }
  else if (window.location.pathname === "/large-canvas-1") {
    return <LargeCanvasPage1 />
  }
  else if (window.location.pathname === "/scale-or-zoom") {
    return <TransformOrZoomPage1 />
  }
  else if (props.menuitem) {
    console.warn(`Unknown menu item: ${props.menuitem}`)
  }

  return <DefaultContent />
}

/**
 * ページを構成する基本コンポーネント
 */
export function ContentPanel(props: DefaultPageProps): JSX.Element {
  return (
    <div className="content" style={{ padding: "20px", width: "100%" }}>
      <ContentCore menuitem={props.menuitem} />
    </div>
  )
}
