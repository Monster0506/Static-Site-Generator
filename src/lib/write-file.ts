const outputDir = "./dist/"

export async function write(fname: string, content: string): void {
    await Bun.write(outputDir + fname, content)
}
