"use client"

import Loading from "@/components/loading"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "@/libs/constants"

export default function AdminLayout({ children, }: { children: React.ReactNode }) {
	const router = useRouter()
	const pathname = usePathname()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const verifyToken = async () => {
			try {
				await axios.post(`${API_URL}/admin/verify`, {}, {
					withCredentials: true
				})
				setLoading(false)
			} catch (e) {
				router.push("/admin/login")
			}
		}
		verifyToken()
	}, [])

	return (
		<div>
			{loading && pathname != '/admin/login' ?
				<Loading />
				: children}
		</div>
	)
}
