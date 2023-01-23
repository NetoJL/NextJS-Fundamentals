import Navigator from "@/components/Navigator";

export default function Home() {
	return (
		<div>
			<Navigator text="Stylish" route="/stylish" />
			<Navigator text="Example" route="/example" />
			<Navigator text="JSX" route="/jsx" />
		</div>
	);
}
