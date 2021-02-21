<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% @taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<% @taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
    <jsp:useBean id="now" class="java.util.Date" />
    <fmt:formatDate var="year" value="${now}" pattern="yyyy" />
    <p>Current year: ${year}</p>
    <p>Previous year: ${year - 1}</p>
</body>
</html>