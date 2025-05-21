import { Information } from "../atom/Information";
import { PageTitle, Spacer } from "../lib/utils";

export function DocumentFragmentExamplePage(): JSX.Element {
    return (
		<>
			<PageTitle>getBoundingClientRect の確認</PageTitle>

			<Spacer />
			<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
				<Information>document fragment による速度の違い</Information>
			</div>

			<Spacer />
			<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ backgroundColor: "#e9e9e9" }}>
                    <h2>Left</h2>
                    <ul>

                    </ul>
                </div>
                <div style={{ backgroundColor: "#e9e9e9" }}>
                    <h2>Right</h2>
                    <ul>

                    </ul>
                </div>
			</div>
		</>
    );
}
