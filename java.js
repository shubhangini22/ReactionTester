<script>
    var start=new Date().getTime();
     document.getElementById("s1").onclick = function(){
        document.getElementById("s1").style.display="none";
        var end=new Date().getTime();
        var timeTaken=end-start;
        alert(timeTaken);
     }   
    
</script>