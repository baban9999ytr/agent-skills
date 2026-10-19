import { readdir, readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export async function validateSkillDirectory(directoryUrl) {
  const directory = fileURLToPath(directoryUrl);
  const entries = await readdir(directory);
  const names = [];
  const errors = [];

  for (const entry of entries) {
    const skillDirectory = `${directory}/${entry}`;
    if (!(await stat(skillDirectory)).isDirectory()) {
      continue;
    }

    const skillPath = `${skillDirectory}/SKILL.md`;
    let content;
    try {
      content = await readFile(skillPath, "utf8");
    } catch {
      errors.push(`${entry}: missing SKILL.md`);
      continue;
    }

    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!match) {
      errors.push(`${entry}: frontmatter must be first`);
      continue;
    }

    const name = match[1].match(/^name:\s*([^\r\n]+)$/m)?.[1]?.trim();
    const description = match[1]
      .match(/^description:\s*([^\r\n]+)$/m)?.[1]
      ?.trim();
    if (!name || !description) {
      errors.push(`${entry}: name and description are required`);
      continue;
    }
    if (!/^[a-z0-9-]+$/.test(name)) {
      errors.push(
        `${entry}: name must use lowercase letters, numbers, and hyphens`,
      );
    }
    if (name !== entry) {
      errors.push(`${entry}: folder must match frontmatter name ${name}`);
    }
    names.push(name);
  }

  if (new Set(names).size !== names.length) {
    errors.push("skill names must be unique");
  }

  return { names, errors };
}

if (import.meta.main) {
  const result = await validateSkillDirectory(
    new URL("../skills/", import.meta.url),
  );
  if (result.errors.length > 0) {
    console.error(result.errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`Validated ${result.names.length} skills.`);
  }
}
