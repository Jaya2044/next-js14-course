type childrenProps = {
    children: React.ReactNode
}

export default function ProductDetailsLayout({children}: childrenProps) {
    return(
        <div>
            {children}
            <h2>Featured Products</h2>
        </div>
    )
}