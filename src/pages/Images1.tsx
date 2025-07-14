import { useEffect, useState } from "react";
import { PageTitle, Spacer } from "../lib/utils";
import { Information } from "../atom/Information";

export function Images1Page(props: {}): JSX.Element {

	return (
		<>
			<PageTitle>画像アップロードの確認</PageTitle>

			<Spacer />
			<Information>画像ファイルのサンプルです。</Information>

			<Spacer />
			<img src="/images/manul-cat.jpg" alt="Manul Cat" style={{ width: "300px" }} />

			<Spacer />
			<img src="/images/manul-cat.jpg" alt="Manul Cat" style={{ width: "300px" }} />

			<Spacer />
			<img src="/images/manul-cat.jpg" alt="Manul Cat" style={{ width: "300px" }} />
		</>
	);
}
