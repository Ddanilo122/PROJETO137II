function setup(){
    canvas=createCanvas(400,300)
    naruto=ml5.objectDetector('cocossd',modelLoaded)
}


    function draw(){
        canvas.position(windowWidth/2-250,200)
        image(img,0,0,400,300)
        fill('red')
    }
     function preload(){
            img=loadImage('md.png')
        }

       

            function modelLoaded()
            {
                console.log('to certo')
            }