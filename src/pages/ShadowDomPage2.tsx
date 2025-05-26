import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";
import { createRoot } from "react-dom/client";

/**
 * Shadow DOM 内のルート要素を作成します。
 *
 * @returns 
 */
function createInternalRootElement(): HTMLElement {

	// Shadow DOM 内のルート要素
	const shadowInternalRoot = document.createElement("div");
	shadowInternalRoot.setAttribute("id", "shadow-root");
	shadowInternalRoot.setAttribute("class", "shadow-root");
	shadowInternalRoot.setAttribute("part", "e7e6d914-f1c1-4440-9aa9-b03cdf789286");

	const shadowStyle = document.createElement("style");
	shadowStyle.textContent = `
	.shadow-root {
		padding: 10px;
	}`;
	shadowInternalRoot.appendChild(shadowStyle);

	return shadowInternalRoot;
}

/**
 * Shadow DOM を初期化します。
 *
 * @returns 
 */
function initializeShadowDom(): void {
	// ホストルート
	const host = document.getElementById("shadow-placeholder");
	if (!host) {
		return;
	}

	// ShadowRoot を取得
	const shadowRoot = host.shadowRoot || host.attachShadow({ mode: "open" });

	// Shadow DOM 内のルート要素を構築
	shadowRoot.getElementById("shadow-root")?.remove();

	const shadowInternalRoot = createInternalRootElement();
	shadowRoot.appendChild(shadowInternalRoot);

	// レンダリング
	createRoot(shadowInternalRoot).render(<ShadowRootElement />);
}

/**
 * Shadow DOM (ダイナミックな)
 */
export function ShadowDomPage2(): JSX.Element {
	useEffect(() => {
		console.info(`[ShadowDomPage2] $$$ LOAD $$$`);
		initializeShadowDom();
		return () => {
			console.info(`[ShadowDomPage2] --- UNLOAD ---`);
		};
	}, []);

	return (
		<>
			<PageTitle>Shadow DOM の確認 (2)</PageTitle>

			<Spacer />
			<Information>Shadow DOM 配下の要素がスタイルを持つ</Information>

			<div style={{ fontWeight: "bold", fontSize: "20px" }}>
				<div id="shadow-placeholder">
					{/* ここに Shadow DOM が形成される */}
				</div>
			</div>

			<p>この font-size は？</p>
		</>
	);
}

function ShadowRootElement(): JSX.Element {
	// const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

	return (
		<>
			<div className="super-fat">Shadow DOM is ready</div>
			<p>この font-size は？</p>
		</>
	);
}
