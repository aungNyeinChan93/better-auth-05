export type ReturnType<T> = [T | null, string | null];

export async function tryCatch<T>(cb: () => Promise<T>): Promise<ReturnType<T>> {
    try {
        const result = await cb();
        return [result, null];
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Something went wrong";
        return [null, message];
    }
}