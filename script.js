function getGrades(req1, req2, req3) {
  console.log(req1 + req2 + req3);
  return getSum(req1, req2, req3);
}

function getSum (r1, r2, r3) {
  let sum = r1 + r2 + r3;
  console.log(sum);
  return getPercent(sum);
}

function getPercent(s) {
  const HPS = 20 + 30 + 50; //gets the percent grade
  let percentage = s / HPS * 100;
  console.log(percentage);
  return getTenta(percentage);
}

function getTenta (p) {
  let tenta; //gets the tentative grade according to the grading system
  if (p <= 100 && p >= 96) {
    tenta = 1.00;
  }
  else if (p < 96 && p >= 90) {
    tenta = 1.25;
  }
  else if (p < 90 && p >= 84) {
    tenta = 1.50;
  }
  else if (p < 84 && p >= 78) {
    tenta = 1.75;
  }
  else if (p < 78 && p >= 72) {
    tenta = 2.00;
  }
  else if (p < 72 && p >= 66) {
    tenta = 2.25;
  }
  else if (p < 66 && p >= 60) {
    tenta = 2.50;
  }
  else if (p < 60 && p >= 55) {
    tenta = 2.75;
  }
  else if (p < 55 && p >= 50) {
    tenta = 3.00;
  }
  else if (p < 50 && p >= 40) {
    tenta = 4.00;
  }
  else {
    tenta = 5.00;
  }
  console.log(tenta);
  return tenta;
}

function getFinal(current, previous) {
	console.log((current * 2 + previous) / 3); //gets the final grade
	return (current * 2 + previous) / 3;
}

function calcGrade() {
  let sub1Tenta = getGrades(
  parseFloat(document.querySelector("#s1req1").value), 
  parseFloat(document.querySelector("#s1req2").value), 
  parseFloat(document.querySelector("#s1req3").value)
  ); //gets the tentative grades using the inputs
  console.log(sub1Tenta);
  document.getElementById("s1Tenta").innerHTML = sub1Tenta;
  let sub2Tenta = getGrades(
  parseFloat(document.querySelector("#s2req1").value), 
  parseFloat(document.querySelector("#s2req2").value), 
  parseFloat(document.querySelector("#s2req3").value)
  );
  console.log(sub2Tenta);
  document.getElementById("s2Tenta").innerHTML = sub2Tenta;
  let sub3Tenta = getGrades(
  parseFloat(document.querySelector("#s3req1").value), 
  parseFloat(document.querySelector("#s3req2").value), 
  parseFloat(document.querySelector("#s3req3").value)
  );
  console.log(sub3Tenta);
  document.getElementById("s3Tenta").innerHTML = sub3Tenta;
  let sub1 = getFinal(
  sub1Tenta, 
  parseFloat(document.querySelector("#s1Previous").value)
  ); //gets the final grades using the inputs
  console.log(sub1);
  document.getElementById("s1Final").innerHTML = sub1;
  let sub2 = getFinal(
  sub2Tenta, 
  parseFloat(document.querySelector("#s2Previous").value)
  );
  console.log(sub2);
  document.getElementById("s2Final").innerHTML = sub2;
  let sub3 = getFinal(
  sub3Tenta, 
  parseFloat(document.querySelector("#s3Previous").value)
  );
  console.log(sub3);
  document.getElementById("s3Final").innerHTML = sub3;
  document.getElementById("averageRounded").innerHTML = getAverage(sub1, sub2, sub3); //gets average of all subjects and GWA
}

function getAverage(subject1, subject2, subject3) {
	let a = (subject1 + subject2 + subject3) / 3; //gets average of all grades
	console.log(a);
	document.getElementById("average").innerHTML = a;
	return getGWA(a);
}

function getGWA(g) {
	let gwa; //rounds off average to get GWA
	console.log(g);
  if (g >= 1.000 && g <= 1.125) {
    gwa = 1.00;
  }
  else if (g > 1.125 && g <= 1.375) {
    gwa = 1.25;
  }
  else if (g > 1.375 && g <= 1.625) {
    gwa = 1.50;
  }
  else if (g > 1.625 && g <= 1.875) {
    gwa = 1.75;
  }
  else if (g > 1.875 && g <= 2.125) {
    gwa = 2.00;
  }
  else if (g > 2.125 && g <= 2.375) {
    gwa = 2.25;
  }
  else if (g > 2.375 && g <= 2.625) {
    gwa = 2.50;
  }
  else if (g > 2.625 && g <= 2.875) {
    gwa = 2.75;
  }
  else if (g > 2.875 && g <= 3.500) {
    gwa = 3.00;
  }
  else if (g > 3.500 && g <= 4.500) {
    gwa = 4.00;
  }
  else {
    gwa = 5.00;
  }
  console.log(gwa);
  return gwa;
}