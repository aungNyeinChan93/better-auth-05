import { queryOptions } from "@tanstack/react-query";

export function getTasksQueryOption() {
    return queryOptions({
        queryKey: ['tasks'],
        queryFn: () => getAllTasks()
    })
};

export async function getAllTasks() {
    try {
        const tasks = await fetch(`/api/tasks`).then(res => res.json());
        return tasks;
    } catch (error) {
        console.log(error instanceof Error ? error?.message : 'get all tasks data fetching error!')
    }

}