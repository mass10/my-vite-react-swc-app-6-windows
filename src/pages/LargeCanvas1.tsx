import React, { CSSProperties, useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "../lib/utils";
import { Information } from "../atom/Information";

interface CardItem {
	top: number;
	left: number;
}

function enumCardItems(maxLeft: number, maxTop: number, count: number): CardItem[] {
	const items: CardItem[] = [];

	for (let i = 1; i <= count; i++) {
		const left = Math.floor(Math.random() * maxLeft);
		const top = Math.floor(Math.random() * maxTop);
		items.push({ top: top, left: left });
	}

	return items;
}

function GenerateInputboxes(props: { items: CardItem[] }): JSX.Element[] {
	const onClickInputText = (e: React.MouseEvent<HTMLInputElement>) => {
		const targetElement = e.target as HTMLInputElement;
		console.info(`[LargeCanvasPage1] onClickInputText`);
		targetElement.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	};

	return props.items.map((pos, index) => {
		const id = Utils.generateRandomToken();
		const text = `${id}`;
		return (
			<input
				key={id}
				type="text"
				style={{
					width: "200px",
					height: "40px",
					position: "absolute",
					top: pos.top,
					left: pos.left,
				}}
				value={text}
				onClick={onClickInputText}
			/>
		);
	});
}

function MyCanvas1(props: { items: CardItem[] }): JSX.Element {
	const canvasId = "canvas1";

	const canvasStyle: CSSProperties = {
		position: "relative",
		margin: 0,
		padding: 0,
		backgroundColor: "#f0f0f0",
		opacity: 0.5,
	};

	const locations = enumCardItems(2000, 2000, 100);

	return (
		<div>
			<div
				style={{
					border: "1px solid #000000",
					width: "1400px",
					height: "600px",
					overflow: "auto",
				}}
			>
				<div id={canvasId} style={canvasStyle}>
					<GenerateInputboxes items={locations} />
				</div>
			</div>
		</div>
	);
}

export function LargeCanvasPage1(props: {}): JSX.Element {
	useEffect(() => {
		console.info(`[LargeCanvasPage1] $$$ LOAD $$$`);
		return () => {
			console.info(`[LargeCanvasPage1] --- UNLOAD ---`);
		};
	}, []);

	const locations = enumCardItems(2000, 2000, 100);

	return (
		<>
			<PageTitle>大きなキャンバスの確認</PageTitle>

			<Spacer />
			<Information>大きなキャンバスのサンプルです。</Information>

			<Spacer />
			<div style={{ textAlign: "left" }}>[DEBUG] 大きなキャンバスの確認</div>

			<Spacer />
			<MyCanvas1 items={locations} />
		</>
	);
}
