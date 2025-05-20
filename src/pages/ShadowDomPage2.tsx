import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";
import { render } from "react-dom";
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

	const shadowStyle = document.createElement("style");
	shadowStyle.textContent = `
	.shadow-root {
		background-color: #f0f0f0;
		border: 1px solid #909090;
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

	// Shadow DOM 内のルート要素
	const shadowInternalRoot = createInternalRootElement();
	
	const shadowRoot = host.shadowRoot || host.attachShadow({ mode: "open" });

	if (shadowRoot.getElementById("shadow-root")) {
		shadowRoot.getElementById("shadow-root")?.remove();
	}

	shadowRoot.appendChild(shadowInternalRoot);

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
				<div id="shadow-placeholder" style={{ backgroundColor: "#f0f0f0", padding: "10px", border: "1px solid #909090" }}>
					{/* ここに Shadow DOM が形成される */}
				</div>
			</div>

			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
			<p className="read-the-docs">&nbsp;</p>
		</>
	);
}

function ShadowRootElement(): JSX.Element {
	// const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

	return <div className="super-fat">Shadow DOM is ready</div>;
}
