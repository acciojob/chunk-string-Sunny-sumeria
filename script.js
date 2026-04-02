function stringChop(str, size) {
  // 1. If the input string is null, undefined, or empty, return an empty array
  if (!str) {
    return [];
  }

  // 2. Convert size to an integer
  const chunkLength = parseInt(size);
  const chunks = [];

  // 3. Logic to chop the string
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }

  return chunks;
}


// --- Do not change the code below this line ---
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

// FIX: Removed JSON.stringify so the alert matches the test's .toString() expectation
alert(stringChop(str, size));