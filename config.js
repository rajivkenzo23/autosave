module.exports = {
    autoLikeStatus: process.env.AUTO_LIKE_STATUS === 'true',
    downloadMediaStatus: process.env.DOWNLOAD_MEDIA_STATUS === 'false',
    sensorNumber: process.env.SENSOR_NUMBER === 'true',
    sendWelcomeMessage: process.env.SEND_WELCOME_MESSAGE === 'true',

    blackList: process.env.BLACK_LIST ? process.env.BLACK_LIST.split(',') : [],
    whiteList: process.env.WHITE_LIST ? process.env.WHITE_LIST.split(',') : [],

    fenixaboutype: process.env.FENIX_ABOUT_TYPE || 'Programming',
    ownerNumber: process.env.OWNER_NUMBER || '94760457315',
    userTimezone: process.env.USER_TIMEZONE || 'Asia/Colombo',
    FenixName: process.env.FENIX_NAME || 'Unknown Friend',

    // Group contact push
    fenixwel1: process.env.FENIX_WEL_1 || 'Your Number Has Been Auto Saved🫠',
    fenixwel2: process.env.FENIX_WEL_2 || 'Save And Alert Me If Save 🌹',
    fenixwel3: process.env.FENIX_WEL_3 || 'Save and Alert me✅',

    // Bot details
    botDetails: {
        botName: process.env.BOT_NAME || 'VIXEN ID OWNER',
        botAge: process.env.BOT_AGE || '22',
        botLocation: process.env.BOT_LOCATION || 'SRILANKA',
        botEmail: process.env.BOT_EMAIL || 'vrjchanuka24@gmail.com',
    },

    relaxWishes: process.env.RELAX_WISHES || 'Take a deep breath... 🌿',

    // MongoDB settings
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://vihanga24:oDmu8B3olGCRsnEV@cluster0.ljxkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    dbName: process.env.DB_NAME || 'vihanga24',

    // Collections
    collections: {
        contacts: process.env.COLLECTION_CONTACTS || 'contacts',
        googleAuth: process.env.COLLECTION_GOOGLE_AUTH || 'google_auth',
    },
};
