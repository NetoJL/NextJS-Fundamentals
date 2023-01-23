import Navigator from "@/components/Navigator";

export default function Home() {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			flexWrap: 'wrap'
		}}>
			<Navigator text="Stylish" route="/stylish" color="crimson"/>
			<Navigator text="Example" route="/example" />
			<Navigator text="JSX" route="/jsx" />
		</div>
	);
}
