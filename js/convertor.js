document.getElementById('unit1').addEventListener('change', convert);
document.getElementById('unit2').addEventListener('change', convert);
document.getElementById('value1').addEventListener('input', convert);

document.getElementById('change_units').addEventListener('click', change_units); 
function change_units (){
  un1 = document.getElementById('unit1').value;
  un2 = document.getElementById('unit2').value;
  document.getElementById('unit2').value = un1;
  document.getElementById('unit1').value = un2;

  val1 = document.getElementById('value1').value; 
  val2 = document.getElementById('value2').value;
  document.getElementById('value2').value = val1;
  document.getElementById('value1').value = val2;

  convert();
}
function convert() {
  const unit1 = document.getElementById('unit2').value;
  const unit2 = document.getElementById('unit1').value;
  const value1 = parseFloat(document.getElementById('value1').value);
  let value2;
switch (unit1) {
    case 'mm':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    case 'cm':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    case 'm':
      value2 = convertFromMeters(value1, unit2);
      break;
    case 'km':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    case 'in':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    case 'ft':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    case 'yd':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    case 'mi':
      value2 = convertFromMeters(convertToMeters(value1, unit1), unit2);
      break;
    default:
      value2 = NaN;
  }

  if (!isNaN(value2)) {
    document.getElementById('value2').value = value2;
  } else {
    document.getElementById('value2').value = 'Невідома одиниця вимірювання';
  }

function convertToMeters(value, unit){
    switch (unit) {
        case 'mm':
          return value * 1000;
        case 'cm':
          return value * 100;
        case 'm':
          return value;
        case 'km':
          return value / 1000;
        case 'in':
          return value * 39.37008;
        case 'ft':
          return value * 3.28084;
        case 'yd':
          return value * 1.093613;
        case 'mi':
          return value * 0.000621;
        default:
          return NaN;
      }
}

function convertFromMeters(value, unit) {
  switch (unit) {
    case 'mm':
      return value / 1000;
    case 'cm':
      return value / 100;
    case 'm':
      return value;
    case 'km':
      return value * 1000;
    case 'in':
      return value / 39.37008;
    case 'ft':
      return value / 3.28084;
    case 'yd':
      return value / 1.093613;
    case 'mi':
      return value / 0.000621;
    default:
      return NaN;
  }
}
}
