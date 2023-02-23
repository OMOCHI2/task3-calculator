function calcButton(target) {
  let targetValue = target.innerHTML;
  let result = document.getElementById("calc-result");

  //ACボタンが押されたときは０表示に戻す
  if (targetValue === "AC") { 
    result.innerHTML = "0";

    //=ボタンが押されたときは×を*に・÷を/に戻し、入力された式を計算し結果を表示させる
  } else if (targetValue === "=") {
    let replaceTargetValue = result.innerHTML.replace("×", "*").replace("÷", "/"); 
    result.innerHTML = eval(replaceTargetValue);

    //数字ボタンが押された際に０しか表示されてなかったときは、先頭に０が残らないように処理する
  } else if (result.innerHTML === "0" && !isNaN(targetValue)) {
    result.innerHTML = targetValue;

    //それ以外の場合の処理
  } else {
    if (isNaN(targetValue)) {
      let slicedValue = result.innerHTML.slice(-1);          //四則キーを押したとき
      if (result.innerHTML !== "0" && !isNaN(slicedValue)) { //直近で押した四則キーを除いた表示が、"０ではない数字"の場合にのみ
        result.innerHTML += targetValue;                     //押したキーの演算子を付与＝演算子の初手入力・連続入力を反映させない
      }
    } else {
      //数字ボタン入力の時は単純に文字連結
      result.innerHTML += targetValue; 
    }
  }
}
