document
  .querySelector("button[name=triangle]")
  .addEventListener("click", () => {
    document.querySelector("#output").innerHTML = `
    *
    <br/>
    * *
    <br/>
    * * *
    <br/>
    * * * *
    <br/>
    * * * * *`;
  });

document.querySelector("button[name=pyramid]").addEventListener("click", () => {
  document.querySelector("#output").innerHTML = `
&nbsp &nbsp &nbsp &nbsp *
<br/>
 &nbsp &nbsp &nbsp * * *
<br/>
&nbsp &nbsp * * * * *
<br/>
&nbsp * * * * * * *
<br/>
* * * * * * * * *`;
});

document
  .querySelector("button[name=reverse-pyramid]")
  .addEventListener("click", () => {
    document.querySelector("#output").innerHTML = `
  * * * * * * * * *
  <br/>
  &nbsp * * * * * * *
  <br/>
  &nbsp &nbsp * * * * *
  <br/>
  &nbsp &nbsp &nbsp * * *
  <br/>
&nbsp &nbsp &nbsp &nbsp *
`;
  });

document.querySelector("button[name=clear]").addEventListener("click", () => {
  document.querySelector("#output").innerHTML = "";
});
