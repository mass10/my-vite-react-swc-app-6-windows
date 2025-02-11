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

    public static getCurrentTimestamp(): string {
        return new Date().toISOString()
    }
}

export function PageTitle(props: { children: React.ReactNode }): JSX.Element {
    return <div style={{ fontSize: "42px", fontWeight: "bold", textAlign: "left", padding: "12px" }}>{props.children}</div>
}

export function Spacer(): JSX.Element {
    return <div className="spacer" />
}

