'use client'
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavBar({title, param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    return (
        <Link
            href={`?genre=${param}`}
            className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''} `}>
            <p>{title}</p>
        </Link>
    );
}