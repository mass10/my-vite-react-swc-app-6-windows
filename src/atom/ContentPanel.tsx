import { UrlTestForm } from "../pages/UrlTestForm";
import { DefaultContent } from "../pages/DefaultContent";
import { FloatingLayoutPage } from "../pages/FloatingLayoutPage";
import { GridLayoutPage } from "../pages/GridLayoutPage";
import { Utils } from "../lib/utils";
import { YoutubePage } from "../pages/YoutubePage";
import { LargeCanvasPage1 } from "../pages/LargeCanvas1";
import { TransformOrZoomPage1 } from "../pages/ScaleOrZoomPage1";
import { Zoom2 } from "../pages/Zoom2";
import { Iframe1 } from "../pages/Iframe1";
import { Iframe2 } from "../pages/Iframe2";
import { Iframe3 } from "../pages/Iframe3";
import { ElementRectPage } from "../pages/ElementRectPage";
import { YokoScrollTablePage } from "../pages/YokoScrollTablePage";
import { FontAwesome } from "../pages/FontAwesome";
import { PopupExample } from "../pages/PopupExample";
import { Canvas1 } from "../pages/Canvas1";
import { CustomElements } from "../pages/CustomElements";
import { ShadowDomPage1 } from "../pages/ShadowDomPage1";
import { ShadowDomPage2 } from "../pages/ShadowDomPage2";
import { DocumentFragmentExamplePage } from "../pages/DocumentFragmentExamplePage";

type DefaultPageProps = {
	menuitem: string;
};

/**
 * コンテンツの切り替え
 *
 * @param props コンポーネントのプロパティ
 * @returns JSX.Element
 */
function ContentSwitch(props: { menuitem: string }): JSX.Element {
	// コンテンツのルーティング
	if (0 <= props.menuitem.indexOf("https://www.youtube.com/")) {
		return <YoutubePage url={props.menuitem} />;
	} else if (props.menuitem === "/embedded1") {
		return <YoutubePage url={"https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8"} />;
	} else if (0 <= props.menuitem.indexOf("チャレンジ1")) {
		return <UrlTestForm update={Utils.generateRandomToken()} />;
	} else if (props.menuitem === "フローティングなレイアウト") {
		return <FloatingLayoutPage />;
	} else if (props.menuitem === "grid layout example") {
		return <GridLayoutPage />;
	} else if (props.menuitem === "/large-canvas-1/") {
		return <LargeCanvasPage1 />;
	} else if (props.menuitem === "/scale-or-zoom/") {
		return <TransformOrZoomPage1 />;
	} else if (window.location.pathname === "/embedded1/") {
		return <YoutubePage url={"https://www.youtube.com/embed/9TsJMHELXzs?si=wozbKk6IggacAGv8"} />;
	} else if (window.location.pathname === "/floating-layout-example/") {
		return <FloatingLayoutPage />;
	} else if (window.location.pathname === "/grid-layout-example/") {
		return <GridLayoutPage />;
	} else if (window.location.pathname === "/large-canvas-1/") {
		return <LargeCanvasPage1 />;
	} else if (window.location.pathname === "/scale-or-zoom/") {
		return <TransformOrZoomPage1 />;
	} else if (window.location.pathname === "/zoom2/") {
		return <Zoom2 />;
	} else if (window.location.pathname === "/iframe1/") {
		return <Iframe1 />;
	} else if (window.location.pathname === "/iframe2/") {
		return <Iframe2 />;
	} else if (window.location.pathname === "/iframe3/") {
		return <Iframe3 />;
	} else if (window.location.pathname === "/popup/") {
		return <PopupExample />;
	} else if (window.location.pathname === "/element-rect/") {
		return <ElementRectPage />;
	} else if (window.location.pathname === "/yoko-scroll-table/") {
		return <YokoScrollTablePage />;
	} else if (window.location.pathname === "/font-awesome/") {
		return <FontAwesome />;
	} else if (window.location.pathname === "/canvas-1/") {
		// Canvas のサンプル
		return <Canvas1 />;
	} else if (window.location.pathname === "/shadow-dom-1/") {
		// 宣言的な Shadow DOM
		return <ShadowDomPage1 />;
	} else if (window.location.pathname === "/shadow-dom-2/") {
		// ダイナミックな Shadow DOM
		return <ShadowDomPage2 />;
	} else if (window.location.pathname === "/custom-elements/") {
		return <CustomElements />;
	} else if (window.location.pathname === "/document-fragment/") {
		return <DocumentFragmentExamplePage />;
	} else if (props.menuitem) {
		console.warn(`Unknown menu item: ${props.menuitem}`);
	}

	return <DefaultContent />;
}

/**
 * ページを構成する基本コンポーネント
 */
export function ContentPanel(props: DefaultPageProps): JSX.Element {
	return (
		<div className="content" style={{ padding: "20px", width: "calc(100% - 480px)" }}>
			<ContentSwitch menuitem={props.menuitem} />
		</div>
	);
}
