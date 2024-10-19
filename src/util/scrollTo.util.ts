import { RefObject } from "react";

export default function ScrollTo(ref: RefObject<HTMLDivElement>) {
	if (ref?.current) {
		const offsetPosition = ref.current.offsetTop - 150;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
}
