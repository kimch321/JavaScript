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
    // 한국 전역의 모든 시와 도를 조회함
    String sql = "select distinct sido from zipcode2013 order by sido";
    StringBuilder sb = null;

    try {
        Class.forName(DRV);
        conn = DriverManager.getConnection(URL, USR, PWD);
        pstmt = conn.prepareStatement(sql);
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