import { Utils } from "../lib/utils";

/**
 * フッター パネル コンポーネント
 */
export function FooterPanel(): JSX.Element {
	return (
		<div
			id="footer-pane"
			style={{
				textAlign: "left",
				border: "1px solid black",
				backgroundColor: "#202020",
				color: "#ffffff",
				padding: "16px",
				height: "90px",
			}}
		>
			2024 React.js のウェブサイト <br />
			BUILD: {Utils.getBuiltTimestamp()}
		</div>
	);
}
