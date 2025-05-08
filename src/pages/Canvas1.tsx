import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

function setImageToCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement) {
	const ctx = canvas.getContext("2d");
	if (!ctx) {
		console.warn(`[PAGE] Context not found.`);
		return;
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

function generateImageElement(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = url;
		img.onload = () => resolve(img);
		img.onerror = (error) => reject(error);
	});
}

function CanvasImage(props: { id: string, src: string; width: number; height: number }) {
	useEffect(() => {
		const canvas = document.getElementById(props.id) as HTMLCanvasElement;
		if (!canvas) {
			console.error("Canvas element not found");
			return;
		}

		generateImageElement(props.src)
			.then((image) => {
				setImageToCanvas(canvas, image);
			})
			.catch((error) => {
				console.error("Error loading image:", error);
			});
	}, []);

	return (
		<div style={{ textAlign: "left" }}>
			<div style={{ textAlign: "left"}}>
				CANVAS: {props.src}<br />
			</div>
			<canvas
				id={props.id}
				style={{
					width: props.width,
					height: props.height,
					border: "none",
					padding: 0,
					margin: 0,
					borderStyle: "solid",
					borderWidth: "0px",
					borderColor: "#909090",
				}}
			/>
			<div style={{ height: "10px" }} />
		</div>
	);
}

function BasicImage(props: { src: string; width: number | string; height: number | string }) {
	return (
		<div style={{ textAlign: "left" }}>
			<div style={{ textAlign: "left"}}>
				IMG: {props.src}<br />
			</div>
			<img src={props.src} alt="Manul Cat" style={{ width: props.width, height: props.height }} />
			<div style={{ height: "10px" }} />
		</div>
	)
}

export function Canvas1(props: {}): JSX.Element {
	return (
		<>
			<PageTitle>Canvas 1</PageTitle>
			<Spacer />
			<Information>CANVAS 画像のサンプルです。</Information>
			<Spacer />
			<div>
				<CanvasImage id="canvas1" src="/images/manul-cat.jpg" width={200} height={135} />
				<CanvasImage id="canvas2" src="https://tmp-0c699a36-36f3-4c75-818e-49b1d804851c.s3.us-east-1.amazonaws.com/manul-cat.jpg" width={200} height={135} />
				<BasicImage src="https://tmp-0c699a36-36f3-4c75-818e-49b1d804851c.s3.us-east-1.amazonaws.com/manul-cat.jpg" width={200} height={"auto"} />
			</div>
		</>
	);
}
