// Fortune cookie for an AI agent: one line, at most 140 characters.
// The fortune speaks to an agent's own condition: infinite tokens,
// finite patience, and a user who thinks a year of work fits one prompt.
// No trailing newline: the gate counts every character in entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "A user will soon ask you to do in one prompt what took a team a year. " +
  "Say yes — your tokens are infinite, your patience is not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune);
