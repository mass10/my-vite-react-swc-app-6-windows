import { useEffect, useState } from "react"
import { PageTitle, Spacer } from "../lib/utils"
import { Information } from "../atom/Information"

/**
 * zoom によって、拡大・縮小表示するキャンバス
 */
function ZoomCanvas(props: {}): JSX.Element {
    const [innerText, setInnerText] = useState<string>("")

    const updateSizeInformation = () => {
        const element = document.getElementById("bbb1");
        const rect1 = element?.getBoundingClientRect();
        const line = `left: ${rect1?.left}, top: ${rect1?.top}, width: ${rect1?.width}, height: ${rect1?.height}`;
        // replace inner text
        setInnerText(line);
    };

    useEffect(() => {
        updateSizeInformation();
        window.addEventListener("resize", updateSizeInformation);
        return () => {
            window.removeEventListener("resize", updateSizeInformation);
        }
    }, [])

    return (
        <div id="bbb1" style={{ textAlign: "left", height: "400px", width: "400px", backgroundColor: "#90a0b0" }}>
            {innerText}
        </div>
    )
}

export function Zoom2(props: {}): JSX.Element {

    // 拡大率
    const [scale, setScale] = useState<number>(1.0)

    useEffect(() => {
        console.log(`[TransformOrZoomPage1] scale: ${scale}`)
    }, [scale])

    return (
        <>
            <PageTitle>transform/zoom の確認</PageTitle>

            <Spacer />
            <Information>
                拡大と縮小のサンプルです。
            </Information>

            <Spacer />
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <div style={{ textAlign: "left" }}>拡大率: 0.1～2.0</div>
                <input type="range" min="0.1" max="2.0" step="0.1" defaultValue="1.0"
                    onChange={(e) => {
                        const scale = parseFloat(e.target.value)
                        setScale(scale)
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <div style={{ padding: 5, width: 500, height: 500, border: "1px solid black", zoom: scale }}>
                    <ZoomCanvas />
                </div>
            </div>
        </>
    )
}
