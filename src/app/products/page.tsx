import Link from "next/link"

export default function ProductList() {
    const productId = 100;
    return(
        <div>
            <Link href="/">Home</Link>
            <h2>Product List:</h2>
            <h3><Link href="products/1">Product 1</Link></h3>
            <h3><Link href="products/2">Product 2</Link></h3>
            <h3><Link href="products/3" replace>Product 3</Link></h3>
            <h3><Link href={`products/${productId}`}>Product {productId}</Link></h3>
        </div>
    )
}