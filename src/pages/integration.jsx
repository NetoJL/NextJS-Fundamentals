import Layout from "@/components/Layout";
import { useState } from "react";

export default function Integration() {
	const [customer, setCustomer] = useState({});
    const [code, setCode] = useState(1);

	async function getCustomer() {
        const resp = await fetch("http://localhost:3000/api/customers/" + code)
        const data = await resp.json()
        setCustomer(data)
        
		//.then((resp) => resp.json())
		//.then((data) => setCustomer(data));
    }

	return (
		<Layout title="API integration">
			<div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)} />
				<button onClick={getCustomer}>Get customer</button>
			</div>
			<ul>
				<li>Code: {customer.id}</li>
				<li>Name: {customer.name}</li>
				<li>Email: {customer.email}</li>
			</ul>
		</Layout>
	);
}
