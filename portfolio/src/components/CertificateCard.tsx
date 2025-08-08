interface CertificateProps {
    certificate: {
        title: string;
        preview: string;
        githubUrl: string;
        date: string;
    };
}

export const CertificateCard = ({ certificate }: CertificateProps) => {
    return (
        <a
            href={certificate.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-80 bg-[var(--color-4)] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                    certificate.preview
                )}&embedded=true`}
                className="w-full h-60"
            ></iframe>
            <div className="p-4">
                <h5 className="text-lg font-semibold text-white">{certificate.title}</h5>
            </div>
        </a>
    );
};
