<!--#include file="header.asp"-->
<!--#include file="footer.asp"-->
<%
response.expires = -1
%>
<html>

<head>
<meta http-equiv="Content-Language" content="it">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="imagetoolbar" content="no">
<meta name="Author" content="gianpietro canevali - bluepeter - andrea castelli - lariosport - www.bluepeter.it - www.lariosport.it">
<title>Studio Legale Bocchietti - attività</title>
<!-- #include file="others/motori.inc" -->
<%
session("home")="1"
%>
<link href="others/style.css" rel="stylesheet" type="text/css">
</head>

<body>
<a name="top"></a>
<%
if isSpider = true then 
  Response.Write "<H1>" & keyword & "</H1>"
  Response.Write "<H2>" & descript & "</H2>"
  Response.Write "<H3>" & keyword & "</H3>"
end if
%>
<div align="center">
  <center>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
    <tr>
      <td class="td11" height="100"></td>
      <td width="140" class="td11" height="100">
        <p align="right"><img border="0" src="immagini/logo1.gif" width="135" height="70"></td>
      <td width="560" class="td12" height="100"><img border="0" src="immagini/logo2.gif" width="365" height="70"></td>
      <td width="60" class="td11" height="100"></td>
      <td class="td11" height="100"></td>
    </tr>
    <tr>
      <td class="td11"></td>
      <td width="140" class="td11">
        <% header1 %>
      </td>
      <td width="560" class="td12">
        <% header2 %>
      </td>
      <td width="60" class="td11"></td>
      <td class="td11"></td>
    </tr>
    <tr>
      <td class="td21" height="3"></td>
      <td width="140" class="td21" height="3"></td>
      <td width="560" class="td22" height="3"></td>
      <td width="60" class="td21" height="3"></td>
      <td class="td21" height="3"></td>
    </tr>
    <tr>
      <td class="td31">&nbsp;</td>
      <td width="140" class="td31" valign="top">
        <div align="right">
          <table border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td></td>
              <td width="10" height="10"></td>
            </tr>
  </center>
          <tr>
            <td>
              <p align="right" class="blue"><b>Attività</b></td>
  <center>
  <td width="10" height="10"></td>
            </tr>
          </table>
        </div>
      </center>
      </td>
      <td width="560" class="td32" valign="top">
        <table border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="10" height="10"></td>
            <td width="540"></td>
            <td width="10"></td>
          </tr>
          <tr>
            <td width="10" height="380"></td>
            <td width="540" valign="top">
                <p class="titolo"><img border="0" src="immagini/attivita.jpg">
              
                <p class="blue" align="justify"><b>Nell’ambito del Diritto Civile</b>: diritto della responsabilità civile per colpa con particolare riferimento alla difesa di personale medico e infermieristico e alla difesa di strutture ospedaliere; diritto delle assicurazioni, in particolare per la R.C.; diritto delle obbligazioni e dei contratti (vendita, appalto, ecc.); diritto delle successioni; diritto dell’esecuzione civile (recupero dei crediti o difesa di debitori) compreso il diritto delle procedure concorsuali; diritto della proprietà, del condominio e delle locazioni; diritto del lavoro e della previdenza sociale; diritto delle contravvenzioni amministrative ex L. 689/81; diritto delle procedure cautelari e d’urgenza; diritto sportivo; assistenza e consulenza stragiudiziale.

<bR><bR><bR><b>Nell’ambito del Diritto Penale</b>: reato di omicidio colposo e reato di lesioni colpose con particolare riferimento alla difesa di personale medico ed infermieristico e alla difesa (quali responsabili civili) di strutture ospedaliere; reati contro la persona compresi i reati di omicidio colposo e di lesioni colpose derivanti dalla circolazione stradale o dalla violazione della normativa di sicurezza negli ambienti di lavoro (infortuni sul lavoro); reati contro la libertà individuale compresi i reati sessuali; reati contro l’economia compresa la bancarotta fraudolenta e gli altri reati fallimentari; reati in materia fiscale, reati contro l’ambiente (inquinamento), reati contro la pubblica amministrazione; reati contro il patrimonio (furto, ricettazione, riciclaggio, truffa, circonvenzione di incapaci, ecc).
		<p class="testo">&nbsp;<p class="testo">&nbsp;</td>
            <td width="10"></td>
          </tr>
          <tr>
            <td width="10" height="10"></td>
            <td width="540"></td>
            <td width="10"></td>
          </tr>
        </table>
      </td>
      <td width="60" class="td31" valign="bottom">
        <p align="left">&nbsp;<a href="#top"><img border="0" src="immagini/top.gif" width="20" height="20" title="vai in alto"></a>
        </td>
  <center>
      <td class="td31">&nbsp;</td>
    </tr>
    <tr>
      <td class="td21" height="3"></td>
      <td width="140" class="td21" height="3"></td>
      <td width="560" class="td22" height="3"></td>
      <td width="60" class="td21" height="3"></td>
      <td class="td21" height="3"></td>
    </tr>
    <tr>
      <td class="td11" height="80"></td>
      <td width="140" class="td11" height="80"></td>
      <td width="560" class="td12" height="80" valign="top">
      <% footer %>
      </td>
      <td width="60" class="td11" height="80"></td>
      <td class="td11" height="80"></td>
    </tr>
    <tr>
      <td class="td11"></td>
      <td width="140"  height="100%" class="td11"></td>
      <td width="560" class="td12"></td>
      <td width="60" class="td11"></td>
      <td class="td11"></td>
    </tr>
  </table>
  </center>
</div>
</body>

</html>