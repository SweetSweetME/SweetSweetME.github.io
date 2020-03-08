import Header from '../Header';

const Layout = props => {
    return (
        <>
        <Header />
        {props.children}
        <style jsx>
            {`
                div {
                    color: red;
                }
            `}
        </style>
        </>
    )
}

export default Layout