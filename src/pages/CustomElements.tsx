import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

// 型定義: JSX で 'my-greeting' を使えるようにする
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace JSX {
		interface IntrinsicElements {
			'my-greeting': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}

export function CustomElements(props: {}): JSX.Element {
	return (
		<>
			<PageTitle>カスタム要素</PageTitle>
			<Spacer />
			<Information>カスタム要素のサンプルです。</Information>
			<Spacer />
			<div>
				<my-greeting>コニチハ</my-greeting>
			</div>
		</>
	);
}
