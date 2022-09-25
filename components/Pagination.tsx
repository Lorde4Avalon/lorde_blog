import React from 'react'

interface Props {
    pagination: {
        currentPage: number
        pageCount: number
    }
    onPageChange: Function
}

const Pagination = ({ pagination, onPageChange }: Props) => {

    const onPrevious = () => {
        if (pagination.currentPage - 1 <= 0) return
        onPageChange(pagination.currentPage - 1)
    }
    
    const onNext = () => {
        if (pagination.currentPage + 1 > pagination.pageCount) return
        onPageChange(pagination.currentPage + 1)
    }

    const pageRange: number[] = Array.from({ length: pagination.pageCount }, (_, i) => i + 1)


    return (
        <div className="flex justify-center">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                {/* previous arrow */}
                <a onClick={onPrevious} className="cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                    </svg>
                </a>

                {pageRange.map(pageIndex => {
                    if (pageIndex === pagination.currentPage) {
                        return <a
                            onClick={() => onPageChange(pageIndex)}
                            aria-current="page"
                            className="cursor-pointer relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                        >
                            {pageIndex}
                        </a>
                    }
                    return <a
                        onClick={() => onPageChange(pageIndex)}
                        aria-current="page"
                        className="cursor-pointer relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                        {pageIndex}
                    </a>
                })}

                {/* next arrow */}
                <a onClick={onNext} className="cursor-pointer relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                </a>
            </nav>
        </div>
    )
}

export default Pagination