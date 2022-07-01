var start = new Date().getTime();
            //Date().getTime function here gets the current time
            function getRandomColor() {
                //function to get random color for the shapes
                var letters = '0123456789ABCDEF'.split('');
               //.split() functions splits the array here into array
                var color = '#';
                //html colors strats with #
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;


            }
            
            function makeShapeAppear() {
                
                var top = Math.random() * 400;
                //randomizing positions
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                //width is use for randomizing the size
                if (Math.random() > 0.5) {
                    //half of a time it wil be circle 
                    //circle
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                    
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                document.getElementById("shape").style.width = width + "px";
                
                document.getElementById("shape").style.height = width + "px";
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
    
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
                //updating the start variable

            }
            
            function appearAfterDelay() {
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
                //setTimeout function is used here to make shape appear after randomized 0-2000 here interval for testing reaction
               
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function() {
                //this onclick function is for making the shape disappear
                document.getElementById("shape").style.display = "none";
                //none here makes it disappear
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                //time taken since the start of the page loading and end of the reaction of the user
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
                
            }
            
       
        