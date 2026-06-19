const path = "./_pages/";

export async function read(name: string): string {
    console.log(Bun.main)
    const file = Bun.file(path+name);
    const text = await file.text();
    return text
}

