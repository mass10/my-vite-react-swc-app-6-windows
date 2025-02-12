import React, { useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "../lib/utils";
import { Information } from "../atom/Information";


function Card1(props: { refresh: string }): JSX.Element {
  const [id, _] = useState(Utils.generateRandomToken());
  const [description, setDescription] = React.useState("");

  const updateComponent = () => {
    // 要素の幅を確認
    const width = Utils.getElementWidth(id);
    setDescription(`${id}, ${width}px`);
  }

  useEffect(() => {
    updateComponent();
  }, []);

  useEffect(() => {
    updateComponent();
  }, [props.refresh]);

  const cardStyle = {
    textAlign: "left",
    minWidth: "",
    minHeight: "50px",
    padding: "5px",
    border: "1px solid #cccccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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

  const updateRedrawCanvas = () => {
    console.debug(`[FloatingLayoutPage] 再描画`);
    // 表示文字列の更新
    const canvasWidth = Utils.getElementWidth(canvasId);
    setDescription(`timestamp: [${Utils.getCurrentTimestamp()}], canvasId: [${canvasId}], width: [${canvasWidth}px]`);
    // すべてのカードに再描画通知を送信
    setUpdateNotification(Utils.generateRandomToken());
  }

  const onResizedHandler = () => {
    updateRedrawCanvas();
  }

  // コンポーネントのマウント時に、キャンバスの幅を確認
  useEffect(() => {
    updateRedrawCanvas();
  }, [])

  // キャンバスのリサイズをウォッチ
  useEffect(() => {
    window.addEventListener("resize", onResizedHandler);
    return () => {
      window.removeEventListener("resize", onResizedHandler);
    }
  }, [])

  return (
    <>
      <PageTitle>フローティングなレイアウトの確認</PageTitle>

      <Spacer />
      <Information>画面幅に合わせてカードが整列されることを確認します。</Information>

      <Spacer />
      <div style={{ textAlign: "left" }}>[DEBUG] {description}</div>

      <Spacer />
      <div id={canvasId} style={{ display: "grid", border: "0px solid #885555", alignItems: "center", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
        <Card1 refresh={updateNotification} />
      </div>
    </>
  )
}
