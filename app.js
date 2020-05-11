var immobilesJson = null;
fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
  .then((res) => {
    return res.json();
  })
  .then((imobile) => {
    immobilesJson = imobile;
    sizeImmobilesJson = imobile.length;
    console.log(imobile);
    htmlFromApi = "";
    for (let i = 0; i < sizeImmobilesJson; i++) {
      htmlFromApi += ` <div>
    			<img src=${immobilesJson[i]["photo"]}>
    			<label>${immobilesJson[i]["property_type"]}</label>
    			<span> preço: ${immobilesJson[i]["price"]} R$</span>
            </div>
    `;
    }

    document.getElementById("container-imoveis").innerHTML = htmlFromApi;
  })
  .catch((erro) => {
    console.log("erro:" + erro);
  });

function allImoveis() {
  htmlFromApi = "";
  for (let i = 0; i < sizeImmobilesJson; i++) {
    htmlFromApi += ` 
        <div>
            <img src=${immobilesJson[i]["photo"]}>
            <label>${immobilesJson[i]["property_type"]}</label>
            <span> preço: ${immobilesJson[i]["price"]} R$</span>
        </div>
    `;
  }
  document.getElementById("container-imoveis").innerHTML = htmlFromApi;
}

function apartamentos() {
  htmlFromApi = "";
  for (let i = 0; i < sizeImmobilesJson; i++) {
    if (immobilesJson[i]["property_type"] == "Apartamento") {
      htmlFromApi += ` 
    		<div >
    			<img src=${immobilesJson[i]["photo"]}>
    			<h4>${immobilesJson[i]["property_type"]}</h4>
    			<h5> preço: ${immobilesJson[i]["price"]} R$</h4>
    		</div>
   		`;
    }
  }
  document.getElementById("container-imoveis").innerHTML = htmlFromApi;
}
function casas() {
  htmlFromApi = "";
  for (let i = 0; i < sizeImmobilesJson; i++) {
    if (immobilesJson[i]["property_type"] == "Casa") {
      htmlFromApi += ` 
    		<div >
    			<img src=${immobilesJson[i]["photo"]}>
    			<h4>${immobilesJson[i]["property_type"]}</h4>
    			<h5> preço: ${immobilesJson[i]["price"]} R$</h4>
    		</div>
   		`;
    }
  }
  document.getElementById("container-imoveis").innerHTML = htmlFromApi;
}
function sitios() {
  htmlFromApi = "";
  for (let i = 0; i < sizeImmobilesJson; i++) {
    if (immobilesJson[i]["property_type"] == "Sítio") {
      htmlFromApi += ` 
            <div >
                <img src=${immobilesJson[i]["photo"]}>
                <h4>${immobilesJson[i]["property_type"]}</h4>
                <h5> preço: ${immobilesJson[i]["price"]} R$</h4>
            </div>
        `;
    }
  }
  document.getElementById("container-imoveis").innerHTML = htmlFromApi;
}
function chacaras() {
  htmlFromApi = "";
  for (let i = 0; i < sizeImmobilesJson; i++) {
    if (immobilesJson[i]["property_type"] == "Chácara") {
      htmlFromApi += ` 
            <div >
                <img src=${immobilesJson[i]["photo"]}>
                <h4>${immobilesJson[i]["property_type"]}</h4>
                <h5> preço: ${immobilesJson[i]["price"]} R$</h4>
            </div>
        `;
    }
  }
  document.getElementById("container-imoveis").innerHTML = htmlFromApi;
}

function ordem(a, b) {
  return a.price - b.price;
}

function menorPreco() {
  immobilesJson.sort(ordem);
  htmlFromApi = "";
  for (let i = 0; i < sizeImmobilesJson; i++) {
    if (immobilesJson) {
      htmlFromApi += ` 
            <div >
                <img src=${immobilesJson[i]["photo"]}>
                <h4>${immobilesJson[i]["property_type"]}</h4>
                <h5> preço: ${immobilesJson[i]["price"]} R$</h4>
            </div>
        `;
    }
  }
  document.getElementById("container-imoveis").innerHTML = htmlFromApi;
}
