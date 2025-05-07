import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";
import { useFloating } from "@floating-ui/react";

/**
 * ポップアップのサンプル
 *
 * @param props コンポーネントのプロパティ
 * @returns JSX.Element
 */
export function PopupExample(props: {}): JSX.Element {
	// 拡大率
	const [scale, setScale] = useState<number>(1.0);
	// ポップアップ
	const { refs, floatingStyles } = useFloating();

	useEffect(() => {
		// initializeIframe(url);
	}, []);

	useEffect(() => {
		console.log(`[TransformOrZoomPage1] scale: ${scale}`);
	}, [scale]);

	return (
		<>
			<PageTitle>ポップアップのサンプル</PageTitle>

			<Spacer />
			<Information>ポップアップのサンプルです。</Information>

			<button ref={refs.setReference}>Button</button>
			<div ref={refs.setFloating} style={floatingStyles}>
				Tooltip
			</div>

			{/* 無駄な隙間 */}
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
			<Spacer />
		</>
	);
}
