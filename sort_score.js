// This program returns the grade of a score 

// Store user input in a variable
let score = prompt("What is your score ? \n");

// Test conditional cases
if (score <= 100 && score >= 80 )
{
    console.log(`Grade for your score, ${score} is A.`);
}
else if (score <= 79 && score >= 70)
{
    console.log(`Grade for your score, ${score} is B.`);
}
else if (score <= 69 && score >= 60)
{
    console.log(`Grade for your score, ${score} is C.`);
}
else if (score <= 59 && score >= 50)
{
    console.log(`Grade for your score, ${score} is D.`);
}
else if (score <= 49 && score >= 40)
{
    console.log(`Grade for your score, ${score} is E.`);
}
else if (score <= 39 && score >= 0)
{
    console.log(`Grade for your score, ${score} is F.`);
}
else 
{
    console.log(`Invalid Input!`);
}