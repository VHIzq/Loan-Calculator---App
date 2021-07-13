function calculate(){
  const amount = document.querySelector("#loan").value;
  const rate = document.querySelector("#rate").value;
  const months = document.querySelector("#months").value;

  const interest =  (amount * (rate * 0.01)) / months;
  const total = ((amount / months) + interest).toFixed(2);

  document.querySelector("#payment").innerHTML = `$${total}`;
}


