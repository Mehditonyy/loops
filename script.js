const input1 = prompt("What program would you like to run? (length, yell, binary, or numSum?)");
  if (input1 === "length") 
  {
    const userInput = prompt(
      "Enter your word to calculate the number of characters:"
    );
    let count = 0;
    let index = 0;
    while (userInput[index]) 
    {
      count = count + 1;
      index = index + 1;
    }
    alert(`${userInput} has ${count} characters.`);
  } else if (input1 === "yell") 
  {
    const userInput = prompt("Enter your word to yell:");
    let answer = "";
    for (let i = 0; i < userInput.length; i++) {
      answer = answer + userInput[i].toUpperCase();
    }
    alert(answer);
  } else if (input1 === "binary") {
    const userInput = prompt("Enter string to filter for binary:");
    let answer = "";
    for (let i = 0; i < userInput.length; i++) 
    {
      if (userInput[i] == 0 || userInput[i] == 1) answer += userInput[i];
    }
    alert(answer);
  } 
  
    