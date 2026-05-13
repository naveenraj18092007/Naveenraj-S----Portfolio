function searchSection(){

let input=document.getElementById('searchInput').value.toLowerCase();

let sections={
'home':'home',
'about':'about',
'about me':'about',
'skills':'skills',
'projects':'projects',
'certification':'certifications',
'certifications':'certifications',
'achievements':'achievements',
'contact':'contact'
};

if(sections[input]){
document.getElementById(sections[input]).scrollIntoView({
behavior:'smooth'
});
}
else{
alert('Section not found');
}
}