function setup(){
        canvas=createCanvas(500,300)
        goku=ml5.objectDetector('cocossd',modelLoaded)
    }
    

        function draw(){
            canvas.position(windowWidth/2-250,200)
            image(img,0,0,500,300)
            fill('red')
        }
         function preload(){
                img=loadImage('1.png')
            }

           
 
                function modelLoaded()
                {
                    console.log('super sayajin blueeeeeeee')
                }