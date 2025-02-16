export default function dashboardLayout({
    children,
    users,
    notifications,
    revenue,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
}){
    const isLoggedIn = false
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: "flex", flex: 1}}>{notifications}</div>
            </div>
        </div>
    ): (
        login
    )
}