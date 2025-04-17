import { Information } from "../atom/Information";
import { PageTitle, Spacer } from "../lib/utils";

export function FontAwesome(props: {}): JSX.Element {
	return (
		<>
			<PageTitle>Font Awesome</PageTitle>

			<Spacer />
			<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
				<Information>フォントアイコンを使ってみます。</Information>
			</div>

			<Spacer />
			<div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
				<i className="fas fa-home"></i>
				<i className="fas fa-home fa-2x"></i>
				<i className="fas fa-home fa-3x"></i>
				<i className="fas fa-home fa-4x"></i>
				<i className="fas fa-home fa-5x"></i>
				<i className="fas fa-home fa-6x"></i>
				<i className="fas fa-home fa-7x"></i>
				<i className="fas fa-home fa-8x"></i>
				<i className="fas fa-home fa-9x"></i>
				<i className="fas fa-home fa-10x"></i>
			</div>
			<div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
				<i className="fa fa-car" aria-hidden="true"></i>
				<i className="fa fa-window-minimize" aria-hidden="true"></i>
				<i className="fa fa-times" aria-hidden="true"></i>
				<i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
				<i className="fa-icon" aria-hidden="true">
					あいうえお
				</i>
			</div>
		</>
	);
}
