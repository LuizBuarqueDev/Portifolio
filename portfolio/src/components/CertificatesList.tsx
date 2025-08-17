'use client';

import { useState } from "react";
import { CertificateCard } from "@/components/CertificateCard";
import { Pagination } from "@/components/Pagination";

interface Certificate {
    title: string;
    preview: string;
    githubUrl: string;
    date: string;
}

interface CertificatesListProps {
    certificates: Certificate[];
}

export const CertificatesList = ({ certificates }: CertificatesListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(certificates.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = certificates.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full p-8 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-sm">
            {currentItems.length === 0 ? (
                <p className="text-gray-400 text-center text-lg mt-20">
                    Nenhum certificado encontrado.
                </p>
            ) : (
                <section className="flex flex-wrap justify-center gap-8">
                    {currentItems.map((certificate, index) => (
                        <CertificateCard key={index} certificate={certificate} />
                    ))}
                </section>
            )}

            <div className="flex justify-center mt-8">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};