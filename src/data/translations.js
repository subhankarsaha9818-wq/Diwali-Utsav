/**
 * Bilingual Translation Dictionary for Diwali Utsav (English & Hindi)
 */

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      greeting: "Greeting",
      diyas: "Light Diyas",
      rangoli: "Rangoli",
      fireworks: "Fireworks",
      blessings: "Blessings",
      gallery: "Gallery",
      wishes: "Wishes",
      surprise: "Surprise Gift",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu"
    },

    // Welcome Screen
    welcome: {
      subtitle: "Welcome to",
      title: "Diwali Utsav",
      invitation: "Step into an enchanting digital realm of glowing diyas, radiant rangolis, auspicious blessings, and joyful fireworks.",
      beginBtn: "Begin Celebration ✨",
      skipBtn: "Skip to celebration",
      diyaAria: "Sacred welcome diya"
    },

    // Hero Section
    hero: {
      badge: "✨ Shubh Deepavali 2026 ✨",
      title: "Festival of Lights & Eternal Joy",
      subtitle: "May the divine glow of Diwali illuminate your life with infinite health, boundless happiness, and eternal prosperity.",
      exploreBtn: "Explore Celebration",
      lightDiyasBtn: "Light Your First Diya 🪔"
    },

    // Greeting Section
    greeting: {
      tag: "Personalized Greeting",
      title: "A Special Diwali Blessing for You",
      salutation: "Dearest",
      noNameTitle: "A Special Diwali Blessing",
      body: "On this auspicious occasion of Deepavali, may Goddess Lakshmi bless your home with unending abundance, and Lord Ganesha remove all obstacles from your path. May every corner of your life be filled with sweet laughter, sweet mithai, and sparkling peace.",
      closing: "With warm wishes and lots of love ❤️",
      signOffPrefix: "With love,",
      shareBtn: "Share This Greeting"
    },

    // Diyas Section
    diyas: {
      tag: "Interactive Tradition",
      title: "Light the Sacred Diyas",
      subtitle: "Click or tap each diya to ignite its auspicious flame. Dispel darkness and welcome positivity into your life.",
      litCount: "Diyas Lit",
      allLitMessage: "🌟 All diyas are shining bright! May your life be illuminated with eternal peace and glory!",
      lightAllBtn: "Light All Diyas 🪔",
      resetBtn: "Reset Lamps",
      diyaNames: [
        "Diya of Prosperity",
        "Diya of Good Health",
        "Diya of Wisdom",
        "Diya of Love",
        "Diya of Peace",
        "Diya of Happiness",
        "Diya of Success"
      ]
    },

    // Rangoli Section
    rangoli: {
      tag: "Sacred Digital Art",
      title: "Digital Rangoli Studio",
      subtitle: "Explore time-honored Indian patterns of harmony and elegance. Choose a sacred geometry and festive color palette.",
      patternLabel: "Select Pattern",
      paletteLabel: "Select Palette",
      rotateLabel: "Slow Meditation Spin",
      resetLabel: "Reset Design",
      patterns: {
        lotus: "Sacred Lotus (Kamal)",
        chakra: "Radiant Chakra",
        mandala: "Festive Mandala",
        star: "Auspicious Star (Nakshatra)"
      },
      palettes: {
        royalGold: "Royal Gold & Crimson",
        marigold: "Sunset Marigold & Saffron",
        peacock: "Peacock Turquoise & Indigo",
        lotusPink: "Lotus Pink & Magenta"
      }
    },

    // Fireworks Section
    fireworks: {
      tag: "Grand Spectacle",
      title: "Night Sky Fireworks",
      subtitle: "Celebrate with eco-friendly digital fireworks! Click the button or tap anywhere on the night sky to launch vibrant bursts.",
      celebrateBtn: "Celebrate Now 🎆",
      tapHint: "💡 Tip: Click or tap anywhere on the dark sky above to create custom sparkler bursts!",
      reducedMotionNotice: "Reduced motion is active. Fireworks effects have been simplified for your comfort."
    },

    // Blessings Section
    blessings: {
      tag: "Divine Grace",
      title: "Diwali Blessings & Wisdom",
      subtitle: "Receive sacred auspicious wishes inspired by tradition to guide your year ahead.",
      randomBtn: "Receive a Random Blessing 🌸",
      items: [
        {
          id: "wealth",
          category: "Prosperity & Abundance",
          icon: "🪙",
          text: "May Goddess Mahalakshmi shower your treasury with wealth of wealth, virtue, and timeless fulfillment."
        },
        {
          id: "wisdom",
          category: "Wisdom & New Beginnings",
          icon: "🐘",
          text: "May Lord Ganesha dissolve all hurdles, grant clarity in endeavors, and bless your new beginnings with triumph."
        },
        {
          id: "health",
          category: "Health & Vitality",
          icon: "🌿",
          text: "May Lord Dhanvantari bestow radiant health, vitality, and restorative serenity upon you and your family."
        },
        {
          id: "peace",
          category: "Peace & Harmony",
          icon: "🕊️",
          text: "May your household be an sanctuary of warmth, mutual respect, understanding, and unshakeable harmony."
        },
        {
          id: "joy",
          category: "Joy & Celebration",
          icon: "✨",
          text: "May your days resonate with sweet music, genuine laughter, cherished memories, and joyous festivities."
        },
        {
          id: "success",
          category: "Glory & Success",
          icon: "🏆",
          text: "May all your righteous dreams take flight, rewarded with honorable achievements and widespread acclaim."
        }
      ]
    },

    // Gallery Section
    gallery: {
      tag: "Festive Splendor",
      title: "Festive Visual Journey",
      subtitle: "Immerse yourself in authentic visuals of Diwali traditions, sacred pujas, lamps, and joyous gatherings.",
      closePreview: "Close Preview",
      items: {
        hero: "Radiant Deepavali Night with Golden Temple and Glowing Floating Diyas",
        diya: "Close-up of a Traditional Handcrafted Clay Diya with a Dancing Golden Flame",
        rangoli: "Intricate Floral Rangoli Decorated with Fresh Marigolds and Colored Powders",
        decoration: "Festive Toran and Hanging Lanterns Adorning a Welcoming Doorway",
        lakshmiGanesh: "Auspicious Idols of Goddess Lakshmi and Lord Ganesha Bathed in Divine Radiance",
        fireworks: "Dazzling Symphony of Colorful Fireworks Illuminating the Starlit Sky",
        festive: "Enchanted Festive Scene with Illuminated Courtyards and Shimmering Sparkles",
        greetingCard: "Ornate Diwali Greeting Card Framed with Golden Motifs and Diyas"
      }
    },

    // Wishes Generator Section
    wishes: {
      tag: "Personalized Wishes",
      title: "Custom Diwali Wishes Generator",
      subtitle: "Craft the perfect heartfelt Diwali message for friends, family, mentors, or colleagues in seconds.",
      recipientLabel: "Who are you sending this to?",
      toneLabel: "Tone & Emotion",
      customNameLabel: "Recipient's Name (Optional)",
      customNamePlaceholder: "e.g., Ananya, Uncleji, Sharma Sir",
      generatedLabel: "Your Editable Message",
      generateBtn: "Generate New Wish ✍️",
      copyBtn: "Copy Greeting 📋",
      copiedBtn: "Copied to Clipboard! ✓",
      whatsappBtn: "Share on WhatsApp 💬",
      recipients: {
        friend: "Dear Friend",
        family: "Beloved Family",
        teacher: "Respected Teacher / Mentor",
        colleague: "Esteemed Colleague",
        everyone: "Everyone"
      },
      tones: {
        warm: "Warm & Heartfelt",
        traditional: "Traditional & Devotional",
        cheerful: "Joyful & Energetic"
      }
    },

    // Surprise Gift Section
    surprise: {
      tag: "Celebration Surprise",
      title: "A Festive Surprise for You",
      subtitle: "Tap the royal gift box below to unwrap an auspicious Diwali present and personal greeting card.",
      tapToOpen: "Tap to Open Surprise 🎁",
      openedTitle: "A Little Surprise, Wrapped with Love ❤️",
      message: "May this Diwali fill your life with endless happiness, illuminate your path with new opportunities, and bring prosperity, peace and beautiful memories to your home.",
      closing: "With warm wishes and lots of love ❤️",
      giftHeading: "Your Special Diwali Blessing Card",
      shareGiftBtn: "Share Blessing on WhatsApp"
    },

    // Footer
    footer: {
      backToTop: "Back to Top ↑",
      shareTitle: "Share the Joy of Diwali",
      shareText: "Send this celebration website to your loved ones so they can light diyas too!",
      copyright: "Diwali Utsav. Wishing all light, peace, and abundance.",
      madeWith: "Made with ❤️ by"
    },

    // Audio & General Controls
    audio: {
      play: "Play Festive Instrumental Music",
      pause: "Pause Instrumental Music",
      unavailable: "Background music is optional (Audio file not present)",
      playingAria: "Music is playing. Click to pause.",
      pausedAria: "Music is paused. Click to play."
    },

    // Alerts / Feedback
    feedback: {
      copied: "Message copied to clipboard!",
      copyFailed: "Could not copy automatically. Please copy the text manually."
    }
  },

  hi: {
    // Navigation
    nav: {
      home: "मुख्य पृष्ठ",
      greeting: "शुभकामना",
      diyas: "दीप प्रज्वलन",
      rangoli: "रंगोली",
      fireworks: "आतिशबाजी",
      blessings: "आशीर्वाद",
      gallery: "चित्र दीर्घा",
      wishes: "सन्देश निर्माता",
      surprise: "उपहार",
      openMenu: "मेन्यू खोलें",
      closeMenu: "मेन्यू बंद करें"
    },

    // Welcome Screen
    welcome: {
      subtitle: "शुभ आगमन",
      title: "दीपावली उत्सव",
      invitation: "जगमगाते दीयों, भव्य रंगोली, पावन आशीर्वाद और सतरंगी आतिशबाजी के इस डिजिटल उत्सव में आपका हार्दिक स्वागत है।",
      beginBtn: "उत्सव प्रारम्भ करें ✨",
      skipBtn: "सीधे उत्सव पर जाएं",
      diyaAria: "स्वागत दीपक"
    },

    // Hero Section
    hero: {
      badge: "✨ शुभ दीपावली २०२६ ✨",
      title: "प्रकाश, उमंग और आनंद का महापर्व",
      subtitle: "दीपावली का यह पावन प्रकाश आपके जीवन को उत्तम स्वास्थ्य, अपार खुशियों और अक्षुण्ण समृद्धि से आलोकित करे।",
      exploreBtn: "उत्सव दर्शन करें",
      lightDiyasBtn: "पहला दीप प्रज्वलित करें 🪔"
    },

    // Greeting Section
    greeting: {
      tag: "व्यक्तिगत शुभकामना",
      title: "आपके लिए विशेष दीपावली संदेश",
      salutation: "प्रिय",
      noNameTitle: "दीपावली की एक विशेष शुभकामना",
      body: "दीपावली के इस पावन पर्व पर माँ महालक्ष्मी आपके घर को सुख-समृद्धि से भर दें और भगवान श्री गणेश आपके जीवन के सभी विघ्न दूर करें। आपके जीवन का हर पल मिठास, प्रेम और शांति से जगमगाता रहे।",
      closing: "ढेर सारी शुभकामनाओं और प्यार के साथ ❤️",
      signOffPrefix: "सस्नेह,",
      shareBtn: "यह शुभकामना साझा करें"
    },

    // Diyas Section
    diyas: {
      tag: "पारंपरिक दीप प्रज्वलन",
      title: "पवित्र दीपकों को प्रज्वलित करें",
      subtitle: "प्रत्येक दीपक पर क्लिक या स्पर्श करके उसकी पावन ज्योति जलाएं। अंधकार को दूर भगाएं और सकारात्मक ऊर्जा का संचार करें।",
      litCount: "दीप प्रज्वलित",
      allLitMessage: "🌟 सभी दीप जगमगा उठे हैं! आपका जीवन भी इसी प्रकार अनंत प्रकाश और खुशियों से रोशन रहे!",
      lightAllBtn: "सभी दीप जलाएं 🪔",
      resetBtn: "पुनः स्थापित करें",
      diyaNames: [
        "समृद्धि का दीप",
        "आरोग्य का दीप",
        "ज्ञान का दीप",
        "स्नेह का दीप",
        "शांति का दीप",
        "प्रसन्नता का दीप",
        "सफलता का दीप"
      ]
    },

    // Rangoli Section
    rangoli: {
      tag: "पारंपरिक कला",
      title: "डिजिटल रंगोली स्टूडियो",
      subtitle: "भारतीय पारंपरिक शुभ आकृतियों का आनंद लें। अपनी पसंदीदा रंगोली डिजाइन और रंग संयोजन चुनें।",
      patternLabel: "रंगोली पैटर्न चुनें",
      paletteLabel: "रंग संयोजन चुनें",
      rotateLabel: "धीमा घूर्णन प्रभाव",
      resetLabel: "रीसेट करें",
      patterns: {
        lotus: "कमल पुष्प रंगोली",
        chakra: "दिव्य चक्र रंगोली",
        mandala: "उत्सव मंडाला",
        star: "नक्षत्र सितारा"
      },
      palettes: {
        royalGold: "राजसी स्वर्णिम व लाल",
        marigold: "गेंदा व केसरिया",
        peacock: "मयूर मोरपंखी नीला",
        lotusPink: "कमल गुलाबी व जामुनी"
      }
    },

    // Fireworks Section
    fireworks: {
      tag: "रोमांचक आतिशबाजी",
      title: "आकाशीय आतिशबाजी",
      subtitle: "पर्यावरण-अनुकूल डिजिटल आतिशबाजी का आनंद लें! बटन दबाएं या ऊपर आकाश में कहीं भी स्पर्श करके पटाखे फोड़ें।",
      celebrateBtn: "पटाखे जलाएं 🎆",
      tapHint: "💡 संकेत: ऊपर आकाश में कहीं भी क्लिक या टच करें और रंग-बिरंगे अनार व फुलझड़ियाँ चलाएं!",
      reducedMotionNotice: "मोशन सीमित किया गया है। आतिशबाजी को सौम्य रखा गया है।"
    },

    // Blessings Section
    blessings: {
      tag: "दैवीय कृपा",
      title: "दीपावली पावन आशीर्वाद",
      subtitle: "आने वाले वर्ष के लिए सुख, शांति और सौभाग्य के पावन संदेश प्राप्त करें।",
      randomBtn: "एक नया आशीर्वाद प्राप्त करें 🌸",
      items: [
        {
          id: "wealth",
          category: "धन व समृद्धि",
          icon: "🪙",
          text: "माँ महालक्ष्मी की कृपा से आपका घर-आँगन धन, धान्य और यश से सदैव परिपूर्ण रहे।"
        },
        {
          id: "wisdom",
          category: "बुद्धि व शुभ शुरुआत",
          icon: "🐘",
          text: "भगवान श्री गणेश आपके सभी कार्यों के विघ्न हरें और नई सफलताओं का मार्ग प्रशस्त करें।"
        },
        {
          id: "health",
          category: "दीर्घायु व उत्तम स्वास्थ्य",
          icon: "🌿",
          text: "भगवान धनवंतरि आपको और आपके समस्त परिवार को उत्तम स्वास्थ्य, ऊर्जा और दीर्घायु प्रदान करें।"
        },
        {
          id: "peace",
          category: "शांति व सौहार्द",
          icon: "🕊️",
          text: "आपके परिवार में प्रेम, सौहार्द और परस्पर सम्मान की पावन ज्योति सदैव प्रज्वलित रहे।"
        },
        {
          id: "joy",
          category: "उमंग व उल्लास",
          icon: "✨",
          text: "मिठाइयों की मिठास और पटाखों की चमक की तरह आपका जीवन सदैव खुशियों से महकता रहे।"
        },
        {
          id: "success",
          category: "कीर्ति व विजय",
          icon: "🏆",
          text: "आपके सभी शुभ संकल्प सिद्ध हों और आपको जीवन के प्रत्येक क्षेत्र में विजय प्राप्त हो।"
        }
      ]
    },

    // Gallery Section
    gallery: {
      tag: "उत्सव दर्शन",
      title: "दीपावली दृश्य दीर्घा",
      subtitle: "पारंपरिक पूजा, जगमगाते दीपक, रंगोली और आनंदमय उत्सव के अनुपम दृश्य।",
      closePreview: "पूर्वावलोकन बंद करें",
      items: {
        hero: "स्वर्णिम रोशनी से नहाया मंदिर और तैरते हुए दीपकों का विहंगम दृश्य",
        diya: "मिट्टी के पारंपरिक दीपक की जगमगाती स्वर्णिम लौ",
        rangoli: "ताजे फूलों और रंगों से सजी मनमोहक रंगोली",
        decoration: "तोरण और झूमरों से सजा उत्सव द्वार",
        lakshmiGanesh: "माँ लक्ष्मी और विघ्नहर्ता गणेश जी की दिव्य प्रतिमा",
        fireworks: "रात्रि आकाश में जगमगाती बहुरंगी आतिशबाजी",
        festive: "रोशनी और खुशियों से भरा भव्य प्रांगण",
        greetingCard: "स्वर्णिम नक्काशीदार दीपावली बधाई पत्र"
      }
    },

    // Wishes Generator Section
    wishes: {
      tag: "संदेश निर्माता",
      title: "व्यक्तिगत दीपावली शुभकामना निर्माता",
      subtitle: "मित्रों, परिवारजनों, गुरुजनों या सहयोगियों के लिए सुंदर और भावपूर्ण दीपावली संदेश तैयार करें।",
      recipientLabel: "आप यह संदेश किसके लिए बना रहे हैं?",
      toneLabel: "संदेश का भाव",
      customNameLabel: "प्राप्तकर्ता का नाम (वैकल्पिक)",
      customNamePlaceholder: "उदा. राहुल, चाचा जी, शर्मा सर",
      generatedLabel: "तैयार किया गया संदेश (संपादित कर सकते हैं)",
      generateBtn: "नया संदेश बनाएं ✍️",
      copyBtn: "संदेश कॉपी करें 📋",
      copiedBtn: "कॉपी हो गया! ✓",
      whatsappBtn: "व्हाट्सएप पर भेजें 💬",
      recipients: {
        friend: "प्रिय मित्र",
        family: "सपरिवार",
        teacher: "आदरणीय गुरुजन",
        colleague: "सम्मानित सहकर्मी",
        everyone: "सभी प्रियजन"
      },
      tones: {
        warm: "हार्दिक व स्नेहमयी",
        traditional: "पारंपरिक व भक्तिमय",
        cheerful: "उत्साही व उल्लासपूर्ण"
      }
    },

    // Surprise Gift Section
    surprise: {
      tag: "उत्सव उपहार",
      title: "आपके लिए एक विशेष उपहार",
      subtitle: "दीपावली का पावन उपहार और बधाई पत्र खोलने के लिए नीचे दिए गए उपहार बॉक्स पर क्लिक करें।",
      tapToOpen: "उपहार खोलने के लिए स्पर्श करें 🎁",
      openedTitle: "प्यार से सजा एक छोटा-सा तोहफ़ा ❤️",
      message: "यह पावन दीपावली आपके जीवन को अपार खुशियों से भर दे, आपके मार्ग को नए अवसरों से आलोकित करे और आपके घर-आँगन में सुख, शांति, समृद्धि और सुंदर यादों की सौगात लाए।",
      closing: "ढेर सारी शुभकामनाओं और प्यार के साथ ❤️",
      giftHeading: "आपका व्यक्तिगत दीपावली मंगल पत्र",
      shareGiftBtn: "यह शुभकामना व्हाट्सएप पर भेजें"
    },

    // Footer
    footer: {
      backToTop: "शीर्ष पर जाएं ↑",
      shareTitle: "दीपावली का आनंद साझा करें",
      shareText: "अपने मित्रों और संबंधियों को यह उत्सव लिंक भेजें ताकि वे भी दीप जला सकें!",
      copyright: "दीपावली उत्सव। सभी के लिए प्रकाश, शांति और समृद्धि की मंगलकामना।",
      madeWith: "Made with ❤️ by"
    },

    // Audio & General Controls
    audio: {
      play: "उत्सव संगीत चलाएं",
      pause: "संगीत रोकें",
      unavailable: "संगीत वैकल्पिक है (ऑडियो फाइल उपलब्ध नहीं है)",
      playingAria: "संगीत बज रहा है। रोकने के लिए क्लिक करें।",
      pausedAria: "संगीत रुका हुआ है। चलाने के लिए क्लिक करें।"
    },

    // Alerts / Feedback
    feedback: {
      copied: "संदेश क्लिपबोर्ड में कॉपी कर लिया गया है!",
      copyFailed: "स्वचालित कॉपी नहीं हो सका। कृपया स्वयं कॉपी करें।"
    }
  }
};

