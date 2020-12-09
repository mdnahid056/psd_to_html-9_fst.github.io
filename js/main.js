$(document).ready(function(){
    $(".navbar-toggler, .overlay").on("click", function(){
        $(".sideBar, .overlay").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("sideBar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})