import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./auth-schema";
import { relations } from "drizzle-orm";



export const tasksTable = pgTable('tasks', {
    id: uuid().primaryKey().defaultRandom(),
    task: text().notNull(),
    isCompleted: boolean().default(false),
    user_id: text().references(() => usersTable.id, { onDelete: 'cascade' }),

    created_at: timestamp().defaultNow().notNull(),
    updated_at: timestamp().defaultNow().notNull().$onUpdate(() => new Date()),
});


export const taskRelations = relations(tasksTable, ({ many, one }) => ({
    user: one(usersTable, {
        fields: [tasksTable.user_id],
        references: [usersTable.id],
    })
}))