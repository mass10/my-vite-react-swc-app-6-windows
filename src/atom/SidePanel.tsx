import { PageContext } from "../lib/utils"

/**
 * サイドメニューのアイテム
 */
function SideMenuLinkItem(props: { href?: string, onClick?: (info: string) => void, children?: React.ReactNode }): JSX.Element {
    const styleOfAnchor = {
        color: "#222222",
        textDecoration: "none"
    }

    return (
        <li style={{ padding: "5px" }}>
            <a className="fixedWidth" href={props.href} style={styleOfAnchor}>{props.children}</a>
        </li>
    )
}

function LinkItems(props: { children: React.ReactNode }): JSX.Element {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

type Props = {
    pageContext: PageContext
    handleAnchor: (info: string) => void
}

/**
 * サイドバー
 */
export function SidePanel(props: Props): JSX.Element {
    // ・「SPA の描画」と、「ページ遷移」の2種類を確認中。
    return (
        <div className="sidebar" style={{ textAlign: "left", padding: "20px", minWidth: "400px", overflowY: "auto" }}>
            <LinkItems>
                <SideMenuLinkItem href="/">Home</SideMenuLinkItem>
                <SideMenuLinkItem onClick={() => props.handleAnchor("https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8")}>YouTube 動画の埋め込み</SideMenuLinkItem>
                <SideMenuLinkItem href="/embedded1">YouTube 動画の埋め込み(/embedded1)</SideMenuLinkItem>
                <SideMenuLinkItem onClick={() => props.handleAnchor("チャレンジ1")}>fetch チャレンジ 1</SideMenuLinkItem>
                <SideMenuLinkItem href="/floating-layout-example">フローティングなレイアウト</SideMenuLinkItem>
                <SideMenuLinkItem href="/grid-layout-example">グリッドなレイアウト</SideMenuLinkItem>
                <SideMenuLinkItem href="/large-canvas-1">大きなキャンバス</SideMenuLinkItem>
                <SideMenuLinkItem href="/scale-or-zoom">transform or zoom (1)</SideMenuLinkItem>
                <SideMenuLinkItem href="/zoom2">transform or zoom (2)</SideMenuLinkItem>
                <SideMenuLinkItem href="/iframe1">iframe (1)</SideMenuLinkItem>
                <SideMenuLinkItem href="/element-rect">element-rect (1)</SideMenuLinkItem>
                <SideMenuLinkItem href="/yoko-scroll-table">yoko scroll table (1)</SideMenuLinkItem>
            </LinkItems>
        </div>
    )
}
