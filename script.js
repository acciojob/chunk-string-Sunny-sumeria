function stringChop(str, size) {
  // 1. If the string is null, undefined, or empty, return an empty array
  if (!str) return [];

  // 2. If size is not provided (null/undefined), return the whole string in an array
  if (!size) return [str];

  const chunkLength = parseInt(size);
  const chunks = [];

  // 3. Loop through and slice
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));