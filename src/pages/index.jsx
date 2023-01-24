import Navigator from "@/components/Navigator";

export default function Home() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				flexWrap: "wrap",
			}}>
			<Navigator text="Stylish" route="/stylish" color="crimson" />
			<Navigator text="Example" route="/example" />
			<Navigator text="JSX" route="/jsx" />
			<Navigator text="Navigation #01" route="/navigation" />
			<Navigator
				text="Navigation #02"
				route="/customer/pe-2/123"
				color="green"
			/>
			<Navigator
				text="Component with state"
				route="/state"
				color="yellow"
			/>
		</div>
	);
}
