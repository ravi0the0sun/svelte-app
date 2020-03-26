<script>

	const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const signs = ['+','-','/','*'];
	let sign;
	let number1;
	let number2;
	let output = 0


	function handle() {
		switch(sign) {
			case('+') : output = number1 + number2; break;
			case('-') : output = number1 - number2; break;
			case('*') : output = number1 * number2; break;
			case('/') : output = number1 / number2; break;
		};
		console.log(output, number1, number2, sign);
	}
</script>

<main>
	<select bind:value={number1}>{#each num as number1}
		<option>{number1}</option>
	{/each}</select>
	<select bind:value={sign}>{#each signs as sign}
		<option>{sign}</option>
	{/each}</select>
	<select bind:value={number2}>{#each num as number2}
		<option>{number2}</option>
	{/each}</select>
	<button onclick={handle}>=</button> {output}
	
</main>

<style></style>