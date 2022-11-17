let searchel=document.getElementById("searchid");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

let extracontainer=document.getElementById("extracontainer");



function createandAppendResults(results){
    let { link, title, description } = results;
   
    let resultItemEl=document.createElement("div");
    resultItemEl.classList.add("result-item","pt-3");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);
  
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);
  
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);
  
    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);
  
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
  
    searchResultsEl.appendChild(resultItemEl);


}

function displayresults(search_results){
    extracontainer.classList.add("d-none");
    spinnerEl.classList.toggle("d-none");
    for (let results of search_results){
        createandAppendResults(results);
    }
    

}
function searchwikipedia(event){
    if(event.key==="Enter"){
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent="";
        let searchtext=searchel.value;
        let url="https://apis.ccbp.in/wiki-search?search="+searchtext;
        let options={
            method:"GET"
        }
        fetch(url,options)
        .then(function(response){
            return response.json();

        })
        .then(function(jsondata){
            let {search_results}=jsondata;
            displayresults(search_results);
        })        

    }


}
searchel.addEventListener("keydown",searchwikipedia);