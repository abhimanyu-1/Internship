document.getElementById("add").onclick = function() {

    let list = document.getElementById("list");
    let content = document.querySelector(".content");

    if(list.value != ''){

        let item = document.createElement("div");
        item.className = "item";

        let itemText = document.createElement("h1");
        itemText.textContent = list.value;
        
        let imagesDiv = document.createElement("div");
        imagesDiv.className = "images";

        let checkImg = document.createElement("img");
        checkImg.src = "../assignment3/check-mark.png";
        checkImg.className = "check";

        let deleteImg = document.createElement("img");
        deleteImg.src = "../assignment3/trash.png";
        deleteImg.className = "deleted";
        
        imagesDiv.appendChild(checkImg);
        imagesDiv.appendChild(deleteImg);

        item.appendChild(itemText);
        item.appendChild(imagesDiv);

        content.appendChild(item);

        list.value = "";

        checkImg.onclick = function() {
            itemText.style.textDecoration = "line-through";
        }
        
        deleteImg.onclick = function() {
            content.removeChild(item);
        }
    }
}
