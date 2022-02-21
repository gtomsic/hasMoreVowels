const hasMoreVowels = (word) => {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  const vowels = [];
  const contants = [];
  const lowerWord = word.toLowerCase().split('');
  lowerWord.forEach((item) => {
    vowelsArr.includes(item) ? vowels.push(item) : contants.push(item);
  });
  console.log(vowels, contants);
  return vowels.length > contants.length;
};

console.log(hasMoreVowels('moee'));
