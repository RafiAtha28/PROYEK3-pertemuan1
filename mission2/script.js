function tambah(id) {
    var parent = id.parentElement;
    parent.parentNode.removeChild(parent);
    var move = document.getElementById("friend");
    console.log(move);
}