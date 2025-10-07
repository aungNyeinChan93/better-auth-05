import { db } from "@/database/drizzle";
import { aj, botSettings, rateLimitSettings } from "@/lib/arcjet";
import { rateLimitMiddleware } from "@/middleware/rateLimitMiddleware";
import { findIp } from "@arcjet/ip";
import { detectBot, slidingWindow } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {

    const rateLimitResponse = await rateLimitMiddleware(request);
    if (rateLimitResponse.status !== 200) {
        return rateLimitResponse;
    }
    const searchParmas = request.nextUrl.searchParams;
    const page = Number(searchParmas.get('page')) as number || 1;
    const limit = Number(searchParmas.get('limit')) as number || 10;
    const skip = (page - 1) * limit
    try {
        const tasks = await db.query.tasksTable.findMany({
            with: { user: { columns: { email: true, id: true } } },
            orderBy: (table, { desc }) => desc(table.created_at),
            offset: skip,
            limit: limit
        });
        return NextResponse.json({ success: true, tasks, page, limit, skip }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, error: error instanceof Error ? error?.message : 'tasks fetching fail' })
    }
};


