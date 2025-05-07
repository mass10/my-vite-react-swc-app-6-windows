export function HeaderPanel(): JSX.Element {
	return (
		<header id="header-pane">
			<div
				style={{
					padding: "20px",
					border: "1px solid black",
					backgroundColor: "#202020",
					color: "#ffffff",
					textAlign: "left",
				}}
			>
				<a href="/" style={{ fontSize: "26px", textDecoration: "none", color: "#ffffff" }}>
					React.js のウェブサイト
				</a>
			</div>
		</header>
	);
}
