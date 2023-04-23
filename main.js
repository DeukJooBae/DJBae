function countCharacters() {
  var input = document.getElementById("input-text").value;
  var result = document.getElementById("result");
  result.innerHTML = "글자수: " + input.length;
}