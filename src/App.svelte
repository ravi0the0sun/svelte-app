<script>

	import { onMount } from 'svelte';

	const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const signs = ['+','-','/','*'];
	let sign;
	let number1 = 0;
	let number2 = 0;
	$: output = function (number1, number2, sign) {
		console.log(output, number1, number2, sign);

		switch(sign) {
			case('+') : output = number1 + number2; break;
			case('-') : output = number1 - number2; break;
			case('*') : output = number1 * number2; break;
			case('/') : output = number1 / number2; break;
		};
		return output;
	};
	 
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
	= {output}
	
</main>

<style></style>