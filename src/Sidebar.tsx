import { PageContext } from "./utils"

type Props = {
    pageContext: PageContext
    handleAnchor: (info: string) => void
}

/**
 * サイドバー
 */
export function Sidebar(props: Props): JSX.Element {
    const styleOfAnchor = {
        color: "#222222",
        textDecoration: "none"
    }

    return (
        <div className="sidebar" style={{ textAlign: "left", border: "1px solid black", padding: "20px", minWidth: "400px", height: "100%", overflowY: "auto" }}>
            <ul>
                <li><a href="/" style={styleOfAnchor}>Home</a></li>
                <li><a href="#" style={styleOfAnchor} onClick={() => props.handleAnchor("https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8")}>奥入瀬の渓流</a></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
                <li><br /></li>
            </ul>
        </div>
    )
}
