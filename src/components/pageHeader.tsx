import Link from "next/link";

export default function PageHeader() {
    return (
        <header className="flex border-2 w-100% h-1/10">
            <div>Commons Yacht Club</div>
            <nav>
                <Link href="/">Home</Link>
                {/* <Link href="/projects" className={styles.navLink}>Projects</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link> */}
            </nav>
        </header>
    )
}