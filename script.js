function GoOnElement(adresa){
    var link = document.getElementById(adresa);
    link.scrollIntoView();
}

function downloadDocument(url, filename) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}