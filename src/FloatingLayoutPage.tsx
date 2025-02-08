import React, { useEffect, useState } from "react";
import { generateRandomToken } from "./utils";

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


function Card1(props: { redrawNotification: number }): JSX.Element {
  const [id, _] = useState(generateRandomToken());
  const [cardWidth, setCardWidth] = React.useState("");
  const [description, setDescription] = React.useState("");

  useEffect(() => {
    // owner DIV の ID を知る
    const parentId = document.getElementById(id)?.parentElement?.id;
    if (!parentId) {
      return;
    }
    const canvasWidth = getElementWidth(parentId);
    if (1240 <= canvasWidth) {
      setCardWidth("calc(20%)");
    }
    else if (1000 <= canvasWidth) {
      setCardWidth("calc(18%)");
    }
    else if (900 <= canvasWidth) {
      setCardWidth("calc(18%)");
    }
    else if (700 <= canvasWidth) {
      setCardWidth("calc(17%)");
    }
    else if (600 <= canvasWidth) {
      setCardWidth("calc(19%)");
    }
    else {
      setCardWidth("calc(100%)");
    }

    // 要素の幅を確認
    const width = getElementWidth(id);
    setDescription(`id: ${id}, width: ${width}px`);
  }, [props.redrawNotification])

  // 親要素の width から、自身の width を計算する
  useEffect(() => {
  }, [])

  // useEffect(() => {
  //   console.info(`[Card1] 再計算 id: [${id}], canvas: [${canvasSize}], cardWidth: [${cardWidth}]`);
  //   setDescription(`id: ${id}, width: [${cardWidth}]`);
  // }, [cardWidth])

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

  return <div id={id} style={cardStyle}>{description}</div>
}

/**
 * フローティングレイアウトの確認
 */
export function FloatingLayoutPage(): JSX.Element {
  // キャンバスの ID を生成
  const [canvasId, _] = React.useState(generateRandomToken());
  const [resizeNotification, setResizeNotification] = React.useState(new Date().getTime());
  const [description, setDescription] = React.useState("");

  const updateRedraw = () => {
    // すべてのカードにアップデートを促す
    setResizeNotification(new Date().getTime());

    // 表示文字列の更新
    const canvasWidth = getElementWidth(canvasId);
    setDescription(`canvasId: [${canvasId}], width: [${canvasWidth}px]`);
  }

  useEffect(() => {
    console.info(`[FloatingLayoutPage] タイマーをしかけました🌕`);
    const handle = window.setInterval(() => {
      updateRedraw();
    }, 100);
    return () => {
      window.clearInterval(handle);
      console.info(`[FloatingLayoutPage] タイマーを解除しました🌑`);
    }
  }, [])

  const onResizeElement = (_event: React.SyntheticEvent) => {
    console.info(`[FloatingLayoutPage] onResizeElement`);
    updateRedraw();
  }

  return (
    <div className="content" style={{ padding: "20px", width: "100%" }}>
      <h1>フローティングなレイアウトの確認</h1>
      <div style={{ textAlign: "left" }}>description: {description}</div>
      <div id={canvasId} style={{ display: "flex", flexWrap: "wrap", border: "1px solid #cccccc", alignItems: "center" }} onResize={onResizeElement}>
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
    </div>
  )
}
