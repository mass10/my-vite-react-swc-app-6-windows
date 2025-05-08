import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

function setImageToCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement) {
	const ctx = canvas.getContext("2d");
	if (ctx) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	}
}

function loadImage(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = url;
		img.onload = () => resolve(img);
		img.onerror = (error) => reject(error);
	});
}

export function Canvas1(props: {}): JSX.Element {
	useEffect(() => {
		const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
		if (canvas) {
			loadImage("/images/manul-cat.jpg")
				.then((image) => {
					setImageToCanvas(canvas, image);
				})
				.catch((error) => {
					console.error("Error loading image:", error);
				});
		} else {
			console.error("Canvas element not found");
		}
	}, []);

	return (
		<>
			<PageTitle>Canvas 1</PageTitle>
			<Spacer />
			<Information>CANVAS 画像のサンプルです。</Information>
			<Spacer />
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", gap: "10px" }}>
				<div style={{ textAlign: "left" }}>
					canvas<br />
					<canvas
						id="canvas1"
						style={{
							width: "100px",
							height: "68px",
							border: "none",
							padding: 0,
							margin: 0,
							zoom: 2.0,
							borderStyle: "solid",
							borderWidth: "0px",
							borderColor: "#909090",
						}}
					/>
				</div>
				<div style={{ textAlign: "left" }}>
					img<br />
					<img src="https://tmp-0c699a36-36f3-4c75-818e-49b1d804851c.s3.us-east-1.amazonaws.com/manul-cat.jpg" alt="Manul Cat" style={{ width: "200px", height: "auto" }} />
				</div>
			</div>
		</>
	);
}
