import { Information } from "../atom/Information";
import { PageTitle, Spacer } from "../lib/utils";

/**
 * チャレンジ 1 の処理を実行します。
 */
async function challenge1(url: string): Promise<void> {
	if (!url) {
		console.error(`[anonymous] URL が指定されていません。`);
		return;
	}
	try {
		console.log(`[anonymous] URL の確認: [${url}]`);
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.info(`[anonymous] リクエストが成功しました。`, response);
		response.headers.forEach((value, key) => {
			console.info(`[anonymous] RESPONSE HEADER key: [${key}], value: [${value}]`);
		});

		// 応答本文を JSON として解析
		const json = await response.json();
		console.info(`[anonymous] RESPONSE BODY:`, json);
	} catch (error) {
		console.error(`[anonymous] リクエストで実行時エラーが発生しました。`, error);
	}
}

export function UrlTestForm(_props: { update: string }): JSX.Element {
	const onClick1 = () => {
		const e = document.getElementById("url") as HTMLInputElement;
		const url = e.value;
		challenge1(url);
	};

	return (
		<>
			<PageTitle>URL をテストするフォーム</PageTitle>

			<Spacer />
			<Information>GET リクエストの確認</Information>

			<Spacer />
			<form
				style={{ float: "left" }}
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div style={{ border: "1px solid black", padding: "20px" }}>
					<label>
						URL:&nbsp;
						<input
							type="text"
							id="url"
							name="url"
							style={{
								width: "900px",
								height: "33px",
								border: "1px solid black",
							}}
						/>
					</label>
				</div>
				<div style={{ border: "1px solid black", padding: "20px" }}>
					<button onClick={onClick1}>URL をテスト</button>
				</div>
			</form>
		</>
	);
}
