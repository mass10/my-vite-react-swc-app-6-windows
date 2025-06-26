import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

export function Iframe3(props: {}): JSX.Element {

	return (
		<>
			<PageTitle>IFRAME の確認(3)</PageTitle>

			<Spacer />
			<Information>埋め込み</Information>

			<Spacer />

			<iframe
				src="https://www.example.com"
				width="600"
				height="450"
				style={{ border: 0}}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade">
			</iframe>
		</>
	);
}
