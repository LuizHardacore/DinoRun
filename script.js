const dino = document.querySelector('.dino');
let interval = 17;

function handleKeyUp(event){
    if(event.keyCode === 32 || event.keyCode === 87 || event.keyCode === 38) {
        console.log('pipipipopopo')
        jump();
    }
}
function jump() {
    let position = 0;
    
    let upinterval = setInterval(() =>{
        if (position >= 154){
            clearInterval(upinterval);

            let downinterval = setInterval(() => {
               if (position <= 0){
                   clearInterval(downinterval);
               }else{
                position -= 10;
               dino.style.bottom = position + 'px';
               }
            }, interval);
        }else{
        position += 10;

        dino.style.bottom = position + 'px';
        }
    }, interval);
}
document.addEventListener('keyup', handleKeyUp);
console.log(dino);