import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

// CSS
import "./ShadowDomPage1.css";

/**
 * Shadow DOM (1)
 */
export function ShadowDomPage1(): JSX.Element {
	return (
		<div>
			<PageTitle>Shadow DOM の確認 (1)</PageTitle>

			<Spacer />
			<Information>Shadow DOM 配下の要素に ::part で穴をあける</Information>

		</div>
	);
}
