<%
browser = Request.ServerVariables("HTTP_USER_AGENT")
browser = LCase (browser)
dim spider(21)
spider(0) = "googlebot"
spider(1) = "mercator"
spider(2) = "fast"
spider(3) = "scooter"
spider(4) = "inktomi"
spider(5) = "slurp"
spider(6) = "infoseek"
spider(7) = "ultraseek"
spider(8) = "architext"
spider(9) = "lycos"
spider(10) = "msnbot"
spider(11) = "arianna"
spider(12) = "yahoo"
spider(13) = "search"
spider(14) = "swiss"
spider(15) = "sly"
spider(16) = "leia"
spider(17) = "link"
spider(18) = "alkaline"
spider(19) = "arachnoidea"
spider(20) = "trovatore"
spider(21) = "wisewire"

keyword = "Studio Legale Bocchietti, Avvocati, Como, studio legale, legge, diritto, diritto bancario, diritto finanziario, avvocato, borsa, commerciale, diritto civile, diritto penale, camera civile como, camera penale, responsabilità, banca, penale, bancario, diritto, rivista, credito, creditizio, assegno, titolo, avvocato, avvocatura, cambiale, pegno, azione, finanza, finanziario, fiscale, crediti, capitalizzazione, interesse, saggio, tasso"
descript = "Studio Legale Bocchietti, diritto civile e diritto penale, Como."
for i=0 to ubound(spider)
	if Instr(1, browser , spider(i), 1)<>0 then
		Response.Write "<!-- Studio Legale Bocchietti -->"
		Response.Write "<meta name=""keywords"" content=""" & keyword &""">"
		Response.Write "<meta name=""keyphrase"" content=""" & keyword &""">"
		Response.Write "<meta name=""description"" content=""" & descript &""">"
		Response.Write "<meta name=""revisit"" content=""15 days"">"
		Response.Write "<meta name=""revisit-after"" content=""15 days"">"
		Response.Write "<meta name=""robots"" content=""all"">"
		Response.Write "<meta name=""rating"" content=""All"">"
		isSpider = true
		exit for
	end if
next
erase spider
%>