const Layout = ({ children }) => {
    return (
        <div className="flex w-screen justify-center md:px-0 items-center">
            {children}
        </div>
    )
}

export default Layout;