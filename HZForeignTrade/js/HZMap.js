$(function() {
   $('#HZMChartContainer').highcharts('Map', {
      title: {
         text: 'Detailed Map of Hangzhou' 
      },
      
      plotOptions: {
         series: {
            tooltip: {
               headerFormat: '',
               pointFormat: '<strong>{point.name}</strong>',
               useHTML: true
            }
         }
      },
      
      series: 
         [
            {
               name: 'Hangzhou City',
               "type": "map",
               "data": [
                  {
                     "name": "Yuhang District",
                     color: 'rgb(123,84,149)',
                     "path": "M616,-804,621,-806,623,-804,626,-807,629,-808,630,-807,633,-810,636,-808,641,-809,647,-808,649,-804,649,-798,651,-796,656,-797,660,-800,666,-800,669,-804,678,-802,679,-808,681,-810,682,-816,684,-818,688,-819,680,-825,689,-825,694,-830,698,-831,704,-837,703,-846,701,-850,701,-854,704,-856,704,-861,701,-865,693,-862,692,-866,689,-867,688,-873,686,-878,692,-880,690,-887,691,-889,700,-889,701,-887,711,-888,718,-881,720,-881,724,-883,728,-883,732,-881,733,-884,736,-883,736,-888,734,-891,735,-903,740,-900,744,-901,750,-897,752,-897,752,-900,758,-901,759,-907,760,-911,760,-913,765,-910,770,-908,772,-905,781,-908,784,-907,785,-904,783,-901,782,-899,786,-896,788,-894,786,-891,784,-887,782,-884,786,-882,789,-883,792,-883,795,-880,798,-882,801,-882,802,-881,803,-878,800,-874,805,-872,810,-868,811,-873,807,-875,807,-880,809,-883,811,-887,820,-888,824,-892,827,-892,830,-897,817,-903,819,-907,817,-911,823,-918,826,-919,825,-925,830,-927,828,-942,829,-942,828,-948,823,-948,823,-961,821,-965,817,-969,812,-970,808,-967,804,-963,802,-961,786,-961,779,-966,776,-963,767,-962,766,-966,763,-962,758,-961,758,-957,753,-955,753,-947,745,-944,741,-948,743,-949,742,-952,739,-953,734,-950,728,-948,724,-950,721,-953,721,-958,717,-958,713,-958,710,-956,710,-950,707,-947,705,-941,706,-937,710,-933,702,-924,696,-929,687,-929,683,-934,679,-935,678,-933,670,-933,664,-929,663,-931,661,-937,656,-935,653,-935,653,-938,649,-942,647,-944,642,-940,638,-940,635,-939,630,-939,626,-942,625,-946,628,-947,628,-950,625,-951,623,-953,617,-961,614,-961,609,-959,602,-966,597,-964,589,-964,582,-967,580,-970,582,-973,579,-977,582,-980,579,-986,572,-984,562,-986,560,-990,553,-988,544,-986,549,-975,551,-963,553,-953,550,-947,548,-946,547,-940,544,-937,549,-933,551,-931,549,-928,545,-927,544,-922,541,-920,541,-916,542,-913,551,-909,555,-904,559,-903,563,-906,568,-908,570,-902,571,-899,575,-898,579,-897,581,-894,587,-890,584,-884,587,-883,585,-878,592,-876,592,-860,596,-860,605,-865,605,-861,601,-856,605,-852,602,-847,606,-846,612,-847,616,-848,618,-849,618,-844,618,-830,610,-826,610,-818,604,-815,608,-810,613,-805z"
                  },
                  {
                     "name": "Lingan City",
                     color: 'rgb(138,120,178)',
                     "path": "M282,-868,292,-871,299,-872,307,-872,315,-868,324,-861,353,-862,356,-870,363,-879,374,-882,380,-889,389,-895,394,-896,402,-894,410,-889,416,-886,420,-890,431,-895,436,-901,444,-913,455,-910,467,-912,477,-911,484,-916,490,-922,497,-925,509,-921,517,-924,528,-928,531,-918,531,-915,541,-916,542,-913,552,-908,558,-904,569,-904,573,-898,581,-894,586,-888,584,-884,584,-884,585,-878,592,-874,592,-861,605,-865,602,-858,604,-853,602,-847,607,-846,617,-849,618,-831,612,-827,610,-818,605,-815,615,-804,616,-804,613,-795,610,-790,607,-784,608,-778,604,-775,598,-775,598,-769,594,-766,587,-762,586,-756,582,-753,574,-754,566,-760,561,-761,555,-764,555,-770,549,-770,544,-771,540,-775,534,-775,526,-774,523,-780,519,-788,515,-790,509,-794,506,-799,504,-807,503,-813,492,-807,487,-803,483,-797,483,-788,479,-782,468,-779,461,-781,454,-781,449,-776,448,-770,452,-766,447,-762,444,-758,446,-751,443,-740,440,-731,440,-722,442,-713,434,-708,427,-712,420,-715,413,-716,406,-714,404,-711,395,-714,387,-719,379,-719,373,-714,369,-709,368,-700,364,-691,362,-686,348,-689,336,-693,326,-697,318,-702,314,-708,312,-717,305,-715,291,-712,278,-715,270,-719,265,-725,255,-723,248,-722,224,-720,208,-734,208,-753,208,-759,204,-767,202,-780,198,-782,200,-795,204,-802,212,-808,222,-808,225,-808,229,-813,228,-820,226,-828,220,-837,212,-843,217,-851,217,-860,218,-873,223,-880,232,-886,238,-889,246,-889,255,-888,264,-883,270,-878z"
                  },
                  {
                     "name": "Fuyang City",
                     color: 'rgb(154,125,183)',
                     "path": "M678,-806,686,-805,680,-772,687,-771,689,-765,693,-766,692,-761,697,-759,698,-761,700,-756,705,-760,712,-755,733,-754,732,-757,735,-760,736,-763,738,-759,740,-758,736,-756,736,-752,737,-750,735,-746,738,-742,736,-738,736,-733,736,-727,734,-714,722,-707,724,-702,723,-697,719,-691,721,-685,720,-677,717,-675,717,-666,715,-665,714,-663,711,-660,711,-656,714,-653,718,-651,721,-648,718,-645,715,-639,686,-636,683,-634,683,-619,677,-611,670,-602,654,-598,642,-598,628,-600,620,-615,627,-621,629,-626,627,-635,610,-647,602,-647,590,-644,558,-642,552,-651,541,-676,537,-682,528,-680,526,-685,520,-692,514,-697,506,-700,499,-702,484,-717,471,-717,470,-725,474,-735,472,-744,464,-747,459,-750,446,-751,445,-759,451,-767,448,-772,451,-778,457,-781,466,-779,480,-783,483,-789,483,-796,488,-804,502,-812,508,-796,516,-790,522,-782,526,-774,533,-775,541,-774,545,-771,555,-769,557,-762,565,-760,574,-754,579,-754,585,-755,586,-760,591,-764,597,-768,598,-775,608,-778,607,-782,609,-788,613,-795,615,-804,620,-806,628,-808,632,-810,640,-809,647,-808,649,-799,654,-797,662,-800,667,-802,670,-804,677,-803z"
                  },
                  {
                     "name": "Xihu District",
                     color: 'rgb(214,84,158)',
                     "path": "M718,-881,723,-872,723,-860,727,-858,737,-860,741,-855,745,-849,746,-842,748,-838,746,-835,745,-831,747,-827,746,-823,740,-821,738,-819,739,-817,737,-813,739,-810,734,-807,731,-803,732,-798,738,-790,743,-783,757,-770,757,-767,751,-765,740,-758,738,-759,736,-763,734,-759,729,-754,721,-755,710,-756,705,-760,701,-757,698,-761,692,-761,692,-766,688,-766,687,-771,681,-772,686,-805,679,-806,684,-818,688,-819,681,-824,690,-826,695,-830,701,-835,703,-840,703,-846,701,-851,703,-855,704,-861,702,-864,693,-862,690,-867,689,-869,687,-878,691,-880,691,-888,701,-888,707,-887,719,-881z"
                  },
                  {
                     "name": "Gongshu District",
                     color: 'rgb(145,63,139)',
                     "path": "M774,-906,769,-908,762,-912,759,-906,752,-900,752,-897,746,-900,739,-901,735,-902,734,-894,735,-890,736,-886,733,-884,732,-881,727,-883,721,-882,721,-875,723,-867,724,-860,732,-859,737,-860,744,-851,749,-851,748,-855,745,-857,748,-859,750,-862,748,-866,755,-879,763,-888,768,-888,771,-891,772,-896,770,-899z"
                  },
                  {
                     "name": "Jianggan District",
                     color: 'rgb(184,141,187)',
                     "path": "M830,-897,854,-903,854,-895,846,-892,849,-887,861,-879,848,-844,841,-839,831,-837,819,-845,811,-855,800,-856,790,-851,784,-845,774,-831,765,-835,762,-837,760,-852,758,-858,762,-863,760,-867,769,-870,769,-872,765,-872,771,-879,773,-882,767,-888,772,-891,772,-896,770,-900,774,-906,781,-908,785,-904,782,-900,787,-895,783,-883,790,-883,794,-881,798,-882,801,-882,803,-878,803,-872,807,-870,811,-872,807,-876,810,-886,821,-889,830,-897z"
                  },
                  {
                     "name": "Xiacheng District",
                     color: 'rgb(224,77,103)',
                     "path": "M749,-851,748,-856,745,-857,750,-861,749,-864,749,-867,754,-877,762,-887,768,-889,772,-883,770,-878,766,-872,769,-872,766,-869,761,-867,762,-863,759,-859,759,-854,760,-851z"
                  },
                  {
                     "name": "Shangcheng District",
                     color: 'rgb(161,50,82)',
                     "path": "M739,-810,758,-816,774,-831,763,-837,760,-851,746,-851,747,-841,748,-838,746,-836,746,-829,745,-823,738,-819,739,-816,737,-812z"
                  },
                  {
                     "name": "Binjiang District",
                     color: 'rgb(131,83,159)',
                     "path": "M734,-795,743,-784,746,-789,756,-791,761,-784,768,-786,774,-783,774,-791,778,-793,775,-798,776,-802,779,-805,782,-805,782,-828,773,-831,760,-817,740,-810,732,-805,731,-800,733,-796z"
                  },
                  {
                     "name": "Xiaoshan District",
                     color: 'rgb(233,183,208)',
                     "path": "M736,-751,736,-748,735,-746,737,-742,736,-737,736,-725,734,-714,722,-706,724,-701,722,-695,719,-691,721,-684,720,-678,717,-674,717,-669,716,-666,714,-663,711,-659,711,-655,716,-652,719,-649,719,-645,721,-638,726,-636,728,-639,734,-640,736,-645,740,-648,744,-651,746,-658,746,-668,750,-672,751,-674,755,-671,759,-669,761,-674,766,-674,770,-680,777,-681,777,-687,785,-686,785,-683,790,-685,792,-685,793,-680,794,-674,802,-677,807,-682,816,-679,821,-682,825,-684,825,-688,829,-694,832,-699,840,-704,839,-710,841,-714,839,-717,839,-721,830,-725,831,-730,823,-737,829,-742,830,-749,825,-753,826,-762,816,-769,810,-764,805,-768,808,-771,811,-777,814,-781,817,-782,817,-777,823,-777,828,-784,835,-784,840,-791,850,-790,850,-785,853,-784,855,-781,858,-779,860,-789,863,-789,864,-778,867,-779,870,-781,874,-781,874,-790,881,-790,881,-797,896,-799,904,-792,911,-793,915,-793,918,-791,924,-787,930,-790,934,-787,941,-787,960,-819,971,-828,1000,-860,973,-901,963,-906,873,-902,869,-892,861,-879,848,-846,842,-840,833,-837,812,-854,801,-856,790,-852,775,-832,782,-827,782,-805,778,-804,775,-798,777,-793,774,-790,774,-784,768,-786,761,-784,755,-791,746,-789,743,-784,757,-770,757,-767,746,-762,740,-757z"
                  },
                  {
                     "name": "Tonglu County",
                     color: 'rgb(159,89,159)',
                     "path": "M362,-686,354,-682,359,-672,356,-667,345,-664,342,-648,344,-636,353,-633,375,-629,377,-610,385,-601,381,-594,383,-585,387,-578,396,-575,406,-571,413,-585,419,-590,425,-589,429,-584,433,-581,441,-587,445,-589,450,-585,455,-579,456,-577,471,-574,480,-578,484,-582,492,-586,498,-586,504,-579,508,-572,513,-567,517,-563,517,-556,516,-553,524,-543,537,-541,538,-533,560,-516,588,-514,595,-520,595,-531,595,-538,607,-549,620,-549,624,-546,627,-544,632,-547,640,-548,675,-549,675,-567,655,-578,648,-588,638,-589,635,-593,628,-600,621,-614,627,-621,629,-627,627,-633,618,-641,612,-646,605,-647,598,-646,590,-644,558,-642,538,-681,527,-681,521,-691,512,-698,500,-701,484,-716,473,-717,470,-726,474,-734,470,-745,464,-746,460,-749,450,-751,444,-743,441,-732,440,-721,442,-713,436,-709,428,-711,416,-716,406,-713,404,-711,389,-718,376,-716,371,-711,368,-702,365,-694z"
                  },
                  {
                     "name": "Jiande City",
                     color: 'rgb(113,85,159)',
                     "path": "M225,-385,234,-377,233,-368,248,-352,248,-340,254,-333,283,-331,295,-337,308,-336,329,-334,345,-338,354,-348,356,-354,360,-355,365,-351,369,-350,379,-351,380,-356,384,-367,394,-365,399,-365,403,-369,409,-380,410,-395,413,-399,412,-405,408,-411,407,-417,407,-426,413,-429,426,-429,438,-429,447,-427,446,-418,450,-405,453,-397,457,-393,462,-391,467,-391,471,-394,478,-399,485,-398,489,-398,492,-401,495,-403,506,-403,522,-403,526,-404,528,-411,528,-417,528,-420,527,-425,529,-434,540,-435,551,-429,560,-427,564,-429,563,-443,567,-448,570,-452,569,-462,580,-462,583,-468,582,-476,580,-481,575,-484,574,-494,580,-497,585,-503,588,-514,564,-515,555,-519,539,-532,537,-541,525,-543,518,-551,517,-559,516,-564,510,-571,499,-584,491,-585,483,-581,481,-579,474,-576,469,-575,460,-576,454,-580,448,-586,444,-588,436,-584,432,-582,427,-586,424,-589,417,-588,413,-583,411,-580,407,-573,406,-571,399,-564,398,-557,396,-552,389,-549,384,-543,378,-539,371,-536,372,-528,364,-513,369,-509,374,-509,379,-504,381,-499,373,-494,369,-492,366,-490,366,-482,353,-482,347,-479,345,-472,345,-465,345,-458,343,-454,334,-453,326,-451,313,-445,305,-440,301,-435,292,-436,289,-431,284,-426,282,-421,275,-420,269,-420,267,-410,263,-410,260,-406,256,-404,248,-404,240,-404,236,-400,231,-399,227,-398z"
                  },
                  {
                     "name": "Chunan County",
                     color: 'rgb(142,124,182)',
                     "path": "M264,-725,253,-722,243,-722,230,-721,217,-718,220,-689,215,-686,203,-689,197,-685,198,-675,198,-665,195,-667,192,-657,184,-656,182,-653,182,-649,176,-649,169,-652,165,-651,163,-645,161,-636,162,-631,157,-622,155,-615,155,-608,159,-600,161,-597,155,-593,150,-590,145,-582,144,-575,145,-569,140,-565,131,-560,127,-554,127,-550,119,-555,114,-553,111,-551,104,-555,97,-554,92,-552,86,-548,85,-544,85,-537,79,-529,72,-526,67,-523,65,-519,57,-513,55,-506,57,-500,61,-497,66,-497,57,-487,53,-486,20,-486,8,-477,0,-471,4,-460,11,-452,18,-444,23,-439,26,-431,31,-424,36,-420,42,-417,48,-415,60,-414,64,-410,69,-407,73,-404,79,-402,88,-402,95,-401,101,-401,103,-397,102,-385,100,-374,100,-363,103,-355,105,-349,109,-344,118,-341,128,-338,166,-332,175,-338,179,-348,183,-358,184,-368,191,-370,198,-371,204,-374,206,-379,225,-385,227,-396,234,-400,242,-404,255,-404,261,-408,267,-410,269,-418,280,-421,284,-425,289,-432,292,-435,299,-435,306,-440,323,-449,331,-452,342,-454,345,-459,345,-468,346,-476,347,-480,360,-482,365,-482,366,-490,370,-493,377,-496,380,-498,380,-503,377,-507,372,-509,369,-510,365,-512,367,-519,370,-524,372,-531,371,-536,381,-541,384,-543,386,-546,390,-549,396,-553,398,-561,400,-565,403,-568,407,-573,400,-573,391,-577,387,-578,383,-584,382,-593,384,-599,385,-601,378,-608,377,-613,376,-627,366,-630,357,-632,350,-634,344,-637,343,-644,343,-652,345,-661,345,-664,354,-666,358,-673,356,-678,354,-682,360,-685,361,-686,351,-688,341,-691,329,-696,321,-700,316,-704,313,-710,311,-717,299,-714,292,-713,285,-714,277,-715,268,-721z"
                  }
               ]
            }
         ]
   })
})