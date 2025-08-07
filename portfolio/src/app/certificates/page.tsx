import { CertificateCard } from "@/components/CertificateCard";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
};

const owner = "LuizBuarqueDev";
const repo = "Meus-certificados";
const basePath = "";

// 🔁 Função recursiva segura para buscar PDFs
async function fetchAllPdfs(path: string): Promise<any[]> {
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

export default async function CertificatesPage() {
    const pdfs = await fetchAllPdfs(basePath);

    const certificates = await Promise.all(
        pdfs.map(async (pdf) => {
            const commitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?path=${pdf.path}&per_page=1`,
                { headers }
            );
            const commitData = await commitRes.json();
            const date = commitData[0]?.commit?.author?.date || "1970-01-01T00:00:00Z";

            return {
                title: pdf.name.replace(".pdf", ""),
                githubUrl: `https://github.com/${owner}/${repo}/blob/main/${pdf.path}`,
                preview: pdf.download_url,
                date,
            };
        })
    );

    certificates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="flex flex-col items-center min-h-screen p-10">
            <h1 className="text-4xl font-bold mb-6">Certificados</h1>

            {certificates.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                    Nenhum certificado encontrado.
                </p>
            ) : (
                <section className="flex flex-wrap justify-center gap-6">
                    {certificates.map((certificate, index) => (
                        <CertificateCard key={index} certificate={certificate} />
                    ))}
                </section>
            )}
        </div>
    );
}