    box.findWord = function findWord(word, sentence) {
    // Given word and sentence as two strings, 
    // Return the start and end indices of the word in the sentence as an array
    // (ex. word="morning" sentence="Good morning coders!" should return [5,11])
    word = word.toLowerCase() 
    const ans = [0, 0]
    ans[0] = sentence.search(word)
    ans[1] = ans[0] + word.length -1
    if (ans[0] == -1) return []
    return ans
  }