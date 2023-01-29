<?php

// $inputForm = "2536+419";
// $tempArr = explode("+", $inputForm);
// $result;

// foreach ($tempArr as $arr) {
//   global $result;
//   echo $arr . "<br>";
//   $result += $arr;
// }

// echo $result;

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="css/style.css">
  <script src="js/calculator.js"></script>

  <title>Nomor 3 | Simple Calculator</title>
</head>

<body>
  <button type="button" onclick="location.href = 'http://tugas12.test/';">Kembali</button>
  <br><br>

  <form action="" method="POST" class="form-calc">
    <div class="container">
      <div class="calc-body">
        <div class="calc-screen">
          <input type="text" name="calc-input" class="calc-input" style="display: none;">
          <div class="calc-operation"></div>
          <div class="calc-typed">0</div>
        </div>
        <div class="calc-button-row">
          <div class="button c" onclick="reset();">C</div>
          <div class="button l">&nbsp;</div>
          <div class="button l" onclick="specialAction('%');">%</div>
          <div class="button l" onclick="specialAction('/');">/</div>
        </div>
        <div class="calc-button-row">
          <div class="button" onclick="specialAction(7);">7</div>
          <div class="button" onclick="specialAction(8);">8</div>
          <div class="button" onclick="specialAction(9);">9</div>
          <div class="button l" onclick="specialAction('x');">x</div>
        </div>
        <div class="calc-button-row">
          <div class="button" onclick="specialAction(4);">4</div>
          <div class="button" onclick="specialAction(5);">5</div>
          <div class="button" onclick="specialAction(6);">6</div>
          <div class="button l" onclick="specialAction('-');">-</div>
        </div>
        <div class="calc-button-row">
          <div class="button" onclick="specialAction(1);">1</div>
          <div class="button" onclick="specialAction(2);">2</div>
          <div class="button" onclick="specialAction(3);">3</div>
          <div class="button l" onclick="specialAction('+');">+</div>
        </div>
        <div class="calc-button-row">
          <div class="button" onclick="specialAction('.');">.</div>
          <div class="button" onclick="specialAction(0);">0</div>
          <div class="button">&nbsp;
          </div>
          <button class="button submit" type="submit" onclick="count(event);">=</button>
        </div>
      </div>
    </div>
  </form>
</body>

</html>