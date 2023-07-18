const data =
[
  [
      {"id":0,  "title":"Az esküvő napján", "tooltip":"A nagy napon kerül sor jegyesfotózásra",     "price*":15, "name":"when",                  "type":"radio",      "dependency":null, "required":true},
      {"id":1,  "title":"Külön alkalommal", "tooltip":"Szabadon választható dátum",                 "price*":25, "name":"when",                  "type":"radio",      "dependency":null, "required":true},
      {"id":2,  "title":"10kép",            "tooltip":"10db kidolgozott, megfényelt, retusált kép", "price*":10, "name":"engagementPhotosNum",   "type":"radio",      "dependency":null, "required":true},
      {"id":3,  "title":"20kép",            "tooltip":"20db kidolgozott, megfényelt, retusált kép", "price*":15, "name":"engagementPhotosNum",   "type":"radio",      "dependency":null, "required":true},
      {"id":4,  "title":"30kép",            "tooltip":"30db kidolgozott, megfényelt, retusált kép", "price*":20, "name":"engagementPhotosNum",   "type":"radio",      "dependency":1,    "required":true},
      {"id":5,  "title":"40kép",            "tooltip":"40db kidolgozott, megfényelt, retusált kép", "price*":25, "name":"engagementPhotosNum",   "type":"radio",      "dependency":1,    "required":true},     
      {"id":6,  "title":"fotóalbum",        "tooltip":"fotóalbum az összes képpel",                 "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":7,  "title":"keretezett kép",   "tooltip":"1db kép 90x120cm méretben",                  "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":8,  "title":"slideshow",        "tooltip":"az összes képet bemutató, kreatív montázs",  "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":9,  "title":"nyers képek",      "tooltip":"a nyers képek is átadásra kerülnek",         "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
    
      {"id":10, "title":"1 fényképész",     "tooltip":"1 fotós örökíti meg az esküvőt",             "price*":20, "name":"photographeur",         "type":"radio",      "dependency":null, "required":true},
      {"id":11, "title":"2 fényképész",     "tooltip":"2 fotós örökíti meg az esküvőt",             "price*":35, "name":"photographeur",         "type":"radio",      "dependency":null, "required":true},
      {"id":12, "title":"300kép",           "tooltip":"300db kidolgozott kép kerül átadásra",       "price*":0,  "name":"weddingPhotosNum",      "type":"radio",      "dependency":null, "required":true},
      {"id":13, "title":"600kép",           "tooltip":"600db kidolgozott kép kerül átadásra",       "price*":5,  "name":"weddingPhotosNum",      "type":"radio",      "dependency":null, "required":true},
      {"id":14, "title":"900kép",           "tooltip":"900db kidolgozott kép kerül átadásra",       "price*":10, "name":"weddingPhotosNum",      "type":"radio",      "dependency":11,   "required":true},
      {"id":15, "title":"1200kép",          "tooltip":"1200db kidolgozott kép kerül átadásra",      "price*":15, "name":"weddingPhotosNum",      "type":"radio",      "dependency":11,   "required":true},
      {"id":16, "title":"fotóalbum",        "tooltip":"fotóalbum az összes képpel",                 "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":17, "title":"keretezett kép",   "tooltip":"1db kép 90x120cm méretben",                  "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":19, "title":"nyers képek",      "tooltip":"a nyers képek is átadásra kerülnek",         "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":18, "title":"slideshow",        "tooltip":"az összes képet bemutató, kreatív montázs",  "price*":5,  "name":"extras",                "type":"checkbox",   "dependency":null, "required":false},
      {"id":20, "title":"retus",            "tooltip":"minden képet retusálunk (arc | test | haj | ruha | smink)", "price*":10, "name":"extras", "type":"checkbox",   "dependency":null, "required":false}
  ],
  {
    "engagementAndWedding":[0,1,"break",2,3,4,5,"break",6,7,8,9,"break",10,11,"break",12,13,14,15,"break",16,17,18,19,20],
    "weddingOnly":[10,11,"break",12,13,14,15,"break",16,17,18,19,20],
    "engagementOnly":[0,1,"break",2,3,4,5,"break",6,7,8,9]
  },
  {
    "basePrice": 10000
  }
]