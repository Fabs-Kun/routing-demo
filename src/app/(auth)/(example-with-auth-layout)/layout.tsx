export default function authLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div>
            <h2>Inner Layout</h2>
            {children}
        </div>
    )
}