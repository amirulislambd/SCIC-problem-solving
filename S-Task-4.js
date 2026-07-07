var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const count = new Uint32Array(26);

  for (let i = 0; i < magazine.length; i++) {
    count[magazine.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - 97;

    if (count[index] === 0) return false;

    count[index]--;
  }

  return true;
};

console.log(canConstruct("aa", "aaf")); 