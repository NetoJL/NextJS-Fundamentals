import Layout from "@/components/Layout";

export async function getServerSideProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Dinamic(props) {
    return (
        <Layout title='Dinamic content'>
            <div>{props.number}</div>
        </Layout>
    )
}