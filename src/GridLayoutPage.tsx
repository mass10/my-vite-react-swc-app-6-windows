import React, { useEffect, useState } from "react";
import { generateRandomToken } from "./utils";
import { Information } from "./Information";

// function generateRandomToken

/**
 * 要素の幅を返します。
 *
 * @param id 要素の ID
 * @returns 要素の幅
 */
function getElementWidth(id: string): number {
  const element = document.getElementById(id);
  if (element) {
    return element.clientWidth;
  }
  console.warn(`[getElementWidth] 要素が見つかりませんでした id: [${id}]`);
  return 0;
}


function Card1(props: {}): JSX.Element {
  const [id,] = useState(generateRandomToken());
  const [description, setDescription] = React.useState("");

  useEffect(() => {
    console.info(`[Card1] $$$ MOUNT $$$ id: [${id}] がマウントされました`);
    return () => {
      console.info(`[Card1] --- UMOUNT --- id: [${id}] がアンマウントされました`);
    }
  }, [])

  const [elementWidthTmp, setElementWidthTmp] = React.useState(0);

  window.setInterval(() => {
    const width = getElementWidth(id);
    setElementWidthTmp(width);
  }, 100)

  useEffect(() => {
    setDescription(`${id}: ${elementWidthTmp}px`);
  }, [elementWidthTmp])

  const cardStyle = {
    textAlign: "left",
    width: "180px",
    height: "180px",
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
  const [canvasId, _] = React.useState(generateRandomToken());
  const [description, setDescription] = React.useState("");

  const updateRedraw = () => {
    // 表示文字列の更新
    const canvasWidth = getElementWidth(canvasId);
    setDescription(`canvasId: [${canvasId}], width: [${canvasWidth}px]`);
  }

  useEffect(() => {
    console.info(`[GridLayoutPage] タイマーをしかけました🌕`);
    const handle = window.setInterval(() => {
      updateRedraw();
    }, 100);
    return () => {
      window.clearInterval(handle);
      console.info(`[GridLayoutPage] タイマーを解除しました🌑`);
    }
  }, [])

  return (
    <div className="content" style={{ padding: "20px", width: "100%", overflowY: "auto" }}>
      <div style={{ fontSize: "35px", textAlign: "left", backgroundColor: "#e0e0e0", padding: "12px" }}>グリッドレイアウトの確認</div>
      <Information>
        画面幅に合わせてカードの幅が変わることを確認します。
      </Information>
      <div style={{ textAlign: "left" }}>description: {description}</div>
      <div id={canvasId} style={{ padding: "10px", gap: "10px", display: "grid", justifyContent: "center", backgroundColor: "#f0f0f0", gridTemplateColumns: "repeat(auto-fill, 180px)" }}>
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
    </div>
  )
}
