import Navbar from "./Navbar";
import { useSession } from "next-auth/client";
import Footer from "./Footer";

export default function Layout({ children }) {
    const [session] = useSession()

    return(
        <div>
            <Navbar session={session} />
                {children}
            <Footer />
        </div>
    )
}