console.log("set.js loaded");

//hardcoded

//the hobbit
var hobbit = [
        {
            "definition": "Bilbo", 
            "id": 858531564, 
            "image": null, 
            "rank": 0, 
            "term": "\"Well, are you alive or are you dead?\""
        }, 

        {
            "definition": "Balin", 
            "id": 858531567, 
            "image": null, 
            "rank": 3, 
            "term": "\"There lies all that is left of Dale.\""
        }, 
        {
            "definition": "Bilbo", 
            "id": 858531569, 
            "image": null, 
            "rank": 5, 
            "term": "\"You said sitting on the doorstep and thinking would be my job...\""
        }, 
        {
            "definition": "Smaug", 
            "id": 858531570, 
            "image": null, 
            "rank": 6, 
            "term": "\"Well, thief! I smell you and I feel your air.\""
        }, 
        {
            "definition": "Bilbo", 
            "id": 858531571, 
            "image": null, 
            "rank": 7, 
            "term": "\"Never laugh at live dragons!\""
        }, 
        {
            "definition": "Thorin", 
            "id": 858531572, 
            "image": null, 
            "rank": 8, 
            "term": "\"The Arkenstone! The Arkenstone!\""
        }, 
        {
            "definition": "Smaug", 
            "id": 858531573, 
            "image": null, 
            "rank": 9, 
            "term": "\"They shall see me and remember who is the real King under the Mountain!\""
        }, 
        {
            "definition": "Thorin", 
            "id": 858531574, 
            "image": null, 
            "rank": 10, 
            "term": "\"Now what on earth or under it has happened?\""
        }, 
        {
            "definition": "Thorin", 
            "id": 858531575, 
            "image": null, 
            "rank": 11, 
            "term": "\"Don't call my palace a nasty hole! You wait till it has been cleaned and redecorated!\""
        }, 

        {
            "definition": "Thorin", 
            "id": 858531578, 
            "image": null, 
            "rank": 14, 
            "term": "\"You put your worst cause first and in the chief place.\""
        }, 
        {
            "definition": "Bilbo", 
            "id": 858531579, 
            "image": null, 
            "rank": 15, 
            "term": "\"I would give a good deal for the feel of grass at my toes.\""
        }, 
        {
            "definition": "Gandalf", 
            "id": 858531580, 
            "image": null, 
            "rank": 16, 
            "term": "\"Well done, Mr. Baggins! There is always more about you than anyone expects!\""
        }, 
        {
            "definition": "Gandalf", 
            "id": 858531581, 
            "image": null, 
            "rank": 17, 
            "term": "\"If you don't like my Burglar, please don't damage him.\""
        }, 
        {
            "definition": "Thorin", 
            "id": 858531582, 
            "image": null, 
            "rank": 18, 
            "term": "\"You all seem in league! What have you got to say, you descendant of rats?\""
        }, 
        {
            "definition": "Bilbo", 
            "id": 858532800, 
            "image": null, 
            "rank": 20, 
            "term": "\"The eagles are coming!\""
        }, 
        {
            "definition": "Thorin", 
            "id": 858532801, 
            "image": null, 
            "rank": 21, 
            "term": "\"There is more in you of good than you know, child of the kindly West.\""
        },  

        {
            "definition": "Gandalf", 
            "id": 858532804, 
            "image": null, 
            "rank": 24, 
            "term": "\"My dear Bilbo! Something is the matter with you! You are not the hobbit that you were.\""
        }
    ];


//Medical
var medical = [
        {
            "definition": "False", 
            "id": 661887585, 
            "image": null, 
            "rank": 0, 
            "term": "The prefix Ambi- means half?"
        }, 
        {
            "definition": "False", 
            "id": 661887586, 
            "image": null, 
            "rank": 1, 
            "term": "The prefix Macro- means Small?"
        }, 
        {
            "definition": "True", 
            "id": 661887587, 
            "image": null, 
            "rank": 2, 
            "term": "The prefix Iso- means same or equal?"
        }, 
        {
            "definition": "False", 
            "id": 661887588, 
            "image": null, 
            "rank": 3, 
            "term": "The prefix Pan- means none or zero?"
        }, 
        {
            "definition": "True", 
            "id": 661887589, 
            "image": null, 
            "rank": 4, 
            "term": "The prefix Tri- means three?"
        }, 
        {
            "definition": "False", 
            "id": 661887590, 
            "image": null, 
            "rank": 5, 
            "term": "The prefixes Bi- and Di- mean three?"
        }, 
        {
            "definition": "True", 
            "id": 661887591, 
            "image": null, 
            "rank": 6, 
            "term": "The prefix Micro- means small?"
        }, 
        {
            "definition": "False", 
            "id": 661887592, 
            "image": null, 
            "rank": 7, 
            "term": "The prefixes Quadri- and Tetra- mean two?"
        }, 
        {
            "definition": "True", 
            "id": 661887593, 
            "image": null, 
            "rank": 8, 
            "term": "The prefix Multi- means many?"
        }, 
        {
            "definition": "True", 
            "id": 661887594, 
            "image": null, 
            "rank": 9, 
            "term": "The prefixes Semi- and Hemi- mean half?"
        }, 
        {
            "definition": "False", 
            "id": 661887595, 
            "image": null, 
            "rank": 10, 
            "term": "The suffixes -Acusia, -Acusis, and -Cusis mean Pain?"
        }, 
        {
            "definition": "False", 
            "id": 661887596, 
            "image": null, 
            "rank": 11, 
            "term": "The suffix -Dipsia means feeling?"
        }, 
        {
            "definition": "True", 
            "id": 661887597, 
            "image": null, 
            "rank": 12, 
            "term": "The suffixes -Opia, -Opsia, -Opsis, and -Opsy mean vision or view of?"
        }, 
        {
            "definition": "False", 
            "id": 661887598, 
            "image": null, 
            "rank": 13, 
            "term": "The suffix -Osmia means sound?"
        }, 
        {
            "definition": "True", 
            "id": 661887599, 
            "image": null, 
            "rank": 14, 
            "term": "The suffix -Esthesia means sensation?"
        }, 
        {
            "definition": "True", 
            "id": 661887600, 
            "image": null, 
            "rank": 15, 
            "term": "The suffixes -Algesia, -Algesic, -Algia, and -Dynia mean pain?"
        }, 
        {
            "definition": "True", 
            "id": 661887601, 
            "image": null, 
            "rank": 16, 
            "term": "The suffix -Phobia means fear?"
        }, 
        {
            "definition": "False", 
            "id": 661887602, 
            "image": null, 
            "rank": 17, 
            "term": "The suffixes -Clast and -Clasis mean cessation?"
        }, 
        {
            "definition": "False", 
            "id": 661887603, 
            "image": null, 
            "rank": 18, 
            "term": "The suffix -Pause means relaxation?"
        }, 
        {
            "definition": "False", 
            "id": 661887604, 
            "image": null, 
            "rank": 19, 
            "term": "The suffix -Phasia means eating or swallowing?"
        }
    ];

//computer science
var computerScience = [
        {
            "definition": "False", 
            "id": 2074856908, 
            "image": null, 
            "rank": 0, 
            "term": "Computer hardware is a collection of programs that provide instructions a computer carries out."
        }, 
        {
            "definition": "False", 
            "id": 2074859342, 
            "image": null, 
            "rank": 1, 
            "term": "An abstraction is a physical model that removes or hides unnecessary details."
        }, 
        {
            "definition": "True", 
            "id": 2074865169, 
            "image": null, 
            "rank": 2, 
            "term": "A vacuum tube was used in the first generation of computers."
        }, 
        {
            "definition": "false", 
            "id": 2074867977, 
            "image": null, 
            "rank": 3, 
            "term": "Magnetic disks were introduced in the third generation of computer hardware."
        }, 
        {
            "definition": "true", 
            "id": 2074871096, 
            "image": null, 
            "rank": 4, 
            "term": "The fourth generation of computer hardware was characterized by large-scale integration."
        }, 
        {
            "definition": "true", 
            "id": 2074872086, 
            "image": null, 
            "rank": 5, 
            "term": "The personal computer was introduced in the fourth generation of computer hardware."
        }, 
        {
            "definition": "false", 
            "id": 2074873709, 
            "image": null, 
            "rank": 6, 
            "term": "The Internet is descended from a U.S. government-sponsored network called the APENET."
        }, 
        {
            "definition": "false", 
            "id": 2074875330, 
            "image": null, 
            "rank": 7, 
            "term": "Charles Babbage invented the transistor."
        }, 
        {
            "definition": "true", 
            "id": 2074880807, 
            "image": null, 
            "rank": 8, 
            "term": "An assembler translates assembly-language programs into machine code."
        }, 
        {
            "definition": "false", 
            "id": 2074888360, 
            "image": null, 
            "rank": 9, 
            "term": "The base of a number system determines the rules used in the system."
        }, 
        {
            "definition": "true", 
            "id": 2074889642, 
            "image": null, 
            "rank": 10, 
            "term": "High-level languages were introduced during the second generation of computer software."
        }, 
        {
            "definition": "true", 
            "id": 2074892418, 
            "image": null, 
            "rank": 11, 
            "term": "Spreadsheets and word processors are known as application software."
        }, 
        {
            "definition": "false", 
            "id": 2074895456, 
            "image": null, 
            "rank": 12, 
            "term": "Each number system has its own rules for dealing with numbers encoded in that system."
        }, 
        {
            "definition": "true", 
            "id": 2074902762, 
            "image": null, 
            "rank": 13, 
            "term": "The number 10 represents the value of he base in every number system."
        }, 
        {
            "definition": "false", 
            "id": 2074905106, 
            "image": null, 
            "rank": 14, 
            "term": "The digits used in base 8 are 1 through 8."
        }, 
        {
            "definition": "false", 
            "id": 2074907587, 
            "image": null, 
            "rank": 15, 
            "term": "The base value of the hexadecimal number system is 2."
        }, 
        {
            "definition": "true", 
            "id": 2074909792, 
            "image": null, 
            "rank": 16, 
            "term": "The letter C in hexadecimal is used to represent the decimal number 12."
        }, 
        {
            "definition": "false", 
            "id": 2074910946, 
            "image": null, 
            "rank": 17, 
            "term": "Binary numbers are important in computing because numbers in every base can be converted into them."
        }, 
        {
            "definition": "false", 
            "id": 2074912544, 
            "image": null, 
            "rank": 18, 
            "term": "Fortran was developed and used in the first generation of software."
        }, 
        {
            "definition": "true", 
            "id": 2074913199, 
            "image": null, 
            "rank": 19, 
            "term": "Operating Systems were developed and used in the third generation of software."
        }
    ];


//Chinese
var chinese = [
        {
            "definition": "一匹", 
            "id": 1091410614, 
            "image": null, 
            "rank": 0, 
            "term": "马"
        }, 
        {
            "definition": "一辆", 
            "id": 1091410616, 
            "image": null, 
            "rank": 1, 
            "term": "汽车"
        }, 
        {
            "definition": "一辆", 
            "id": 1091410619, 
            "image": null, 
            "rank": 2, 
            "term": "火车"
        }, 
        {
            "definition": "一辆", 
            "id": 1091410621, 
            "image": null, 
            "rank": 3, 
            "term": "出租车"
        }, 
        {
            "definition": "一本", 
            "id": 1091410626, 
            "image": null, 
            "rank": 4, 
            "term": "书"
        }, 
        {
            "definition": "一本", 
            "id": 1091410629, 
            "image": null, 
            "rank": 5, 
            "term": "字典"
        }, 
        {
            "definition": "一架", 
            "id": 1091410632, 
            "image": null, 
            "rank": 6, 
            "term": "飞机"
        }, 
        {
            "definition": "一碗", 
            "id": 1091410633, 
            "image": null, 
            "rank": 7, 
            "term": "米饭"
        }, 
        {
            "definition": "一件", 
            "id": 1091410634, 
            "image": null, 
            "rank": 8, 
            "term": "上衣"
        }, 
        {
            "definition": "一件", 
            "id": 1091410635, 
            "image": null, 
            "rank": 9, 
            "term": "衬衫"
        }, 
        {
            "definition": "一件", 
            "id": 1091410636, 
            "image": null, 
            "rank": 10, 
            "term": "毛衣"
        }, 
        {
            "definition": "一件", 
            "id": 1091410637, 
            "image": null, 
            "rank": 11, 
            "term": "大衣"
        }, 
        {
            "definition": "一双", 
            "id": 1091410638, 
            "image": null, 
            "rank": 12, 
            "term": "鞋子"
        }, 
        {
            "definition": "一双", 
            "id": 1091410639, 
            "image": null, 
            "rank": 13, 
            "term": "袜子"
        }, 
        {
            "definition": "一条", 
            "id": 1091410640, 
            "image": null, 
            "rank": 14, 
            "term": "围巾"
        }, 
        {
            "definition": "一条", 
            "id": 1091410641, 
            "image": null, 
            "rank": 15, 
            "term": "蛇🐍"
        }, 
        {
            "definition": "一条", 
            "id": 1091410642, 
            "image": null, 
            "rank": 16, 
            "term": "鱼🐟"
        }, 
        {
            "definition": "一条", 
            "id": 1091410643, 
            "image": null, 
            "rank": 17, 
            "term": "金鱼"
        }, 
        {
            "definition": "一头", 
            "id": 1091410644, 
            "image": null, 
            "rank": 18, 
            "term": "牛"
        }, 
        {
            "definition": "一条", 
            "id": 1091410645, 
            "image": null, 
            "rank": 19, 
            "term": "裤子"
        }, 
        {
            "definition": "一个", 
            "id": 1091410646, 
            "image": null, 
            "rank": 20, 
            "term": "包子"
        }, 
        {
            "definition": "一个", 
            "id": 1091410647, 
            "image": null, 
            "rank": 21, 
            "term": "汉堡🍔"
        }, 
        {
            "definition": "一个", 
            "id": 1091410648, 
            "image": null, 
            "rank": 22, 
            "term": "三明治"
        }, 
        {
            "definition": "一只", 
            "id": 1091410649, 
            "image": null, 
            "rank": 23, 
            "term": "羊"
        }, 
        {
            "definition": "一只", 
            "id": 1091410650, 
            "image": null, 
            "rank": 24, 
            "term": "鸟"
        }, 
        {
            "definition": "一只", 
            "id": 1091410651, 
            "image": null, 
            "rank": 25, 
            "term": "狗"
        }, 
        {
            "definition": "一只", 
            "id": 1091410652, 
            "image": null, 
            "rank": 26, 
            "term": "兔子"
        }, 
        {
            "definition": "一瓶", 
            "id": 1091410653, 
            "image": null, 
            "rank": 27, 
            "term": "果汁"
        }, 
        {
            "definition": "一瓶", 
            "id": 1091410654, 
            "image": null, 
            "rank": 28, 
            "term": "冰水"
        }, 
        {
            "definition": "一瓶", 
            "id": 1091410655, 
            "image": null, 
            "rank": 29, 
            "term": "水"
        }, 
        {
            "definition": "一瓶", 
            "id": 1091410656, 
            "image": null, 
            "rank": 30, 
            "term": "茶"
        }, 
        {
            "definition": "一瓶", 
            "id": 1091410657, 
            "image": null, 
            "rank": 31, 
            "term": "咖啡"
        }, 
        {
            "definition": "一瓶", 
            "id": 1091410658, 
            "image": null, 
            "rank": 32, 
            "term": "可乐"
        }
    ];

var faust = [
        {
            "definition": "Adv", 
            "id": 1902745274, 
            "image": null, 
            "rank": 0, 
            "term": "Asunder"
        }, 
        {
            "definition": "N", 
            "id": 1902745275, 
            "image": null, 
            "rank": 1, 
            "term": "Balsam"
        }, 
        {
            "definition": "N", 
            "id": 1902745276, 
            "image": null, 
            "rank": 2, 
            "term": "Blight"
        }, 
        {
            "definition": "N", 
            "id": 1902745277, 
            "image": null, 
            "rank": 3, 
            "term": "Brocade"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745278, 
            "image": null, 
            "rank": 4, 
            "term": "Celestial"
        }, 
        {
            "definition": "N", 
            "id": 1902745279, 
            "image": null, 
            "rank": 5, 
            "term": "Coalition"
        }, 
        {
            "definition": "N", 
            "id": 1902745280, 
            "image": null, 
            "rank": 6, 
            "term": "Divan"
        }, 
        {
            "definition": "N", 
            "id": 1902745281, 
            "image": null, 
            "rank": 7, 
            "term": "Egoist"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745282, 
            "image": null, 
            "rank": 8, 
            "term": "Enamored"
        }, 
        {
            "definition": "V", 
            "id": 1902745283, 
            "image": null, 
            "rank": 9, 
            "term": "Endeavor"
        }, 
        {
            "definition": "N", 
            "id": 1902745284, 
            "image": null, 
            "rank": 10, 
            "term": "Envoy"
        }, 
        {
            "definition": "V", 
            "id": 1902745285, 
            "image": null, 
            "rank": 11, 
            "term": "Eschew"
        }, 
        {
            "definition": "N", 
            "id": 1902745286, 
            "image": null, 
            "rank": 12, 
            "term": "Ferment"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745287, 
            "image": null, 
            "rank": 13, 
            "term": "Fervent"
        }, 
        {
            "definition": "N", 
            "id": 1902745288, 
            "image": null, 
            "rank": 14, 
            "term": "Fetters"
        }, 
        {
            "definition": "V", 
            "id": 1902745289, 
            "image": null, 
            "rank": 15, 
            "term": "Germinate"
        }, 
        {
            "definition": "V", 
            "id": 1902745290, 
            "image": null, 
            "rank": 16, 
            "term": "Grope"
        }, 
        {
            "definition": "V", 
            "id": 1902745291, 
            "image": null, 
            "rank": 17, 
            "term": "Hamper"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745292, 
            "image": null, 
            "rank": 18, 
            "term": "Inconceivable"
        }, 
        {
            "definition": "N", 
            "id": 1902745293, 
            "image": null, 
            "rank": 19, 
            "term": "Intuition"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745294, 
            "image": null, 
            "rank": 20, 
            "term": "Lofty"
        }, 
        {
            "definition": "V", 
            "id": 1902745295, 
            "image": null, 
            "rank": 21, 
            "term": "Lures"
        }, 
        {
            "definition": "N", 
            "id": 1902745296, 
            "image": null, 
            "rank": 22, 
            "term": "Megrim"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745297, 
            "image": null, 
            "rank": 23, 
            "term": "Obstinate"
        }, 
        {
            "definition": "N", 
            "id": 1902745298, 
            "image": null, 
            "rank": 24, 
            "term": "Pander"
        }, 
        {
            "definition": "N", 
            "id": 1902745299, 
            "image": null, 
            "rank": 25, 
            "term": "Pathos"
        }, 
        {
            "definition": "N", 
            "id": 1902745300, 
            "image": null, 
            "rank": 26, 
            "term": "Pedant"
        }, 
        {
            "definition": "Adv", 
            "id": 1902745301, 
            "image": null, 
            "rank": 27, 
            "term": "Precociously"
        }, 
        {
            "definition": "Adv", 
            "id": 1902745302, 
            "image": null, 
            "rank": 28, 
            "term": "Primal"
        }, 
        {
            "definition": "N", 
            "id": 1902745303, 
            "image": null, 
            "rank": 29, 
            "term": "Qualm"
        }, 
        {
            "definition": "N", 
            "id": 1902745304, 
            "image": null, 
            "rank": 30, 
            "term": "Rhetoric"
        }, 
        {
            "definition": "N", 
            "id": 1902745305, 
            "image": null, 
            "rank": 31, 
            "term": "Scruple"
        }, 
        {
            "definition": "V", 
            "id": 1902745306, 
            "image": null, 
            "rank": 32, 
            "term": "Seduce"
        }, 
        {
            "definition": "N", 
            "id": 1902745307, 
            "image": null, 
            "rank": 33, 
            "term": "Snippet"
        }, 
        {
            "definition": "Adj", 
            "id": 1902745308, 
            "image": null, 
            "rank": 34, 
            "term": "Succinct"
        }, 
        {
            "definition": "N", 
            "id": 1902745309, 
            "image": null, 
            "rank": 35, 
            "term": "Tenacity"
        }, 
        {
            "definition": "V", 
            "id": 1902745310, 
            "image": null, 
            "rank": 36, 
            "term": "Tolling"
        }, 
        {
            "definition": "N", 
            "id": 1902745311, 
            "image": null, 
            "rank": 37, 
            "term": "Weal"
        }
    ];

var german =  [
        {
            "definition": "akkusativ", 
            "id": 1695043670, 
            "image": null, 
            "rank": 0, 
            "term": "anrufen"
        }, 
        {
            "definition": "akkusativ", 
            "id": 1695043671, 
            "image": null, 
            "rank": 1, 
            "term": "bestellen"
        }, 
        {
            "definition": "akkusativ", 
            "id": 1695043672, 
            "image": null, 
            "rank": 2, 
            "term": "beantworten"
        }, 
        {
            "definition": "akkusativ", 
            "id": 1695043673, 
            "image": null, 
            "rank": 3, 
            "term": "bitten"
        }, 
        {
            "definition": "akkusativ", 
            "id": 1695043674, 
            "image": null, 
            "rank": 4, 
            "term": "informieren"
        }, 
        {
            "definition": "akkusativ", 
            "id": 1695043675, 
            "image": null, 
            "rank": 5, 
            "term": "lieben"
        }, 
        {
            "definition": "akkusativ", 
            "id": 1695043676, 
            "image": null, 
            "rank": 6, 
            "term": "zurückrufen"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043677, 
            "image": null, 
            "rank": 7, 
            "term": "antworten"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043678, 
            "image": null, 
            "rank": 8, 
            "term": "danken"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043679, 
            "image": null, 
            "rank": 9, 
            "term": "glauben"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043680, 
            "image": null, 
            "rank": 10, 
            "term": "helfen"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043681, 
            "image": null, 
            "rank": 11, 
            "term": "passen"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043682, 
            "image": null, 
            "rank": 12, 
            "term": "schmecken"
        }, 
        {
            "definition": "dativ", 
            "id": 1695043683, 
            "image": null, 
            "rank": 13, 
            "term": "widersprechen"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043684, 
            "image": null, 
            "rank": 14, 
            "term": "ausrichten"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043685, 
            "image": null, 
            "rank": 15, 
            "term": "empfehlen"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043686, 
            "image": null, 
            "rank": 16, 
            "term": "leihen"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043687, 
            "image": null, 
            "rank": 17, 
            "term": "schicken"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043688, 
            "image": null, 
            "rank": 18, 
            "term": "sagen"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043689, 
            "image": null, 
            "rank": 19, 
            "term": "versprechen"
        }, 
        {
            "definition": "dativ + akkusativ", 
            "id": 1695043690, 
            "image": null, 
            "rank": 20, 
            "term": "zeigen"
        }
    ];

var python = [
        {
            "definition": "true", 
            "id": 2719821398, 
            "image": null, 
            "rank": 0, 
            "term": "the precedence of an operator determines its order of evaluation in an expression"
        }, 
        {
            "definition": "true", 
            "id": 2719823529, 
            "image": null, 
            "rank": 1, 
            "term": "whenever there is at least one relational operator in an expression, the result of the expression will be either true or false"
        }, 
        {
            "definition": "false", 
            "id": 2719824182, 
            "image": null, 
            "rank": 2, 
            "term": "the OR operator is applied before the AND operator"
        }, 
        {
            "definition": "true", 
            "id": 2719824735, 
            "image": null, 
            "rank": 3, 
            "term": "decision making in computers is based on comparing data"
        }, 
        {
            "definition": "true", 
            "id": 2719825759, 
            "image": null, 
            "rank": 4, 
            "term": "parentheses can be used to change the order of logical operation"
        }, 
        {
            "definition": "true", 
            "id": 2719826684, 
            "image": null, 
            "rank": 5, 
            "term": "to place an entire block of statements within an if statement, you must indent the block"
        }, 
        {
            "definition": "true", 
            "id": 2719828777, 
            "image": null, 
            "rank": 6, 
            "term": "relational expressions and logical expressions are both boolean, which means they evaluate to true or false"
        }, 
        {
            "definition": "false", 
            "id": 2719829330, 
            "image": null, 
            "rank": 7, 
            "term": "the NOT operator turns a result to false regardless of its previous value"
        }, 
        {
            "definition": "false", 
            "id": 2719830046, 
            "image": null, 
            "rank": 8, 
            "term": "the AND operator the OR operator are examples of relational operators"
        }, 
        {
            "definition": "true", 
            "id": 2719831130, 
            "image": null, 
            "rank": 9, 
            "term": "nested decision structures are one way to test more than one condition"
        }, 
        {
            "definition": "true", 
            "id": 2719831709, 
            "image": null, 
            "rank": 10, 
            "term": "a decision structure can be nested inside another decision structure"
        }, 
        {
            "definition": "false", 
            "id": 2719833069, 
            "image": null, 
            "rank": 11, 
            "term": "1 % 2 == 2 * 3 AND 3 <5"
        }, 
        {
            "definition": "false", 
            "id": 2719834755, 
            "image": null, 
            "rank": 12, 
            "term": "comments in python begin with the / character"
        }, 
        {
            "definition": "false", 
            "id": 2719835313, 
            "image": null, 
            "rank": 13, 
            "term": "python does not allow programmers to break a statement into multiple lines"
        }, 
        {
            "definition": "false", 
            "id": 2719836495, 
            "image": null, 
            "rank": 14, 
            "term": "python formats all floating-point numbers to two decimal places when outputting using the print statement"
        }, 
        {
            "definition": "true", 
            "id": 2719837600, 
            "image": null, 
            "rank": 15, 
            "term": "in python, arithmetic expressions are evaluated from left to right when the precedence of the operators are the same"
        }, 
        {
            "definition": "true", 
            "id": 2719839681, 
            "image": null, 
            "rank": 16, 
            "term": "in python, print statements written on separate lines do no necessarily output on separate line"
        }, 
        {
            "definition": "false", 
            "id": 2719840660, 
            "image": null, 
            "rank": 17, 
            "term": "python is considered a low-level programming language"
        }, 
        {
            "definition": "true", 
            "id": 2719843536, 
            "image": null, 
            "rank": 18, 
            "term": "a variable in python must begin with a letter or_ and include only letters, numbers and_ ; no punctuation characters or spaces are allowed"
        }, 
        {
            "definition": "true", 
            "id": 2719845224, 
            "image": null, 
            "rank": 19, 
            "term": "variables represent storage locations in the computer's memory"
        }, 
        {
            "definition": "true", 
            "id": 2719845602, 
            "image": null, 
            "rank": 20, 
            "term": "python is a case-sensitive language"
        }, 
        {
            "definition": "true", 
            "id": 2719846576, 
            "image": null, 
            "rank": 21, 
            "term": "the syntax of a particular computer language is a set of rules defining the grammar of that langauge"
        }, 
        {
            "definition": "false", 
            "id": 2719848107, 
            "image": null, 
            "rank": 22, 
            "term": "in your python program, you can use reserved words as variable names"
        }, 
        {
            "definition": "true", 
            "id": 2719848878, 
            "image": null, 
            "rank": 23, 
            "term": "python uses data types to categorize values in memory"
        }, 
        {
            "definition": "false", 
            "id": 2719849540, 
            "image": null, 
            "rank": 24, 
            "term": "the python interpreter considers payRate to be the same as payrate"
        }, 
        {
            "definition": "false", 
            "id": 2719850689, 
            "image": null, 
            "rank": 25, 
            "term": "the python interpreter ignores the _ character, so walk_home and walk home would be treated the same"
        }, 
        {
            "definition": "flase", 
            "id": 2719851747, 
            "image": null, 
            "rank": 26, 
            "term": "in python, math expression are evaluated from left to right, no matter what the operators are"
        }, 
        {
            "definition": "true", 
            "id": 2719852739, 
            "image": null, 
            "rank": 27, 
            "term": "when the addition (+) operator is used with two strings, it performs string concatenation"
        }
    ];

    var spanish = [
        {
            "definition": "el", 
            "id": 238710336, 
            "image": null, 
            "rank": 0, 
            "term": "problema"
        }, 
        {
            "definition": "la", 
            "id": 238710337, 
            "image": null, 
            "rank": 1, 
            "term": "amiga"
        }, 
        {
            "definition": "el", 
            "id": 238710338, 
            "image": null, 
            "rank": 2, 
            "term": "sistema"
        }, 
        {
            "definition": "la", 
            "id": 238710339, 
            "image": null, 
            "rank": 3, 
            "term": "carta"
        }, 
        {
            "definition": "el", 
            "id": 238710340, 
            "image": null, 
            "rank": 4, 
            "term": "día"
        }, 
        {
            "definition": "la", 
            "id": 238710341, 
            "image": null, 
            "rank": 5, 
            "term": "unión"
        }, 
        {
            "definition": "la", 
            "id": 238710342, 
            "image": null, 
            "rank": 6, 
            "term": "silla"
        }, 
        {
            "definition": "la", 
            "id": 238710343, 
            "image": null, 
            "rank": 7, 
            "term": "mantequilla"
        }, 
        {
            "definition": "el", 
            "id": 238710344, 
            "image": null, 
            "rank": 8, 
            "term": "modelo"
        }, 
        {
            "definition": "la", 
            "id": 238710345, 
            "image": null, 
            "rank": 9, 
            "term": "ciudad"
        }, 
        {
            "definition": "el", 
            "id": 238710346, 
            "image": null, 
            "rank": 10, 
            "term": "programa"
        }, 
        {
            "definition": "la", 
            "id": 238710347, 
            "image": null, 
            "rank": 11, 
            "term": "papa"
        }, 
        {
            "definition": "el", 
            "id": 238710348, 
            "image": null, 
            "rank": 12, 
            "term": "dilema"
        }, 
        {
            "definition": "la", 
            "id": 238710349, 
            "image": null, 
            "rank": 13, 
            "term": "mano"
        }, 
        {
            "definition": "la", 
            "id": 238710350, 
            "image": null, 
            "rank": 14, 
            "term": "causa"
        }, 
        {
            "definition": "la", 
            "id": 238710351, 
            "image": null, 
            "rank": 15, 
            "term": "verdad"
        }, 
        {
            "definition": "el", 
            "id": 238710352, 
            "image": null, 
            "rank": 16, 
            "term": "trauma"
        }, 
        {
            "definition": "la", 
            "id": 238710353, 
            "image": null, 
            "rank": 17, 
            "term": "planta"
        }, 
        {
            "definition": "el", 
            "id": 238710354, 
            "image": null, 
            "rank": 18, 
            "term": "crucigrama"
        }, 
        {
            "definition": "el/la", 
            "id": 238710355, 
            "image": null, 
            "rank": 19, 
            "term": "artista"
        }, 
        {
            "definition": "la", 
            "id": 238710356, 
            "image": null, 
            "rank": 20, 
            "term": "exhibición"
        }, 
        {
            "definition": "la", 
            "id": 238710357, 
            "image": null, 
            "rank": 21, 
            "term": "cama"
        }, 
        {
            "definition": "el", 
            "id": 238710358, 
            "image": null, 
            "rank": 22, 
            "term": "sofá"
        }, 
        {
            "definition": "la", 
            "id": 238710359, 
            "image": null, 
            "rank": 23, 
            "term": "taza"
        }, 
        {
            "definition": "la", 
            "id": 238710360, 
            "image": null, 
            "rank": 24, 
            "term": "cuchara"
        }, 
        {
            "definition": "la", 
            "id": 238710361, 
            "image": null, 
            "rank": 25, 
            "term": "dama"
        }, 
        {
            "definition": "la", 
            "id": 238710362, 
            "image": null, 
            "rank": 26, 
            "term": "moto"
        }, 
        {
            "definition": "la", 
            "id": 238710363, 
            "image": null, 
            "rank": 27, 
            "term": "libertad"
        }, 
        {
            "definition": "el", 
            "id": 238710364, 
            "image": null, 
            "rank": 28, 
            "term": "tocadiscos"
        }, 
        {
            "definition": "el/la", 
            "id": 238710365, 
            "image": null, 
            "rank": 29, 
            "term": "joven"
        }, 
        {
            "definition": "la", 
            "id": 238710366, 
            "image": null, 
            "rank": 30, 
            "term": "multitud"
        }, 
        {
            "definition": "el/la", 
            "id": 238710367, 
            "image": null, 
            "rank": 31, 
            "term": "estudiante"
        }, 
        {
            "definition": "el", 
            "id": 238710368, 
            "image": null, 
            "rank": 32, 
            "term": "agua"
        }, 
        {
            "definition": "el", 
            "id": 238710369, 
            "image": null, 
            "rank": 33, 
            "term": "cine"
        }, 
        {
            "definition": "la", 
            "id": 238710370, 
            "image": null, 
            "rank": 34, 
            "term": "calle"
        }, 
        {
            "definition": "la", 
            "id": 238710371, 
            "image": null, 
            "rank": 35, 
            "term": "nación"
        }, 
        {
            "definition": "la", 
            "id": 238710372, 
            "image": null, 
            "rank": 36, 
            "term": "foto"
        }, 
        {
            "definition": "el/la", 
            "id": 238710373, 
            "image": null, 
            "rank": 37, 
            "term": "telefonista"
        }, 
        {
            "definition": "el", 
            "id": 238710374, 
            "image": null, 
            "rank": 38, 
            "term": "idioma"
        }, 
        {
            "definition": "el/la", 
            "id": 238710375, 
            "image": null, 
            "rank": 39, 
            "term": "atleta"
        }, 
        {
            "definition": "el", 
            "id": 238710376, 
            "image": null, 
            "rank": 40, 
            "term": "telegrama"
        }, 
        {
            "definition": "el", 
            "id": 238710377, 
            "image": null, 
            "rank": 41, 
            "term": "papá"
        }, 
        {
            "definition": "la", 
            "id": 238710378, 
            "image": null, 
            "rank": 42, 
            "term": "cumbre"
        }, 
        {
            "definition": "el/la", 
            "id": 238710379, 
            "image": null, 
            "rank": 43, 
            "term": "turista"
        }, 
        {
            "definition": "el", 
            "id": 238710380, 
            "image": null, 
            "rank": 44, 
            "term": "músico"
        }, 
        {
            "definition": "el/la", 
            "id": 238710381, 
            "image": null, 
            "rank": 45, 
            "term": "cantante"
        }, 
        {
            "definition": "el", 
            "id": 238710382, 
            "image": null, 
            "rank": 46, 
            "term": "paraguas"
        }, 
        {
            "definition": "el", 
            "id": 238710383, 
            "image": null, 
            "rank": 47, 
            "term": "mapa"
        }, 
        {
            "definition": "el", 
            "id": 238710384, 
            "image": null, 
            "rank": 48, 
            "term": "clima"
        }, 
        {
            "definition": "el", 
            "id": 238710385, 
            "image": null, 
            "rank": 49, 
            "term": "hambre"
        }, 
        {
            "definition": "la", 
            "id": 238710386, 
            "image": null, 
            "rank": 50, 
            "term": "sociedad"
        }, 
        {
            "definition": "la", 
            "id": 238710387, 
            "image": null, 
            "rank": 51, 
            "term": "contaminación"
        }, 
        {
            "definition": "el", 
            "id": 238710388, 
            "image": null, 
            "rank": 52, 
            "term": "lavaplatos"
        }, 
        {
            "definition": "el", 
            "id": 238710389, 
            "image": null, 
            "rank": 53, 
            "term": "mediodía"
        }, 
        {
            "definition": "el", 
            "id": 238710390, 
            "image": null, 
            "rank": 54, 
            "term": "drama"
        }, 
        {
            "definition": "el", 
            "id": 238710391, 
            "image": null, 
            "rank": 55, 
            "term": "poeta"
        }, 
        {
            "definition": "el", 
            "id": 238710392, 
            "image": null, 
            "rank": 56, 
            "term": "hacha"
        }, 
        {
            "definition": "el", 
            "id": 238710393, 
            "image": null, 
            "rank": 57, 
            "term": "arte"
        }, 
        {
            "definition": "el", 
            "id": 238710394, 
            "image": null, 
            "rank": 58, 
            "term": "diamante"
        }, 
        {
            "definition": "el", 
            "id": 238710395, 
            "image": null, 
            "rank": 59, 
            "term": "lápiz"
        }
    ];
//


//put this stuff in init() in gP.js
var first = function(){
        console.log("in first() function in set.js");

       //then make cards
     DATA.cards = shuffleArray(eval(localStorage.currentSet));
     DATA.cats = getGroups(DATA.cards, sortCardsClassifier);

     //init which is in gamePage.js
     init();
}



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//how to figure out how many categories to have
function sortCardsClassifier(c){ 
   // debugger;
	return c.definition.toLowerCase();
}

//for each card, how to get category object
function getCategory(c){
  return getCategoryObject(c.definition); 
}

//input definition, return definition to be displayed
function getDefinition(t){
  return t.toLowerCase();
}




//make categories
function groupBy(arry, classifierFunc) {
    return arry.map(classifierFunc).reduce(function (current, item, idx) {
        if (!(item in current)) {
            current[item] = [arry[idx]];
        } else {
            current[item].push(arry[idx]);
        }
        return current;
    }, {});
}



//HOF rewrite
//given cards and classifierFunc, make groups cateogires with colors
function getGroups(arry, classifierFunc){
    var sortedTerms = groupBy(arry,classifierFunc);
    var catNames = Object.keys(sortedTerms);
    var categories = [];

    //for now set to default colors; can implement color picker later
    catNames.forEach(function(elem, i){
      categories[i] = {name:catNames[i], color:defaultColors[(i % defaultColors.length)], idName:catNames[i]};
    });

    return categories;
}

var defaultColors = ['Aquamarine', 'DarkSalmon','LightGreen','LightCoral','IndianRed','LightBlue','Plum', 'PeachPuff','Gainsboro','Silver'];

/* Input Data from Quizlet */

var DATA = {
//Array of categories; color and name to be displayed
cats: [],

cards: []
}

//for given card, what should be displayed?
//i.e. "Apple"
function getDisplayTerm(card){
  return card.givenTerm;
}

//for given card, what should the "finalTerm" be?  Term with answer. 
//i.e. "Apple (noun)"
function getFinalTerm(card){
  return card.displayTerm + " (" + card.definition.toString() + ")";
}

//run first //need to call from gamePage.js
//first();