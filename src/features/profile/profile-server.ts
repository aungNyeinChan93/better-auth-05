'use server'

import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export type ServerSession = Awaited<ReturnType<typeof getServerSession>>;

export async function getServerSession() {
    const session = await auth.api.getSession({ headers: await headers() })
    return session;
}