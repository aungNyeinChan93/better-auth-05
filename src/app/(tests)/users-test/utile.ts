


export async function sleep({ duration }: { duration: number }) {
    return await new Promise(r => setTimeout(r, duration))
}