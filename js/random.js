document.getElementById("gen__button").addEventListener("click", function() {
  // Отримання значень з інпутів
  var min = parseInt(document.getElementById("value1").value);
  var max = parseInt(document.getElementById("value2").value);

  // Перевірка на коректність введених даних
  if (isNaN(min) || isNaN(max) || min > max) {
      alert("Будь ласка, введіть коректні числа.");
      return;
  }

  // Генерація випадкового числа в діапазоні [min, max]
  var randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  // Виведення згенерованого числа в поле value3
  document.getElementById("value3").value = randomValue;
});
