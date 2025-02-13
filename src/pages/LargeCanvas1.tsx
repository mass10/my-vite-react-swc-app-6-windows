import React, { CSSProperties, useEffect, useState } from "react";
import { PageTitle, Spacer, Utils } from "../lib/utils";
import { Information } from "../atom/Information";

export function LargeCanvasPage1(props: {}): JSX.Element {

    const canvasId = "canvas1"

    const canvasStyle: CSSProperties = {
        position: "relative",
        margin: 0,
        padding: 0,
        backgroundColor: "#f0f0f0",
        opacity: 0.5,
    };

    const itemPositions: { top: number, left: number }[] = []
    itemPositions.push({ top: 10, left: 10 })
    itemPositions.push({ top: 100, left: 100 })
    itemPositions.push({ top: 100, left: 456 })
    itemPositions.push({ top: 345, left: 100 })
    itemPositions.push({ top: 200, left: 200 })
    itemPositions.push({ top: 700, left: 900 })
    itemPositions.push({ top: 500, left: 1300 })
    itemPositions.push({ top: 300, left: 1500 })
    itemPositions.push({ top: 300, left: 300 })
    itemPositions.push({ top: 892, left: 100 })
    itemPositions.push({ top: 135, left: 1800 })
    itemPositions.push({ top: 800, left: 700 })

    useEffect(() => {
        console.info(`[LargeCanvasPage1] $$$ LOAD $$$`)
        return () => {
            console.info(`[LargeCanvasPage1] --- UNLOAD ---`)
        }
    }, [])

    const onClickInputText = (e: React.MouseEvent<HTMLInputElement>) => {
        const targetElement = e.target as HTMLInputElement;
        console.info(`[LargeCanvasPage1] onClickInputText`);
        targetElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    const items = itemPositions.map((pos, index) => {
        const id = Utils.generateRandomToken();
        const text = `${id}`
        return <input key={Utils.generateRandomToken()} type="text"
            style={{ width: "200px", height: "40px", position: "absolute", top: pos.top, left: pos.left }} value={text} onClick={onClickInputText} />
    })


    return (
        <>
            <PageTitle>大きなキャンバスの確認</PageTitle>

            <Spacer />
            <Information>
                大きなキャンバスのサンプルです。
            </Information>

            <Spacer />
            <div style={{ textAlign: "left" }}>[DEBUG] 大きなキャンバスの確認</div>

            <Spacer />
            <div>
                <div style={{ border: "1px solid #000000", width: "1400px", height: "600px", overflow: "auto" }}>
                    <div id={canvasId} style={canvasStyle}>
                        {items}
                    </div>
                </div>
            </div>
        </>
    )
}