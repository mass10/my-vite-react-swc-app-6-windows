import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

/**
 * Shadow DOM (1)
 */
export function ShadowDomPage1(): JSX.Element {
	return (
		<>
			<PageTitle>Shadow DOM の確認 (1)</PageTitle>

			<Spacer />
			<Information>Shadow DOM 配下の要素がスタイルを持つ</Information>

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
