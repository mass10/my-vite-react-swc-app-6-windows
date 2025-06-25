import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

export function Iframe2(props: {}): JSX.Element {

	return (
		<>
			<PageTitle>IFRAME の確認(2)</PageTitle>

			<Spacer />
			<Information>地図の埋め込み</Information>

			<Spacer />

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.957963248386!2d139.66440231526435!3d35.70014798019318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d264f1d4b67%3A0x4d50c76b7e7c8e9d!2sNakano%20City%20Hall!5e0!3m2!1sja!2sjp!4v1678912345678!5m2!1sja!2sjp"
				width="600"
				height="450"
				style={{ border: 0}}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade">
			</iframe>
		</>
	);
}
