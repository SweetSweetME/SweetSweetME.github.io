import Link from "next/link";

export default function Header() {
    return (
        <div>
            <Link href="/about">
                <a>to about</a>
            </Link>
            <Link href="/index">
                <a>to Home</a>
            </Link>
        </div>
    )
}