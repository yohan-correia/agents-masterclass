import "dotenv/config";
import { generateText, type ModelMessage } from "ai";
import { openai } from "@ai-sdk/openai";
import { tools } from "./tools/index.ts";
import { executeTool } from "./executeTools.ts";
import { SYSTEM_PROMPT } from "./system/prompt";
import type { AgentCallbacks } from "../types.ts";
const MODEL_NAME = "gpt-5-mini";

export const runAgent = async (
    userMessage: string,
    conversationHistory: ModelMessage[],
    callbacks: AgentCallbacks,
) => {
    const { text, toolCalls } = await generateText({
        model: openai(MODEL_NAME),
        prompt: userMessage,
        system: SYSTEM_PROMPT,
        tools: tools,
    });

    console.log(text);

    toolCalls.forEach(async (tc) => {
        console.log(await executeTool(tc.toolName, tc.input));
    });
}
runAgent (
    "Hello, what date is today? I have travel scheduled for the 29th and I need to know the current date."
);