const h1 = document.querySelector(".hello h1")

function handleTitleClick(){
  const clickedClass = "clicked";
  if(h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  };
  //h1.classList.toggle("clicked"); 이 한줄로 위에 있는 모든걸 가능하게함
}//마우스로 title를 click 할 때

function handleMouseEnter(){
  h1.innerText = "Mouse is here"
} //마우스가 h1태그 위에 있을 때

function handleMouseLeave(){
  h1.innerText = "Mouse is gone!"
}//마우스가 h1태그 위에 있지 않을 때

function handleWindowResize(){
  document.body.style.backgroundColor = "yellow";
} //사이즈를 조정할 때

function handleWindowCopy(){
  alert("copier!")
} //window내에서 복사할 때

function handleWindowOffline(){
  alert("SOS no WIFI")
}//wifi가 작동하지 않을 때

function handleWindowOnline(){
  alert("All Good")
} //wifi가 정상작동 할 때

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);