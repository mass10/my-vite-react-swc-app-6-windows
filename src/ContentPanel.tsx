import { useEffect } from "react"
import { UrlTestForm } from "./UrlTestForm";
import { DefaultContent } from "./DefaultContent";
import { FloatingLayoutPage } from "./FloatingLayoutPage";
import { GridLayoutPage } from "./GridLayoutPage";
import { Utils } from "./utils";

type YoutubePageProps = {
  url: string
}

function YoutubePage(props: YoutubePageProps): JSX.Element {
  useEffect(() => {
    console.info(`[YoutubePage] url: [${props.url}]`)
  }, [props.url])

  return (
    <div className="content" style={{ padding: "20px", width: "100%" }}>
      {/* <iframe src={props.url} width="100%" height="500px" /> */}
      <iframe width="1008" height="567" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

type DefaultPageProps = {
  menuitem: string
  random: string
}

/**
 * ページを構成する基本コンポーネント
 */
export function ContentPanel(props: DefaultPageProps): JSX.Element {
  // コンテンツのルーティング
  if (0 <= props.menuitem.indexOf("https://www.youtube.com/")) {
    return <YoutubePage url={props.menuitem} />
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
  else {
    return <DefaultContent />
  }
}
