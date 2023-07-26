// console.log("test");
var pReso = document.getElementById("j_reso");
var oReso = document.getElementById("o_reso");
var totResult = document.getElementById("tot_result");
var ccPlyer = document.getElementById("cc-player");
var ccOppo = document.getElementById("cc-oppo");
var resPDice = document.getElementById("res_pdice");
var resODice = document.getElementById("res_odice");
var ccPAv = document.getElementById("cc-j-advantage");
var ccOAv = document.getElementById("cc-o-advantage");
var btnSubmit = document.getElementById("btn-submit");

// console.log(
//   pReso,
//   oReso,
//   totResult,
//   ccPlyer,
//   ccOppo,
//   resPDice,
//   resODice,
//   ccPAv,
//   ccOAv
// );
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  var pValue = ccPlyer.value;
  var oValue = ccOppo.value;
  var pdValue = resPDice.value;
  var odValue = resODice.value;
  var paValue = ccPAv.value;
  var oaValue = ccOAv.value;
  //   console.log("cc : " + pValue + oValue);
  //   console.log("dice : " + pdValue + odValue);
  //   console.log("a : " + paValue + oaValue);
});

function evalCombat(ccp, cco, pd, od, pa, oa) {
  return [1, 2, 3];
}
console.log(evalCombat(10, 20, 30, 40, 50, 60));
