const Layout = ({ children }) => {
    return (
        <div className="flex w-screen justify-center">
            <div className="max-w-[1000px]">
                {children}
            </div>
        </div>
    )
}

export default Layout;