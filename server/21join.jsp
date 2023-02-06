<%@page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%
    // 21form.html에서 보낸 폼 데이터 출력하기
    // 클라이언트가 전송한 폼 데이터를
    // JSP에서 가져올려면 request.getParameter(폼요소이름)를 이용하면 됨
    // 단, 전송되는 값이 한글인 경우
    // request.setCharacterEncoding("UTF-8")로 설정해야 함!
    // 자바에서 문자열은 ""로 표시.
    // 변수도 ""로 표시
    request.setCharacterEncoding("UTF-8");
    // name 속성의 이름과 변수와 테이블 컬럼명을 똑같이 하는걸 강력히 권장한다.
    String uid = request.getParameter("uid");
    String pwd = request.getParameter("pwd");
    String name = request.getParameter("name");
    String gender = request.getParameter("gender");

    if (gender.equals("m")) gender = "남자";
    else gender = "여자";
%>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSP 처리결과</title>
</head>
<body>
<h1>JSP 처리결과</h1>
<p>아이디 : <% out.print(uid); %></p>
<p>비밀번호 : <%=pwd%></p>
<p>이름 : <%=name%></p>
<p>성별 : <%=gender%></p>
</body>
</html>