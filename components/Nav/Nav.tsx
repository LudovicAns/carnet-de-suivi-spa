import Link from "next/link";
import styles from "./Nav.module.scss"

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/analyses">Analyses</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}