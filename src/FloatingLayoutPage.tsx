import { useEffect, useState } from "react"

export function FloatingLayoutPage(): JSX.Element {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info(`[DefaultPage] count: [${count}]`)
  }, [count])

  const cardStyle = {
    width: "calc(33.333% - 20px)",
    maxWidth: "240px",
    margin: "10px",
    padding: "20px",
    border: "1px solid #cccccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    color: "#333333",
  } as React.CSSProperties

  const cardStyleHidden = {
    width: "calc(33.333% - 20px)",
    maxWidth: "240px",
    margin: "10px",
    padding: "20px",
    border: "1px solid #cccccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    color: "#333333",
    visibility: "hidden",
  } as React.CSSProperties

  return (
    <div className="content" style={{ padding: "20px", width: "100%" }}>
      <h1>フローティングなレイアウトの確認</h1>
      <div style={{ textAlign: "center", border: "1px solid #ff9090" }}>
        <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid #cccccc", alignItems: "center", justifyContent: "center" }}>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyle}>これはカードです。</div>
          <div style={cardStyleHidden}>これはカードです。</div>
          <div style={cardStyleHidden}>これはカードです。</div>
        </div>
      </div>
    </div>
  )
}
