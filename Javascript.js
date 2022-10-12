function onClick()
{
  var quantity=document.getElementById("quantity").value;
  var price=document.getElementById("price").value;
  var sum_money=document.getElementById("sum_money");
  var kol; var sum;
  sum_money.innerHTML = "";
  kol = quantity; sum = price;
  
  if (kol>0 && kol!=NaN && sum>0 && sum!=NaN)
    sum_money.innerHTML="Итоговая стоимость:"+kol*sum;    
  else sum_money.innerText="Неккоретно заполнены значения, попробуйте еще раз";    
}
window.document.addEventListener("DOMContentLoaded", 
function (event) 
{
  console.log("DOM fully loaded and parsed");
  var sum = document.getElementById("btn");
  sum.addEventListener("click", onClick);
});
