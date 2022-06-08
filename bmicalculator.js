function bmiCalculator(weight, height){
  bmi = weight/Math.pow(height,2);
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);
