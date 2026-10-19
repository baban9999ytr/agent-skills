import assert from "node:assert/strict";
import { test } from "node:test";
import { validateSkillDirectory } from "../scripts/validate-skills.mjs";

const root = new URL("../skills/", import.meta.url);

test("every original skill has portable frontmatter and a unique name", async () => {
  const result = await validateSkillDirectory(root);

  assert.equal(result.errors.length, 0, result.errors.join("\n"));
  assert.deepEqual(new Set(result.names).size, result.names.length);
  assert.ok(result.names.includes("apple-design-expert"));
});
