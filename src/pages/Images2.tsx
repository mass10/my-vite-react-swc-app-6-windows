import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

/**
 * 単純リピートするコンポーネント
 *
 * @param props
 * @returns 
 */
function RepeatComponent(props: { n: number }): JSX.Element {
	// n 回 children を繰り返すコンポーネント
	const [items, setItems] = useState<React.ReactNode[]>([]);

	const link = (i: number) => `/images/manul-cat.jpg?i=${i}`;

	useEffect(() => {
		const newItems = Array.from({ length: props.n }, (_, i) => (
			<div key={i} style={{ float: "left", margin: "10px" }}>
				<img src={link(i)} alt="Manul Cat" style={{ width: "200px" }} />
			</div>
		));
		setItems(newItems);
	}, [props.n]);

	return (
		<div style={{ overflow: "hidden" }}>
			{items}
		</div>
	);
}

export function Images2Page(props: {}): JSX.Element {

	return (
		<>
			<PageTitle>画像 x 100個 (異なる URL)</PageTitle>

			<Spacer />
			<Information>画像ファイルのサンプルです。</Information>

			<Spacer />
			<RepeatComponent n={100} />
		</>
	);
}
