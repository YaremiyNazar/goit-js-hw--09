!function(){var t=document.body,e=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]"),s=document.createElement("div");s.appendChild(e),s.appendChild(l),t.insertBefore(s,t.children[1]);var i=document.body,n=null;l.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,l.disabled=!1,n=setInterval((function(){i.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),l.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,l.disabled=!0})),s.style.position="absolute",s.style.top="50%",s.style.left="50%",s.style.transform="translate(-50%, -50%)",s.firstChild.style.alignItems="center",s.style.textContent="center",s.firstChild.style.marginRight="20px",s.firstChild.style.textTransform="uppercase",s.firstChild.style.fontSize="30px",s.firstChild.style.padding="30px",s.firstChild.style.cursor="pointer",s.lastChild.style.textTransform="uppercase",s.lastChild.style.fontSize="30px",s.lastChild.style.padding="30px",s.lastChild.style.cursor="pointer"}();
//# sourceMappingURL=01-color-switcher.5a240a74.js.map