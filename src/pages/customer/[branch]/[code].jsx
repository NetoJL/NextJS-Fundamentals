import Layout from "@/components/Layout";
import { useRouter } from 'next/router'

export default function Customer() {
    const router = useRouter()

    return (
        <Layout title="Dinamic Navigation">
            <div>Code = {router.query.code}</div>
            <div>Branch = {router.query.branch}</div>
        </Layout>
    )
}