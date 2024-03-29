import { resolve } from "path";
import { readFileSync, readdirSync, statSync, existsSync } from "fs";

function resolveName(packageName, currentName) {
  if (currentName.startsWith(packageName)) {
    return currentName.split(packageName + "/")[1];
  }
}

function resolvePackage(currentImport) {
  if (typeof currentImport === "string") return currentImport;
  else return currentImport["path"];
}

function getPackageName() {
  if (existsSync("./moon.mod.json")) {
    return JSON.parse(readFileSync("./moon.mod.json", "utf-8")).name;
  }
}

export default function parse(dir) {
  let mermaid = "graph LR";
  const files = readdirSync(dir);
  const packageName = getPackageName();
  files.forEach((file) => {
    const filePath = resolve(dir, file);
    if (statSync(filePath).isDirectory()) {
      const pkg = resolve(filePath, "moon.pkg.json");
      if (existsSync(pkg)) {
        const imports = JSON.parse(readFileSync(pkg, "utf-8"))["import"];
        if (imports) {
          for (const current of imports) {
            const from = resolveName(packageName, resolvePackage(current));
            mermaid += `\n${from} --> ${file}`;
          }
        }
      }
    }
  });
  return mermaid;
}
