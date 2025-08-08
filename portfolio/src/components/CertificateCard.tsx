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
            className="w-75 bg-[var(--color-4)] rounded-lg shadow-md overflow-hidden border-gray-200 border"
        >
            
            <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                    certificate.preview
                )}&embedded=true`}
                className="w-full h-70 mt-4"
            ></iframe>

            <div className="p-4">
                <h5 className="text-lg font-semibold text-white">{certificate.title}</h5>
            </div>
        </a>
    );
};
