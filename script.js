function stringChop(str, size) {
  // 1. Handle edge cases (null or empty string)
  if (str === null || str.length === 0) return [];

  // 2. Convert size to a Number (since prompt returns a string)
  const chunkLength = Number(size);
  if (chunkLength <= 0) return [];

  const chunks = [];

	
  // 3. The Logic: Loop through the string
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }

  // 4. CRITICAL: Return the array so alert() can see it
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));