

export type PageContext = {

}

export function generateRandomToken(): string {
    return Math.random().toString(36).slice(-8)
}
