import { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from '../components/Footer'

export const Layout: FC = ({ children }) => {
    return (
        <div className="bg-black text-white">
            <div id="header">
                <Header />
            </div>
            <div id="body">{children}</div>
            <Footer />
        </div>
    );
};
