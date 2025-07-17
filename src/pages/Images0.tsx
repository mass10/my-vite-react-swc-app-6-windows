import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

/**
 * 単純リピートするコンポーネント
 *
 * @param props
 * @returns 
 */
function RepeatComponent(props: { n: number, children: React.ReactNode }): JSX.Element {
	// n 回 children を繰り返すコンポーネント
	const { n, children } = props;
	const [items, setItems] = useState<React.ReactNode[]>([]);
	useEffect(() => {
		const newItems = Array.from({ length: n }, (_, i) => (
			<div key={i} style={{ float: "left", margin: "10px" }}>
				{children}
			</div>
		));
		setItems(newItems);
	}, [n, children]);

	return (
		<div style={{ overflow: "hidden" }}>
			{items}
		</div>
	);
}

export function Images0Page(props: {}): JSX.Element {

	return (
		<>
			<PageTitle>画像 x 10個 (同一の URL)</PageTitle>

			<Spacer />
			<Information>画像ファイルのサンプルです。</Information>

			<Spacer />
			<RepeatComponent n={10}>
				<img src="/images/manul-cat.jpg" alt="Manul Cat" style={{ width: "200px" }} />
			</RepeatComponent>
		</>
	);
}
