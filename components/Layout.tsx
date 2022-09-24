import React from 'react'
import { Header, Footer } from './'

type Props = {
    children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout