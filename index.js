export const debounce = (fn, time = 100) => {
    let timer = null;

	const cancel = () => {
		clearTimeout(timer);
		timer = null;
	};

    function debouncedFn(...args) {
		cancel();

		timer = setTimeout( () => {
			fn(...args);
		}, time )
	}

    debouncedFn.cancel = cancel;

    return debouncedFn;
}

export default debounce;
