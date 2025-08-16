'use client'

export const Pagination = () => {
    
    const handlerClickPage = () => {
        alert("Event click");
    }

    const handlerClickFistPage = () => {

    }

    const handlerClickLastPage = () => {

    }


    /*------------------------------------------------- HTML --------------------------------------------------------------- */
    return (
        <div className="flex space-x-1 m-5 ml-auto">
            <button onClick={handlerClickFistPage} className="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            <button onClick={handlerClickPage} className="min-w-9 rounded-full bg-slate-800 py-2 px-3.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                1
            </button>

            <button onClick={handlerClickLastPage} className="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}