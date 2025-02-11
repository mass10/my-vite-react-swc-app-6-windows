import React, { useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "../utils";
import { Information } from "../Information";


function Card1(props: { redrawNotification: number }): JSX.Element {
  const [id, _] = useState(Utils.generateRandomToken());
  const [cardWidth, setCardWidth] = React.useState("");
  const [description, setDescription] = React.useState("");

  const updateComponent = () => {
    // 要素の幅を確認
    const width = Utils.getElementWidth(id);
    setDescription(`${id}, ${width}px`);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      updateComponent();
    }, 200);
    return () => {
      window.clearInterval(timer);
    }
  }, [])

  useEffect(() => {
    updateComponent();
  }, [props.redrawNotification])

  const cardStyle = {
    width: cardWidth,
    minWidth: "",
    minHeight: "50px",
    margin: "10px",
    padding: "20px",
    border: "1px solid #cccccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    color: "#ff7777",
  } as React.CSSProperties

  return <div id={id} style={cardStyle} onResize={updateComponent}>{description}</div>
}

/**
 * フローティングレイアウトの確認
 */
export function FloatingLayoutPage(): JSX.Element {
  // キャンバスの ID を生成
  const [canvasId, _] = useState(Utils.generateRandomToken());
  const [resizeNotification, setResizeNotification] = React.useState(new Date().getTime());
  const [description, setDescription] = React.useState("");

  const updateRedraw = () => {
    // すべてのカードにアップデートを促す
    setResizeNotification(new Date().getTime());

    // 表示文字列の更新
    const canvasWidth = Utils.getElementWidth(canvasId);
    setDescription(`${Utils.getCurrentTimestamp()}: ${canvasId}, ${canvasWidth}px`);
  }

  const onResizeElement = (_event: React.SyntheticEvent) => {
    console.info(`[FloatingLayoutPage] onResizeElement`);
    updateRedraw();
  }

  return (
    <>
      <PageTitle>フローティングなレイアウトの確認</PageTitle>

      <Spacer />
      <Information>画面幅に合わせてカードが整列されることを確認します。</Information>

      <Spacer />
      <div style={{ textAlign: "left" }}>description: {description}</div>
      <div id={canvasId} style={{ display: "grid", border: "1px solid #cccccc", alignItems: "center", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }} onResize={onResizeElement}>
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
        <Card1 redrawNotification={resizeNotification} />
      </div>
    </>
  )
}
