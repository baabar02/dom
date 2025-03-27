const BuhniigAguulagch = document.getElementById("buhIrsenDatagHaruulah");

const getGiphyByName = async (name) => {
  const GIP_URL = `https://api.giphy.com/v1/gifs/search?api_key=QPHq62keOwy2IJ46dWicOPFANBwsBnK4&limit=10&offset=0&q=${name}`;

  const resultJsonMaygiin = await fetch(GIP_URL);

  const JsoniigHorvuulsneerAvay = await resultJsonMaygiin.json();

  JsoniigHorvuulsneerAvay.data.map((el) => {
    const father = document.createElement("div");
    const title = document.createElement("div");
    const zurag = document.createElement("img");

    title.innerHTML = el.title;
    zurag.src = el.images.original.webp;

    father.appendChild(title);
    father.appendChild(zurag);

    BuhniigAguulagch.appendChild(father);
  });
};

const search = () => {
  const input = document.getElementById("search").value;
  getGiphyByName(input);
};

window.addEventListener("keypress", (button) => {
  if (button.key === "Enter") {
    search();
  }
});
 

