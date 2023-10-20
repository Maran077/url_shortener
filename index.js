const urlInput = document.getElementById("url")
const shortLinkBtn = document.getElementById('button')
const urlLink = document.querySelector('.copy-text');
const copyBtn = document.querySelector(".copy")
const copyDiv = document.querySelector(".copy-div")

copyDiv.style.display="none"
let url;
try {
       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
              url = tabs[0].url;
              urlInput.value = url
                     ;
       })

} catch (error) {
    console.log(error);
}



shortLinkBtn.addEventListener("click", getInputValue);
copyBtn.addEventListener("click", copyUrl)
async function getInputValue() {
       console.log("hh", urlInput.value);
       const res = await fetch(`https://tinyurl.com/api-create.php?url=${urlInput.value}`)
       copyDiv.style.display="flex"
       copyBtn.innerText="copy"
       // console.log( await res.text())
       if (res.ok) {
              urlLink.value = await res.text();
       } else {
              urlLink.value = await res.text();
       }

}
function copyUrl() {
       // Get the text field


       // Select the text field
       urlLink.select();
       urlLink.setSelectionRange(0, 99999); // For mobile devices

       // Copy the text inside the text field
       navigator.clipboard.writeText(urlLink.value);

       // Alert the copied text
       copyBtn.innerText="copied"
}
