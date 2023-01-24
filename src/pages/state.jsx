import Layout from "@/components/Layout";
import { useState } from "react";

export default function State() {
    const [number, setNumber] = useState(0)

    function increment() {
        setNumber(number + 1)
    }

    return (
        <Layout title='Component with state'>
            <div>{number}</div>
            <button onClick={increment}>Increment</button>
        </Layout>
    )
}