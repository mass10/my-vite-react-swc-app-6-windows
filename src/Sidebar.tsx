import { PageContext } from "./utils"

type Props = {
    pageContext: PageContext
    handleAnchor: (info: string) => void
}

/**
 * サイドバー
 */
export function SidebarPane(props: Props): JSX.Element {
    const styleOfAnchor = {
        color: "#222222",
        textDecoration: "none"
    }

    return (
        <div className="sidebar" style={{ textAlign: "left", border: "1px solid black", padding: "20px", minWidth: "400px", height: "100%", overflowY: "auto" }}>
            <ul>
                <li style={{ padding: "5px" }}><a href="/" style={styleOfAnchor}>Home</a></li>
                <li style={{ padding: "5px" }}><a href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8")}>奥入瀬の渓流</a></li>
                <li style={{ padding: "5px" }}><a href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("チャレンジ1")}>fetch チャレンジ 1</a></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
                <li style={{ padding: "5px" }}><br /></li>
            </ul>
        </div>
    )
}
