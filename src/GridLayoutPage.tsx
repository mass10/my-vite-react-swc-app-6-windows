import React, { useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "./utils";
import { Information } from "./Information";

function Card1(props: {}): JSX.Element {
  const [id,] = useState(Utils.generateRandomToken());
  const [description, setDescription] = React.useState("");

  useEffect(() => {
    console.info(`[Card1] $$$ MOUNT $$$ id: [${id}] がマウントされました`);
    return () => {
      console.info(`[Card1] --- UMOUNT --- id: [${id}] がアンマウントされました`);
    }
  }, [])

  const [elementWidthTmp, setElementWidthTmp] = React.useState(0);

  window.setInterval(() => {
    const width = Utils.getElementWidth(id);
    setElementWidthTmp(width);
  }, 100)

  useEffect(() => {
    const currentTimestamp = Utils.getCurrentTimestamp();
    setDescription(`${currentTimestamp}: ${id}, ${elementWidthTmp}px`);
  }, [elementWidthTmp])

  const cardStyle = {
    textAlign: "left",
    width: "300px",
    height: "300px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties

  return <div id={id} style={cardStyle} className="fixedWidth">{description}</div>
}

/**
 * フローティングレイアウトの確認
 */
export function GridLayoutPage(): JSX.Element {
  // キャンバスの ID を生成
  const [canvasId, _] = React.useState(Utils.generateRandomToken());
  const [description, setDescription] = React.useState("");

  const updateComponent = () => {
    // 表示文字列の更新
    const canvasWidth = Utils.getElementWidth(canvasId);
    setDescription(`canvasId: [${canvasId}], width: [${canvasWidth}px]`);
  }

  useEffect(() => {
    const handle = window.setInterval(() => {
      updateComponent();
    }, 100);
    return () => {
      window.clearInterval(handle);
    }
  }, [])

  return (
    <>
      <PageTitle>グリッドレイアウトの確認</PageTitle>

      <Spacer />
      <Information>
        画面幅に合わせてカードの幅が変わることを確認します。
      </Information>

      <Spacer />
      <div style={{ textAlign: "left" }}>description: {description}</div>
      <div id={canvasId} style={{ padding: "10px", gap: "10px", display: "grid", justifyContent: "center", backgroundColor: "#f0f0f0", gridTemplateColumns: "repeat(auto-fill, 300px)" }}>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </>
  )
}
