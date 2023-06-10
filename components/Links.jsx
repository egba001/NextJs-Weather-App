const Links = ({ shortenedLink, handleCopyClick, isCopied }) => {
    return (
        <div className="w-full p-5 flex justify-between items-center bg-white rounded-md">
            {shortenedLink}
            <button onClick={handleCopyClick} className={`p-3 w-[100px] active:bg-cyan-200 text-white ${isCopied ? 'bg-darkViolet' : 'bg-lblue'}  rounded-md`}>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
            </button>
        </div>
    )
}
export default Links;