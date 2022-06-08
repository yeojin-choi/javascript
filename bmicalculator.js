function bmiCalculator(weight, height){
  bmi = weight/Math.pow(height,2);
  return bmi;
}

var bmi = round(bmiCalculator(65, 1.8));
console.log(bmi);
