import { PageContext } from "../lib/utils";

/**
 * サイドメニューのアイテム
 */
function SideMenuItem(props: {
	href?: string;
	onClick?: (info: string) => void;
	children?: React.ReactNode;
}): JSX.Element {
	const styleOfAnchor = {
		color: "#222222",
		textDecoration: "none",
	};

	return (
		<li style={{ padding: "5px" }}>
			<a className="fixedWidth" href={props.href} style={styleOfAnchor}>
				{props.children}
			</a>
		</li>
	);
}

/**
 * 再度メニューのアイテムをたばねるもの
 *
 * @param props 
 * @returns 
 */
function SideMenuItemsList(props: { children: React.ReactNode }): JSX.Element {
	return <ul>{props.children}</ul>;
}

type SidePanelProps = {
	pageContext: PageContext;
	handleAnchor: (info: string) => void;
};

/**
 * サイドバー
 */
export function SidePanel(props: SidePanelProps): JSX.Element {
	// ・「SPA の描画」と、「ページ遷移」の2種類を確認中。
	return (
		<div
			className="sidebar"
			style={{
				textAlign: "left",
				padding: "20px",
				minWidth: "400px",
				overflowY: "auto",
			}}
		>
			<SideMenuItemsList>
				<SideMenuItem href="/">Home</SideMenuItem>
				<SideMenuItem onClick={() => props.handleAnchor("https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8")}>
					YouTube 動画の埋め込み
				</SideMenuItem>
				<SideMenuItem href="/embedded1">YouTube 動画の埋め込み(/embedded1)</SideMenuItem>
				<SideMenuItem onClick={() => props.handleAnchor("チャレンジ1")}>fetch チャレンジ 1</SideMenuItem>
				<SideMenuItem href="/floating-layout-example/">フローティングなレイアウト</SideMenuItem>
				<SideMenuItem href="/grid-layout-example/">グリッドなレイアウト</SideMenuItem>
				<SideMenuItem href="/large-canvas-1/">大きなキャンバス</SideMenuItem>
				<SideMenuItem href="/scale-or-zoom/">transform or zoom (1)</SideMenuItem>
				<SideMenuItem href="/zoom2/">transform or zoom (2)</SideMenuItem>
				<SideMenuItem href="/iframe1/">iframe (1)</SideMenuItem>
				<SideMenuItem href="/iframe2/">iframe (2)</SideMenuItem>
				<SideMenuItem href="/iframe3/">iframe (3)</SideMenuItem>
				<SideMenuItem href="/popup/">popup (1)</SideMenuItem>
				<SideMenuItem href="/element-rect/">element-rect (1)</SideMenuItem>
				<SideMenuItem href="/yoko-scroll-table/">yoko scroll table (1)</SideMenuItem>
				<SideMenuItem href="/font-awesome/">Font Awesome</SideMenuItem>
				<SideMenuItem href="/canvas-1/">Canvas のテスト1</SideMenuItem>
				<SideMenuItem href="/shadow-dom-1/">Shadow DOM 要素(宣言的な)</SideMenuItem>
				<SideMenuItem href="/shadow-dom-2/">Shadow DOM 要素(ダイナミックな)</SideMenuItem>
				<SideMenuItem href="/custom-elements/">カスタム要素</SideMenuItem>
				<SideMenuItem href="/document-fragment/">document fragment の実験</SideMenuItem>
				<SideMenuItem href="/images0/">画像 x 10 (同一 URL)</SideMenuItem>
				<SideMenuItem href="/images1/">画像 x 100 (同一 URL)</SideMenuItem>
				<SideMenuItem href="/images2/">画像 x 100 (異なる URL)</SideMenuItem>
			</SideMenuItemsList>
		</div>
	);
}
