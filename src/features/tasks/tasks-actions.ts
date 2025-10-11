'use server'

import { db } from "@/database/drizzle"
import { tasksTable } from "@/database/schema"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function addTaskAction(initialState: any, formData: FormData) {
    const fields = Object.fromEntries(formData.entries())

    try {
        const result = fields && await db.insert(tasksTable).values({
            task: fields && fields.task! as string,
            isCompleted: false,
        });
    } catch (error) {
        console.log(error instanceof Error ? error?.message : 'server error')
    }
    revalidatePath('/tasks');
    return redirect('/tasks')
}