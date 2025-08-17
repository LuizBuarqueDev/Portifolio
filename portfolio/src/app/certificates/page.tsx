import { fetchAllPdfs, owner, repo, basePath, headers } from "@/services/githubService";

import { CertificatesList } from "@/components/CertificatesList";

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
        <div className="flex flex-col items-center min-h-screen m-6 py-16 px-4">
            <h2 className="mb-12 tracking-tight">Certificados</h2>
            <CertificatesList certificates={certificates} />
        </div>
    );
}
