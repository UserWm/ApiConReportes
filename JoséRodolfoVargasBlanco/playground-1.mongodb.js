

//Usar bd
use('personasNaturales')

//Crear colección
db.createCollection('personas')

//Insertar muchos registros desde Mockaroo
db.personas.insertMany(
    [
      {"nombre":"Morgun","apellido":"Stutely","email":"mstutely0@issuu.com","genero":"Male","edad":25,"telefono":"(568) 6144632","codigoPais":"ID","profesion":"Senior Cost Accountant"},
      {"nombre":"Stearn","apellido":"Fullbrook","email":"sfullbrook1@google.com.br","genero":"Male","edad":64,"telefono":"(644) 9814429","codigoPais":"CN","profesion":"Recruiting Manager"},
      {"nombre":"Alessandro","apellido":"Goranov","email":"agoranov2@slideshare.net","genero":"Male","edad":90,"telefono":"(656) 7368433","codigoPais":"BG","profesion":"Geologist III"},
      {"nombre":"Durante","apellido":"Loalday","email":"dloalday3@usnews.com","genero":"Male","edad":72,"telefono":"(855) 3740532","codigoPais":"ID","profesion":"Sales Associate"},
      {"nombre":"Waylin","apellido":"Sickert","email":"wsickert4@jiathis.com","genero":"Male","edad":6,"telefono":"(440) 6370534","codigoPais":"BR","profesion":"Senior Quality Engineer"},
      {"nombre":"Belinda","apellido":"Covelle","email":"bcovelle5@pinterest.com","genero":"Agender","edad":68,"telefono":"(940) 4376638","codigoPais":"SE","profesion":"Web Developer II"},
      {"nombre":"Loralee","apellido":"Divisek","email":"ldivisek6@cbslocal.com","genero":"Female","edad":27,"telefono":"(785) 3487344","codigoPais":"PH","profesion":"Dental Hygienist"},
      {"nombre":"Odella","apellido":"Roddie","email":"oroddie7@columbia.edu","genero":"Female","edad":53,"telefono":"(464) 8343946","codigoPais":"LS","profesion":"Desktop Support Technician"},
      {"nombre":"Marysa","apellido":"Elijahu","email":"melijahu8@reference.com","genero":"Female","edad":94,"telefono":"(474) 9150826","codigoPais":"GD","profesion":"Senior Editor"},
      {"nombre":"Burnard","apellido":"Gilffillan","email":"bgilffillan9@bing.com","genero":"Male","edad":88,"telefono":"(897) 3107651","codigoPais":"ID","profesion":"Data Coordinator"},
      {"nombre":"Winthrop","apellido":"Kelso","email":"wkelsoa@github.com","genero":"Male","edad":84,"telefono":"(272) 4298525","codigoPais":"RU","profesion":"Dental Hygienist"},
      {"nombre":"Clarette","apellido":"Fresson","email":"cfressonb@amazon.de","genero":"Female","edad":53,"telefono":"(760) 3005813","codigoPais":"GR","profesion":"Staff Scientist"},
      {"nombre":"Hortensia","apellido":"Cheer","email":"hcheerc@archive.org","genero":"Female","edad":64,"telefono":"(418) 2695344","codigoPais":"CI","profesion":"Financial Advisor"},
      {"nombre":"Anabella","apellido":"Fitt","email":"afittd@reuters.com","genero":"Female","edad":61,"telefono":"(639) 2764610","codigoPais":"RU","profesion":"Account Executive"},
      {"nombre":"Brand","apellido":"Solomonides","email":"bsolomonidese@auda.org.au","genero":"Male","edad":4,"telefono":"(398) 8273765","codigoPais":"CA","profesion":"Community Outreach Specialist"},
      {"nombre":"Janos","apellido":"Vidler","email":"jvidlerf@blogspot.com","genero":"Genderfluid","edad":1,"telefono":"(152) 5462634","codigoPais":"UA","profesion":"Legal Assistant"},
      {"nombre":"Cassandre","apellido":"Westoll","email":"cwestollg@hao123.com","genero":"Female","edad":42,"telefono":"(317) 7113632","codigoPais":"ID","profesion":"VP Product Management"},
      {"nombre":"Bank","apellido":"Sharrock","email":"bsharrockh@dailymail.co.uk","genero":"Male","edad":70,"telefono":"(984) 3711100","codigoPais":"KR","profesion":"Accountant II"},
      {"nombre":"Cord","apellido":"Hendrik","email":"chendriki@theglobeandmail.com","genero":"Male","edad":83,"telefono":"(327) 9973229","codigoPais":"FR","profesion":"Electrical Engineer"},
      {"nombre":"Delmore","apellido":"Batte","email":"dbattej@bravesites.com","genero":"Male","edad":46,"telefono":"(454) 9469116","codigoPais":"CL","profesion":"Human Resources Manager"},
      {"nombre":"Rosita","apellido":"O'Beirne","email":"robeirnek@angelfire.com","genero":"Female","edad":98,"telefono":"(540) 4920185","codigoPais":"CN","profesion":"Environmental Specialist"},
      {"nombre":"Cob","apellido":"Bruhnicke","email":"cbruhnickel@adobe.com","genero":"Male","edad":96,"telefono":"(356) 7996883","codigoPais":"CN","profesion":"Structural Engineer"},
      {"nombre":"Alie","apellido":"Daulton","email":"adaultonm@paginegialle.it","genero":"Genderqueer","edad":72,"telefono":"(181) 8149472","codigoPais":"GR","profesion":"Administrative Assistant III"},
      {"nombre":"Ruben","apellido":"Janes","email":"rjanesn@pcworld.com","genero":"Agender","edad":95,"telefono":"(594) 6516135","codigoPais":"DE","profesion":"Executive Secretary"},
      {"nombre":"Darius","apellido":"Harnetty","email":"dharnettyo@edublogs.org","genero":"Male","edad":56,"telefono":"(160) 5906177","codigoPais":"MK","profesion":"Teacher"},
      {"nombre":"Thomasina","apellido":"Sedcole","email":"tsedcolep@thetimes.co.uk","genero":"Female","edad":56,"telefono":"(296) 1145212","codigoPais":"AZ","profesion":"Human Resources Manager"},
      {"nombre":"Sara","apellido":"Solway","email":"ssolwayq@prlog.org","genero":"Female","edad":46,"telefono":"(705) 3265551","codigoPais":"CA","profesion":"Tax Accountant"},
      {"nombre":"Llywellyn","apellido":"Belliard","email":"lbelliardr@sohu.com","genero":"Genderqueer","edad":55,"telefono":"(158) 8192599","codigoPais":"CA","profesion":"Registered Nurse"},
      {"nombre":"Arlee","apellido":"Grocott","email":"agrocotts@apple.com","genero":"Female","edad":88,"telefono":"(803) 3547925","codigoPais":"CN","profesion":"Accountant III"},
      {"nombre":"Abran","apellido":"Kayley","email":"akayleyt@jigsy.com","genero":"Male","edad":23,"telefono":"(949) 5379118","codigoPais":"CN","profesion":"GIS Technical Architect"},
      {"nombre":"James","apellido":"Ingliby","email":"jinglibyu@shinystat.com","genero":"Male","edad":30,"telefono":"(321) 4926052","codigoPais":"CN","profesion":"Tax Accountant"},
      {"nombre":"Reggie","apellido":"Grzegorzewski","email":"rgrzegorzewskiv@discovery.com","genero":"Female","edad":49,"telefono":"(729) 1535798","codigoPais":"RU","profesion":"Marketing Manager"},
      {"nombre":"Waiter","apellido":"Waldie","email":"wwaldiew@51.la","genero":"Male","edad":32,"telefono":"(910) 4630091","codigoPais":"ZW","profesion":"Marketing Manager"},
      {"nombre":"Kin","apellido":"Fincham","email":"kfinchamx@statcounter.com","genero":"Male","edad":18,"telefono":"(342) 3383557","codigoPais":"MG","profesion":"Product Engineer"},
      {"nombre":"Kristal","apellido":"Matyushenko","email":"kmatyushenkoy@soup.io","genero":"Female","edad":99,"telefono":"(615) 8048043","codigoPais":"US","profesion":"Administrative Officer"},
      {"nombre":"Nickie","apellido":"Tomlins","email":"ntomlinsz@answers.com","genero":"Female","edad":35,"telefono":"(110) 6407791","codigoPais":"IT","profesion":"Computer Systems Analyst I"},
      {"nombre":"Rupert","apellido":"Branwhite","email":"rbranwhite10@cafepress.com","genero":"Male","edad":42,"telefono":"(721) 8351190","codigoPais":"CN","profesion":"GIS Technical Architect"},
      {"nombre":"Jonas","apellido":"Codrington","email":"jcodrington11@hugedomains.com","genero":"Male","edad":17,"telefono":"(223) 5353472","codigoPais":"PT","profesion":"Registered Nurse"},
      {"nombre":"Sarine","apellido":"Groom","email":"sgroom12@ucoz.ru","genero":"Female","edad":55,"telefono":"(780) 6418407","codigoPais":"BR","profesion":"Help Desk Operator"},
      {"nombre":"Carina","apellido":"Sutliff","email":"csutliff13@canalblog.com","genero":"Female","edad":52,"telefono":"(534) 8072100","codigoPais":"CN","profesion":"Business Systems Development Analyst"},
      {"nombre":"Adan","apellido":"Grelka","email":"agrelka14@plala.or.jp","genero":"Female","edad":7,"telefono":"(420) 3310390","codigoPais":"EG","profesion":"Physical Therapy Assistant"},
      {"nombre":"Binny","apellido":"Ccomini","email":"bccomini15@wikipedia.org","genero":"Female","edad":84,"telefono":"(174) 2854344","codigoPais":"TH","profesion":"Quality Engineer"},
      {"nombre":"Levy","apellido":"Steven","email":"lsteven16@globo.com","genero":"Male","edad":37,"telefono":"(811) 7677962","codigoPais":"BR","profesion":"Research Assistant III"},
      {"nombre":"Dorothea","apellido":"Gummary","email":"dgummary17@ted.com","genero":"Female","edad":25,"telefono":"(367) 1881722","codigoPais":"SE","profesion":"Compensation Analyst"},
      {"nombre":"Leisha","apellido":"Defty","email":"ldefty18@mediafire.com","genero":"Female","edad":89,"telefono":"(204) 7871284","codigoPais":"FR","profesion":"Dental Hygienist"},
      {"nombre":"Lenora","apellido":"Gussie","email":"lgussie19@sphinn.com","genero":"Female","edad":25,"telefono":"(112) 7380820","codigoPais":"CN","profesion":"Physical Therapy Assistant"},
      {"nombre":"Antoni","apellido":"Dibling","email":"adibling1a@narod.ru","genero":"Male","edad":33,"telefono":"(336) 3361838","codigoPais":"CN","profesion":"Research Associate"},
      {"nombre":"Skelly","apellido":"Henworth","email":"shenworth1b@reverbnation.com","genero":"Male","edad":88,"telefono":"(955) 7935650","codigoPais":"CN","profesion":"Office Assistant II"},
      {"nombre":"Harlene","apellido":"Brigg","email":"hbrigg1c@cloudflare.com","genero":"Female","edad":32,"telefono":"(404) 1956926","codigoPais":"MX","profesion":"Nurse"},
      {"nombre":"Ariadne","apellido":"Reville","email":"areville1d@miitbeian.gov.cn","genero":"Female","edad":67,"telefono":"(683) 6871708","codigoPais":"MG","profesion":"Sales Representative"},
      {"nombre":"Bourke","apellido":"Stoffer","email":"bstoffer1e@icq.com","genero":"Non-binary","edad":57,"telefono":"(210) 5400281","codigoPais":"PE","profesion":"Research Nurse"},
      {"nombre":"Arnie","apellido":"Eddison","email":"aeddison1f@fotki.com","genero":"Genderfluid","edad":84,"telefono":"(704) 7224362","codigoPais":"CN","profesion":"Structural Analysis Engineer"},
      {"nombre":"Elysha","apellido":"Glidden","email":"eglidden1g@answers.com","genero":"Female","edad":30,"telefono":"(786) 3333122","codigoPais":"MD","profesion":"Physical Therapy Assistant"},
      {"nombre":"Miranda","apellido":"Sadry","email":"msadry1h@simplemachines.org","genero":"Bigender","edad":71,"telefono":"(183) 3277139","codigoPais":"PL","profesion":"Account Representative II"},
      {"nombre":"Kinsley","apellido":"Maudlin","email":"kmaudlin1i@yolasite.com","genero":"Male","edad":73,"telefono":"(261) 7663458","codigoPais":"PT","profesion":"Sales Associate"},
      {"nombre":"Orrin","apellido":"Vanshin","email":"ovanshin1j@e-recht24.de","genero":"Male","edad":48,"telefono":"(110) 6350651","codigoPais":"MK","profesion":"Physical Therapy Assistant"},
      {"nombre":"Malvina","apellido":"Grazier","email":"mgrazier1k@si.edu","genero":"Bigender","edad":2,"telefono":"(629) 8659529","codigoPais":"PS","profesion":"Media Manager II"},
      {"nombre":"Gwenora","apellido":"Key","email":"gkey1l@hostgator.com","genero":"Female","edad":99,"telefono":"(892) 9982401","codigoPais":"MC","profesion":"Office Assistant II"},
      {"nombre":"Charis","apellido":"Spary","email":"cspary1m@wisc.edu","genero":"Female","edad":66,"telefono":"(408) 1545877","codigoPais":"PH","profesion":"Payment Adjustment Coordinator"},
      {"nombre":"Reuven","apellido":"Reinbech","email":"rreinbech1n@clickbank.net","genero":"Male","edad":92,"telefono":"(559) 3242749","codigoPais":"CZ","profesion":"Tax Accountant"},
      {"nombre":"Levey","apellido":"Carnall","email":"lcarnall1o@phoca.cz","genero":"Male","edad":48,"telefono":"(251) 5304149","codigoPais":"PH","profesion":"VP Sales"},
      {"nombre":"Aloysia","apellido":"Gallear","email":"agallear1p@reference.com","genero":"Female","edad":98,"telefono":"(131) 2872274","codigoPais":"RU","profesion":"General Manager"},
      {"nombre":"Troy","apellido":"Dummigan","email":"tdummigan1q@nih.gov","genero":"Male","edad":59,"telefono":"(788) 3910170","codigoPais":"CN","profesion":"Teacher"},
      {"nombre":"Jere","apellido":"Shorland","email":"jshorland1r@virginia.edu","genero":"Male","edad":28,"telefono":"(213) 6329944","codigoPais":"EC","profesion":"Programmer Analyst I"},
      {"nombre":"Micky","apellido":"Grocutt","email":"mgrocutt1s@unblog.fr","genero":"Female","edad":93,"telefono":"(792) 3023065","codigoPais":"BR","profesion":"Assistant Media Planner"},
      {"nombre":"Jobi","apellido":"Gallant","email":"jgallant1t@slideshare.net","genero":"Female","edad":9,"telefono":"(992) 7626785","codigoPais":"MY","profesion":"Nuclear Power Engineer"},
      {"nombre":"Thalia","apellido":"Waslin","email":"twaslin1u@surveymonkey.com","genero":"Female","edad":62,"telefono":"(148) 8461569","codigoPais":"MK","profesion":"Design Engineer"},
      {"nombre":"Juieta","apellido":"Esby","email":"jesby1v@virginia.edu","genero":"Female","edad":50,"telefono":"(222) 8334450","codigoPais":"SE","profesion":"Desktop Support Technician"},
      {"nombre":"Darcy","apellido":"Hayselden","email":"dhayselden1w@toplist.cz","genero":"Female","edad":89,"telefono":"(630) 5185414","codigoPais":"PH","profesion":"Marketing Assistant"},
      {"nombre":"Jonathon","apellido":"Sheahan","email":"jsheahan1x@cbc.ca","genero":"Male","edad":2,"telefono":"(617) 3471691","codigoPais":"CN","profesion":"Information Systems Manager"},
      {"nombre":"Ingaberg","apellido":"Warbrick","email":"iwarbrick1y@usnews.com","genero":"Female","edad":78,"telefono":"(847) 6283991","codigoPais":"PT","profesion":"Office Assistant III"},
      {"nombre":"Esme","apellido":"Pulman","email":"epulman1z@weibo.com","genero":"Female","edad":23,"telefono":"(809) 9897901","codigoPais":"RU","profesion":"Accountant III"},
      {"nombre":"Chrissy","apellido":"Maginot","email":"cmaginot20@jiathis.com","genero":"Agender","edad":90,"telefono":"(876) 6197759","codigoPais":"CN","profesion":"Internal Auditor"},
      {"nombre":"Sondra","apellido":"Holdall","email":"sholdall21@printfriendly.com","genero":"Female","edad":56,"telefono":"(847) 5540838","codigoPais":"RU","profesion":"VP Product Management"},
      {"nombre":"Misty","apellido":"Pedro","email":"mpedro22@ucoz.ru","genero":"Female","edad":90,"telefono":"(499) 7142884","codigoPais":"NO","profesion":"Structural Analysis Engineer"},
      {"nombre":"Trace","apellido":"Yurchenko","email":"tyurchenko23@usnews.com","genero":"Male","edad":17,"telefono":"(671) 8640483","codigoPais":"RU","profesion":"Legal Assistant"},
      {"nombre":"Leilah","apellido":"Dillinger","email":"ldillinger24@amazonaws.com","genero":"Female","edad":64,"telefono":"(953) 5773682","codigoPais":"BR","profesion":"Community Outreach Specialist"},
      {"nombre":"Gael","apellido":"Cauldwell","email":"gcauldwell25@rambler.ru","genero":"Male","edad":31,"telefono":"(444) 3289911","codigoPais":"PH","profesion":"Editor"},
      {"nombre":"Binni","apellido":"Sodeau","email":"bsodeau26@pagesperso-orange.fr","genero":"Female","edad":47,"telefono":"(296) 9100140","codigoPais":"NG","profesion":"Clinical Specialist"},
      {"nombre":"Rip","apellido":"Harral","email":"rharral27@wisc.edu","genero":"Male","edad":90,"telefono":"(508) 9795453","codigoPais":"FI","profesion":"VP Sales"},
      {"nombre":"Noe","apellido":"Coen","email":"ncoen28@geocities.com","genero":"Male","edad":6,"telefono":"(451) 5909725","codigoPais":"UG","profesion":"Senior Editor"},
      {"nombre":"Sigrid","apellido":"Svanini","email":"ssvanini29@google.fr","genero":"Female","edad":84,"telefono":"(193) 6401474","codigoPais":"CA","profesion":"Internal Auditor"},
      {"nombre":"Marylinda","apellido":"Cousin","email":"mcousin2a@indiegogo.com","genero":"Female","edad":69,"telefono":"(181) 9471734","codigoPais":"TH","profesion":"Project Manager"},
      {"nombre":"Shandy","apellido":"Fontes","email":"sfontes2b@un.org","genero":"Female","edad":57,"telefono":"(654) 2839164","codigoPais":"BD","profesion":"Business Systems Development Analyst"},
      {"nombre":"Eugene","apellido":"Pallent","email":"epallent2c@google.com.hk","genero":"Male","edad":81,"telefono":"(313) 5713686","codigoPais":"CN","profesion":"Engineer III"},
      {"nombre":"Chen","apellido":"Orneblow","email":"corneblow2d@prlog.org","genero":"Male","edad":10,"telefono":"(422) 1476423","codigoPais":"NZ","profesion":"Chief Design Engineer"},
      {"nombre":"Fidole","apellido":"Kimpton","email":"fkimpton2e@elegantthemes.com","genero":"Male","edad":80,"telefono":"(473) 9547052","codigoPais":"FR","profesion":"VP Sales"},
      {"nombre":"Rhonda","apellido":"O'Griffin","email":"rogriffin2f@storify.com","genero":"Female","edad":99,"telefono":"(947) 9418447","codigoPais":"MA","profesion":"Information Systems Manager"},
      {"nombre":"Nicholas","apellido":"Sinnott","email":"nsinnott2g@comsenz.com","genero":"Male","edad":71,"telefono":"(754) 9876774","codigoPais":"ET","profesion":"Senior Quality Engineer"},
      {"nombre":"Kurt","apellido":"Pill","email":"kpill2h@51.la","genero":"Male","edad":43,"telefono":"(134) 4996905","codigoPais":"CN","profesion":"Safety Technician III"},
      {"nombre":"Fannie","apellido":"Widocks","email":"fwidocks2i@youtube.com","genero":"Female","edad":28,"telefono":"(272) 3581861","codigoPais":"BO","profesion":"Research Assistant II"},
      {"nombre":"Merv","apellido":"Snailham","email":"msnailham2j@japanpost.jp","genero":"Male","edad":16,"telefono":"(254) 3163069","codigoPais":"CN","profesion":"Account Coordinator"},
      {"nombre":"Perle","apellido":"Cambden","email":"pcambden2k@telegraph.co.uk","genero":"Non-binary","edad":67,"telefono":"(963) 4344849","codigoPais":"CZ","profesion":"Developer III"},
      {"nombre":"Milty","apellido":"Chirm","email":"mchirm2l@arstechnica.com","genero":"Male","edad":42,"telefono":"(778) 3908929","codigoPais":"AR","profesion":"Senior Sales Associate"},
      {"nombre":"Nolan","apellido":"Nurdin","email":"nnurdin2m@walmart.com","genero":"Polygender","edad":20,"telefono":"(546) 6173760","codigoPais":"PE","profesion":"Desktop Support Technician"},
      {"nombre":"Willi","apellido":"Maleney","email":"wmaleney2n@webnode.com","genero":"Male","edad":45,"telefono":"(972) 3998350","codigoPais":"UA","profesion":"Compensation Analyst"},
      {"nombre":"Chalmers","apellido":"Radnedge","email":"cradnedge2o@go.com","genero":"Male","edad":9,"telefono":"(900) 2301524","codigoPais":"PH","profesion":"Structural Analysis Engineer"},
      {"nombre":"Amii","apellido":"Hymers","email":"ahymers2p@google.com.au","genero":"Female","edad":13,"telefono":"(523) 2822868","codigoPais":"DO","profesion":"Account Executive"},
      {"nombre":"Evonne","apellido":"Labone","email":"elabone2q@irs.gov","genero":"Female","edad":32,"telefono":"(295) 5478656","codigoPais":"CO","profesion":"Web Developer I"},
      {"nombre":"Seward","apellido":"Sandeman","email":"ssandeman2r@sohu.com","genero":"Male","edad":21,"telefono":"(138) 2281834","codigoPais":"ID","profesion":"Editor"},
      {"nombre":"Margret","apellido":"Elwin","email":"melwin2s@mlb.com","genero":"Genderqueer","edad":64,"telefono":"(142) 6049652","codigoPais":"ZA","profesion":"Analyst Programmer"},
      {"nombre":"Nessy","apellido":"Pasquale","email":"npasquale2t@hubpages.com","genero":"Female","edad":52,"telefono":"(648) 1020292","codigoPais":"CN","profesion":"Geological Engineer"},
      {"nombre":"Linn","apellido":"Mawson","email":"lmawson2u@illinois.edu","genero":"Female","edad":26,"telefono":"(981) 9478746","codigoPais":"LV","profesion":"Business Systems Development Analyst"},
      {"nombre":"Ambrose","apellido":"Girodier","email":"agirodier2v@shareasale.com","genero":"Male","edad":39,"telefono":"(694) 3509466","codigoPais":"CN","profesion":"Analyst Programmer"},
      {"nombre":"Woodie","apellido":"Sidebottom","email":"wsidebottom2w@omniture.com","genero":"Non-binary","edad":47,"telefono":"(341) 6211822","codigoPais":"CN","profesion":"Web Designer II"},
      {"nombre":"Margi","apellido":"Sever","email":"msever2x@ustream.tv","genero":"Female","edad":8,"telefono":"(964) 4149497","codigoPais":"PG","profesion":"Account Executive"},
      {"nombre":"Yasmin","apellido":"Lyste","email":"ylyste2y@cloudflare.com","genero":"Female","edad":79,"telefono":"(239) 9105358","codigoPais":"RU","profesion":"Structural Analysis Engineer"},
      {"nombre":"Sile","apellido":"Stockford","email":"sstockford2z@canalblog.com","genero":"Female","edad":50,"telefono":"(331) 4519793","codigoPais":"ID","profesion":"Junior Executive"},
      {"nombre":"Haywood","apellido":"Gras","email":"hgras30@nsw.gov.au","genero":"Bigender","edad":93,"telefono":"(522) 8021295","codigoPais":"AR","profesion":"Web Developer III"},
      {"nombre":"Sybyl","apellido":"Burhouse","email":"sburhouse31@mit.edu","genero":"Female","edad":76,"telefono":"(516) 7419027","codigoPais":"RU","profesion":"Desktop Support Technician"},
      {"nombre":"Mersey","apellido":"Stuttman","email":"mstuttman32@twitter.com","genero":"Female","edad":36,"telefono":"(534) 3260864","codigoPais":"RU","profesion":"Cost Accountant"},
      {"nombre":"Alexia","apellido":"Orae","email":"aorae33@paginegialle.it","genero":"Female","edad":63,"telefono":"(836) 5377888","codigoPais":"JP","profesion":"Sales Representative"},
      {"nombre":"Derrick","apellido":"Bonhill","email":"dbonhill34@businessinsider.com","genero":"Male","edad":47,"telefono":"(359) 7016813","codigoPais":"PL","profesion":"Software Engineer III"},
      {"nombre":"Barth","apellido":"Mateu","email":"bmateu35@soup.io","genero":"Male","edad":59,"telefono":"(436) 6147672","codigoPais":"PL","profesion":"Clinical Specialist"},
      {"nombre":"Jackquelin","apellido":"Enders","email":"jenders36@latimes.com","genero":"Female","edad":5,"telefono":"(654) 6083239","codigoPais":"JO","profesion":"Community Outreach Specialist"},
      {"nombre":"Averyl","apellido":"Mozzi","email":"amozzi37@usda.gov","genero":"Female","edad":26,"telefono":"(211) 1697196","codigoPais":"CZ","profesion":"Librarian"},
      {"nombre":"Byram","apellido":"Autry","email":"bautry38@prnewswire.com","genero":"Male","edad":91,"telefono":"(780) 6387153","codigoPais":"PT","profesion":"VP Sales"},
      {"nombre":"Wilhelmina","apellido":"Dumbrill","email":"wdumbrill39@soup.io","genero":"Female","edad":18,"telefono":"(982) 8307636","codigoPais":"PT","profesion":"Marketing Manager"},
      {"nombre":"Max","apellido":"Shitliff","email":"mshitliff3a@amazon.com","genero":"Male","edad":8,"telefono":"(128) 2077078","codigoPais":"TH","profesion":"Environmental Tech"},
      {"nombre":"Danica","apellido":"Kenway","email":"dkenway3b@washington.edu","genero":"Female","edad":38,"telefono":"(205) 3009906","codigoPais":"UA","profesion":"Community Outreach Specialist"},
      {"nombre":"Patsy","apellido":"Bezarra","email":"pbezarra3c@imageshack.us","genero":"Female","edad":33,"telefono":"(514) 4874559","codigoPais":"CN","profesion":"Financial Advisor"},
      {"nombre":"Ilaire","apellido":"Mardling","email":"imardling3d@delicious.com","genero":"Male","edad":4,"telefono":"(744) 4041011","codigoPais":"CN","profesion":"Quality Engineer"},
      {"nombre":"John","apellido":"Iseton","email":"jiseton3e@list-manage.com","genero":"Male","edad":81,"telefono":"(575) 9528331","codigoPais":"PL","profesion":"Sales Representative"},
      {"nombre":"Briano","apellido":"Foggarty","email":"bfoggarty3f@mashable.com","genero":"Male","edad":27,"telefono":"(931) 5968240","codigoPais":"CN","profesion":"Executive Secretary"},
      {"nombre":"Grantham","apellido":"Kubacki","email":"gkubacki3g@oracle.com","genero":"Male","edad":73,"telefono":"(972) 2784133","codigoPais":"FI","profesion":"Physical Therapy Assistant"},
      {"nombre":"Michael","apellido":"Kembley","email":"mkembley3h@weather.com","genero":"Male","edad":77,"telefono":"(714) 9439497","codigoPais":"PL","profesion":"Programmer III"},
      {"nombre":"Whittaker","apellido":"Celes","email":"wceles3i@ox.ac.uk","genero":"Male","edad":33,"telefono":"(738) 7614557","codigoPais":"BR","profesion":"Nuclear Power Engineer"},
      {"nombre":"Novelia","apellido":"Jeskin","email":"njeskin3j@dagondesign.com","genero":"Female","edad":58,"telefono":"(621) 8139633","codigoPais":"PH","profesion":"Occupational Therapist"},
      {"nombre":"Olly","apellido":"Pinson","email":"opinson3k@illinois.edu","genero":"Female","edad":53,"telefono":"(241) 1271433","codigoPais":"CN","profesion":"Recruiting Manager"},
      {"nombre":"Bertine","apellido":"Revans","email":"brevans3l@paypal.com","genero":"Female","edad":69,"telefono":"(318) 7765896","codigoPais":"US","profesion":"Financial Advisor"},
      {"nombre":"Filippa","apellido":"Comford","email":"fcomford3m@ow.ly","genero":"Female","edad":55,"telefono":"(903) 3866502","codigoPais":"RU","profesion":"Quality Engineer"},
      {"nombre":"Noella","apellido":"Collacombe","email":"ncollacombe3n@home.pl","genero":"Female","edad":34,"telefono":"(878) 5087014","codigoPais":"MX","profesion":"Mechanical Systems Engineer"},
      {"nombre":"Onofredo","apellido":"Drynan","email":"odrynan3o@addthis.com","genero":"Genderfluid","edad":71,"telefono":"(765) 3632334","codigoPais":"CN","profesion":"Speech Pathologist"},
      {"nombre":"Carry","apellido":"Marini","email":"cmarini3p@taobao.com","genero":"Female","edad":96,"telefono":"(242) 8874244","codigoPais":"RU","profesion":"Junior Executive"},
      {"nombre":"Penelopa","apellido":"Boriston","email":"pboriston3q@dailymail.co.uk","genero":"Female","edad":17,"telefono":"(245) 6937256","codigoPais":"PL","profesion":"Librarian"},
      {"nombre":"Waldemar","apellido":"Clemmens","email":"wclemmens3r@comsenz.com","genero":"Male","edad":79,"telefono":"(189) 4245351","codigoPais":"FR","profesion":"Environmental Specialist"},
      {"nombre":"Rycca","apellido":"Van Driel","email":"rvandriel3s@blinklist.com","genero":"Female","edad":48,"telefono":"(191) 1938983","codigoPais":"NL","profesion":"Media Manager III"},
      {"nombre":"Rochella","apellido":"Kiernan","email":"rkiernan3t@engadget.com","genero":"Female","edad":46,"telefono":"(982) 1445581","codigoPais":"KZ","profesion":"Software Test Engineer IV"},
      {"nombre":"Aura","apellido":"Renner","email":"arenner3u@amazonaws.com","genero":"Female","edad":95,"telefono":"(693) 3949797","codigoPais":"BG","profesion":"Biostatistician IV"},
      {"nombre":"Reggie","apellido":"Birkmyre","email":"rbirkmyre3v@arizona.edu","genero":"Bigender","edad":88,"telefono":"(247) 8081211","codigoPais":"CZ","profesion":"Human Resources Assistant I"},
      {"nombre":"Ellsworth","apellido":"Daniely","email":"edaniely3w@infoseek.co.jp","genero":"Male","edad":83,"telefono":"(142) 7145740","codigoPais":"PT","profesion":"Senior Financial Analyst"},
      {"nombre":"Webb","apellido":"Cromack","email":"wcromack3x@engadget.com","genero":"Male","edad":58,"telefono":"(134) 8700934","codigoPais":"ID","profesion":"Chief Design Engineer"},
      {"nombre":"Hubert","apellido":"Lea","email":"hlea3y@pinterest.com","genero":"Genderqueer","edad":72,"telefono":"(885) 1979250","codigoPais":"DO","profesion":"VP Accounting"},
      {"nombre":"Alexina","apellido":"Ratlee","email":"aratlee3z@nyu.edu","genero":"Female","edad":75,"telefono":"(650) 6172604","codigoPais":"CZ","profesion":"Software Consultant"},
      {"nombre":"Corri","apellido":"McBrady","email":"cmcbrady40@liveinternet.ru","genero":"Female","edad":18,"telefono":"(313) 1759259","codigoPais":"CN","profesion":"Geologist III"},
      {"nombre":"Connor","apellido":"Permain","email":"cpermain41@desdev.cn","genero":"Polygender","edad":31,"telefono":"(444) 9767391","codigoPais":"VN","profesion":"Physical Therapy Assistant"},
      {"nombre":"Carny","apellido":"Baudinet","email":"cbaudinet42@arstechnica.com","genero":"Genderfluid","edad":97,"telefono":"(482) 2850374","codigoPais":"SE","profesion":"Director of Sales"},
      {"nombre":"Karlotta","apellido":"Bissex","email":"kbissex43@businesswire.com","genero":"Female","edad":92,"telefono":"(394) 5590857","codigoPais":"PL","profesion":"Cost Accountant"},
      {"nombre":"Gwen","apellido":"Pinor","email":"gpinor44@imgur.com","genero":"Female","edad":61,"telefono":"(231) 2204487","codigoPais":"RU","profesion":"Sales Representative"},
      {"nombre":"Krishnah","apellido":"Mellenby","email":"kmellenby45@1und1.de","genero":"Male","edad":43,"telefono":"(990) 6244221","codigoPais":"PT","profesion":"Electrical Engineer"},
      {"nombre":"Fairlie","apellido":"Priter","email":"fpriter46@virginia.edu","genero":"Male","edad":20,"telefono":"(717) 7543046","codigoPais":"US","profesion":"Pharmacist"},
      {"nombre":"Moreen","apellido":"Mealand","email":"mmealand47@ox.ac.uk","genero":"Female","edad":68,"telefono":"(268) 7600793","codigoPais":"GR","profesion":"Research Associate"},
      {"nombre":"Kaleb","apellido":"Thomson","email":"kthomson48@cargocollective.com","genero":"Male","edad":64,"telefono":"(284) 6896946","codigoPais":"CN","profesion":"Account Coordinator"},
      {"nombre":"Erena","apellido":"Todd","email":"etodd49@sogou.com","genero":"Female","edad":68,"telefono":"(646) 3230933","codigoPais":"HR","profesion":"Professor"},
      {"nombre":"Honor","apellido":"Rawnsley","email":"hrawnsley4a@vimeo.com","genero":"Female","edad":95,"telefono":"(844) 3014363","codigoPais":"PH","profesion":"General Manager"},
      {"nombre":"Jard","apellido":"Benedikt","email":"jbenedikt4b@hibu.com","genero":"Male","edad":23,"telefono":"(965) 9955354","codigoPais":"CN","profesion":"Technical Writer"},
      {"nombre":"Carmina","apellido":"Popping","email":"cpopping4c@nsw.gov.au","genero":"Female","edad":80,"telefono":"(757) 3088475","codigoPais":"YE","profesion":"Research Nurse"},
      {"nombre":"Valerie","apellido":"Fairnington","email":"vfairnington4d@phoca.cz","genero":"Female","edad":93,"telefono":"(776) 4006752","codigoPais":"ES","profesion":"Database Administrator III"},
      {"nombre":"Ginger","apellido":"Knutsen","email":"gknutsen4e@mapquest.com","genero":"Female","edad":61,"telefono":"(915) 2185073","codigoPais":"US","profesion":"Chemical Engineer"},
      {"nombre":"Yvon","apellido":"Popple","email":"ypopple4f@businessinsider.com","genero":"Male","edad":90,"telefono":"(289) 8742052","codigoPais":"GR","profesion":"Payment Adjustment Coordinator"},
      {"nombre":"Gayelord","apellido":"Drysdale","email":"gdrysdale4g@forbes.com","genero":"Male","edad":46,"telefono":"(105) 6208698","codigoPais":"RU","profesion":"Software Test Engineer III"},
      {"nombre":"Barnett","apellido":"Antonsen","email":"bantonsen4h@npr.org","genero":"Male","edad":71,"telefono":"(378) 2255146","codigoPais":"ID","profesion":"Environmental Specialist"},
      {"nombre":"Hazlett","apellido":"Mackro","email":"hmackro4i@engadget.com","genero":"Male","edad":38,"telefono":"(156) 4297413","codigoPais":"BR","profesion":"Cost Accountant"},
      {"nombre":"York","apellido":"Eadmead","email":"yeadmead4j@flickr.com","genero":"Male","edad":37,"telefono":"(727) 2943225","codigoPais":"ID","profesion":"VP Marketing"},
      {"nombre":"Reese","apellido":"Tilley","email":"rtilley4k@un.org","genero":"Male","edad":63,"telefono":"(832) 6694787","codigoPais":"CN","profesion":"VP Product Management"},
      {"nombre":"Kaila","apellido":"Rablan","email":"krablan4l@skype.com","genero":"Female","edad":89,"telefono":"(922) 4042827","codigoPais":"LT","profesion":"Sales Associate"},
      {"nombre":"Luz","apellido":"Jelf","email":"ljelf4m@bloglovin.com","genero":"Female","edad":65,"telefono":"(877) 4106626","codigoPais":"ID","profesion":"Administrative Assistant II"},
      {"nombre":"Cristin","apellido":"Davidavidovics","email":"cdavidavidovics4n@uol.com.br","genero":"Female","edad":95,"telefono":"(228) 5313627","codigoPais":"MA","profesion":"Senior Cost Accountant"},
      {"nombre":"Wake","apellido":"Reding","email":"wreding4o@google.es","genero":"Polygender","edad":15,"telefono":"(729) 1189903","codigoPais":"AM","profesion":"Human Resources Assistant II"},
      {"nombre":"Thaine","apellido":"Porteous","email":"tporteous4p@csmonitor.com","genero":"Male","edad":67,"telefono":"(654) 7774804","codigoPais":"TH","profesion":"Technical Writer"},
      {"nombre":"Austine","apellido":"Mattiazzi","email":"amattiazzi4q@zdnet.com","genero":"Female","edad":63,"telefono":"(881) 7102025","codigoPais":"NI","profesion":"Business Systems Development Analyst"},
      {"nombre":"Delmer","apellido":"MacNeely","email":"dmacneely4r@ovh.net","genero":"Male","edad":52,"telefono":"(213) 1586124","codigoPais":"ZA","profesion":"Clinical Specialist"},
      {"nombre":"Sergio","apellido":"Duley","email":"sduley4s@diigo.com","genero":"Male","edad":22,"telefono":"(857) 9373893","codigoPais":"CO","profesion":"Engineer II"},
      {"nombre":"Samantha","apellido":"Bahike","email":"sbahike4t@hostgator.com","genero":"Female","edad":85,"telefono":"(364) 7157617","codigoPais":"FR","profesion":"Nurse Practicioner"},
      {"nombre":"Lissy","apellido":"Rugge","email":"lrugge4u@flickr.com","genero":"Female","edad":53,"telefono":"(209) 8948034","codigoPais":"GE","profesion":"Research Nurse"},
      {"nombre":"Hally","apellido":"Bellini","email":"hbellini4v@lycos.com","genero":"Female","edad":96,"telefono":"(879) 8332040","codigoPais":"KE","profesion":"Programmer IV"},
      {"nombre":"Shell","apellido":"Abbado","email":"sabbado4w@cnbc.com","genero":"Female","edad":47,"telefono":"(450) 6369344","codigoPais":"VN","profesion":"Business Systems Development Analyst"},
      {"nombre":"Garwood","apellido":"Hayland","email":"ghayland4x@elpais.com","genero":"Male","edad":61,"telefono":"(731) 5036003","codigoPais":"CN","profesion":"Marketing Manager"},
      {"nombre":"Larry","apellido":"Feather","email":"lfeather4y@hibu.com","genero":"Male","edad":99,"telefono":"(371) 5679664","codigoPais":"RU","profesion":"Web Developer III"},
      {"nombre":"Ave","apellido":"Bene","email":"abene4z@symantec.com","genero":"Male","edad":39,"telefono":"(446) 6983760","codigoPais":"RU","profesion":"Internal Auditor"},
      {"nombre":"Tyrone","apellido":"Shewsmith","email":"tshewsmith50@bigcartel.com","genero":"Male","edad":19,"telefono":"(899) 8837937","codigoPais":"CN","profesion":"Tax Accountant"},
      {"nombre":"Felic","apellido":"Figgures","email":"ffiggures51@twitpic.com","genero":"Male","edad":8,"telefono":"(759) 1025430","codigoPais":"ID","profesion":"Product Engineer"},
      {"nombre":"Antoinette","apellido":"Di Maria","email":"adimaria52@xing.com","genero":"Female","edad":56,"telefono":"(707) 6800205","codigoPais":"CN","profesion":"Registered Nurse"},
      {"nombre":"El","apellido":"Solomonides","email":"esolomonides53@ustream.tv","genero":"Male","edad":7,"telefono":"(570) 4860615","codigoPais":"MW","profesion":"Legal Assistant"},
      {"nombre":"Susanne","apellido":"Resun","email":"sresun54@apache.org","genero":"Female","edad":89,"telefono":"(572) 8014582","codigoPais":"MX","profesion":"VP Product Management"},
      {"nombre":"Boy","apellido":"Brazenor","email":"bbrazenor55@psu.edu","genero":"Male","edad":17,"telefono":"(108) 5465670","codigoPais":"RS","profesion":"Budget/Accounting Analyst I"},
      {"nombre":"Suellen","apellido":"Gladyer","email":"sgladyer56@marriott.com","genero":"Female","edad":24,"telefono":"(796) 3044350","codigoPais":"PT","profesion":"Product Engineer"},
      {"nombre":"Annamaria","apellido":"Dugall","email":"adugall57@webeden.co.uk","genero":"Female","edad":18,"telefono":"(668) 6150023","codigoPais":"ID","profesion":"Senior Cost Accountant"},
      {"nombre":"Bev","apellido":"Winnett","email":"bwinnett58@shop-pro.jp","genero":"Female","edad":53,"telefono":"(860) 5443899","codigoPais":"CZ","profesion":"Librarian"},
      {"nombre":"Nancey","apellido":"Goggin","email":"ngoggin59@twitpic.com","genero":"Female","edad":34,"telefono":"(554) 9198805","codigoPais":"JP","profesion":"Health Coach III"},
      {"nombre":"Brynne","apellido":"Henningham","email":"bhenningham5a@yandex.ru","genero":"Female","edad":81,"telefono":"(147) 1920064","codigoPais":"SY","profesion":"Information Systems Manager"},
      {"nombre":"Maribelle","apellido":"Ollet","email":"mollet5b@reddit.com","genero":"Female","edad":27,"telefono":"(198) 5826795","codigoPais":"CZ","profesion":"Quality Control Specialist"},
      {"nombre":"Mathian","apellido":"Balazs","email":"mbalazs5c@businessinsider.com","genero":"Male","edad":97,"telefono":"(838) 2694032","codigoPais":"UA","profesion":"Computer Systems Analyst IV"},
      {"nombre":"Germana","apellido":"Dunlop","email":"gdunlop5d@sourceforge.net","genero":"Female","edad":51,"telefono":"(265) 6529763","codigoPais":"CN","profesion":"Director of Sales"},
      {"nombre":"Poul","apellido":"Ivel","email":"pivel5e@oaic.gov.au","genero":"Male","edad":6,"telefono":"(700) 6832700","codigoPais":"CN","profesion":"Nurse Practicioner"},
      {"nombre":"Mathilda","apellido":"Gurwood","email":"mgurwood5f@adobe.com","genero":"Female","edad":37,"telefono":"(383) 1833986","codigoPais":"ID","profesion":"Biostatistician IV"},
      {"nombre":"Donnie","apellido":"Feechan","email":"dfeechan5g@ask.com","genero":"Genderqueer","edad":92,"telefono":"(592) 6365948","codigoPais":"CN","profesion":"Physical Therapy Assistant"},
      {"nombre":"Aila","apellido":"Hampshaw","email":"ahampshaw5h@about.com","genero":"Female","edad":78,"telefono":"(295) 7017387","codigoPais":"MM","profesion":"Environmental Tech"},
      {"nombre":"Melva","apellido":"Joincey","email":"mjoincey5i@dell.com","genero":"Female","edad":59,"telefono":"(717) 9728093","codigoPais":"ID","profesion":"Human Resources Manager"},
      {"nombre":"Francklyn","apellido":"Kerrod","email":"fkerrod5j@lulu.com","genero":"Male","edad":22,"telefono":"(843) 4243036","codigoPais":"PL","profesion":"Account Representative II"},
      {"nombre":"Norri","apellido":"Adess","email":"nadess5k@dailymail.co.uk","genero":"Female","edad":41,"telefono":"(332) 1437759","codigoPais":"CN","profesion":"Compensation Analyst"},
      {"nombre":"Jarvis","apellido":"Theml","email":"jtheml5l@prweb.com","genero":"Male","edad":23,"telefono":"(811) 8795431","codigoPais":"CL","profesion":"Help Desk Operator"},
      {"nombre":"Jeffie","apellido":"Vayne","email":"jvayne5m@umich.edu","genero":"Male","edad":23,"telefono":"(390) 4584071","codigoPais":"GN","profesion":"Dental Hygienist"},
      {"nombre":"Georgine","apellido":"Strutz","email":"gstrutz5n@narod.ru","genero":"Female","edad":52,"telefono":"(480) 3969230","codigoPais":"HR","profesion":"Senior Quality Engineer"},
      {"nombre":"Danette","apellido":"Baulch","email":"dbaulch5o@npr.org","genero":"Female","edad":90,"telefono":"(747) 4360479","codigoPais":"BR","profesion":"Recruiting Manager"},
      {"nombre":"Denny","apellido":"Budgeon","email":"dbudgeon5p@jimdo.com","genero":"Male","edad":70,"telefono":"(346) 7606073","codigoPais":"BR","profesion":"Professor"},
      {"nombre":"Calvin","apellido":"Freake","email":"cfreake5q@washington.edu","genero":"Male","edad":53,"telefono":"(286) 9225261","codigoPais":"BT","profesion":"Office Assistant I"},
      {"nombre":"Agnella","apellido":"Hewins","email":"ahewins5r@techcrunch.com","genero":"Female","edad":34,"telefono":"(250) 2946618","codigoPais":"PT","profesion":"Compensation Analyst"},
      {"nombre":"Bride","apellido":"Alesin","email":"balesin5s@pen.io","genero":"Female","edad":89,"telefono":"(171) 7362375","codigoPais":"AL","profesion":"Health Coach III"},
      {"nombre":"Westleigh","apellido":"Baldetti","email":"wbaldetti5t@un.org","genero":"Male","edad":40,"telefono":"(606) 1330536","codigoPais":"CN","profesion":"Business Systems Development Analyst"},
      {"nombre":"Benjy","apellido":"Lenahan","email":"blenahan5u@barnesandnoble.com","genero":"Male","edad":58,"telefono":"(814) 9181739","codigoPais":"CN","profesion":"Geological Engineer"},
      {"nombre":"Agustin","apellido":"Myrkus","email":"amyrkus5v@oracle.com","genero":"Male","edad":52,"telefono":"(404) 5623018","codigoPais":"EG","profesion":"Executive Secretary"},
      {"nombre":"Salem","apellido":"Blaxland","email":"sblaxland5w@php.net","genero":"Male","edad":15,"telefono":"(781) 2054921","codigoPais":"CZ","profesion":"Professor"},
      {"nombre":"Naoma","apellido":"Halpen","email":"nhalpen5x@businessweek.com","genero":"Female","edad":14,"telefono":"(117) 1657848","codigoPais":"CN","profesion":"Software Consultant"},
      {"nombre":"Karoly","apellido":"Gentzsch","email":"kgentzsch5y@google.ru","genero":"Genderfluid","edad":12,"telefono":"(630) 6164187","codigoPais":"GH","profesion":"Staff Accountant II"},
      {"nombre":"Iseabal","apellido":"Heiton","email":"iheiton5z@economist.com","genero":"Female","edad":66,"telefono":"(419) 6524093","codigoPais":"AR","profesion":"Administrative Officer"},
      {"nombre":"Akim","apellido":"Chesson","email":"achesson60@spotify.com","genero":"Male","edad":29,"telefono":"(305) 9749883","codigoPais":"ID","profesion":"Developer II"},
      {"nombre":"Marigold","apellido":"Stapley","email":"mstapley61@amazon.co.jp","genero":"Female","edad":95,"telefono":"(849) 6776463","codigoPais":"CA","profesion":"Editor"},
      {"nombre":"Halli","apellido":"Tully","email":"htully62@shareasale.com","genero":"Female","edad":30,"telefono":"(472) 4710393","codigoPais":"ID","profesion":"Media Manager III"},
      {"nombre":"Baryram","apellido":"Leitche","email":"bleitche63@diigo.com","genero":"Male","edad":79,"telefono":"(273) 6564871","codigoPais":"ID","profesion":"Associate Professor"},
      {"nombre":"Seka","apellido":"Dowrey","email":"sdowrey64@last.fm","genero":"Female","edad":29,"telefono":"(965) 1048269","codigoPais":"GB","profesion":"Operator"},
      {"nombre":"Eveleen","apellido":"Sparks","email":"esparks65@ibm.com","genero":"Female","edad":61,"telefono":"(575) 5224810","codigoPais":"BR","profesion":"Chief Design Engineer"},
      {"nombre":"Annnora","apellido":"Wailes","email":"awailes66@facebook.com","genero":"Female","edad":90,"telefono":"(233) 3931031","codigoPais":"CN","profesion":"Chief Design Engineer"},
      {"nombre":"Irv","apellido":"McGeachey","email":"imcgeachey67@yellowbook.com","genero":"Male","edad":16,"telefono":"(311) 7438261","codigoPais":"VN","profesion":"Internal Auditor"},
      {"nombre":"Guenna","apellido":"Durman","email":"gdurman68@example.com","genero":"Female","edad":64,"telefono":"(568) 6962233","codigoPais":"PH","profesion":"Associate Professor"},
      {"nombre":"Cleopatra","apellido":"Doman","email":"cdoman69@chron.com","genero":"Female","edad":29,"telefono":"(751) 4214978","codigoPais":"RU","profesion":"Product Engineer"},
      {"nombre":"Janeva","apellido":"Aldwinckle","email":"jaldwinckle6a@zimbio.com","genero":"Female","edad":75,"telefono":"(659) 6190867","codigoPais":"FI","profesion":"Data Coordinator"},
      {"nombre":"Earl","apellido":"Ickowics","email":"eickowics6b@hud.gov","genero":"Male","edad":29,"telefono":"(679) 3007751","codigoPais":"PT","profesion":"Product Engineer"},
      {"nombre":"Mil","apellido":"Stiles","email":"mstiles6c@imdb.com","genero":"Female","edad":51,"telefono":"(426) 8300997","codigoPais":"AL","profesion":"Account Coordinator"},
      {"nombre":"Yoshi","apellido":"Tukesby","email":"ytukesby6d@posterous.com","genero":"Female","edad":96,"telefono":"(906) 2579065","codigoPais":"PH","profesion":"Analog Circuit Design manager"},
      {"nombre":"Stace","apellido":"Moncey","email":"smoncey6e@yellowbook.com","genero":"Female","edad":62,"telefono":"(864) 9758297","codigoPais":"PT","profesion":"Nurse Practicioner"},
      {"nombre":"Augustine","apellido":"Perett","email":"aperett6f@taobao.com","genero":"Male","edad":9,"telefono":"(684) 3545847","codigoPais":"ZW","profesion":"Senior Quality Engineer"},
      {"nombre":"Domingo","apellido":"Pedrocco","email":"dpedrocco6g@squarespace.com","genero":"Male","edad":95,"telefono":"(560) 8306655","codigoPais":"HN","profesion":"Graphic Designer"},
      {"nombre":"Vickie","apellido":"Schimank","email":"vschimank6h@xing.com","genero":"Female","edad":100,"telefono":"(349) 5207893","codigoPais":"SE","profesion":"Data Coordinator"},
      {"nombre":"Kirby","apellido":"Hansmann","email":"khansmann6i@guardian.co.uk","genero":"Agender","edad":75,"telefono":"(407) 6386853","codigoPais":"PH","profesion":"Electrical Engineer"},
      {"nombre":"Maurine","apellido":"Georgi","email":"mgeorgi6j@creativecommons.org","genero":"Female","edad":3,"telefono":"(979) 5476753","codigoPais":"JP","profesion":"Computer Systems Analyst III"},
      {"nombre":"Lauretta","apellido":"Cleeve","email":"lcleeve6k@youku.com","genero":"Female","edad":61,"telefono":"(913) 7065274","codigoPais":"FR","profesion":"Statistician IV"},
      {"nombre":"Lesya","apellido":"Dominik","email":"ldominik6l@trellian.com","genero":"Female","edad":28,"telefono":"(758) 5183772","codigoPais":"JP","profesion":"Web Designer IV"},
      {"nombre":"Baudoin","apellido":"Capeloff","email":"bcapeloff6m@vistaprint.com","genero":"Male","edad":38,"telefono":"(429) 8567288","codigoPais":"GR","profesion":"Business Systems Development Analyst"},
      {"nombre":"Billi","apellido":"Kestin","email":"bkestin6n@blogtalkradio.com","genero":"Female","edad":96,"telefono":"(435) 4632690","codigoPais":"ES","profesion":"Physical Therapy Assistant"},
      {"nombre":"Gardie","apellido":"Fiddeman","email":"gfiddeman6o@creativecommons.org","genero":"Male","edad":62,"telefono":"(267) 2428453","codigoPais":"CN","profesion":"Occupational Therapist"},
      {"nombre":"Blanca","apellido":"Poxson","email":"bpoxson6p@ucsd.edu","genero":"Female","edad":63,"telefono":"(310) 4385407","codigoPais":"CZ","profesion":"Registered Nurse"},
      {"nombre":"Caralie","apellido":"Lampard","email":"clampard6q@xrea.com","genero":"Female","edad":54,"telefono":"(785) 2713007","codigoPais":"GR","profesion":"Budget/Accounting Analyst IV"},
      {"nombre":"Leona","apellido":"Piddick","email":"lpiddick6r@quantcast.com","genero":"Bigender","edad":17,"telefono":"(360) 1083707","codigoPais":"ID","profesion":"Administrative Assistant II"},
      {"nombre":"Nana","apellido":"Giacovelli","email":"ngiacovelli6s@pinterest.com","genero":"Female","edad":9,"telefono":"(689) 7049758","codigoPais":"PH","profesion":"Human Resources Manager"},
      {"nombre":"Tomasina","apellido":"Cleary","email":"tcleary6t@blogspot.com","genero":"Female","edad":95,"telefono":"(514) 2902416","codigoPais":"BG","profesion":"Cost Accountant"},
      {"nombre":"Marcelline","apellido":"Carff","email":"mcarff6u@booking.com","genero":"Female","edad":2,"telefono":"(358) 7412977","codigoPais":"YE","profesion":"Account Representative I"},
      {"nombre":"Guthry","apellido":"Calbaithe","email":"gcalbaithe6v@youku.com","genero":"Male","edad":57,"telefono":"(729) 5124486","codigoPais":"WF","profesion":"Accounting Assistant IV"},
      {"nombre":"Eran","apellido":"Rousby","email":"erousby6w@twitter.com","genero":"Female","edad":100,"telefono":"(652) 6837617","codigoPais":"JP","profesion":"Account Representative IV"},
      {"nombre":"Johanna","apellido":"Fuzzens","email":"jfuzzens6x@bandcamp.com","genero":"Female","edad":34,"telefono":"(154) 8872197","codigoPais":"CN","profesion":"Statistician IV"},
      {"nombre":"Saunder","apellido":"Turle","email":"sturle6y@histats.com","genero":"Male","edad":37,"telefono":"(420) 7276180","codigoPais":"CN","profesion":"Engineer III"},
      {"nombre":"Hamnet","apellido":"Braddock","email":"hbraddock6z@youtu.be","genero":"Male","edad":59,"telefono":"(327) 1342913","codigoPais":"MK","profesion":"Senior Developer"},
      {"nombre":"Kearney","apellido":"Craiker","email":"kcraiker70@unesco.org","genero":"Male","edad":24,"telefono":"(189) 5454369","codigoPais":"RU","profesion":"Nuclear Power Engineer"},
      {"nombre":"Haskel","apellido":"Wayland","email":"hwayland71@yellowpages.com","genero":"Male","edad":94,"telefono":"(633) 8174885","codigoPais":"PL","profesion":"Marketing Manager"},
      {"nombre":"Sigfrid","apellido":"Lesor","email":"slesor72@huffingtonpost.com","genero":"Genderfluid","edad":91,"telefono":"(445) 6692119","codigoPais":"PT","profesion":"VP Accounting"},
      {"nombre":"Scott","apellido":"Smellie","email":"ssmellie73@sphinn.com","genero":"Male","edad":71,"telefono":"(928) 1836758","codigoPais":"RU","profesion":"Database Administrator III"},
      {"nombre":"Malinde","apellido":"Kondrat","email":"mkondrat74@newsvine.com","genero":"Female","edad":43,"telefono":"(138) 6800007","codigoPais":"PH","profesion":"Geological Engineer"},
      {"nombre":"Valentino","apellido":"Giovannelli","email":"vgiovannelli75@oakley.com","genero":"Male","edad":88,"telefono":"(976) 3620934","codigoPais":"MX","profesion":"Chief Design Engineer"},
      {"nombre":"Nikolaus","apellido":"De Ruggiero","email":"nderuggiero76@psu.edu","genero":"Male","edad":77,"telefono":"(406) 6288107","codigoPais":"BJ","profesion":"Operator"},
      {"nombre":"Britney","apellido":"Punton","email":"bpunton77@hugedomains.com","genero":"Female","edad":39,"telefono":"(130) 7466616","codigoPais":"PT","profesion":"Speech Pathologist"},
      {"nombre":"Alta","apellido":"Drayton","email":"adrayton78@usgs.gov","genero":"Female","edad":32,"telefono":"(516) 8793985","codigoPais":"CN","profesion":"Teacher"},
      {"nombre":"Fielding","apellido":"Hanham","email":"fhanham79@usa.gov","genero":"Male","edad":98,"telefono":"(772) 2552501","codigoPais":"SI","profesion":"VP Sales"},
      {"nombre":"Tye","apellido":"Flello","email":"tflello7a@stumbleupon.com","genero":"Male","edad":51,"telefono":"(759) 7684421","codigoPais":"CN","profesion":"Tax Accountant"},
      {"nombre":"Merilee","apellido":"Kiendl","email":"mkiendl7b@answers.com","genero":"Female","edad":27,"telefono":"(595) 4212076","codigoPais":"CN","profesion":"Structural Engineer"},
      {"nombre":"Hermy","apellido":"Lampl","email":"hlampl7c@storify.com","genero":"Male","edad":99,"telefono":"(492) 3491794","codigoPais":"ID","profesion":"Civil Engineer"},
      {"nombre":"Eadmund","apellido":"Riddles","email":"eriddles7d@ovh.net","genero":"Male","edad":75,"telefono":"(244) 5099759","codigoPais":"MX","profesion":"Senior Developer"},
      {"nombre":"Boy","apellido":"Hawkswood","email":"bhawkswood7e@gmpg.org","genero":"Male","edad":54,"telefono":"(990) 5043422","codigoPais":"PH","profesion":"Geological Engineer"},
      {"nombre":"Hermione","apellido":"Jochanany","email":"hjochanany7f@forbes.com","genero":"Female","edad":6,"telefono":"(943) 3466655","codigoPais":"ID","profesion":"Professor"},
      {"nombre":"Spense","apellido":"Hadcroft","email":"shadcroft7g@intel.com","genero":"Male","edad":51,"telefono":"(158) 2643341","codigoPais":"ID","profesion":"Geological Engineer"},
      {"nombre":"Gilberta","apellido":"Addy","email":"gaddy7h@uiuc.edu","genero":"Female","edad":27,"telefono":"(923) 2535315","codigoPais":"SS","profesion":"VP Quality Control"},
      {"nombre":"Carri","apellido":"De Vuyst","email":"cdevuyst7i@bloomberg.com","genero":"Genderqueer","edad":46,"telefono":"(393) 4799320","codigoPais":"CN","profesion":"Nuclear Power Engineer"},
      {"nombre":"Moises","apellido":"Selburn","email":"mselburn7j@msu.edu","genero":"Male","edad":94,"telefono":"(654) 4673661","codigoPais":"BR","profesion":"Account Representative IV"},
      {"nombre":"Ottilie","apellido":"Strafford","email":"ostrafford7k@1688.com","genero":"Female","edad":92,"telefono":"(412) 3745857","codigoPais":"IT","profesion":"Accountant IV"},
      {"nombre":"Clemmy","apellido":"Jedrzaszkiewicz","email":"cjedrzaszkiewicz7l@tumblr.com","genero":"Female","edad":72,"telefono":"(446) 2200337","codigoPais":"ZA","profesion":"General Manager"},
      {"nombre":"Emmerich","apellido":"Densun","email":"edensun7m@friendfeed.com","genero":"Male","edad":63,"telefono":"(990) 6701196","codigoPais":"JP","profesion":"Compensation Analyst"},
      {"nombre":"Johannes","apellido":"Atkin","email":"jatkin7n@bloomberg.com","genero":"Male","edad":98,"telefono":"(246) 8244606","codigoPais":"ID","profesion":"Health Coach I"},
      {"nombre":"Orlan","apellido":"Wartonby","email":"owartonby7o@ox.ac.uk","genero":"Male","edad":100,"telefono":"(827) 6863498","codigoPais":"CN","profesion":"Safety Technician I"},
      {"nombre":"Samara","apellido":"Pedreschi","email":"spedreschi7p@mediafire.com","genero":"Female","edad":87,"telefono":"(382) 4331997","codigoPais":"SE","profesion":"Community Outreach Specialist"},
      {"nombre":"Gian","apellido":"Bruin","email":"gbruin7q@unicef.org","genero":"Non-binary","edad":23,"telefono":"(943) 1856236","codigoPais":"CN","profesion":"Automation Specialist I"},
      {"nombre":"Wallie","apellido":"Spencley","email":"wspencley7r@ning.com","genero":"Male","edad":32,"telefono":"(524) 8443420","codigoPais":"GT","profesion":"Financial Advisor"},
      {"nombre":"Didi","apellido":"Gerring","email":"dgerring7s@google.com.hk","genero":"Female","edad":92,"telefono":"(960) 8320293","codigoPais":"NG","profesion":"Programmer IV"},
      {"nombre":"Lynnell","apellido":"Skillett","email":"lskillett7t@opensource.org","genero":"Female","edad":88,"telefono":"(601) 8971213","codigoPais":"ID","profesion":"Administrative Officer"},
      {"nombre":"Basil","apellido":"Krout","email":"bkrout7u@hp.com","genero":"Male","edad":6,"telefono":"(118) 7832838","codigoPais":"CZ","profesion":"Quality Control Specialist"},
      {"nombre":"Rana","apellido":"Coverly","email":"rcoverly7v@hugedomains.com","genero":"Polygender","edad":35,"telefono":"(682) 3198591","codigoPais":"HN","profesion":"VP Marketing"},
      {"nombre":"Wynne","apellido":"Whyborn","email":"wwhyborn7w@people.com.cn","genero":"Female","edad":33,"telefono":"(537) 8625665","codigoPais":"GR","profesion":"Analyst Programmer"},
      {"nombre":"Sacha","apellido":"Gredden","email":"sgredden7x@twitter.com","genero":"Female","edad":72,"telefono":"(681) 3262205","codigoPais":"CA","profesion":"Human Resources Assistant IV"},
      {"nombre":"Aube","apellido":"Malcher","email":"amalcher7y@answers.com","genero":"Male","edad":62,"telefono":"(928) 7076524","codigoPais":"AF","profesion":"Geological Engineer"},
      {"nombre":"Rona","apellido":"Brunetti","email":"rbrunetti7z@springer.com","genero":"Female","edad":2,"telefono":"(954) 4950512","codigoPais":"IE","profesion":"Social Worker"},
      {"nombre":"Halsy","apellido":"Skett","email":"hskett80@unicef.org","genero":"Male","edad":44,"telefono":"(867) 4000358","codigoPais":"CN","profesion":"Senior Cost Accountant"},
      {"nombre":"Deeanne","apellido":"Laughren","email":"dlaughren81@jimdo.com","genero":"Female","edad":9,"telefono":"(498) 9088850","codigoPais":"CN","profesion":"Registered Nurse"},
      {"nombre":"Melvyn","apellido":"Lochran","email":"mlochran82@wordpress.org","genero":"Male","edad":78,"telefono":"(372) 4382589","codigoPais":"PH","profesion":"Junior Executive"},
      {"nombre":"Babette","apellido":"Lambarth","email":"blambarth83@unicef.org","genero":"Female","edad":25,"telefono":"(726) 2028903","codigoPais":"CN","profesion":"Biostatistician IV"},
      {"nombre":"Rex","apellido":"Lacer","email":"rlacer84@opera.com","genero":"Male","edad":89,"telefono":"(605) 7418069","codigoPais":"CR","profesion":"Nurse Practicioner"},
      {"nombre":"Stewart","apellido":"Gillott","email":"sgillott85@xing.com","genero":"Male","edad":73,"telefono":"(152) 4026530","codigoPais":"VN","profesion":"Sales Associate"},
      {"nombre":"Philipa","apellido":"Slinger","email":"pslinger86@addtoany.com","genero":"Female","edad":56,"telefono":"(651) 5525825","codigoPais":"TH","profesion":"Data Coordinator"},
      {"nombre":"Matty","apellido":"Gillmore","email":"mgillmore87@wix.com","genero":"Male","edad":22,"telefono":"(237) 4905402","codigoPais":"CN","profesion":"Clinical Specialist"},
      {"nombre":"Nestor","apellido":"Burnsyde","email":"nburnsyde88@ycombinator.com","genero":"Male","edad":11,"telefono":"(398) 2763377","codigoPais":"PH","profesion":"Registered Nurse"},
      {"nombre":"Nettie","apellido":"Winney","email":"nwinney89@mtv.com","genero":"Female","edad":40,"telefono":"(230) 5579602","codigoPais":"IE","profesion":"Information Systems Manager"},
      {"nombre":"Mannie","apellido":"Gauchier","email":"mgauchier8a@nih.gov","genero":"Male","edad":36,"telefono":"(508) 6448311","codigoPais":"JP","profesion":"Account Representative I"},
      {"nombre":"Pincus","apellido":"Garretson","email":"pgarretson8b@histats.com","genero":"Male","edad":98,"telefono":"(415) 6421288","codigoPais":"TN","profesion":"Environmental Tech"}
    ]
)

//Buscar todos los registros
db.personas.find()

//Buscar por nombre
db.personas.find({
    "nombre": "Pincus"
})

//Buscar por codigoPais
db.personas.find({
    "codigoPais": "FR"
})

//Operadores $gt - > , $gte - =>, $lt - <,  $lte - <=

//MAYOR QUÉ
db.personas.find({
    "edad": {
        "$gt": 55
    }
})

//MAYOR O IGUAL QUÉ
db.personas.find({
    "edad": {
        "$gte": 55
    }
})

//MENOR QUE
db.personas.find({
    "edad": {
        "$lt": 28
    }
})

//MENOR O IGUAL QUÉ
db.personas.find({
    "edad": {
        "$lte": 28
    }
})

//OPERADORES LÓGICOS
//USANDO AND
db.personas.find({
    "$and": [
        {
            "genero": "Female"
        },
        {
            "codigoPais": "FR"
        },
        {
            "edad": {
                "$gte": 48
            }
        }

    ]
})

//USANDO OR
db.personas.find({
    "$or": [
        {
            "codigoPais": "ES",
        },
        {
            "codigoPais": "CN"
        }
    ]
})

//LIMIT
db.personas.find({
    "$or": [
        {
            "codigoPais": "ES",
        },
        {
            "codigoPais": "CN"
        }
    ]
}).limit

//ASCENDENTE
db.personas.find().sort({"nombre": 1})

//DESCENDENTE
db.personas.find().sort({"nombre": -1})

// AGGREGATE
db.personas.aggregate({
    $match: {"genero": "Male"}
})

//GROUP
db.personas.aggregate([
    {
        $match: { genero: "Male" }
    },
    {
        $group: {
            _id: "$codigoPais",
            total: {$sum: 1},
            campos: {
                $push: {
                    nombre: "$nombre",
                    ape: "$apellido",
                    edad: "$edad"
                }
            }
        }
    },
    {
        $project: {
            _id: 1,
            total: 1,
            campos: 1
        }
    }
])







