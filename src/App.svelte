<script>
	const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const signs = ['+','-','/','*'];
	let sign;
	let number = [];
	let output = 0

	function assign(sign){
		this.sign = sign
	}
	
	function handleClick() {
		switch(sign) {
			case('+') : output = number[0] + number[1]; break;
			case('-') : output = number[0] - number[1]; break;
			case('*') : output = number[0] * number[1]; break;
			case('/') : output = number[0] / number[1]; break;
		}
	}
</script>

<main>
	{#each num as i}
		<button class="btn">{i}</button>
	{/each}
	{#each signs as sign}
		<button class="btn" >{sign}</button>
	{/each}
	<button class="btn" on:click={handleClick} >=</button>
	<p>{output}</p>
</main>

<style></style>