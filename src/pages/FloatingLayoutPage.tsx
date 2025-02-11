import React, { useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "../lib/utils";
import { Information } from "../atom/Information";


function Card1(props: { redrawNotification: string }): JSX.Element {
  const [id, _] = useState(Utils.generateRandomToken());
  const [description, setDescription] = React.useState("");

  const updateComponent = () => {
    // 要素の幅を確認
    const width = Utils.getElementWidth(id);
    setDescription(`${id}, ${width}px`);
  }

  useEffect(() => {
    updateComponent();
  }, [props.redrawNotification])

  const cardStyle = {
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

  return <div id={id} style={cardStyle}>{description}</div>
}

/**
 * フローティングレイアウトの確認
 */
export function FloatingLayoutPage(): JSX.Element {
  // キャンバスの ID を生成
  const [canvasId, _] = useState(Utils.generateRandomToken());
  // キャンバスがリサイズされたときに、カードを再描画することができるか？
  const [updateNotification, setUpdateNotification] = React.useState(Utils.generateRandomToken());
  // キャンバスの表示用
  const [description, setDescription] = React.useState("");

  useEffect(() => {
    // すべてのカードに再描画通知を送信
    setUpdateNotification(Utils.generateRandomToken());
  }, [description])

  const updateRedrawCanvas = () => {
    // 表示文字列の更新
    const canvasWidth = Utils.getElementWidth(canvasId);
    setDescription(`${canvasId}: ${canvasWidth}px`);
  }

  // タイマーでキャンバスのリサイズをウォッチ
  // ※resize などをキャッチするための確実なイベントを確認中
  useEffect(() => {
    const timer = window.setInterval(updateRedrawCanvas, 100);
    return () => {
      window.clearInterval(timer);
    }
  }, [])

  return (
    <>
      <PageTitle>フローティングなレイアウトの確認</PageTitle>

      <Spacer />
      <Information>画面幅に合わせてカードが整列されることを確認します。</Information>

      <Spacer />
      <div style={{ textAlign: "left" }}>description: {description}</div>

      <Spacer />
      <div id={canvasId} style={{ display: "grid", border: "1px solid #cccccc", alignItems: "center", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
        <Card1 redrawNotification={updateNotification} />
      </div>
    </>
  )
}
