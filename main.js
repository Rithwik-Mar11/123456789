var mouseEvent = "empty";
new_width = screen.width - 70;
new_height = screen.height - 300;
var lastposisionX, lastposisionY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if (width < 992){
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.style.overflow = "hidden";




    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        console.log("touch start has started");

        lastposisionX =e.touches[0].clientX - canvas.offsetLeft;
        lastposisionY =e.touches[0].clientY - canvas.offsetTop;
        
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_y = e.touches[0].clientY - canvas.offsetTop;

    

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastposisionX + "y = " + lastposisionY);
        ctx.moveTo(lastposisionX,lastposisionY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_positio_x + "y = " + current_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    

        lastposisionX = current_position_x; 
        lastposisionY = current_position_y;
    }

