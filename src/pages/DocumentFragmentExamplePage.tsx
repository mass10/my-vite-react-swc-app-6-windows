import { Information } from "../atom/Information";
import { PageTitle, Spacer } from "../lib/utils";

function clearNode(id: string): void {
	const node = document.getElementById(id);
	if (!node) {
		return;
	}

	node.innerHTML = "";
}

export function DocumentFragmentExamplePage(): JSX.Element {
	const MAX_TRY = 100000;

	const buttonStyles = {
		fontSize: "18px",
		textDecoration: "none",
		fontWeight: "",
		width: "250px",
		height: "34px",
	};

    return (
		<>
			<PageTitle>getBoundingClientRect の確認</PageTitle>

			<Spacer />

			<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
				<Information>document fragment による速度の違い</Information>
				<Information>空の &lt;li&gt; だけでは、10万個刺しても差は無い。</Information>
			</div>

			<Spacer />

			<div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
                <div>
					<input type="button" value="createDocumentFragment" style={buttonStyles} onClick={() => {
						clearNode("left-tree");
						const fragment = document.createDocumentFragment();
						for (let i = 0; i < MAX_TRY; i++) {
							const li = document.createElement("li");
							li.textContent = `item ${i}`;
							fragment.appendChild(li);
						}
						document.getElementById("left-tree")?.appendChild(fragment);
						alert("Ok.");
					}} />
                    <h2>Left</h2>
                    <ul id="left-tree">
						{/* ノードが入る場所 */}
                    </ul>
                </div>
                <div>
					<input type="button" value="createElement" style={buttonStyles} onClick={() => {
						clearNode("right-tree");
						for (let i = 0; i < MAX_TRY; i++) {
							const li = document.createElement("li");
							li.textContent = `item ${i}`;
							document.getElementById("right-tree")?.appendChild(li);
						}
						alert("Ok.");
					}} />
                    <h2>Right</h2>
                    <ul id="right-tree">
						{/* ノードが入る場所 */}
                    </ul>
                </div>
			</div>
		</>
    );
}
