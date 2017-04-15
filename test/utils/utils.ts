import * as fs from "fs";
import * as child from "child_process";

export function getWasmInstance(sourcePath: string, outputFile?:string): WebAssembly.Instance {
    outputFile = outputFile || sourcePath.replace(".tbs", ".wasm");
    child.spawnSync('tc', [sourcePath, '--out', outputFile], {stdio: "inherit"});
    const data = fs.readFileSync(outputFile);
    const mod = new WebAssembly.Module(data);
    return new WebAssembly.Instance(mod);
}