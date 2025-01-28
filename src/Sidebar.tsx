import { PageContext } from "./utils"

type Props = {
    pageContext: PageContext
    handleAnchor: (info: string) => void
}

/**
 * サイドバー
 */
export function Sidebar(props: Props): JSX.Element {
    return (
        <div className="sidebar" style={{ textAlign: "left", border: "1px solid black", padding: "20px", minWidth: "400px", height: "100%", overflowY: "auto" }}>
            <h2>サイドバー</h2>
            <ul>
                <li><a href="#" onClick={() => props.handleAnchor("")}>Home</a></li>
                <li><a href="#" onClick={() => props.handleAnchor("https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8")}>奥入瀬の渓流</a></li>
            </ul>
        </div>
    )
}
