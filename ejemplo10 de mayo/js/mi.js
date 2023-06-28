function suma(){
    let num1=document.getElementById('numero1').value;
    let num2=document.getElementById('numero2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    //alert("la suma de"+num1+"+"+num2+"="+(num1+num2));
    document.getElementById("resultado").value=(num1+num2);
    }
    function resta(){
        let num1=document.getElementById('numero1').value;
        let num2=document.getElementById('numero2').value;
        num1=parseInt(num1);
        num2=parseInt(num2);
        //alert("la suma de"+num1+"+"+num2+"="+(num1-num2))
        document.getElementById("resultado").value=(num1-num2);
    }
        
        function mul(){
            let num1=document.getElementById('numero1').value;
            let num2=document.getElementById('numero2').value;
            num1=parseInt(num1);
            num2=parseInt(num2);
            //alert("la suma de"+num1+"+"+num2+"="+(num1*num2))
            document.getElementById("resultado").value=(num1*num2);
    }
            function divi(){
                let num1=document.getElementById('numero1').value;
                let num2=document.getElementById('numero2').value;
                num1=parseInt(num1);
                num2=parseInt(num2);
                //alert("la suma de"+num1+"+"+num2+"="+(num1/num2))
                document.getElementById("resultado").value=(num1/num2);
    }
                
            