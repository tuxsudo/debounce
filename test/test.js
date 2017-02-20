import test from 'tape';
import debounce from '../index.js';


test('It debounces correctly', t => {
	t.plan(1);

	let debouncedCounter = 0,
		undebouncedCounter = 0,
		fn1 = debounce( () => ++debouncedCounter),
		fn2 = () => undebouncedCounter++,
		clock1 = setInterval(fn1, 25),
		clock2 = setInterval(fn2, 25);

	setTimeout( () => {
		clearInterval(clock1);
		clearInterval(clock2);
		setTimeout(() => {
			t.ok(debouncedCounter===1, `Counter was debounced (${debouncedCounter} vs ${undebouncedCounter})`);
			t.end();
		}, 200);

	}, 1000*2);

});


test('It properly handles arguments', t => {
	t.plan(1);

	let a = 0,
		z = 0,

		fn1 = debounce( ( b, c ) => {
			a = a + b + c;
		}),

		fn2 = ( b, c ) => {
			z = z + b + c;
		},

		clock = setInterval( () => {
			fn1(10, 5);
			fn2(10, 5);
		}, 20);

	setTimeout( () => {
		clearInterval(clock);
		setTimeout(() => {
			t.ok( a===15, `both arguments handled: ${a} vs ${z}`);
			t.end();
		}, 200);

	}, 1000*2);

});


test('it can be cancelled', t => {
	t.plan(1);

	let debouncedCounter = 0,
		undebouncedCounter = 0,
		fn1 = debounce( () => ++debouncedCounter),
		fn2 = () => undebouncedCounter++,
		clock1 = setInterval(fn1, 25),
		clock2 = setInterval(fn2, 25);

	setTimeout( () => {
		clearInterval(clock1);
		clearInterval(clock2);
		fn1.cancel();

		setTimeout(() => {
			t.ok(debouncedCounter===0, `Counter was debounced (${debouncedCounter} vs ${undebouncedCounter})`);
			t.end();
		}, 200);

	}, 1000*2);

});
