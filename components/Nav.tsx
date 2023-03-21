import Link from "next/link";

export default function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/analyses">Analyses</Link>
                </li>
                <li>
                    <Link href="">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}