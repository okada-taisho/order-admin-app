"use client"
import { signOut } from 'next-auth/react'
const LogoutBtn = () => {
    return <button className="text-white" onClick={() => signOut()}>ログアウト</button>
}

export default LogoutBtn
