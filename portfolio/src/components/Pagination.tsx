'use client';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const handlerClickPage = (page: number) => {
        onPageChange(page);
    };

    const handlerClickFirstPage = () => {
        onPageChange(1);
    };

    const handlerClickLastPage = () => {
        onPageChange(totalPages);
    };

    return (
        <div className="flex space-x-2 m-5 ml-auto">
            <button onClick={handlerClickFirstPage} disabled={currentPage === 1}
                className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800">
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(Math.max(0, currentPage - 3), currentPage + 2)
                .map((page) => (
                    <button
                        key={page}
                        onClick={() => handlerClickPage(page)}
                        className={`min-w-9 rounded-full py-2 px-3 text-center text-sm transition-all ${currentPage === page
                                ? "bg-slate-800 text-white"
                                : "border border-slate-300 hover:bg-slate-800 hover:text-white"
                            }`}
                    >
                        {page}
                    </button>
                ))}

            <button onClick={handlerClickLastPage} disabled={currentPage === totalPages}
                className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800">
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
};