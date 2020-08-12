let n=document.querySelectorAll(".drum").length;
for(i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function()
    {
        var drum_key=this.innerHTML;
        sound(drum_key);
        Button_Animation(drum_key);
        
    })
}
addEventListener("keypress",function(event)
{
sound(event.key);
Button_Animation(event.key);
})

function sound(drum_key)
{
    switch(drum_key)
        {
            case "w": var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "a": var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
            case "s": var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
            case "d": var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            case "j":var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "k": var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            case "l":    var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
            default:
                console.log("error");
        }
}
function Button_Animation(drum_key)
{
    var anm1=document.querySelector("."+drum_key);
    anm1.classList.add("pressed")
    setTimeout(function()
    {
        anm1.classList.remove("pressed")
    },100)
}