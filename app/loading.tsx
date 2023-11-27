import  Loader  from "./components/Loader/Loader";

export default function Loading() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center">
			<Loader />
		</div>
	);
}
