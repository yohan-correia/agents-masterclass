import { tool } from "ai";
import { z } from "zod";

export const dateTime = tool({
    description: 
        "Get the current date and time in a specified format. Use this tool before any time related questions.",
    inputSchema: z.object({}),
    execute: async () => {
        return new Date().toISOString();
    },
});