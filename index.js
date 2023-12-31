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

  //   *Throw test
  let test = evalCombat(pValue, oValue, pdValue, odValue, paValue, oaValue);
  //   * Inject the result of the test in html
  injectResult(test[0], test[1], test[2], pReso, oReso, totResult);
  //   console.log(test[0], test[1], test[2], pReso, oReso, totResult);
});

// * expect int*3, return int
function fight(cc, d, a) {
  let ad = 0 + parseInt(a);
  let ccCombi = parseInt(cc) + ad * 10;
  let comp = ccCombi - parseInt(d);
  //   console.log(ad, ccCombi, comp);
  let pav = parseInt(comp / 10);
  return pav;
}
// *expect int*6, retrun array[int*3]
function evalCombat(ccp, cco, pd, od, pa, oa) {
  let player = fight(ccp, pd, pa);
  let oppo = fight(cco, od, oa);

  let res = player - oppo;
  return [player, oppo, res];
}
// * expect dom target *3 (pt,ot,ft), expect/inject int*3 (pr,or,fr)
function injectResult(pr, or, fr, pt, ot, ft) {
  pt.innerText = `${pr}`;
  ot.innerText = `${or}`;
  ft.innerText = `${fr}`;
}
// ccpTest = 10;
// pdTest = 30;
// paTest = 1;
// ccoTest = 20;
// odTest = 60;
// oaTest = 2;
// console.log(evalCombat(ccpTest, ccoTest, pdTest, odTest, paTest, oaTest));
