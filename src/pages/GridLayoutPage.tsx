import React, { useCallback, useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "../lib/utils";
import { Information } from "../atom/Information";

function Card1(props: {}): JSX.Element {
	const [id] = useState(Utils.generateRandomToken());
	const [description, setDescription] = React.useState("");

	useEffect(() => {
		const width = Utils.getElementWidth(id);
		setDescription(`id: [${id}], width: [${width}px]`);
	}, [id]);

	const cardStyle = {
		textAlign: "left",
		width: "300px",
		height: "300px",
		border: "1px solid #ccc",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	} as React.CSSProperties;

	return (
		<div id={id} style={cardStyle} className="fixedWidth">
			{description}
		</div>
	);
}

/**
 * フローティングレイアウトの確認
 */
export function GridLayoutPage(): JSX.Element {
	// キャンバスの ID を生成
	const [canvasId, _] = React.useState(Utils.generateRandomToken());
	const [description, setDescription] = React.useState("");

	const updateRedrawCanvas = useCallback(() => {
		// 表示文字列の更新
		const canvasWidth = Utils.getElementWidth(canvasId);
		setDescription(
			`timestamp: [${Utils.getCurrentTimestamp()}], canvasId: [${canvasId}], width: [${canvasWidth}px]`,
		);
	}, [canvasId]);

	const onResizedHandler = useCallback(() => {
		console.debug(`[onResizedHandler] キャンバスのリサイズを検知しました。`);
		updateRedrawCanvas();
	}, [updateRedrawCanvas]);

	// コンポーネントのマウント時に、キャンバスの幅を確認
	useEffect(() => {
		updateRedrawCanvas();
	}, [updateRedrawCanvas]);

	// キャンバスのリサイズをウォッチ
	useEffect(() => {
		window.addEventListener("resize", onResizedHandler);
		return () => {
			window.removeEventListener("resize", onResizedHandler);
		};
	}, [onResizedHandler]);

	return (
		<>
			<PageTitle>グリッドレイアウトの確認</PageTitle>

			<Spacer />
			<Information>
				画面幅に合わせてカードの幅が変わることを確認します。
			</Information>

			<Spacer />
			<div style={{ textAlign: "left" }}>[DEBUG] {description}</div>

			<Spacer />
			<div
				id={canvasId}
				style={{
					padding: "10px",
					gap: "10px",
					display: "grid",
					justifyContent: "center",
					backgroundColor: "#f0f0f0",
					gridTemplateColumns: "repeat(auto-fill, 300px)",
				}}
			>
				<Card1 />
				<Card1 />
				<Card1 />
				<Card1 />
				<Card1 />
				<Card1 />
				<Card1 />
				<Card1 />
				<Card1 />
			</div>
		</>
	);
}
