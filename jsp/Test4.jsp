<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% @taglib uri="http://java.sun.com/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script>
        // <!-- JQuery 실행코드-->
        // $(document).ready(function() {
            // $("#BtnClk").click(function() {
                // var valueById = $('#inputId').val();
                // var valueByClass = $('.inputClass').val();
                // var valueByName = $('input[name=inputName]').val();
                // alert('jQuery : valueById = ' + valueById );
            //  });
        // });
    </script>

</head>
<body>
    <h1> Hello World.</h1>

    <!-- <input type="text" id="useEndde" name="useEndde"
      value="<c:choose><c:when test="${empty orderInfo.useEndde }">${getDate }</c:when>
        <c:otherwise><fmt:formatDate value="${orderInfo.useEndde }" pattern="yyyy-MM-dd"/></c:otherwise></c:choose>"> -->
</body>
</html>