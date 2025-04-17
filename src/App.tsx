import { useEffect, useState } from "react";
import "./App.css";
import { ContentPanel } from "./atom/ContentPanel";
import { HeaderPanel } from "./atom/HeaderPanel";
import { SidePanel } from "./atom/SidePanel";
import { FooterPanel } from "./atom/FooterPanel";
import { Utils } from "./lib/utils";

const globalSessionId = Utils.generateRandomToken();

function getInitialMenuitem(): string {
	const pathname = window.location.pathname;
	// console.info(`[App] pathname: [${pathname}]`)
	if (pathname === "/") {
		return "";
	}
	return pathname;
}

/**
 * アプリケーション ルート コンポーネント
 */
function App(): JSX.Element {
	useEffect(() => {
		console.info(`[App] $$$ LOAD $$$`);
		console.info(`[App] pathname: [${window.location.pathname}]`);
		return () => {
			console.info(`[App] --- UNLOAD ---`);
		};
	}, []);

	const pageContext = {
		title: "Home",
		description: "Home page",
		keywords: "home, page",
	};

	const [menuitem, setMenuitem] = useState<string>(getInitialMenuitem());

	useEffect(() => {
		const headerHeight = Utils.getElementHeight("header-pane");
		const contentAreaHeight = Utils.getElementHeight("content-base-pane");
		const footerHeight = Utils.getElementHeight("footer-pane");
		const pageHeight = window.innerHeight;

		console.info(
			`[App] header height: [${headerHeight}], content-pane 高さ: [${contentAreaHeight}], footer height: [${footerHeight}], page height: [${pageHeight}]`,
		);
	}, []);

	const onMouseMove = (event: MouseEvent) => {
		// console.info(`[App] (${globalSessionId}) mousemove: [${event.pageX}, ${event.pageY}]`)
	};

	useEffect(() => {
		window.addEventListener("mousemove", onMouseMove);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			{/* ヘッダー */}
			<HeaderPanel />
			<div id="content-base-pane" style={{ display: "flex" }}>
				{/* サイドバー */}
				<SidePanel
					pageContext={pageContext}
					handleAnchor={(item) => {
						console.info(`[App] menuitem: [${item}]`);
						setMenuitem(item);
					}}
				/>
				{/* コンテンツ */}
				<ContentPanel menuitem={menuitem} />
			</div>
			{/* フッター */}
			<FooterPanel />
		</>
	);
}

export default App;
