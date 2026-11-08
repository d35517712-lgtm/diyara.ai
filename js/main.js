// Mobil menyu / Мобильное меню
(function(){var b=document.querySelector('.burger'),n=document.getElementById('nav');if(!b||!n)return;
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});})();
