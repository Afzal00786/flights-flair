const dummyData2 = [
  { full_name: "(LHR) London, London Heathrow - United Kingdom" },
  { full_name: "(LGW) London, London Gatwick - United Kingdom" },
  { full_name: "(MAN) Manchester, Manchester - United Kingdom" },
  { full_name: "(STN) London, Stansted - United Kingdom" },
  { full_name: "(BHX) Birmingham, Birmingham - United Kingdom" },
  { full_name: "(GLA) Glasgow, Glasgow  - United Kingdom" },
  { full_name: "(EDI) Edinburgh, Edinburgh - United Kingdom" },
  { full_name: "(LTN) London, London Luton - United Kingdom" },
  { full_name: "(BFS) Belfast, Belfast - United Kingdom" },
  { full_name: "(BRS) Bristol, Bristol - United Kingdom" },
  { full_name: "(ABZ) Aberdeen, Aberdeen - United Kingdom" },
  { full_name: "(BHD) Belfast, Belfast - United Kingdom" },
  { full_name: "(CBG) Cambridge, Cambridge - United Kingdom" },
  { full_name: "(CAL) Cambelttown, Campbelttown - United Kingdom" },
  { full_name: "(CWL) Cardiff, Cardiff - United Kingdom" },
  { full_name: "(CEG) Chester, Chester - United Kingdom" },
  { full_name: "(CVT) Coventry, Coventry - United Kingdom" },
  { full_name: "(HTF) Hatfield, Hatfield - United Kingdom" },
  { full_name: "(KNF) Kingslynn, KingsLynn - United Kingdom" },
  { full_name: "(LBA) Leeds, Leeds - United Kingdom" },
  { full_name: "(LCY) London, London City - United Kingdom" },
  { full_name: "(QQW) London, London waterloo - United Kingdom" },
  { full_name: "(NCL) Newcastle, Newcastle - United Kingdom" },
  { full_name: "(NQT) Nottingham, Nottingham Airport - United Kingdom" },
  { full_name: "(EMA) Nottingham, Nottingham E. Midlands - United Kingdom" },
  { full_name: "(SOU) Southhampton, Southampton - United Kingdom" },
  { full_name: "(SKT) Sialkot, Sialkot Airport - Pakistan" },
  { full_name: "(ISB) Islamabad, New Islamabad Airport - Pakistan" },
  { full_name: "(KHI) Karachi, Jinnah International Airport - Pakistan" },
  { full_name: "(LHE) Lahore, Alama Iqbal International Airport - Pakistan" },
  { full_name: "(PEW) Peshawar, Peshawar International Airport - Pakistan" },
  { full_name: "(MUX) Multan, Multan International Airport - Pakistan" },
  { full_name: "(UET) Quetta, Quetta International Airport - Pakistan" },
  {
    full_name: "(LYP) Faisalabad, Faisalabad International Airport - Pakistan",
  },
  { full_name: "(SKZ) Sukkur, Sukkur Airport - Pakistan" },
  { full_name: "(BHV) Bahawalpur, Bahawalpur – Bahawalpur Airport - Pakistan" },
  { full_name: "(KDU) Skardu, Skardu Airport - Pakistan" },
  {
    full_name:
      "(AUH) Abu Dhabi, Abu Dhabi International Airport - United Arab Emirates",
  },
  {
    full_name:
      "(AAN) Al Ain, Al Ain International Airport - United Arab Emirates",
  },
  {
    full_name:
      "(DXB) Dubai, Dubai International Airport - United Arab Emirates",
  },
  {
    full_name:
      "(SHJ) Sharjah, Sharjah International Airport - United Arab Emirates",
  },
  {
    full_name:
      "(FJR) Fujairah, Fujairah International Airport - United Arab Emirates",
  },
  { full_name: "(BOM) Mumbai, Chhatrapati Shivaji - India" },
  { full_name: "(BLR) Bengaluru, Kempegowda - India" },
  { full_name: "(MAA) Chennai, Chennai - India" },
  { full_name: "(CCU) Kolkata, Netaji Subhash Chandra Bose - India" },
  { full_name: "(LKO) Lucknow,  Chaudhary Charan Singh - India" },
  { full_name: "(ATQ) Amritsar,  Sri Guru Ram Dass Jee - India" },
  { full_name: "(DEL) Delhi, Indira Gandhi International - India" },
  { full_name: "(HYD) Hyderabad,  Rajiv Gandhi International Airport - India" },
  { full_name: "(PNQ) Pune, Pune International Airport - India" },
  { full_name: "(BKK) Bankok, Suvarnabhumi Airport - Thailand" },
  { full_name: "(DMK) Bankok, Don Mueang International Airport - Thailand" },
  { full_name: "(HKT) Phuket, Phuket International Airport - Thailand" },
  {
    full_name:
      "(SYD) Sydney, Sydney Kingsford Smith International Airport - Australia",
  },
  { full_name: "(BNE) Brisbane, Brisbane International Airport - Australia" },
  { full_name: "(MEL) Melbourne, Melbourne International Airport - Australia" },
  { full_name: "(PER) Perth, Perth International Airport - Australia" },
  { full_name: "(ADL) Adelaide, Adelaide International Airport - Australia" },
  { full_name: "(CBR) Canberra, Canberra International Airport - Australia" },
  { full_name: "(CNS) Cairns, Cairns International Airport - Australia" },
  { full_name: "(DRW) Darwin, Darwin International Airport - Australia" },
  { full_name: "(IST) Istanbul, Istanbul Airport - Turkey" },
  { full_name: "(SAW) Istanbul, Pendik (Istanbul Airport) - Turkey" },
  { full_name: "(AYT) Antalya, Antalya Airport - Turkey" },
  { full_name: "(ESB) Ankara, Ankara Airport - Turkey" },
  { full_name: "(ADB) Izmir, Izmir Airport - Turkey" },
  { full_name: "(ADA) Adana, Adana Airport - Turkey" },
  { full_name: "(DLM) Dalaman, Dalaman Airport - Turkey" },
  { full_name: "(BJV) Mugla, Mugla (Bodram Airport) - Turkey" },
  { full_name: "(TZX) Trabzon, Trabzon Airport - Turkey" },
  { full_name: "(GZT) Gaziantep, Gaziantep (Oguzeli Airport) - Turkey" },
  { full_name: "(ASR) Kayseri, Kayseri Airport - Turkey" },
  { full_name: "(KZR) Zafer, Zafer Airport - Turkey" },
  { full_name: "(YEI) Yenisehir, Yenisehir Airport - Turkey" },
  { full_name: "(AOE) Anadolu, Anadolu Airport - Turkey" },
  { full_name: "(AHB) Abha, Abha International Airport - Saudi Arabia" },
  {
    full_name: "(HOF) Al - hofuf, Al-Ahsa International Airport - Saudi Arabia",
  },
  {
    full_name:
      "(ULH) Al Ula, Prince Abdul Majeed International Airport - Saudi Arabia",
  },
  {
    full_name:
      "(ELQ) Buraidah, Prince Naif International Airport - Saudi Arabia",
  },
  { full_name: "(DMM) Damam, King Fahd International Airport - Saudi Arabia" },
  {
    full_name:
      "(JED) Jeddah, King Abdulaziz International Airport - Saudi Arabia",
  },
  { full_name: "(MED) Medina, Abdulaziz International Airport - Saudi Arabia" },
  { full_name: "(NUM) Neom, Neom Bay Airport - Saudi Arabia" },
  {
    full_name:
      "(RUH) Riyadh,  King Khalid International Airport - Saudi Arabia",
  },
  { full_name: "(TIF) Taid, Taif International Airport - Saudi Arabia" },
  {
    full_name:
      "(YNB) Yanbu, Prince Abdul Mohsin International Airport - Saudi Arabia",
  },
  {
    full_name:
      "(IAD) Washington DC, Washington Dulles International Airport - United States",
  },
  {
    full_name:
      "(BNA) Nashville,  Nashville International Airport - United States",
  },
  { full_name: "(MDW) Chicago, Midway International Airport - United States" },
  { full_name: "(LGA) New York,  Laguardia Airport - United States" },
  {
    full_name:
      "(SAN) San Diego, San Diego International airport - United States",
  },
  { full_name: "(TPA) Tampa, Tampa International Airport - United States" },
  {
    full_name:
      "(SLC) Salt Lake City,  Salt Lake City International Airport - United States",
  },
  { full_name: "(BOS) Boston, logan International Airport - United States" },
  {
    full_name:
      "(SFO) San Francisco, San Francisco International Airport - United States",
  },
  {
    full_name:
      "(FLL) Fort Lauderdale, Fort Lauderdale Hollywood International Airport - United States",
  },
  {
    full_name:
      "(JFK) New York,  John F. kennedy International Airport - United States",
  },
  {
    full_name:
      "(IAH) Houston, George Bush International Airport - United States",
  },
  {
    full_name: "(SEA) Seattle,  Seattle International Airport - United States",
  },
  { full_name: "(MIA) Miami, Miami International Airport - United States" },
  {
    full_name:
      "(PHX) Pheonix, Sky Harbor International Airport - United States",
  },
  {
    full_name:
      "(LAS) Las Vegas,  Harry Reid International Airport - United States",
  },
  { full_name: "(ORD) Orlando, Orlando International Airport - United States" },
  {
    full_name:
      "(CLT) Chalotte, Charlotte Douglas International Airport - United States",
  },
  {
    full_name:
      "(LAX) Los Angeles, Los Angeles International Airport - United States",
  },
  { full_name: "(ORD) Chicago, O Hare International Airport - United States" },
  { full_name: "(DEN) Denver, Denver International airport - United States" },
  { full_name: "(DFW) Dallas, Fort International Airport - United States" },
  {
    full_name:
      "(ATL) Atlanta, Hartsfield Jackson International Airport - United States",
  },
  { full_name: "(CGK) Jakarta, Hatta International Airport - Indonesia" },
  { full_name: "(DPS) Denpasar, Nagurah Rai (Bali) International - Indonesia" },
  { full_name: "(SUB) Surabaya, Juanda International Airport - Indonesia" },
  {
    full_name:
      "(UPG) Ujung Pandang , Hasanuddin International Airport - Indonesia",
  },
  { full_name: "(MLE) Male, Male International Airport - Maldives" },
  {
    full_name: "(GYD) Baku, Heydar Aliyev International Airport  - Azerbaijan",
  },
  { full_name: "(ZXT) Baku, Zabrat Airport - Azerbaijan" },
  { full_name: "(FRA) Frankfurt, Frankfurt Airport - Germany" },
  { full_name: "(MUC) Munich, Munich Airport - Germany" },
  { full_name: "(DUS) Dusseldorf, Dusseldorf Airport - Germany" },
  { full_name: "(TXL) Berlin, Berlin Tegel Airport - Germany" },
  { full_name: "(HAM) Hamburg, Hamburg Airport - Germany" },
  { full_name: "(STR) Stuttgart, Stuttgart Airport – STR - Germany" },
  { full_name: "(CGN) Cologone, Cologne (Bonn Airport) - Germany" },
  { full_name: "(SXF) Berlin, Berlin Schonefeld Airport - Germany" },
  { full_name: "(BSL) Berlin, Basel – Mulhouse – Freiburg Airport - Germany" },
  { full_name: "(HAJ) Hannover, Hannover Airport - Germany" },
  { full_name: "(NUE) Nuremberg, Nuremberg Airport - Germany" },
  { full_name: "(HHN) Frankfurt, Frankfurt Hahn Airport - Germany" },
  { full_name: "(BRE) Bremen, Bremen Airport - Germany" },
  { full_name: "(LEJ) Leipzig, Leipzig / Halle Airport - Germany" },
  { full_name: "(DTM) Dortmund, Dortmund Airport - Germany" },
  { full_name: "(NRN) Weeze, Weeze Airport - Germany" },
  { full_name: "(DRS) Dresden, Dresden Airport - Germany" },
  { full_name: "(FKB) Karlsruhe, Karlsruhe / Baden-Baden Airport - Germany" },
  { full_name: "(ATH) Athens, Athens International Airport - Greece" },
  { full_name: "(ZRH) Zurich, Zurich Airport - Switzerland" },
  { full_name: "(DOH) Doha, Hammad International Airport - Qatar" },
  { full_name: "(MCT) Muscat, Muscat International Airport - Oman" },
  {
    full_name: "(CDG) Paris, Charles de Gaulle International Airport - France",
  },
  { full_name: "(KBL) Kabul , Kabul Airport - Afghanistan" },
  { full_name: "(AEP) Buenos Aires, Jorge Newbery Airpor - Argentina" },
  {
    full_name:
      "(EZE) Buenos Aires, Ezeiza/Ministro Pistarini International Airpor - Argentina",
  },
  { full_name: "(AUA) Aruba, Aruba Airport Authority - Aruba" },
  { full_name: "(BME) Broome, Broome International Airport - Australia" },
  { full_name: "(GRZ) Graz, Graz Airport - Austria" },
  { full_name: "(INN) Innsbruck, Innsbruck Airport - Austria" },
  { full_name: "(KLU) Klagenfurt am Wörthersee, Klagenfurt Airport - Austria" },
  { full_name: "(LNZ) linz hoersching, Linz Blue Danube Airport - Austria" },
  { full_name: "(SZG) Austria, Salzburg Airport - Austria" },
  { full_name: "(VIE) Vienna, Vienna International Airport - Austria" },
  { full_name: "(BAH) Bahrain, Bahrain International Airport - Bahrain" },
  {
    full_name: "(BGI) Barbados, Bridgetown, Grantley Adams Airport - Barbados",
  },
  { full_name: "(BQT) Brest, Brest Airport - Belarus" },
  { full_name: "(MSQ) Minsk, Minsk Airport - Belarus" },
  { full_name: "(ANR) Antwerp, Antwerp, Deurne Airport - Belgium" },
  { full_name: "(BRU) Brussels, Brussels Airport - Belgium" },
  {
    full_name:
      "(CRL) Brussels South Charlero, Brussels South Charleroi Airport - Belgium",
  },
  { full_name: "(LGG) Liege, Liege Airport - Belgium" },
  { full_name: "(OST) Ostend, Ostend Airport - Belgium" },
  {
    full_name:
      "(BZE) Belize, Belize City, Goldson International Airport - Belize",
  },
  { full_name: "(BDA) Bermuda, Bermuda International Airport - Bermuda" },
  { full_name: "(LPB) LaPaz, LaPaz Airport , El Alto - Bolivia" },
  {
    full_name:
      "(VVI) Santa Cruz, Viru Viru, Santa Cruz, Viru Viru International Airport - Bolivia",
  },
  { full_name: "(SRE) Sucre, Sucre Airport - Bolivia" },
  { full_name: "(SJJ) Sarajevo, Sarajevo Airport - Bosnia-Herzegovina" },
  { full_name: "(BSB) Brasilia, Brasilia Airport - Brazil" },
  { full_name: "(GIG) Rio de Janeiro, Galeao International Airport - Brazil" },
  { full_name: "(SDU) Rio de Janeiro, Santos Dumont Airport - Brazil" },
  { full_name: "(CGH) Rio de Janeiro, Sao PauloCongonhas Airport - Brazil" },
  {
    full_name: "(GRU) Rio de Janeiro, Guarulhos International Airport - Brazil",
  },
  {
    full_name:
      "(BWN) Brunei, Bandar Seri Begawan International Airpor - Brunei",
  },
  { full_name: "(SOF) Sofia, Sofia Airport - Bulgaria" },
  { full_name: "(YYC) Calgary, Calgary International Airport - Canada" },
  { full_name: "(YEG) Edmonton, Edmonton International Airport - Canada" },
  { full_name: "(YHZ) Halifax, Halifax International Airport - Canada" },
  {
    full_name:
      "(YHM) Hamilton, Hamilton, John C Munro International Airport - Canada",
  },
  { full_name: "(YXU) Ontario, London International Airport - Canada" },
  { full_name: "(SCL) Arturo Merino Benitez, Santiago Airpor - Chile" },
  { full_name: "(PEK) Beijing Capital, Beijing Airport - China" },
  { full_name: "(CAN) Guangzhou, Guangzhou Airport - China" },
  { full_name: "(HKG) Hong Kong, Chek Lap Kok International Airpor - China" },
  { full_name: "(NKG) Nanjing, Lukou International Airport - China" },
  { full_name: "(SHA) Shanghai, Hongqiao Airport - China" },
  { full_name: "(ZUH) Zhuhai, Zhuhai Airport - China" },
  { full_name: "(BOG) Bogota, Bogota Airport, Eldorado - Colombia" },
  { full_name: "(CTG) Cartagena Nunez , Cartagena Airport - Colombia" },
  { full_name: "(MDE) Medellin Cordova, Medellin Airport - Colombia" },
  {
    full_name:
      "(FIH) Kinshasa, N’Djil Airport - Congo, Demoratic Republic of the (Zaire",
  },
  {
    full_name:
      "(NLO) Kinshasa, N’Dolo Airport - Congo, Demoratic Republic of the (Zaire",
  },
  {
    full_name:
      "(SJO) San Jose, San Jose, Juan Santamaria International Airport - Costa Rica",
  },
  { full_name: "(DBV) Dubrovnik, Dubrovnik Airport - Croatia" },
  { full_name: "(SPU) Split, Split Airport - Croatia" },
  { full_name: "(ZAG) Zagreb, Zagreb Airport - Croatia" },
  {
    full_name: "(HAV) Havana, Havana, Jose Marti International Airport - Cuba",
  },
  { full_name: "(BRQ) Brno Turany, Brno Airport - Czech Republic" },
  {
    full_name:
      "(PED) East Bohemian, Pardubice International, East Bohemian Airport - Czech Republic",
  },
  { full_name: "(PRG) Prauge Ruzyne, Prauge Ruzyne Airpor - Czech Republic" },
  { full_name: "(AAL) Aalborg, Aalborg Airport - Denmark" },
  { full_name: "(AAR) Aarhus, Aarhus Airport - Denmark" },
  { full_name: "(BLL) Billund, Billund International Airport - Denmark" },
  { full_name: "(CPH) Copenhagen, Kastrup International Airport - Denmark" },
  { full_name: "(STI) Santiago, Cibao Municipal Airport - Dominican Republic" },
  {
    full_name:
      "(SDQ) Santo Domingo,  Las Americas Airport - Dominican Republic",
  },
  { full_name: "(UIO) Mariscal Suer, Quito Airport - Ecuador" },
  { full_name: "(ALY) Alexandria, Alexandria Airport - Egypt" },
  { full_name: "(CAI) Cairo, Cairo International Airport - Egypt" },
  {
    full_name:
      "(SAL) San Salvador, Comalapa International Airport - El Salvador",
  },
  { full_name: "(TLL) Tallinn, Tallinn Yulemiste - Estonia" },
  { full_name: "(HEL) Helsinki, Vantaa Airport - Finland" },
  { full_name: "(BOD) Bordeaux, Bordeaux Airport - France" },
  { full_name: "(NCE) Nice, Nice Airport - France" },
  { full_name: "(ORY) Paris, Orly Airport - France" },
  { full_name: "(SXF) Berlin, Schonefeld Airport - Germany" },
  { full_name: "(THF) Berlin, Tempelhof Airport - Germany" },
  {
    full_name: "(MGL) Moenchengladbach , Dusseldorf Express Airport - Germany",
  },
  { full_name: "(HHN) Hahn, Frankfurt/Hahn Airport - Germany" },
  { full_name: "(KEL) Kiel, Kiel Airport - Germany" },
  {
    full_name:
      "FMO Munster Osnabruck, Munster Osnabruck International Airport - Germany",
  },
  { full_name: "(SCN) Saarbrucken, Saarbrucken Airport - Germany" },
  { full_name: "(GUA) Guatemala City, La Aurora Airport - Guatemala" },
  { full_name: "(PAP) Port-au-Prince, Mais Gate Airport - Haiti" },
  { full_name: "(TGU) Tegucigalpa, Toncontin Airport - Honduras" },
  { full_name: "(BUD) Budapest, Ferihegyi Airpor - Hungary" },
  { full_name: "(RKV) Reykjavik, Reykjavik Domestic Airport - Iceland" },
  { full_name: "(KEF) Keflavik, Keflavik International Airport - Iceland" },
  { full_name: "(ORK) Cork, Cork Airport Code - Ireland" },
  { full_name: "(SNN) Shannon, Shannon Airport - Ireland" },
  { full_name: "(TLV) Tel Aviv, Tel Aviv Airport - Israel" },
  { full_name: "(BLQ) Bologna, Marconi International Airport - Italy" },
  { full_name: "(FLR) Florence, Amerigo Vespucci Airport - Italy" },
  { full_name: "(GOA) Genova, Cristoforo Colombo Airport - Italy" },
  { full_name: "(LIN) Milan, Linate Airport - Italy" },
  { full_name: "(MXP) Milan, Malpnesa Airport - Italy" },
  { full_name: "(NAP) Naples, Naples Airport - Italy" },
  { full_name: "(PSA) Pisa, Galileo Galilei Airpor - Italy" },
  { full_name: "(CIA) Rome, Ciampino Airport - Italy" },
  { full_name: "(FCO) Rome, Fiumicino Airpor - Italy" },
  { full_name: "(TRN) Turin, Turin Airpor - Italy" },
  { full_name: "(VCE) Venice, Venice Airport - Italy" },
  { full_name: "(VRN) Verona, Verona Airport - Italy" },
  { full_name: "(KIN) Kingston, Manley Airport - Jamaica" },
  { full_name: "(KTP) Kingston, Tinson Airport - Jamaica" },
  { full_name: "(MBJ) Kingston, Montego Bay, Sangster Airport - Jamaica" },
  { full_name: "(HIJ) Hiroshima, Hiroshima Airport - Japan" },
  { full_name: "(KMQ) Komatsu, Komatsu Airport - Japan" },
  { full_name: "(NGS) Nagasaki, Nagasaki Airport - Japan" },
  { full_name: "(KIJ) Niigata, Niigata Airport - Japan" },
  { full_name: "(OKJ) Okayama, Okayama Airport - Japan" },
  { full_name: "(KIX) Osaka-Kansai, Osaka-Kansai Airport - Japan" },
  { full_name: "(SDJ) SendaI, Sendai International Airport - Japan" },
  { full_name: "(HND) Tokyo, Haneda International Airport - Japan" },
  { full_name: "(NRT) Tokyo, Narita International Airport - Japan" },
  { full_name: "(YOK) Yokohama, Yokohama Airport - Japan" },
  { full_name: "(AMM) Amman, Queen Alia International Airport - Jordan" },
  { full_name: "(NBO) Nairobi, Kenyatta Airport - Kenya" },
  { full_name: "(WIL) Nairobi, Wilson Airport - Kenya" },
  { full_name: "(KWI) Kuwait, Kuwait International Airport - Kuwait" },
  { full_name: "(BEY) Beiruit, Beiruit International Airport - Lebanon" },
  { full_name: "(VNO) Vilnius, Vilnius Airport - Lithuania" },
  { full_name: "(MFM) Macau, Macau International Airport - Macau" },
  { full_name: "(OHD) Ohrid, Ohrid Airport - Macedonia" },
  { full_name: "(SKP) Skopje, Skopje Airport - Macedonia" },
  { full_name: "(MLA) Malta, Malta International Airport - Malta" },
  { full_name: "(BKI) Kota Kinabalu, Kota Kinabalu Airport - Malaysia" },
  { full_name: "(KUL) Kuala Lumpur, Subang International Airport - Malaysia" },
  { full_name: "(KCH) Kuching, Kuching Airport - Malaysia" },
  { full_name: "(LGK) Langkawi, Langkawi Airport - Malaysia" },
  { full_name: "(PEN) Penang, Penang International Airport - Malaysia" },
  {
    full_name:
      "(MRU) Mauritius, Sir Seewoosagur Ramgoolam International Airport - Mauritius",
  },
  { full_name: "(ACA) Acapulco, Alvarez International Airport - Mexico" },
  { full_name: "(CUN) Cancun, Cancun Airport - Cancun" },
  { full_name: "(CZM) Cozumel, Cozumel Airport - Mexico" },
  { full_name: "(GDL) Guadalajara, Miguel Jara Airport - Mexico" },
  { full_name: "(ZIH) Ixtapa, xtapa Airport - Mexico" },
  { full_name: "(MTY) Monterey, Gen. Mariano Escobedo Airport - Mexico" },
  { full_name: "(PBC) Puebla, Puebla Airpor - Mexico" },
  { full_name: "(VER) Veracruz, Herberto Jara Airport - Mexico" },
  { full_name: "(ULN) Ulan Bantor, Ulan Bantor Airport - Mongolia" },
  { full_name: "(CMN) Casablanca, Mohammed V Airport - Morocco" },
  { full_name: "(FEZ) Fez, Fez AirporT - Morocco" },
  { full_name: "(RAK) Marrakech, Marrakech Airport - Morocco" },
  { full_name: "(RBA) Rabat, Sale Airpor - Morocco" },
  { full_name: "(TNG) Tangier, Tangier Airport - Morocco" },
  { full_name: "(KTM) Kathmandu, Tribhuvan International Airport - Nepal" },
  { full_name: "(AMS) Amsterdam, Schipol Airport - Netherlands" },
  { full_name: "(RTM) Rotterdam, Rotterdam Airport - Netherlands" },
  { full_name: "(MGA) Managua, Augusto Sandino Airport - Nicaragua" },
  { full_name: "(LOS) Lagos, Murtala Muhammed Airport - Nigeria" },
  { full_name: "(OSL) Oslo, Oslo Airport - Norway" },
  { full_name: "(AKL) Auckland, Auckland International Airport - New Zealand" },
  {
    full_name:
      "(CHC) Christchurch, Christchurch International Airport - New Zealand",
  },
  {
    full_name:
      "(WLG) Wellington, Wellington International Airport - New Zealand",
  },
  { full_name: "(PAC) Gelabert Paitilla, Gelabert Paitilla Airport - Panama" },
  { full_name: "(PTY) Tocumen, Tocumen Airport - Panama" },
  { full_name: "(ASU) Asuncion, Silvio Pettirossi Airport - Paraguay" },
  { full_name: "(LIM) Lima, Chavez International Airport - Peru" },
  { full_name: "(MNL) Manila, Aquino International Airport - Philippines" },
  {
    full_name: "(ZAM) Zamboanga, Zamboanga International Airport - Philippines",
  },
  { full_name: "(GDN) Gdansk, Rebiechowo Airport - Poland" },
  { full_name: "(LCJ) Lodz Lublinek, Lodz Lublinek Airport - Poland" },
  { full_name: "(KTW) Pyrzowice, Katowice International Airport - Poland" },
  { full_name: "(WAW) Warsaw, Okecie Airport - Poland" },
  { full_name: "(WRO) Wroclaw, Strachowice Airport - Poland" },
  { full_name: "(BBU) Bucharest, Baneasa Airport - Romania" },
  { full_name: "(OTP) Bucharest, Otopeni Airport - Romania" },
  { full_name: "(TSR) Bucharest, Timisoara Airport - Romania" },
  { full_name: "(BKA) Moscow, Bykovo Airport - Russia" },
  { full_name: "(DME) Moscow, Domodedovo Airport - Russia" },
  { full_name: "(SVO) Moscow, Sheremetyevo Airport - Russia" },
  { full_name: "(VKO) Moscow, Vnukovo Airport - Russia" },
  {
    full_name:
      "(OVB) Moscow, Novosibirsk Tolmachevo International Airport - Russia",
  },
  { full_name: "(LED) St. Petersburg, Pulkovo Airport - Russia" },
  { full_name: "(VVO) Moscow, Vladivostok Airport - Russia" },
  { full_name: "(VOG) Moscow, Volgograd Airport - Russia" },
  { full_name: "(UVS) Moscow, Yuzhno-Sakhalinsk Airport - Russia" },
  { full_name: "(RUH) Riyadh, King Khalid Airport - Saudi Arabia" },
  { full_name: "(MED) Medina, Madinah Airport - Saudi Arabia" },
  { full_name: "(SIN) Singapore, Changi International Airport - Singapore" },
  { full_name: "(CPT) Cape Town, Cape Town Airport - South Africa" },
  { full_name: "(GCJ) Johannesburg, Grand Central Airport - South Africa" },
  {
    full_name:
      "(JNB) Johannesburg, Johannesburg International Airport - South Africa",
  },
  { full_name: "(QRA) Johannesburg, Randgermiston Airport - South Africa" },
  { full_name: "(PUS) Pusan, Kimhae International Airport - South Korea" },
  { full_name: "(SEL) Seoul, Kimpo International Airport - South Korea" },
  { full_name: "(CMB) Colombo, Katunayake Airport - Sri Lanka" },
  { full_name: "(RML) Colombo, Ratmalana Airport - Sri Lanka" },
  { full_name: "(ARN) Stockholm’s, Stockholm’s Arlanda Airpor - Sweden" },
  { full_name: "(BMA) Bromma, Bromma Airport - Sweden" },
  { full_name: "(BSL) Basel, EuroAirport - Switzerland" },
  { full_name: "(BRN) Berne-Belp, Berne-Belp International - Switzerland" },
  { full_name: "(GVA) Geneva, Geneva International Airport - Switzerland" },
  { full_name: "(KHH) Kaohsiung, Kaohsiung International Airport - Taiwan" },
  { full_name: "(TPE) Taipei, Chiang Kai-Shek International Airport - Taiwan" },
  { full_name: "(BKK) Bangkok, Bangkok Airport - Thailand" },
  { full_name: "(CNX) Chiang Mai, Chiang Mai Airport - Thailand" },
  { full_name: "(CEI) Chiang Rai, Chiang Rai Airport - Thailand" },
  { full_name: "(HDY) Hat Yai, Hat Yai Airport - Thailand" },
  { full_name: "(HKT) Phuket, Phuket Airport - Thailand" },
  { full_name: "(POS) Trinidad, Piarco Airport - Trinidad and Tobago" },
  {
    full_name:
      "(TAB) Tobago, Crown Point International Airport - Trinidad and Tobago",
  },
  { full_name: "(EBB) Kampala, Entebbe Airport - Uganda" },
  { full_name: "(KBP) Kiev, Borispol Airport - Ukraine" },
  { full_name: "(IEV) Kiev, Zhulyany Airport - Ukraine" },
  { full_name: "(ODS) Kiev, Odessa Central Airport - Ukraine" },
  { full_name: "(MVD) Montevideo, Carrasco Airport - Uruguay" },
  { full_name: "(CCS) Caracas, Simon Bolivar Airport - Venezuela" },
  { full_name: "(HAN) Hanoi, Noibai Airpor - Vietnam" },
  { full_name: "(SGN) Saigon, Saigon Airport - Vietnam" },
];
export default dummyData2;
