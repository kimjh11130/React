import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
