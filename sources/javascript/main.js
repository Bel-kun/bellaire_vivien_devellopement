const container = document.querySelector('.container')
const startButton = container.querySelector('.start-button')
const scene = container.querySelector('.scene')

startButton.innerHTML = 'START'
const start = () =>
{
    startButton.style.display = 'none'
    scene.style.display = 'inherit'
    console.log('start')

    for(let i = 0; i < 1; i++)  
    {
        const target = document.createElement('div')
        setTimeout(() => 
        {
            target.classList.add('target')
            target.style.top = Math.random() * 100 + '%'
            target.style.left = Math.random() * 100 + '%'
            scene.append(target)
            const timeStart = Date.now()

            let isSpaceDown = false
            window.addEventListener('keydown', function(press)
            {
                if(press.code === 'Space' && isSpaceDown === false)
                {
                    isSpaceDown = true
                    press.preventDefault()                             
                    target.remove(target)

                    if(scene.children.length === 0)
                    {              
                        startButton.style.display = 'block'
                        console.log('fini')
                        const timeEnd = Date.now()
                        const timeElapsed = timeEnd - timeStart
                        const timeElapsedFormated = timeElapsed / 1000 + 's'
                        console.log(timeElapsed)
                        startButton.style.paddingBottom = '90px'
                        startButton.style.bottom= '7%'
                        startButton.style.left= 'calc(50% - 180px)'
                        startButton.style.fontSize= '36px'
                        startButton.innerHTML = `RESTART<br>${timeElapsedFormated}`
                        
                    } 
                }
            })
            window.addEventListener('keyup', function(press)
            {
                if(press.code === 'Space')
                {
                    // isSpaceDown = false
                }
            })  
        }, Math.random() * 1200);
          
        
        console.log(scene)   
    }                 
}
startButton.addEventListener('click',start)  