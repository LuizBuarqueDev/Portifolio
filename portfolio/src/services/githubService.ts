const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
};

export const owner = "LuizBuarqueDev";
export const repo = "Meus-certificados";
export const basePath = "";

export async function fetchAllPdfs(path: string): Promise<any[]> {
    try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            headers,
            next: { revalidate: 3600 },
        });

        const items = await res.json();

        if (!Array.isArray(items)) {
            console.error("Resposta inesperada da API:", items);
            return [];
        }

        const pdfs: any[] = [];

        for (const item of items) {
            if (item.type === "file" && item.name.endsWith(".pdf")) {
                pdfs.push(item);
            } else if (item.type === "dir") {
                const subPdfs = await fetchAllPdfs(item.path);
                pdfs.push(...subPdfs);
            }
        }

        return pdfs;
    } catch (error) {
        console.error("Erro ao buscar arquivos:", error);
        return [];
    }
}