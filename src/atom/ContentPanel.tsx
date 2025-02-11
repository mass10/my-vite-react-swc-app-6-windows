import { useEffect } from "react"
import { UrlTestForm } from "../pages/UrlTestForm";
import { DefaultContent } from "../pages/DefaultContent";
import { FloatingLayoutPage } from "../pages/FloatingLayoutPage";
import { GridLayoutPage } from "../pages/GridLayoutPage";
import { Utils } from "../lib/utils";
import { YoutubePage } from "../pages/YoutubePage";


type DefaultPageProps = {
  menuitem: string
}

/**
 * ページを構成する基本コンポーネント
 */
export function ContentPanel(props: DefaultPageProps): JSX.Element {
  // コンテンツのルーティング
  if (0 <= props.menuitem.indexOf("https://www.youtube.com/")) {
    return (
      <div className="content" style={{ padding: "20px", width: "100%" }}>
        <YoutubePage url={props.menuitem} />
      </div>
    )
  }
  else if (0 <= props.menuitem.indexOf("チャレンジ1")) {
    return (
      <div className="content" style={{ padding: "20px", width: "100%" }}>
        <UrlTestForm update={Utils.generateRandomToken()} />
      </div>
    )
  }
  else if (props.menuitem === "フローティングなレイアウト") {
    return (
      <div className="content" style={{ padding: "20px", width: "100%" }}>
        <FloatingLayoutPage />
      </div>
    )
  }
  else if (props.menuitem === "grid layout example") {
    return (
      <div className="content" style={{ padding: "20px", width: "100%" }}>
        <GridLayoutPage />
      </div>
    )
  }
  else {
    return (
      <div className="content" style={{ padding: "20px", width: "100%" }}>
        <DefaultContent />
      </div>
    )
  }
}
