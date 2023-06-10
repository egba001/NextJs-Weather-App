const Links = ({ shortenedLink, handleCopyClick, isCopied, link }) => {
    return (
        <div className="w-full py-4 md:p-5 flex flex-col md:flex-row md:mt-14 justify-between md:justify-between items-center bg-white rounded-md">
            <input readOnly value={link} className="w-full mb-4 border-b pb-4 md:hidden overflow-x-scroll max-h-44 md:h-fit px-4 font-[700]" />
            <div className="w-full px-4 md:flex md:justify-between md:items-center">
             <span className="text-cyan-500 font-[700] md:mb-0">{shortenedLink}</span>
             <button onClick={handleCopyClick} className={`p-3 mt-4 md:mt-0 w-full md:w-[100px] active:bg-cyan-200 text-white ${isCopied ? 'bg-darkViolet' : 'bg-lblue'}  rounded-md`}>
                 <span>{isCopied ? 'Copied!' : 'Copy'}</span>
             </button>
            </div>
        </div>
    )
}
export default Links;