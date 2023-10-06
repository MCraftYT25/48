const year = "2023";
const date = "2023-10-06"
const version = 0.5;
document.getElementsByTagName("footer")[0].innerHTML = "<div>" + "<span>" + year + "</span>" + '<span class="version"> V' + version + "</span>" + "</div>";

function move_menu()
{
    document.getElementById("menu").scrollIntoView({behavior: 'smooth'});
}