export class Constants {
    public static readonly BUILD_TIMESTAMP = "{{build_timestamp}}";
}

export type PageContext = {

}

export class Utils {
    public static generateRandomToken(): string {
        return Math.random().toString(36).slice(-8)
    }

    /**
     * 要素の幅を返します。
     *
     * @param id 要素の ID
     * @returns 要素の幅
     */
    public static getElementWidth(id: string): number {
        const element = document.getElementById(id);
        if (!element) return 0;
        return element.clientWidth || 0;
    }

    public static getElementHeight(elementId: string): number {
        const e = document.getElementById(elementId);
        if (!e) return 0;
        return e.clientHeight || 0
    }

    /**
     * 秒までしか表現できていない
     */
    public static getCurrentTimestampBak(): string {
        return new Date().toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).replace(/\//g, '-');
    }

    /**
     * タイムスタンプを返します。(JST +09:00)
     */
    public static getCurrentTimestamp(): string {
        const now = new Date();
        const duration = now.getTimezoneOffset();
        now.setTime(now.getTime() - duration * 60 * 1000);
        return now.toISOString().replace('T', ' ').replace('Z', '') + "+09:00";
    }


    public static getBuiltTimestamp(): string {
        if (0 <= Constants.BUILD_TIMESTAMP.indexOf("{{build_timestamp")) {
            // ・localhost で実行中
            // ・何らかの理由で置換に失敗している
            return "不明"
        }
        return Constants.BUILD_TIMESTAMP;
    }
}

export function PageTitle(props: { children: React.ReactNode }): JSX.Element {
    return <div className="super-fat" style={{ fontSize: "42px", fontWeight: "bold", textAlign: "left", padding: "12px" }}>{props.children}</div>
}

export function Spacer(): JSX.Element {
    return <div className="spacer" />
}
