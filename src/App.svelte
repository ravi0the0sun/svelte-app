<script>
	const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const signs = ['+','-','/','*'];
	let sign;
	let number1;
	let number2;
	let output = 0

	function assign(sign){
		this.sign = sign
	}
	
	function handleClick() {
		switch(sign) {
			case('+') : output = number1 + number2; break;
			case('-') : output = number1 - number2; break;
			case('*') : output = number1 * number2; break;
			case('/') : output = number1 / number2; break;
		}
	}
</script>

<main>
	<select bind:value={number1}>{#each num as number}
		<option>{number}</option>
	{/each}</select>
	<select bind:value={sign}>{#each signs as sign}
		<option>{sign}</option>
	{/each}</select>
	<select bind:value={number2}>{#each num as number}
		<option>{number}</option>
	{/each}</select>
	= {output}
</main>

<style></style>