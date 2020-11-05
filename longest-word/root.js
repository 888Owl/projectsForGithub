function findLongestWordLength() {
    let str = document.getElementById('placer').value
    let returner = document.getElementById('parser')
    let arr = str.split(' ')
    let longestWord = arr[0]
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord.length){
        longestWord = arr[i]
      }
    }
    returner.innerText = longestWord
  }
  
  