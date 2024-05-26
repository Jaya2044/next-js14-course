import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Welcome Home!</h2>
      <Link href="/blog">Blog</Link>&nbsp;&nbsp;
      <Link href="/products">Products</Link>
    </div>
  );
}
