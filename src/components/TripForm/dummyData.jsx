const dummyData = [
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
  { full_name: "(CVT) Coventry, Coventry - United Kingdod" },
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
  ,
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
];
export default dummyData;
