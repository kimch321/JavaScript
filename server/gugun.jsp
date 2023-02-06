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
    // 선택한 시/도에 대한 모든 구군을 조회
    String sql =
            " select distinct gugun from zipcode2013 " +
            " where sido = ? order by gugun";
    StringBuilder sb = null;

    // get방식으로 전달한 '시/도' 데이터 가져오기
    request.setCharacterEncoding("utf-8");
    String sido = request.getParameter("sido");

    try {
        Class.forName(DRV);
        conn = DriverManager.getConnection(URL, USR, PWD);
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, sido);

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