var main=0;
var i=0;
var list=["one","two","three","four","five","seven","eight","nine","ten","eleven"];
q=0;
var abc
function start()
{
  main=!main;
  if(main)
  {
    alert('Happy Birthday Ashishit');
    abc=setInterval(flip,250);
  }
  else
  {
    alert('Bas ab khush ho jaa');
    clearInterval(abc);
  }
}
function flip()
{
  document.getElementById(list[i]).classList.toggle('flip');
  i++;
  if(i==10)
  {
    i=0;
  }
}
