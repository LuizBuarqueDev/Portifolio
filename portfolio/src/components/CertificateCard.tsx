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
            className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <img
                src={certificate.preview}
                alt={`Preview do certificado ${certificate.title}`}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h5 className="text-lg font-semibold text-amber-500">{certificate.title}</h5>
                <p className="text-sm text-gray-500">{new Date(certificate.date).toLocaleDateString()}</p>
            </div>
        </a>
    );
};
