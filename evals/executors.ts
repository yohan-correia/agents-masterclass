
import { generateText, stepCountIs, tool, type ToolSet } from "ai"
import { openai } from "@ai-sdk/openai";
import z from "zod";
import { buildMessages } from "./utils.ts";

import type {
  EvalData,
  SingleTurnResult,
  MultiTurnEvalData,
  MultiTurnResult,
} from "./types.ts";

const TOOL_DEFINITIONS: any = {
    readFile: {
        description: "Read the contents of a file at the specified path",
        parameters: z.object({
              path: z.string().describe("the path to the file that you want to read"),
          }),
    },
    writeFile: {
      description: "Write given content to the file at the given path",
      parameters: z.object({
          path: z.string().describe("the path to the file that you want to read"),
          content: z.string().describe('the'),
        }),
    },
    listFiles: {
      description: "list all the files in a directory",
      parameters: z.object({
          path: z.string().describe("the path to the file that you want to read"),
      }),
    },
    deleteFile: {
      description: "delete a file at the given path",
      parameters: z.object({
          path: z.string().describe("the path to the file that you want to delete"),
        }),
    },
    runCommand: {
      description: "execute a shell command and return its output",
      parameters: z.object({
          path: z.string().describe("the shell command to execute"),
        }),
    },
};

export const singleTurnExecuter = async (data: EvalData) => {
    const messages = buildMessages(data);

    const tools: ToolSet = {};
    for (const toolName of data.tools) {
        const def = TOOL_DEFINITIONS[toolName];
    }
};
