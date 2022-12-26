import { ReactNode } from "react";

import Header from "./Header/Index";
import Footer from "./Footer/Index";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}