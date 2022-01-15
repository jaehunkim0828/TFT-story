import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();

    return (
        <div>
            {router.pathname}
        </div>
    )
}