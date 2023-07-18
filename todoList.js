function add_item(){
    let item = document.getElementById("box");
    let list_item = document.getElementById("list-item");

    if(item.value != ""){
        let make_li = document.createElement("li"); //<li> ---> Make li
        make_li.appendChild(document.createTextNode(item.value)); //<li>Apple ----> add text in li
        list_item.appendChild(make_li); //<li>Apple</li> -----> close li
        item.value=""

        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }
    }else{
        alert("Please add a value item");
    }

}