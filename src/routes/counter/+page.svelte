<script lang="ts">
	let count = 0;

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}

	function reset() {
		count = 0;
	}
</script>

<h1>Counter</h1>

<h2>{count}</h2>
<button on:click={decrement}>-</button>
<button on:click={reset}>reset</button>
<button on:click={increment}>+</button>
