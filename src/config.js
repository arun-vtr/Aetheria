// MusiRec — Multilingual Demo Tracks & Configuration
export const MOODS = {
  sunny: {
    emoji: '☀️',
    name: 'Happy & Energetic',
    desc: 'The clear sky calls for upbeat, feel-good anthems',
    tags: ['pop', 'dance', 'feel-good'],
    lastfmTags: ['happy', 'pop', 'dance'],
    demoKey: 'sunny',
    theme: 'sunny'
  },
  cloudy: {
    emoji: '☁️',
    name: 'Chilled & Melodic',
    desc: 'Cozy grey skies call for smooth, laid-back melodies',
    tags: ['indie', 'chillout', 'lo-fi'],
    lastfmTags: ['chillout', 'indie', 'lofi'],
    demoKey: 'cloudy',
    theme: 'cloudy'
  },
  rainy: {
    emoji: '🌧️',
    name: 'Melancholic & Deep',
    desc: 'Rain on the window — jazz, blues & soulful sounds',
    tags: ['jazz', 'blues', 'soul'],
    lastfmTags: ['jazz', 'blues', 'soul'],
    demoKey: 'rainy',
    theme: 'rainy'
  },
  stormy: {
    emoji: '⛈️',
    name: 'Dramatic & Intense',
    desc: 'Powerful weather deserves powerful beats and rock sounds',
    tags: ['rock', 'metal', 'electronic'],
    lastfmTags: ['rock', 'metal', 'electronic'],
    demoKey: 'stormy',
    theme: 'stormy'
  },
  snowy: {
    emoji: '❄️',
    name: 'Cozy & Acoustic',
    desc: 'Snuggle up with soft acoustic tunes and warm rhythms',
    tags: ['acoustic', 'folk', 'singer-songwriter'],
    lastfmTags: ['acoustic', 'folk', 'indie'],
    demoKey: 'snowy',
    theme: 'snowy'
  },
  misty: {
    emoji: '🌫️',
    name: 'Ethereal & Atmospheric',
    desc: 'Get lost in a fog of ambient, dream pop & post-rock',
    tags: ['ambient', 'dream-pop', 'shoegaze'],
    lastfmTags: ['ambient', 'dreampop', 'shoegaze'],
    demoKey: 'misty',
    theme: 'misty'
  },
  cold: {
    emoji: '💨',
    name: 'Melancholic & Introspective',
    desc: 'Cold winds call for deep indie folk and acoustic ballads',
    tags: ['indie-folk', 'sad-indie', 'acoustic'],
    lastfmTags: ['indie-folk', 'acoustic', 'sad-indie'],
    demoKey: 'cold',
    theme: 'cold'
  },
  tropical: {
    emoji: '🌴',
    name: 'Warm & Vibrant',
    desc: 'Tropical heat calls for reggae, latin & afrobeat rhythms',
    tags: ['reggae', 'latin', 'afrobeat'],
    lastfmTags: ['reggae', 'latin', 'afrobeat'],
    demoKey: 'tropical',
    theme: 'tropical'
  }
};

export const DEMO_TRACKS = {
  sunny: [
    { name: 'Happy', artist: 'Pharrell Williams', duration: '3:53', g: ['#FFD700','#FF6B35'], lang: 'english', top: true },
    { name: "Can't Stop the Feeling!", artist: 'Justin Timberlake', duration: '3:56', g: ['#FF6B35','#FF4F81'], lang: 'english', top: true },
    { name: 'Good Vibrations', artist: 'The Beach Boys', duration: '3:35', g: ['#FF4F81','#7F00FF'], lang: 'english', top: false },
    { name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', duration: '4:30', g: ['#FFB300','#FF3366'], lang: 'english', top: false },
    { name: 'Walking on Sunshine', artist: 'Katrina and the Waves', duration: '3:58', g: ['#FFC837','#FF8008'], lang: 'english', top: false },
    
    { name: 'Ilahi', artist: 'Arijit Singh', duration: '3:48', g: ['#00F2FE','#4FACFE'], lang: 'hindi', top: true },
    { name: 'Ude Dil Befikre', artist: 'Benny Dayal', duration: '3:47', g: ['#4FACFE','#0000FF'], lang: 'hindi', top: false },
    { name: 'Kar Gayi Chull', artist: 'Badshah, Neha Kakkar', duration: '3:07', g: ['#FAD961','#F76B1C'], lang: 'hindi', top: false },
    { name: 'Subah Subah', artist: 'Arijit Singh', duration: '4:35', g: ['#42e695','#3bb2b8'], lang: 'hindi', top: false },
    { name: 'Zindagi Ek Safar Hai', artist: 'Kishore Kumar', duration: '4:20', g: ['#FBCFE8','#EC4899'], lang: 'hindi', top: false },

    { name: 'Proper Patola', artist: 'Diljit Dosanjh', duration: '2:58', g: ['#FFB300','#FF3366'], lang: 'punjabi', top: true },
    { name: 'High Rated Gabru', artist: 'Guru Randhawa', duration: '3:34', g: ['#FFC837','#FF8008'], lang: 'punjabi', top: false },
    { name: 'Naah', artist: 'Harrdy Sandhu', duration: '3:10', g: ['#ffe259','#ffa751'], lang: 'punjabi', top: false },
    { name: 'Laung Laachi', artist: 'Mannat Noor', duration: '3:05', g: ['#4ca1af','#c4e0e5'], lang: 'punjabi', top: false },
    { name: '3 Peg', artist: 'Sharry Mann', duration: '3:20', g: ['#1e3c72','#2a5298'], lang: 'punjabi', top: false },
    
    { name: 'Aaluma Doluma', artist: 'Anirudh Ravichander', duration: '4:20', g: ['#b92b27','#1565c0'], lang: 'tamil', top: true },
    { name: 'Rowdy Baby', artist: 'Dhanush, Dhee', duration: '4:44', g: ['#f857a6','#ff5858'], lang: 'tamil', top: false },
    { name: 'Arabic Kuthu', artist: 'Anirudh, Jonita Gandhi', duration: '4:40', g: ['#ff9900','#ff5500'], lang: 'tamil', top: false },
    { name: 'Vaathi Coming', artist: 'Anirudh Ravichander', duration: '3:50', g: ['#0f2027','#203a43'], lang: 'tamil', top: false },
    { name: 'Kutti Story', artist: 'Vijay', duration: '5:20', g: ['#1f1c2c','#928dab'], lang: 'tamil', top: false },

    { name: 'Butta Bomma', artist: 'Armaan Malik', duration: '3:15', g: ['#4FACFE','#00f2fe'], lang: 'telugu', top: true },
    { name: 'Ramuloo Ramulaa', artist: 'Anurag Kulkarni', duration: '4:05', g: ['#ffe259','#ffa751'], lang: 'telugu', top: false },
    { name: 'Inkem Inkem Kaavaale', artist: 'Sid Sriram', duration: '4:26', g: ['#799F0C','#ACBB78'], lang: 'telugu', top: false },
    { name: 'Saami Saami', artist: 'Mounika Yadav', duration: '3:44', g: ['#f857a6','#ff5858'], lang: 'telugu', top: false },
    { name: 'Naatu Naatu', artist: 'Rahul Sipligunj, Kaala Bhairava', duration: '3:35', g: ['#b92b27','#1565c0'], lang: 'telugu', top: false },
    
    { name: 'Kudukku', artist: 'Vineeth Sreenivasan', duration: '2:46', g: ['#10B981','#059669'], lang: 'malayalam', top: true },
    { name: 'Thudakkam Mangalyam', artist: 'Vineeth Sreenivasan', duration: '3:43', g: ['#D1FAE5','#10B981'], lang: 'malayalam', top: false },
    { name: 'Appangal Embadum', artist: 'Anna Katharina Valayil', duration: '3:01', g: ['#FBCFE8','#EC4899'], lang: 'malayalam', top: false },
    { name: 'Jimikki Kammal', artist: 'Vineeth Sreenivasan', duration: '3:16', g: ['#FF8008','#FFC837'], lang: 'malayalam', top: false },
    { name: 'Chinnamma Adi', artist: 'M.G. Sreekumar', duration: '3:42', g: ['#11998e','#38ef7d'], lang: 'malayalam', top: false }
  ],
  cloudy: [
    { name: 'Sunrise', artist: 'Norah Jones', duration: '3:20', g: ['#799F0C','#ACBB78'], lang: 'english', top: true },
    { name: 'Put Your Records On', artist: 'Corinne Bailey Rae', duration: '3:35', g: ['#ffe259','#ffa751'], lang: 'english', top: true },
    { name: 'Banana Pancakes', artist: 'Jack Johnson', duration: '3:11', g: ['#acb6e5','#86fde8'], lang: 'english', top: false },
    { name: 'Location', artist: 'Khalid', duration: '3:39', g: ['#3a7bd5','#00d2ff'], lang: 'english', top: false },
    { name: 'Sweater Weather', artist: 'The Neighbourhood', duration: '4:00', g: ['#0f2027','#203a43'], lang: 'english', top: false },
    
    { name: 'Sham', artist: 'Amit Trivedi', duration: '4:43', g: ['#e1eec3','#f05053'], lang: 'hindi', top: true },
    { name: 'Kabira', artist: 'Tochi Raina, Rekha Bhardwaj', duration: '3:43', g: ['#3a7bd5','#3a6073'], lang: 'hindi', top: true },
    { name: 'Khaabon Ke Parindey', artist: 'Mohit Chauhan', duration: '4:13', g: ['#B3FFAB','#12FFF7'], lang: 'hindi', top: false },
    { name: 'Iktara', artist: 'Kavita Seth', duration: '4:13', g: ['#f857a6','#ff5858'], lang: 'hindi', top: false },
    { name: 'Khoj', artist: 'The Local Train', duration: '4:02', g: ['#4b6cb7','#182848'], lang: 'hindi', top: false },

    { name: 'Qismat', artist: 'Ammy Virk', duration: '3:55', g: ['#283c86','#45a247'], lang: 'punjabi', top: true },
    { name: 'Soch', artist: 'Harrdy Sandhu', duration: '4:40', g: ['#1e3c72','#2a5298'], lang: 'punjabi', top: false },
    { name: 'Khaab', artist: 'Akhil', duration: '3:22', g: ['#ffe259','#ffa751'], lang: 'punjabi', top: false },
    { name: 'Waalian', artist: 'Harnoor', duration: '4:15', g: ['#757F9A','#D7DDE8'], lang: 'punjabi', top: false },
    { name: 'Taare', artist: 'Guru Randhawa', duration: '3:10', g: ['#B3FFAB','#12FFF7'], lang: 'punjabi', top: false },
    
    { name: 'Kadhale Kadhale', artist: 'Govind Vasantha', duration: '3:15', g: ['#2c3e50','#3498db'], lang: 'tamil', top: true },
    { name: 'Unakkul Naane', artist: 'Bombay Jayashri', duration: '5:10', g: ['#eef2f3','#8e9eab'], lang: 'tamil', top: false },
    { name: 'Nenjukkul Peidhidum', artist: 'Hariharan', duration: '6:10', g: ['#654ea3','#eaafc8'], lang: 'tamil', top: false },
    { name: 'Vaseegara', artist: 'Bombay Jayashri', duration: '5:01', g: ['#283c86','#45a247'], lang: 'tamil', top: false },
    { name: 'Po Nee Po', artist: 'Anirudh Ravichander', duration: '3:45', g: ['#0f2027','#203a43'], lang: 'tamil', top: false },

    { name: 'Samajavaragamana', artist: 'Sid Sriram', duration: '3:40', g: ['#11998e','#38ef7d'], lang: 'telugu', top: true },
    { name: 'Melikalu', artist: 'Mano, Ramya Behara', duration: '4:05', g: ['#ffe259','#ffa751'], lang: 'telugu', top: false },
    { name: 'Ondra Ondra', artist: 'Anurag Kulkarni', duration: '4:15', g: ['#acb6e5','#86fde8'], lang: 'telugu', top: false },
    { name: 'Priyathama', artist: 'Chinmayi Sripaada', duration: '4:02', g: ['#f857a6','#ff5858'], lang: 'telugu', top: false },
    { name: 'Chinnadana Neekosam', artist: 'Anurag Kulkarni', duration: '3:40', g: ['#3a7bd5','#00d2ff'], lang: 'telugu', top: false },
    
    { name: 'Malare', artist: 'Vijay Yesudas', duration: '5:16', g: ['#A8FF78','#78FFD6'], lang: 'malayalam', top: true },
    { name: 'Nee Himamazhayayi', artist: 'Haricharan', duration: '4:40', g: ['#11998e','#38ef7d'], lang: 'malayalam', top: true },
    { name: 'Akale', artist: 'Karthik', duration: '3:52', g: ['#757F9A','#D7DDE8'], lang: 'malayalam', top: false },
    { name: 'Mazhaye Mazhaye', artist: 'Haricharan', duration: '4:22', g: ['#4ca1af','#c4e0e5'], lang: 'malayalam', top: false },
    { name: 'Kisa Pathiyil', artist: 'Sachin Warrier', duration: '3:30', g: ['#283c86','#45a247'], lang: 'malayalam', top: false }
  ],
  rainy: [
    { name: 'Blue in Green', artist: 'Miles Davis', duration: '5:37', g: ['#141E30','#243B55'], lang: 'english', top: true },
    { name: 'Come Away With Me', artist: 'Norah Jones', duration: '3:18', g: ['#2c3e50','#000000'], lang: 'english', top: true },
    { name: 'Purple Rain', artist: 'Prince', duration: '8:41', g: ['#654ea3','#eaafc8'], lang: 'english', top: false },
    { name: 'Riders on the Storm', artist: 'The Doors', duration: '7:10', g: ['#0f2027','#203a43'], lang: 'english', top: false },
    { name: 'Set Fire to the Rain', artist: 'Adele', duration: '4:02', g: ['#e52d27','#b31217'], lang: 'english', top: false },
    
    { name: 'Tum Hi Ho', artist: 'Arijit Singh', duration: '4:22', g: ['#1f4037','#99f2c8'], lang: 'hindi', top: true },
    { name: 'Rimjhim Gire Sawan', artist: 'Kishore Kumar', duration: '3:11', g: ['#4b6cb7','#182848'], lang: 'hindi', top: true },
    { name: 'Phir Se Ud Chala', artist: 'Mohit Chauhan', duration: '4:31', g: ['#00c6ff','#0072ff'], lang: 'hindi', top: false },
    { name: 'Ghar', artist: 'Piyush Mishra', duration: '3:45', g: ['#ada996','#f2f2f2'], lang: 'hindi', top: false },
    { name: 'Baarishein', artist: 'Anuv Jain', duration: '3:27', g: ['#ff9900','#ff5500'], lang: 'hindi', top: false },

    { name: 'Zindagi Di Paudi', artist: 'Millind Gaba', duration: '4:52', g: ['#1f4037','#99f2c8'], lang: 'punjabi', top: true },
    { name: 'Rona Sikhade Ve', artist: 'Miel', duration: '4:10', g: ['#ada996','#f2f2f2'], lang: 'punjabi', top: false },
    { name: 'Mann Bharrya', artist: 'B Praak', duration: '4:25', g: ['#e52d27','#b31217'], lang: 'punjabi', top: false },
    { name: 'Hath Chumme', artist: 'Ammy Virk', duration: '3:48', g: ['#4b6cb7','#182848'], lang: 'punjabi', top: false },
    { name: 'Pachtaoge', artist: 'Arijit Singh', duration: '3:46', g: ['#654ea3','#eaafc8'], lang: 'punjabi', top: false },
    
    { name: 'Mazhai Vara Pogudhae', artist: 'Karthik', duration: '4:40', g: ['#2c3e50','#3498db'], lang: 'tamil', top: true },
    { name: 'Venmegam Peidhadha', artist: 'Hariharan', duration: '4:20', g: ['#eef2f3','#8e9eab'], lang: 'tamil', top: true },
    { name: 'Munbe Vaa', artist: 'Naresh Iyer, Shreya Ghoshal', duration: '5:43', g: ['#654ea3','#eaafc8'], lang: 'tamil', top: false },
    { name: 'Adada Mazhaida', artist: 'Rahul Nambiar, Saindhavi', duration: '4:12', g: ['#283c86','#45a247'], lang: 'tamil', top: false },
    { name: 'Pookkalae Sattru Oyivedungal', artist: 'Haricharan, Shreya Ghoshal', duration: '5:08', g: ['#0f2027','#203a43'], lang: 'tamil', top: false },

    { name: 'Neeve', artist: 'Yazin Nizar', duration: '4:35', g: ['#3a7bd5','#00d2ff'], lang: 'telugu', top: true },
    { name: 'Adiga Adiga', artist: 'Sid Sriram', duration: '3:45', g: ['#2c3e50','#3498db'], lang: 'telugu', top: false },
    { name: 'Ninnu Kori', artist: 'Sid Sriram', duration: '4:02', g: ['#eef2f3','#8e9eab'], lang: 'telugu', top: false },
    { name: 'Okey Oka Lokam', artist: 'Sid Sriram', duration: '3:27', g: ['#654ea3','#eaafc8'], lang: 'telugu', top: false },
    { name: 'Chitti', artist: 'Ram Miriyala', duration: '3:12', g: ['#ffe259','#ffa751'], lang: 'telugu', top: false },
    
    { name: 'Mazha Mazha', artist: 'Shreya Ghoshal', duration: '4:15', g: ['#373B44','#4286f4'], lang: 'malayalam', top: true },
    { name: 'Pulariyum Neram', artist: 'Vijay Yesudas', duration: '4:02', g: ['#1e3c72','#2a5298'], lang: 'malayalam', top: true },
    { name: 'Kaatte Kaatte', artist: 'Shreya Ghoshal', duration: '3:45', g: ['#283c86','#45a247'], lang: 'malayalam', top: false },
    { name: 'Pranayam', artist: 'K.S. Harisankar', duration: '3:50', g: ['#4CA1AF','#2C3E50'], lang: 'malayalam', top: false },
    { name: 'Anuraga Vilochananayi', artist: 'Shreya Ghoshal', duration: '4:34', g: ['#fe8c00','#f83600'], lang: 'malayalam', top: false }
  ],
  stormy: [
    { name: 'Thunderstruck', artist: 'AC/DC', duration: '4:52', g: ['#000000','#434343'], lang: 'english', top: true },
    { name: 'Riders on the Storm', artist: 'The Doors', duration: '7:10', g: ['#0f2027','#203a43'], lang: 'english', top: true },
    { name: 'In the End', artist: 'Linkin Park', duration: '3:36', g: ['#1f1c2c','#928dab'], lang: 'english', top: false },
    { name: 'Master of Puppets', artist: 'Metallica', duration: '8:35', g: ['#6f0000','#200122'], lang: 'english', top: false },
    { name: 'Believer', artist: 'Imagine Dragons', duration: '3:24', g: ['#b92b27','#1565c0'], lang: 'english', top: false },
    
    { name: 'Bhaag D.K. Bose', artist: 'Ram Sampath', duration: '4:00', g: ['#b92b27','#1565c0'], lang: 'hindi', top: true },
    { name: 'Sadda Haq', artist: 'Mohit Chauhan', duration: '6:05', g: ['#870000','#190A05'], lang: 'hindi', top: true },
    { name: 'Aarambh Hai Prachand', artist: 'Piyush Mishra', duration: '4:54', g: ['#e52d27','#b31217'], lang: 'hindi', top: false },
    { name: 'Ziddi Dil', artist: 'Vishal Dadlani', duration: '4:46', g: ['#FF8008','#FFC837'], lang: 'hindi', top: false },
    { name: 'Chak De India', artist: 'Sukhwinder Singh', duration: '4:43', g: ['#f857a6','#ff5858'], lang: 'hindi', top: false },

    { name: 'Duma Dum Mast Qalandar', artist: 'Mika Singh', duration: '3:50', g: ['#b92b27','#1565c0'], lang: 'punjabi', top: true },
    { name: 'Bailando', artist: 'Guru Randhawa', duration: '3:10', g: ['#870000','#190A05'], lang: 'punjabi', top: false },
    { name: 'G.O.A.T.', artist: 'Diljit Dosanjh', duration: '3:43', g: ['#ff9900','#ff5500'], lang: 'punjabi', top: false },
    { name: 'We Rollin', artist: 'Shubh', duration: '3:19', g: ['#283c86','#45a247'], lang: 'punjabi', top: false },
    { name: 'They Know', artist: 'AP Dhillon', duration: '3:05', g: ['#0f2027','#203a43'], lang: 'punjabi', top: false },
    
    { name: 'Aaluma Doluma', artist: 'Anirudh Ravichander', duration: '4:20', g: ['#b92b27','#1565c0'], lang: 'tamil', top: true },
    { name: 'Chilla Chilla', artist: 'Anirudh Ravichander', duration: '3:45', g: ['#870000','#190A05'], lang: 'tamil', top: true },
    { name: 'Thee Thalapathy', artist: 'Silambarasan', duration: '4:08', g: ['#f857a6','#ff5858'], lang: 'tamil', top: false },
    { name: 'Kabali Anthem', artist: 'Santhosh Narayanan', duration: '3:10', g: ['#ff9900','#ff5500'], lang: 'tamil', top: false },
    { name: 'Vaathi Raid', artist: 'Anirudh Ravichander', duration: '3:20', g: ['#283c86','#45a247'], lang: 'tamil', top: false },

    { name: 'Dookudu Theme', artist: 'Thaman S', duration: '3:12', g: ['#b92b27','#1565c0'], lang: 'telugu', top: true },
    { name: 'Gabbar Singh Theme', artist: 'Devi Sri Prasad', duration: '2:50', g: ['#870000','#190A05'], lang: 'telugu', top: false },
    { name: 'Jai Balayya', artist: 'Thaman S', duration: '3:45', g: ['#ff9900','#ff5500'], lang: 'telugu', top: false },
    { name: 'Bheemla Nayak Title', artist: 'Thaman S', duration: '3:20', g: ['#283c86','#45a247'], lang: 'telugu', top: false },
    { name: 'Pushpa Title Song', artist: 'Rahul Sipligunj', duration: '4:10', g: ['#0f2027','#203a43'], lang: 'telugu', top: false },
    
    { name: 'Pala Palli', artist: 'Atul Narukara', duration: '3:20', g: ['#111111','#333333'], lang: 'malayalam', top: true },
    { name: 'Kaduva Anthem', artist: 'Jakes Bejoy', duration: '3:15', g: ['#f857a6','#ff5858'], lang: 'malayalam', top: true },
    { name: 'Fire', artist: 'Jakes Bejoy', duration: '2:50', g: ['#ff9900','#ff5500'], lang: 'malayalam', top: false },
    { name: 'Kalaavathi', artist: 'Sid Sriram', duration: '4:12', g: ['#11998e','#38ef7d'], lang: 'malayalam', top: false },
    { name: 'Kudukku (Heavy Remix)', artist: 'Jakes Bejoy', duration: '3:00', g: ['#870000','#111111'], lang: 'malayalam', top: false }
  ],
  snowy: [
    { name: 'White Winter Hymnal', artist: 'Fleet Foxes', duration: '2:27', g: ['#E6DADA','#274046'], lang: 'english', top: true },
    { name: 'Skinny Love', artist: 'Bon Iver', duration: '3:58', g: ['#8e9eab','#eef2f3'], lang: 'english', top: true },
    { name: 'Winter', artist: 'Joshua Radin', duration: '3:26', g: ['#757F9A','#D7DDE8'], lang: 'english', top: false },
    { name: 'Hallelujah', artist: 'Jeff Buckley', duration: '6:53', g: ['#4CA1AF','#2C3E50'], lang: 'english', top: false },
    { name: 'Landslide', artist: 'Fleetwood Mac', duration: '3:19', g: ['#ada996','#f2f2f2'], lang: 'english', top: false },
    
    { name: 'Channa Mereya', artist: 'Arijit Singh', duration: '4:49', g: ['#ffe259','#ffa751'], lang: 'hindi', top: true },
    { name: 'Kun Faya Kun', artist: 'A.R. Rahman', duration: '7:53', g: ['#EFEFBB','#D4D3DD'], lang: 'hindi', top: true },
    { name: 'Yun Hi Chala Chal', artist: 'Udit Narayan', duration: '7:28', g: ['#12c2e9','#c471ed'], lang: 'hindi', top: false },
    { name: 'Tujhe Kitna Chahne Lage', artist: 'Arijit Singh', duration: '4:44', g: ['#70e1f5','#ffd194'], lang: 'hindi', top: false },
    { name: 'Maahi', artist: 'Toshi Sabri', duration: '4:27', g: ['#0f0c1b','#302b63'], lang: 'hindi', top: false },

    { name: 'Soch', artist: 'Harrdy Sandhu', duration: '4:40', g: ['#ffe259','#ffa751'], lang: 'punjabi', top: true },
    { name: 'Khaab', artist: 'Akhil', duration: '3:22', g: ['#EFEFBB','#D4D3DD'], lang: 'punjabi', top: false },
    { name: 'Waalian', artist: 'Harnoor', duration: '4:15', g: ['#12c2e9','#c471ed'], lang: 'punjabi', top: false },
    { name: 'Zindagi', artist: 'Sartaj', duration: '4:30', g: ['#70e1f5','#ffd194'], lang: 'punjabi', top: false },
    { name: 'Jeene Ke Din', artist: 'Guru Randhawa', duration: '3:22', g: ['#0f0c1b','#302b63'], lang: 'punjabi', top: false },
    
    { name: 'Poove Vai Pesum Podhu', artist: 'A.R. Rahman', duration: '5:30', g: ['#2c3e50','#3498db'], lang: 'tamil', top: true },
    { name: 'Unakkul Naane', artist: 'Bombay Jayashri', duration: '5:10', g: ['#eef2f3','#8e9eab'], lang: 'tamil', top: true },
    { name: 'Elangaathu Veesudhey', artist: 'Ilaiyaraaja', duration: '4:55', g: ['#654ea3','#eaafc8'], lang: 'tamil', top: false },
    { name: 'Kadhal Sadugudu', artist: 'S.P. Balasubrahmanyam', duration: '4:30', g: ['#283c86','#45a247'], lang: 'tamil', top: false },
    { name: 'Nenjam Ellam', artist: 'Haricharan', duration: '5:12', g: ['#0f2027','#203a43'], lang: 'tamil', top: false },

    { name: 'Undiporaadhey', artist: 'Sid Sriram', duration: '4:15', g: ['#2c3e50','#3498db'], lang: 'telugu', top: true },
    { name: 'Nee Singam Choodu', artist: 'Kaala Bhairava', duration: '4:42', g: ['#eef2f3','#8e9eab'], lang: 'telugu', top: false },
    { name: 'Saami Saami', artist: 'Mounika Yadav', duration: '3:44', g: ['#654ea3','#eaafc8'], lang: 'telugu', top: false },
    { name: 'Vintunnavaa', artist: 'Karthik', duration: '5:02', g: ['#283c86','#45a247'], lang: 'telugu', top: false },
    { name: 'Ye Mantramu', artist: 'Karthik', duration: '3:45', g: ['#0f2027','#203a43'], lang: 'telugu', top: false },
    
    { name: 'Thaniye', artist: 'Sooraj Santhosh', duration: '3:37', g: ['#2c3e50','#3498db'], lang: 'malayalam', top: true },
    { name: 'Aaradhike', artist: 'Sooraj Santhosh', duration: '4:12', g: ['#a1c4fd','#c2e9fb'], lang: 'malayalam', top: true },
    { name: 'Kandu Nee Enne', artist: 'Haricharan', duration: '4:15', g: ['#eef2f3','#8e9eab'], lang: 'malayalam', top: false },
    { name: 'Njaan Janichu Valarnna', artist: 'K.J. Yesudas', duration: '3:45', g: ['#B3FFAB','#12FFF7'], lang: 'malayalam', top: false },
    { name: 'Poomuthole', artist: 'K.S. Harisankar', duration: '4:02', g: ['#11998e','#38ef7d'], lang: 'malayalam', top: false }
  ],
  misty: [
    { name: 'Intro', artist: 'The xx', duration: '2:08', g: ['#0f2027','#203a43'], lang: 'english', top: true },
    { name: 'Holocene', artist: 'Bon Iver', duration: '5:36', g: ['#61a0a8','#d4cfc5'], lang: 'english', top: true },
    { name: 'Teardrop', artist: 'Massive Attack', duration: '5:31', g: ['#3a7bd5','#00d2ff'], lang: 'english', top: false },
    { name: 'Starálfur', artist: 'Sigur Rós', duration: '5:46', g: ['#acb6e5','#86fde8'], lang: 'english', top: false },
    { name: 'Sparks', artist: 'Coldplay', duration: '3:47', g: ['#ffe259','#ffa751'], lang: 'english', top: false },
    
    { name: 'Yeh Dooriyan', artist: 'Mohit Chauhan', duration: '5:34', g: ['#ada996','#f2f2f2'], lang: 'hindi', top: true },
    { name: 'Gubbare', artist: 'Amit Trivedi', duration: '4:31', g: ['#d9a7c7','#fffcdc'], lang: 'hindi', top: true },
    { name: 'Laal Ishq', artist: 'Arijit Singh', duration: '6:27', g: ['#e65c00','#F9D423'], lang: 'hindi', top: false },
    { name: 'Tu Na Jaane Aas Paas Hai Khuda', artist: 'Rahat Fateh Ali Khan', duration: '5:25', g: ['#fe8c00','#f83600'], lang: 'hindi', top: false },
    { name: 'Dil Diyan Gallan', artist: 'Atif Aslam', duration: '4:20', g: ['#f857a6','#ff5858'], lang: 'hindi', top: false },

    { name: 'Rona Sikhade Ve', artist: 'Miel', duration: '4:10', g: ['#ada996','#f2f2f2'], lang: 'punjabi', top: true },
    { name: 'Qismat', artist: 'Ammy Virk', duration: '3:55', g: ['#d9a7c7','#fffcdc'], lang: 'punjabi', top: false },
    { name: 'Pachtaoge', artist: 'Arijit Singh', duration: '3:46', g: ['#e65c00','#F9D423'], lang: 'punjabi', top: false },
    { name: 'Mann Bharrya', artist: 'B Praak', duration: '4:25', g: ['#fe8c00','#f83600'], lang: 'punjabi', top: false },
    { name: 'Soch', artist: 'Harrdy Sandhu', duration: '4:40', g: ['#f857a6','#ff5858'], lang: 'punjabi', top: false },
    
    { name: 'Munbe Vaa', artist: 'Naresh Iyer', duration: '5:43', g: ['#2c3e50','#3498db'], lang: 'tamil', top: true },
    { name: 'Kadhale Kadhale', artist: 'Govind Vasantha', duration: '3:15', g: ['#eef2f3','#8e9eab'], lang: 'tamil', top: true },
    { name: 'Nenjukkul Peidhidum', artist: 'Hariharan', duration: '6:10', g: ['#654ea3','#eaafc8'], lang: 'tamil', top: false },
    { name: 'Kannazhaga', artist: 'Dhanush', duration: '3:30', g: ['#283c86','#45a247'], lang: 'tamil', top: false },
    { name: 'Vaseegara', artist: 'Bombay Jayashri', duration: '5:01', g: ['#0f2027','#203a43'], lang: 'tamil', top: false },

    { name: 'Priyathama', artist: 'Chinmayi Sripaada', duration: '4:02', g: ['#2c3e50','#3498db'], lang: 'telugu', top: true },
    { name: 'Kadhale', artist: 'Karthik', duration: '3:15', g: ['#eef2f3','#8e9eab'], lang: 'telugu', top: false },
    { name: 'Nee Kannu Neeli Samudram', artist: 'Javed Ali', duration: '5:12', g: ['#654ea3','#eaafc8'], lang: 'telugu', top: false },
    { name: 'Sid Sriram Medley', artist: 'Sid Sriram', duration: '4:30', g: ['#283c86','#45a247'], lang: 'telugu', top: false },
    { name: 'Manasaa', artist: 'Chinmayi Sripaada', duration: '4:10', g: ['#0f2027','#203a43'], lang: 'telugu', top: false },
    
    { name: 'Mazhaneer Thullikal', artist: 'Unni Menon', duration: '4:30', g: ['#4ca1af','#c4e0e5'], lang: 'malayalam', top: true },
    { name: 'Kisa Pathiyil', artist: 'Sachin Warrier', duration: '3:30', g: ['#283c86','#45a247'], lang: 'malayalam', top: true },
    { name: 'Pranayamani Thooval', artist: 'Sujatha', duration: '4:10', g: ['#eecda3','#ef629f'], lang: 'malayalam', top: false },
    { name: 'Eeran Kaatin', artist: 'P. Jayachandran', duration: '4:20', g: ['#1e3c72','#2a5298'], lang: 'malayalam', top: false },
    { name: 'Oru Kari Mukilinu', artist: 'Vijay Yesudas', duration: '4:30', g: ['#2c3e50','#3498db'], lang: 'malayalam', top: false }
  ],
  cold: [
    { name: 'Skinny Love', artist: 'Bon Iver', duration: '3:58', g: ['#8e9eab','#eef2f3'], lang: 'english', top: true },
    { name: 'Rosyln', artist: 'Bon Iver & St. Vincent', duration: '5:11', g: ['#200122','#6f0000'], lang: 'english', top: true },
    { name: 'Saturn', artist: 'Sleeping At Last', duration: '4:49', g: ['#000428','#004e92'], lang: 'english', top: false },
    { name: 'Flightless Bird, American Mouth', artist: 'Iron & Wine', duration: '4:02', g: ['#c4e0e5','#4ca1af'], lang: 'english', top: false },
    { name: 'Anchor', artist: 'Novo Amor', duration: '3:16', g: ['#61a0a8','#d4cfc5'], lang: 'english', top: false },
    
    { name: 'Lukka Chuppi', artist: 'A.R. Rahman', duration: '6:36', g: ['#70e1f5','#ffd194'], lang: 'hindi', top: true },
    { name: 'Tujhse Naraz Nahi Zindagi', artist: 'Anup Ghoshal', duration: '3:39', g: ['#fe8c00','#f83600'], lang: 'hindi', top: true },
    { name: 'Bekhayali', artist: 'Sachet Tandon', duration: '6:11', g: ['#0f0c1b','#302b63'], lang: 'hindi', top: false },
    { name: 'Challa', artist: 'Rabbi Shergill', duration: '5:21', g: ['#ffe259','#ffa751'], lang: 'hindi', top: false },
    { name: 'Jeena Jeena', artist: 'Atif Aslam', duration: '3:49', g: ['#42e695','#3bb2b8'], lang: 'hindi', top: false },

    { name: 'Soch', artist: 'Harrdy Sandhu', duration: '4:40', g: ['#70e1f5','#ffd194'], lang: 'punjabi', top: true },
    { name: 'Qismat', artist: 'Ammy Virk', duration: '3:55', g: ['#fe8c00','#f83600'], lang: 'punjabi', top: false },
    { name: 'Mann Bharrya', artist: 'B Praak', duration: '4:25', g: ['#0f0c1b','#302b63'], lang: 'punjabi', top: false },
    { name: 'Pachtaoge', artist: 'Arijit Singh', duration: '3:46', g: ['#ffe259','#ffa751'], lang: 'punjabi', top: false },
    { name: 'Laare', artist: 'Maninder Buttar', duration: '3:20', g: ['#42e695','#3bb2b8'], lang: 'punjabi', top: false },
    
    { name: 'Elangaathu Veesudhey', artist: 'Ilaiyaraaja', duration: '4:55', g: ['#2c3e50','#3498db'], lang: 'tamil', top: true },
    { name: 'Oru Naalil', artist: 'Yuvan Shankar Raja', duration: '5:45', g: ['#eef2f3','#8e9eab'], lang: 'tamil', top: true },
    { name: 'Kanave Kanave', artist: 'Anirudh Ravichander', duration: '4:50', g: ['#654ea3','#eaafc8'], lang: 'tamil', top: false },
    { name: 'Po Nee Po', artist: 'Anirudh Ravichander', duration: '3:45', g: ['#283c86','#45a247'], lang: 'tamil', top: false },
    { name: 'New York Nagaram', artist: 'A.R. Rahman', duration: '6:18', g: ['#0f2027','#203a43'], lang: 'tamil', top: false },

    { name: 'Adiga Adiga', artist: 'Sid Sriram', duration: '3:45', g: ['#2c3e50','#3498db'], lang: 'telugu', top: true },
    { name: 'Vintunnavaa', artist: 'Karthik', duration: '5:02', g: ['#eef2f3','#8e9eab'], lang: 'telugu', top: false },
    { name: 'Ye Mantramu', artist: 'Karthik', duration: '3:45', g: ['#654ea3','#eaafc8'], lang: 'telugu', top: false },
    { name: 'Undiporaadhey', artist: 'Sid Sriram', duration: '4:15', g: ['#283c86','#45a247'], lang: 'telugu', top: false },
    { name: 'Samajavaragamana', artist: 'Sid Sriram', duration: '3:40', g: ['#0f2027','#203a43'], lang: 'telugu', top: false },
    
    { name: 'Silent Cathedrals', artist: 'Harish Sivaramakrishnan', duration: '4:50', g: ['#1f4037','#99f2c8'], lang: 'malayalam', top: true },
    { name: 'Oru Kari Mukilinu', artist: 'Vijay Yesudas', duration: '4:30', g: ['#1e3c72','#2a5298'], lang: 'malayalam', top: true },
    { name: 'Rathri Mazha', artist: 'K.S. Chithra', duration: '5:00', g: ['#2c3e50','#000000'], lang: 'malayalam', top: false },
    { name: 'Vaanam Chorahe', artist: 'Job Kurian', duration: '4:45', g: ['#4ca1af','#c4e0e5'], lang: 'malayalam', top: false },
    { name: 'Ee Shishirakaalam', artist: 'K.S. Harisankar', duration: '4:10', g: ['#ffe259','#ffa751'], lang: 'malayalam', top: false }
  ],
  tropical: [
    { name: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee', duration: '3:47', g: ['#f12711','#f5af19'], lang: 'english', top: true },
    { name: 'Lean On', artist: 'Major Lazer & DJ Snake', duration: '2:56', g: ['#f857a6','#ff5858'], lang: 'english', top: true },
    { name: 'One Dance', artist: 'Drake', duration: '2:54', g: ['#a8c0ff','#3f2b96'], lang: 'english', top: false },
    { name: 'Could You Be Loved', artist: 'Bob Marley', duration: '3:57', g: ['#FF8008','#FFC837'], lang: 'english', top: false },
    { name: 'Cheap Thrills', artist: 'Sia', duration: '3:44', g: ['#11998e','#38ef7d'], lang: 'english', top: false },
    
    { name: 'Ghungroo', artist: 'Arijit Singh, Shilpa Rao', duration: '5:02', g: ['#11998e','#38ef7d'], lang: 'hindi', top: true },
    { name: 'Senorita', artist: 'Hrithik Roshan', duration: '3:51', g: ['#e52d27','#b31217'], lang: 'hindi', top: true },
    { name: 'Balam Pichkari', artist: 'Vishal Dadlani', duration: '4:49', g: ['#42e695','#3bb2b8'], lang: 'hindi', top: false },
    { name: 'Dil Cheez Tujhe Dedi', artist: 'Ankit Tiwari', duration: '4:23', g: ['#f857a6','#ff5858'], lang: 'hindi', top: false },
    { name: 'Matargashti', artist: 'Mohit Chauhan', duration: '4:28', g: ['#FAD961','#F76B1C'], lang: 'hindi', top: false },

    { name: 'High Rated Gabru', artist: 'Guru Randhawa', duration: '3:34', g: ['#FFC837','#FF8008'], lang: 'punjabi', top: true },
    { name: 'Naah', artist: 'Harrdy Sandhu', duration: '3:10', g: ['#ffe259','#ffa751'], lang: 'punjabi', top: false },
    { name: 'Proper Patola', artist: 'Diljit Dosanjh', duration: '2:58', g: ['#4ca1af','#c4e0e5'], lang: 'punjabi', top: false },
    { name: '3 Peg', artist: 'Sharry Mann', duration: '3:20', g: ['#1e3c72','#2a5298'], lang: 'punjabi', top: false },
    { name: 'G.O.A.T.', artist: 'Diljit Dosanjh', duration: '3:43', g: ['#B3FFAB','#12FFF7'], lang: 'punjabi', top: false },
    
    { name: 'Arabic Kuthu', artist: 'Anirudh, Jonita Gandhi', duration: '4:40', g: ['#ff9900','#ff5500'], lang: 'tamil', top: true },
    { name: 'Rowdy Baby', artist: 'Dhanush, Dhee', duration: '4:44', g: ['#f857a6','#ff5858'], lang: 'tamil', top: true },
    { name: 'Vaathi Coming', artist: 'Anirudh Ravichander', duration: '3:50', g: ['#283c86','#45a247'], lang: 'tamil', top: false },
    { name: 'Aaluma Doluma', artist: 'Anirudh Ravichander', duration: '4:20', g: ['#b92b27','#1565c0'], lang: 'tamil', top: false },
    { name: 'Kutti Story', artist: 'Vijay', duration: '5:20', g: ['#1f1c2c','#928dab'], lang: 'tamil', top: false },

    { name: 'Saami Saami', artist: 'Mounika Yadav', duration: '3:44', g: ['#f857a6','#ff5858'], lang: 'telugu', top: true },
    { name: 'Ramuloo Ramulaa', artist: 'Anurag Kulkarni', duration: '4:05', g: ['#ffe259','#ffa751'], lang: 'telugu', top: false },
    { name: 'Butta Bomma', artist: 'Armaan Malik', duration: '3:15', g: ['#4FACFE','#00f2fe'], lang: 'telugu', top: false },
    { name: 'Naatu Naatu', artist: 'Rahul Sipligunj, Kaala Bhairava', duration: '3:35', g: ['#b92b27','#1565c0'], lang: 'telugu', top: false },
    { name: 'Saranga Dariya', artist: 'Mangli', duration: '3:46', g: ['#ff9900','#ff5500'], lang: 'telugu', top: false },
    
    { name: 'Kudukku', artist: 'Vineeth Sreenivasan', duration: '2:46', g: ['#10B981','#059669'], lang: 'malayalam', top: true },
    { name: 'Entammede Jimikki Kammal', artist: 'Vineeth Sreenivasan', duration: '3:16', g: ['#FF8008','#FFC837'], lang: 'malayalam', top: true },
    { name: 'Scene Contra', artist: 'Shabareesh Varma', duration: '2:40', g: ['#11998e','#38ef7d'], lang: 'malayalam', top: false },
    { name: 'Pala Palli', artist: 'Atul Narukara', duration: '3:20', g: ['#111111','#333333'], lang: 'malayalam', top: false },
    { name: 'Chollu Chollu', artist: 'Jakes Bejoy', duration: '3:15', g: ['#f857a6','#ff5858'], lang: 'malayalam', top: false }
  ]
};
