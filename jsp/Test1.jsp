<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script>
        <!-- JQuery 실행코드-->
        $(document).ready(function() {
            $("#BtnClk").click(function() {
                var valueById = $('#inputId').val();
                var valueByClass = $('.inputClass').val();
                var valueByName = $('input[name=inputName]').val();
                
                console.log('jQuery : valueById = ' + valueById + ", valueByClass = " + valueByClass + ", valueByName= " + valueByName);
            });
        });
    </script>
</head>
<body>
    <div>
        <input type="text" id="inputId" class="inputClass" name="inputName" />
        <input type="button" id="BtnClk" value="Get Value jQuery" />
    </div>
</body>
</html>