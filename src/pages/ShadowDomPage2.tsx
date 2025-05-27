import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";
import { createRoot } from "react-dom/client";

const SHADOW_ROOT_ELEMENT_ID = "shadow-root";

function createShadowRootStyle(id: string): HTMLStyleElement {
	const shadowStyle = document.createElement("style");

	shadowStyle.textContent = `
	#${id} {
		padding: 10px;
	}`;

	return shadowStyle;
}

/**
 * Shadow DOM 内のルート要素を作成します。
 *
 * @returns 
 */
function createInternalRootElement(id: string): HTMLElement {
	// Shadow DOM 内のルート要素
	const div = document.createElement("div");
	div.setAttribute("id", id);
	div.setAttribute("part", "e7e6d914-f1c1-4440-9aa9-b03cdf789286");

	// スタイルを指定
	div.appendChild(createShadowRootStyle(id));

	return div;
}

/**
 * Shadow DOM を初期化します。
 *
 * @returns 
 */
function initializeShadowDom(): void {
	// ホストルート
	const host = document.getElementById("shadow-dom-page-2-shadow-placeholder");
	if (!host) {
		return;
	}

	// ShadowRoot を取得
	const shadowRoot = host.shadowRoot || host.attachShadow({ mode: "open" });

	shadowRoot.getElementById(SHADOW_ROOT_ELEMENT_ID)?.remove();

	// Shadow DOM 内のルート要素を構築
	const shadowInternalRoot = createInternalRootElement(SHADOW_ROOT_ELEMENT_ID);
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

			<Spacer />
			<div id="shadow-dom-page-2-shadow-placeholder">
				{/* ここに Shadow DOM が形成される */}
			</div>
		</>
	);
}

function ShadowRootElement(): JSX.Element {
	return (
		<div>
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
			Shadow DOM
		</div>
	);
}
