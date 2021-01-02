


//Array of Objects
const quizA = [
 {
 	q:"English - 'four', हिंदी - 'चार' ",
 	options:[' चतुर् ',' द्वि ',' पञ्चन् ',' अन्य '],
 	answer:0
 },
 {
 	q:"English - 'you', हिंदी - 'आप' ",
 	options:['स','त्वम्','अहम्','वयम्'],
 	answer:1
 },
 {
 	q:"English - 'many', हिंदी - 'अनेक' ",
 	options:['अल्प','किञ्चिद्','बहु','अन्य'],
 	answer:2
 },
 {
 	q:"English - 'thin', हिंदी - 'पतला' ",
 	options:['घन','तनु','अल्प'],
 	answer:1
 },
 {
 	q:"English - 'thick', हिंदी - 'मोटा' ",
 	options:['घन','तनु','अल्प',' अन्य '],
 	answer:0
 },
 {
 	q:"English - 'who', हिंदी - 'कौन' ",
 	options:['अत्र','तत्र ','इदम्','क'],
 	answer:3
 },
 {
 	q:"English - 'this', हिंदी - 'यह' ",
 	options:['अत्र','तत्र ','इदम्','क'],
 	answer:2
 },
 {
 	q:"English - 'that', हिंदी - 'उस' ",
 	options:['अत्र','तत्र ','इदम्','क'],
 	answer:1
 },
 {
 	q:"English - 'two', हिंदी - 'दो' ",
 	options:[' चतुर् ',' द्वि ',' पञ्चन् ',' अन्य '],
 	answer:1
 },
 {
 	q:"English - 'all', हिंदी - 'सब' ",
 	options:['अल्प','सर्व','बहु','अन्य'],
 	answer:1
 },
 {
 	q:"English - 'small', हिंदी - 'छोटा' ",
 	options:[' महत् ',' अल्प ',' उरु ',' घन '],
 	answer:1
 },
 {
 	q:"English - 'snake', हिंदी - 'साँप' ",
 	options:['सर्प',' पशु ',' मत्स्य ',' अन्य '],
 	answer:0
 },
 {
 	q:"English - 'Dog', हिंदी - 'कुत्ता' ",
 	options:['सर्प',' पशु ',' मत्स्य ',' श्वन् '],
 	answer:3
 },
 {
 	q:"English - 'Fish', हिंदी - 'मछली' ",
 	options:['सर्प',' पशु ',' मत्स्य ',' श्वन् '],
 	answer:2
 },
 {
 	q:"English - 'Fruit', हिंदी - 'फल' ",
 	options:['बीज',' फल ',' मूल '],
 	answer:1
 },
 {
 	q:"English - 'Meat', हिंदी - 'खाद्य' ",
 	options:[' मांस ',' चर्मन् ',' मेदस् ',' अन्य '],
 	answer:0
 },
 {
 	q:"English - 'Forest', हिंदी - 'जंगल' ",
 	options:[' वृक्ष ',' वन ',' दण्ड ',' पत्त्र '],
 	answer:1
 },
 {
 	q:"English - 'Tree', हिंदी - 'पेड़' ",
 	options:[' वृक्ष ',' वन ',' दण्ड ',' पत्त्र '],
 	answer:0
 },
 {
 	q:"English - 'Leaf', हिंदी - 'पत्ता' ",
 	options:[' वृक्ष ',' वन ',' दण्ड ',' पत्त्र '],
 	answer:3
 },
 {
 	q:"English - 'Mouth', हिंदी - 'मुंह' ",
 	options:[' मुख ',' शिरस् ',' केश  ',' अक्षि '],
 	answer:0
 },
 {
 	q:"English - 'Hair', हिंदी - 'बाल' ",
 	options:[' मुख ',' शिरस् ',' केश  ',' अक्षि '],
 	answer:2
 },
 {
 	q:"English - 'Eye', हिंदी - 'आंख' ",
 	options:[' मुख ',' शिरस् ',' केश ',' अक्षि '],
 	answer:3
 },
 {
 	q:"English - 'tooth', हिंदी - 'दांत' ",
 	options:[' मुख ',' शिरस् ',' दन्त ',' अक्षि '],
 	answer:2
 },
 {
 	q:"English - 'hand', हिंदी - 'हाथ' ",
 	options:[' पद ',' शिरस् ',' हस्त',' नख '],
 	answer:2
 },
 {
 	q:"English - 'fingernail', हिंदी - 'नाखून' ",
 	options:[' जानु',' शिरस् ',' पद ',' नख '],
 	answer:3
 }
]

const quizB = [
 {
 	q:"English - 'grass', हिंदी - 'घास'",
 	options:['तृण',' बीज ','त्वच्','रज्जु'],
 	answer:0
 },
 {
 	q:"English - 'heart', हिंदी - 'दिल'",
 	options:['यकृत् ','पृष्ठ','उदर','हृदय'],
 	answer:3
 },
 {
 	q:"English - 'liver', हिंदी - 'जिगर' ",
 	options:['हृदय','उदर','यकृत्','जानु '],
 	answer:2
 },
 {
 	q:"English - 'fog', हिंदी - 'कोहरा' ",
 	options:['मिह्','रेणु','पांसु '],
 	answer:0
 },
 {
 	q:"English - 'sand', हिंदी - 'रेत' ",
 	options:['लवण','अश्मन्','क्षम् ','पांसु '],
 	answer:3
 },
 {
 	q:"English - 'smoke', हिंदी - 'धुआं' ",
 	options:['धूम','अग्नि','आस','दहति'],
 	answer:0
 },
 {
 	q:"English - 'rotten', हिंदी - 'सड़ा हुआ' ",
 	options:['पूति ','मलिन','पाप','जीर्ण'],
 	answer:0
 },
 {
 	q:"English - 'wet', हिंदी - 'गीला' ",
 	options:['नेद','शुष्क ','कुण्ठ ','आर्द्र '],
 	answer:3
 },
 {
 	q:"English - 'because', हिंदी - 'चूंकि' ",
 	options:['च ','यदि ','हि','सह'],
 	answer:2
 },
 {
 	q:"English - 'old', हिंदी - 'पुराना' ",
 	options:['नव','जीर्ण ','	मलिन'],
 	answer:1
 },
 {
 	q:"English - 'straight', हिंदी - 'सीधे' ",
 	options:['तीक्ष्ण ','वृत्त ','श्लक्ष्ण','ऋजु'],
 	answer:3
 },
 {
 	q:"English - 'salt', हिंदी - 'नमक' ",
 	options:['लवण ','अश्मन् ','सरस्','पांसु'],
 	answer:0
 },
 {
 	q:"English - 'left', हिंदी - 'बाएं' ",
 	options:['नेद','सह','दक्षिण','सव्य '],
 	answer:3
 },
 {
 	q:"English - 'God', हिंदी - 'भगवान' ",
 	options:['गणपती ','बहूदरं ','भगवत् ','जन्तवः '],
 	answer:2
 },
 {
 	q:"English - 'night', हिंदी - 'रात' ",
 	options:[' शीत',' रात्रि',' कृष्ण'],
 	answer:1
 },
 {
 	q:"English - 'perfect', हिंदी - 'उत्तम' ",
 	options:['ऊर्जा','उत्सव','सशक्त','श्रेष्ठ'],
 	answer:3
 },
 {
 	q:"English - 'beauty', हिंदी - 'सुंदरता' ",
 	options:['सौंदर्य','चैतन्य','हेमन्त','आलिंगन'],
 	answer:0
 },
 {
 	q:"English - 'hug', हिंदी - 'झप्पी' ",
 	options:['संस्कार','उत्सव','आकांक्षा','आलिंगन'],
 	answer:3
 },
 {
 	q:"English - 'salvation', हिंदी - ' '",
 	options:['गुप्त','ज्योति','मोक्ष','वात्सल्य'],
 	answer:2
 },
 {
 	q:"English - 'height', हिंदी - 'मोक्ष' ",
 	options:['स्पर्श','पराकाष्ठा','आध्यात्मिक'],
 	answer:1
 },
 {
 	q:"English - 'handicap', हिंदी - 'अपंगता' ",
 	options:['विषाद','पलायन','शस्त्र','विक्षिप्त'],
 	answer:3
 },
 {
 	q:"English - 'wisdom', हिंदी - 'बुद्धिमत्ता' ",
 	options:['प्रज्ञा','श्रृंगार ','महत्वाकांक्षा ','शिखर'],
 	answer:0
 },
 {
 	q:"English - 'epic', हिंदी - 'महाकाव्य' ",
 	options:['अनुष्ठान','विलक्षण','शस्त्र ','शास्त्र '],
 	answer:3
 },
 {
 	q:"English - 'pure', हिंदी - 'शुद्ध' ",
 	options:['श्रद्धा','चरित्र','निश्छल','स्मरण'],
 	answer:2
 },
 {
 	q:"English - 'Indians', हिंदी - 'भारतीयों' ",
 	options:['अलौकिक','आर्य','निश्छल'],
 	answer:1
 }
]

const quizC = [
 {
 	q:"English - 'galaxy', हिंदी - 'प्रकाशयुक्त' ",
 	options:['आकाशगंगा','कृत्रिम','चैतन्य','आकर्षण'],
 	answer:0
 },
 {
 	q:"English - 'destruction', हिंदी - 'विनाश' ",
 	options:['श्रृंखला','विध्वंस','ऊर्जा ','सशक्त'],
 	answer:1
 },
 {
 	q:"English - 'internal conflict', हिंदी - 'आन्तरिक मन मुटाव' ",
 	options:['शस्त्र','धर्मसंकट','अंतर्द्वंद','विक्षिप्त'],
 	answer:2
 },
 {
 	q:"English - 'invitation', हिंदी - 'निमंत्रण' ",
 	options:['अनुष्ठान','आह्वान','प्रज्ञा ','श्रृंगार'],
 	answer:1
 },
 {
 	q:"English - 'perspective', हिंदी - 'परिप्रेक्ष्य' ",
 	options:['दर्पण','निश्छल','ब्रह्मास्त्र','दृष्टिकोण'],
 	answer:3
 },
 {
 	q:"English - 'respect', हिंदी - 'सम्मान' ",
 	options:['श्रद्धा','ब्रह्मास्त्र','प्रणाम','प्रज्ञा'],
 	answer:0
 },
 {
 	q:"English - 'artificial', हिंदी - 'कृत्रिम' ",
 	options:['कृत्रिम','सशक्त ','आध्यात्मिक','अंतर्द्वंद'],
 	answer:0
 },
 {
 	q:"English - 'exceptional', हिंदी - 'असाधारण' ",
 	options:['धर्मसंकट','विलक्षण','महत्वाकांक्षा','दृष्टिकोण'],
 	answer:1
 },
 {
 	q:"English - 'prayer', हिंदी - 'प्रार्थना' ",
 	options:['स्मरण','प्रज्ञा','अनुष्ठान','आह्वान'],
 	answer:2
 },
 {
 	q:"English - 'Divine', हिंदी - 'दिव्य' ",
 	options:['क्षमा','अलौकिक','सात्विक','शिथिल'],
 	answer:1
 },
 {
 	q:"English - 'forget', हिंदी - 'भूलना' ",
 	options:['संबल','अंतरंग','सौम्य','विस्मृत'],
 	answer:3
 },
 {
 	q:"English - 'absorbed', हिंदी - 'अवशोषित' ",
 	options:['तल्लीन','कालजयी','सहज','दुरुहता'],
 	answer:0
 },
 {
 	q:"English - 'articulation', हिंदी - 'जोड़बंदी' ",
 	options:['अभिव्यक्ति','अस्तित्व','जिजीविषा','रिमझिम'],
 	answer:0
 },
 {
 	q:"English - 'sharp', हिंदी - 'तेज़' ",
 	options:['मलिन','तीक्ष्ण','कुण्ठ','श्लक्ष्ण'],
 	answer:1
 },
 {
 	q:"English - 'to swell', हिंदी - 'सूजना' ",
 	options:['सरति ','	प्लवते ','श्वयति','दीव्यति'],
 	answer:2
 },
 {
 	q:"English - 'to sew', हिंदी - 'सिलना' ",
 	options:['सरति ','सीव्यति ','क्षिपति','बध्नाति'],
 	answer:1
 },
 {
 	q:"English - 'to wipe', हिंदी - 'पोंछना' ",
 	options:['धरति','क्षालयति','घर्षति','मार्ष्टि '],
 	answer:3
 },
 {
 	q:"English - 'to squeeze', हिंदी - 'दबाना' ",
 	options:['मृद्नाति','पद्यते','प्लवते ','सरति '],
 	answer:0
 },
 {
 	q:"English - 'to sit', हिंदी - 'बैठना' ",
 	options:['सीदति','तिष्ठति','आगच्छति','पतति'],
 	answer:0
 },
 {
 	q:"English - 'to scratch', हिंदी - 'खरोंटना' ",
 	options:['मार्ष्टि','लिखति','धरति','घर्षति '],
 	answer:1
 },
 {
 	q:"English - 'to smell', हिंदी - 'सूंघना' ",
 	options:['जानाति','शृणोति','जिघ्रति ','पश्यति'],
 	answer:2
 },
 {
 	q:"English - 'to bite', हिंदी - 'काटना' ",
 	options:['वाति','दशति ','वमति','धयति '],
 	answer:1
 },
 {
 	q:"English - 'to swim', हिंदी - 'तैरना' ",
 	options:['सीदति','पद्यते','पतति','प्लवते'],
 	answer:3
 },
 {
 	q:"English - 'to hunt', हिंदी - 'शिकार करना' ",
 	options:['वेति','	हन्ति','कृन्तति ','भिनत्ति '],
 	answer:0
 },
 {
 	q:"English - 'to fight', हिंदी - 'लड़ना' ",
 	options:['युध्यते','म्रियते','हन्ति','स्वपिति '],
 	answer:0
 }
]