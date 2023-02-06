<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.PreparedStatement" %>
<%@ page import="java.sql.ResultSet" %>
<%
    // mariadb 접속정보
    String DRV = "org.mariadb.jdbc.Driver";
    String URL = "jdbc:mariadb://bigdata.chfcmpaskysu.ap-northeast-2.rds.amazonaws.com:3306/bigdata";
    String USR = "admin";
    String PWD = "Bigdata_2022";

    // JDBC 연결객체
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;

    // 기타등등
    // 선택한 시/도와 구군에 대한 모든 동리를 조회
    String sql =
            " select distinct dong from zipcode2013 " +
            " where sido = ? and gugun = ? order by dong ";
    StringBuilder sb = null;

    // 선택한 시/도와 구군에 대한 모든 동을 조회
    request.setCharacterEncoding("utf-8");
    String sido = request.getParameter("sido");
    String gugun = request.getParameter("gugun");

    try {
        Class.forName(DRV);
        conn = DriverManager.getConnection(URL, USR, PWD);
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, sido);
        pstmt.setString(2, gugun);

        rs = pstmt.executeQuery();

        sb = new StringBuilder();
        while(rs.next()) {
            sb.append(rs.getString(1)).append(',');
        }
    } catch (Exception ex) {
        ex.printStackTrace();
    } finally {
        if (rs != null) rs.close();
        if (pstmt != null) pstmt.close();
        if (conn != null) conn.close();
    }

    // 처리결과를 응답으로 전송
    out.write(sb.toString());
%>