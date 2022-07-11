var profile = document.getElementById("profile-id");
var main1 = document.getElementById("main-profile");
var main4 = document.getElementById("main-4");
var edu = document.getElementById("edu");
var edh1 = document.getElementById("edu-id");
var ph1 = document.getElementById("ph-1");
var ah1 = document.getElementById("ah1");
var about = document.getElementById("about-id")
var main2 = document.getElementById("main-2")
var eh1 = document.getElementById("eh-1")
var Experience = document.getElementById("Experience")
var main3 = document.getElementById("main-3")
ph1.style.color = "#4EAABF";
ah1.style.color = "#212529";
eh1.style.color = "#212529";
function loadingdata() {
    profile.style.backgroundColor = "#212529";
    ph1.style.color = "#4EAABF!important";
    main2.style.display = "none";
    main3.style.display = "none";
    // main1.style.display = "none";



}
loadingdata();

function loadAbout() {
    main1.style.display = "none";
    about.style.backgroundColor = "#212529";
    about.style.color = "#4EAABF";
    ph1.style.color = "#212529";
    ah1.style.color = "#4EAABF";
    eh1.style.color = "#212529";
    Experience.style.backgroundColor = "#4EAABF";
    main4.style.display = "none";
    edu.style.backgroundColor = "#4EAABF";
    edh1.style.color = "#212529";

    profile.style.backgroundColor = "#4EAABF";
    main2.style.display = "block";
    main3.style.display = "none";

}
function loadEx() {
    Experience.style.backgroundColor = "#212529";
    console.log(Experience)
    eh1.style.color = "#4EAABF";
    main1.style.display = "none";
    main2.style.display = "none";
    main3.style.display = "flex";
    ah1.style.color = "#212529";
    ph1.style.color = "#212529";
    profile.style.backgroundColor = "#4EAABF";
    about.style.backgroundColor = "#4EAABF";
    main4.style.display = "none";
    edu.style.backgroundColor = "#4EAABF";
    edh1.style.color = "#212529";
}
function loadEdu() {
    main4.style.display = "flex";
    main1.style.display = "none";
    main2.style.display = "none";
    main3.style.display = "none";
    about.style.backgroundColor ="#4EAABF";
    ah1.style.color="#212529";
    edu.style.backgroundColor = "#212529";
    edh1.style.color = "#4EAABF";
    eh1.style.color = "#212529";
    Experience.style.backgroundColor = "#4EAABF";
}
