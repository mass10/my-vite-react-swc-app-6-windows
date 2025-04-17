import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";
import { MicrosoftLogoSvg } from "../atom/MicrosoftLogoSvg";

/**
 * zoom によって、拡大・縮小表示するキャンバス
 */
function ZoomCanvas(props: { scale: number }): JSX.Element {
	const [innerText, setInnerText] = useState<string>("");

	const updateSizeInformation = () => {
		const element = document.getElementById("bbb1");
		const rect1 = element?.getBoundingClientRect();
		const line = `left: ${rect1?.left}, top: ${rect1?.top}, width: ${rect1?.width}, height: ${rect1?.height}`;
		// replace inner text
		setInnerText(line);
	};

	useEffect(() => {
		const timer = window.setInterval(updateSizeInformation, 300);
		return () => {
			window.clearInterval(timer);
		};
	}, []);

	return (
		<div
			style={{
				padding: 0,
				width: 700,
				height: 360,
				border: "0px solid black",
				backgroundColor: "#e0e0e0",
				overflow: "auto",
			}}
		>
			<div style={{ height: "100px" }}></div>
			<div
				id="bbb1"
				style={{
					textAlign: "left",
					height: "200px",
					width: "200px",
					backgroundColor: "#b0b0b0",
					padding: 0,
					zoom: props.scale,
				}}
			>
				{innerText}
			</div>
		</div>
	);
}

export function ElementRectPage(props: {}): JSX.Element {
	// 拡大率
	const [scale, setScale] = useState<number>(1.0);

	useEffect(() => {
		console.log(`[TransformOrZoomPage1] scale: ${scale}`);
	}, [scale]);

	// マウスカーソルの位置を追跡
	const [x, setX] = useState<number>(0);
	const [y, setY] = useState<number>(0);

	const affectMouseCursorPosition = (e: MouseEvent) => {
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		window.addEventListener("mousemove", affectMouseCursorPosition);
		return () => {
			window.removeEventListener("mousemove", affectMouseCursorPosition);
		};
	}, []);

	return (
		<>
			<PageTitle>getBoundingClientRect の確認</PageTitle>

			<Spacer />
			<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
				<Information>
					getBoundingClientRect とスクロール位置の関係を確認しています。
				</Information>
				<Information>
					マウスカーソルの位置: [{x}, {y}]
				</Information>
			</div>

			<Spacer />
			<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
				<div style={{ textAlign: "left" }}>
					拡大率: 0.1～2.0 (現在: {scale})
				</div>
				<div style={{ textAlign: "left" }}>
					<input
						type="range"
						min="0.1"
						max="2.0"
						step="0.1"
						defaultValue="1.0"
						onChange={(e) => {
							const scale = parseFloat(e.target.value);
							setScale(scale);
						}}
					/>
				</div>
			</div>

			<ZoomCanvas scale={scale} />
		</>
	);
}
