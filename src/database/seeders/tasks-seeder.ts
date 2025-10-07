import 'dotenv/config';
import { tasksTable } from "../schema";
import { drizzle } from 'drizzle-orm/neon-http';

const db = drizzle(process.env.DATABASE_URL!);

export async function taskSeeder() {
    try {
        const newTasks = await db.insert(tasksTable).values([
            { task: 'taask one', user_id: '97UAVZg6lU4bwMZD4l2E7HD0tiYr1Cvu' },
            { task: 'taask two', user_id: '97UAVZg6lU4bwMZD4l2E7HD0tiYr1Cvu' },
            { task: 'taask three', user_id: '97UAVZg6lU4bwMZD4l2E7HD0tiYr1Cvu' },
        ]).returning({
            id: tasksTable.id
        });

        console.log({ newTasks });

    } catch (error) {
        console.error(error instanceof Error ? error?.message : 'taksSeeder err')
    }
};

taskSeeder();