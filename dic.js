
let dic = "https://api.dictionaryapi.dev/api/v2/entries/en/";


let btt = document.querySelector('.in-search');

let put = document.querySelector('.in-put');

let par = document.querySelector('.in-para');

let par2 = document.querySelector('.in-para2');

let h3 = document.querySelector('h3');



btt.addEventListener('click' , async function() {
    let res = await put.value;
    par.innerHTML = await getDic(res);
    h3.innerText = 'OR';
    par2.innerHTML = await getData(res);
    
})


async function getDic(get) {           
    try {
    let res = await axios.get(dic+ get);
    console.log(res);
    console.log(res.data[0].meanings[0].definitions[0].definition);
    return res.data[0].meanings[0].definitions[0].definition
  
 }
    catch(e) {
        return "Weak connection"
    }
}




async function getData(data) {
    try {
    let res = await axios.get(dic+ data);
    console.log(res);
    console.log(res.data[0].meanings[0].definitions[0].definition);
    return res.data[0].meanings[0].definitions[1].definition
  
 }
    catch(e) {
        return "Weak connection"
    }
}










// fetch(dic);


// let url2 = "https://catfact.ninja/fact";

// fetch(url2)
// .then((res) => {
//     return res.json();
    
// })
// .then((data) => {
//     console.log(data);
//     console.log(data.fact);
//     return fetch(dic);
// })
// .then((res2) => {
//     return res2.json();
// })
// .then((data2) => {
//     console.log(data2);
//     console.log(data2[0].word);
//     console.log(data2[0].meanings[0].definitions[0].definition);
// })
// .catch((e) => {
//     console.log(e);
// })