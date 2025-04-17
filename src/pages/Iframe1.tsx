import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

export function Iframe1(props: {}): JSX.Element {
	// 拡大率
	const [scale, setScale] = useState<number>(1.0);

	useEffect(() => {
		console.log(`[TransformOrZoomPage1] scale: ${scale}`);
	}, [scale]);

	return (
		<>
			<PageTitle>transform/zoom の確認</PageTitle>

			<Spacer />
			<Information>拡大と縮小のサンプルです。</Information>

			<Spacer />
			<iframe
				src="/zoom2"
				style={{
					width: "100%",
					height: "800px",
					border: "none",
					padding: 0,
					margin: 0,
					zoom: 1.75,
				}}
			/>
		</>
	);
}
