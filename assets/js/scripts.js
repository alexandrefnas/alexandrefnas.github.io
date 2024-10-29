const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

let currentTheme;

function changeTheme() {
  currentTheme = rootHtml.getAttribute("data-theme");
  
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")
    toggleTheme.classList.toggle("bi-sun");
  
  toggleTheme.classList.toggle("bi-moon-stars");
  console.log(currentTheme);
    descritionGit(currentTheme);
}
    
    
toggleTheme.addEventListener("click", changeTheme);


accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})
  
menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
})


function descritionGit(currentTheme) {
  const baseUrl = "https://github-readme-stats.vercel.app/api/top-langs?";
  const usuario = "username=alexandrefnas";
  const layout = "compact";
  let bg_color; // = "0D1117"; // corDeFundo; 
  const border_color = "fff";
  let title_color; // = "0D1117"; //"4886CC";
  let text_color; // = "FFF";
  const showIcons = "show_icons=true";
  // console.log(currentTheme);
  if (currentTheme === "dark") {
    bg_color = "fff";
    title_color = "fff";
    text_color = "000"
  }
  else {
    bg_color = "0D1117";
    title_color = "0D1117";
    text_color = "fff"
  }
  const caminho = baseUrl+usuario+"&layout="+layout+"&bg_color="+bg_color+"&border_color="+border_color+"&title_color="+title_color+"&text_color="+text_color;
  
  document.getElementById("git__status").src = caminho;  
}

descritionGit();