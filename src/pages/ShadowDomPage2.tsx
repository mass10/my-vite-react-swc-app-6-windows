import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

/**
 * Shadow DOM (ダイナミックな)
 */
export function ShadowDomPage2(): JSX.Element {
	return (
		<>
			<PageTitle>Shadow DOM の確認 (2)</PageTitle>

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
