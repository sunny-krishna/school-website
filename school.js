var links=document.querySelectorAll('.social-links img');
for(link of links)
{
link.addEventListener('mouseover',function()
{
    this.animate([
        {transform:'scale(1.5) rotate(360deg)'},
    ],{
        duration:1000,
        easing:'ease-in-out',
    
    });

});
}




