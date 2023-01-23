import Layout from "@/components/Layout";

export default function Jsx() {
	const title = <h1>JSX is a central concept</h1>;

	function subtitle() {
		return <h2>{"very nice".toUpperCase()}</h2>;
	}

	return (
		<Layout title="Understanding JSX">
			<div>
				{title}
				{subtitle()}
				<p>{JSON.stringify({ name: "Joao", age: 30 })}</p>
			</div>
		</Layout>
	);
}
