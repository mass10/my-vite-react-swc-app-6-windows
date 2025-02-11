import { PageContext } from "./utils"

type Props = {
    pageContext: PageContext
    handleAnchor: (info: string) => void
}

/**
 * サイドバー
 */
export function SidePanel(props: Props): JSX.Element {
    const styleOfAnchor = {
        color: "#222222",
        textDecoration: "none"
    }

    return (
        <div className="sidebar" style={{ textAlign: "left", padding: "20px", minWidth: "400px", overflowY: "auto" }}>
            <ul>
                <li style={{ padding: "5px" }}><a className="fixedWidth" href="/" style={styleOfAnchor}>Home</a></li>
                <li style={{ padding: "5px" }}><a className="fixedWidth" href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8")}>奥入瀬の渓流</a></li>
                <li style={{ padding: "5px" }}><a className="fixedWidth" href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("チャレンジ1")}>fetch チャレンジ 1</a></li>
                <li style={{ padding: "5px" }}><a className="fixedWidth" href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("フローティングなレイアウト")}>フローティングなレイアウト</a></li>
                <li style={{ padding: "5px" }}><a className="fixedWidth" href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("grid layout example")}>グリッドなレイアウト</a></li>
            </ul>
        </div>
    )
}
