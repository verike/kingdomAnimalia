//Comparing Emmanuels BMI to Stanley's


let name_2 = "Stanley", name_1 = "Emmanuel";

//  Heights in (m)
let stanHeight = 1.76, emmaHeight = 1.56;

// Weights in kg

let stanWeight = 85, emmaWeight = 76;


// Calculating the BMI
function bmiCalculator (weight, height)
{
    let bmi = weight / (height * height);

    return bmi;
}

// Creating an object of the bmiCalculator function

let stanBMI = bmiCalculator(stanWeight, stanHeight);

let emmaBMI = bmiCalculator(emmaWeight, emmaHeight);

// Comparison 
function compareThese (bmi_1, bmi_2)
{
    if (bmi_1 > bmi_2)
    {
        console.log(`${name_1}'s BMI (${bmi_1}) is higher than ${name_2}'s (${bmi_2})!`);
    }
    else
    {
        console.log(`${name_2}'s BMI (${bmi_2}) is higher than ${name_1}'s (${bmi_1})!`);
    }
}

// Calling the comparison function
compareThese(stanBMI, emmaBMI);