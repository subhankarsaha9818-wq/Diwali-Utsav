/**
 * Curated Diwali Wish Templates for different recipients, tones, and languages.
 * Each (recipient, tone) combination provides multiple distinct festive wishes.
 * Senders are cleanly decoupled from the website creator, using the warm closing:
 * "With warm wishes and lots of love ❤️" / "ढेर सारी शुभकामनाओं और प्यार के साथ ❤️",
 * or the optional sender name if provided.
 */

const enClosing = (sender) =>
  sender ? `With love, ${sender} ❤️` : `With warm wishes and lots of love ❤️`;

const hiClosing = (sender) =>
  sender ? `सस्नेह, ${sender} ❤️` : `ढेर सारी शुभकामनाओं और प्यार के साथ ❤️`;

export const wishTemplates = {
  en: {
    friend: {
      warm: [
        (name, sender) =>
          `Happy Diwali, ${name}! ✨\n\nMay this festival of lights brighten your path with boundless happiness, warmth, and memorable moments. Thank you for being such an incredible friend through every season of life.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Dearest ${name}, wishing you a sparkling Diwali! 🪔\n\nMay the glow of diyas bring peace to your heart and fulfillment to all your aspirations. Here's to another wonderful year of laughter, shared memories, and our cherished bond of friendship.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Deepavali, my dear friend ${name}! 🌟\n\nJust like the lights that brighten the Diwali night, your friendship lights up my life with positivity and joy. Wishing you and your loved ones everlasting contentment and prosperity.\n\n${enClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `Shubh Deepavali, ${name}! 🪔\n\nMay Goddess Lakshmi bless your home with unending prosperity, and Lord Ganesha remove every obstacle from your path. Wishing you and your family a peaceful and blessed festival of lights.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Auspicious Deepavali blessings to you, ${name}! 🌸\n\nMay the divine blessings of Mahalakshmi and Lord Vighnaharta guide your endeavors toward truth, abundance, and righteousness throughout the year ahead.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, ${name}! 🪙\n\nOn this sacred occasion of Deepotsav, may your life be illuminated with the divine light of wisdom, spiritual peace, and auspicious wealth.\n\n${enClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `Boom! 🎆 Happy Diwali, ${name}!\n\nHere's to endless boxes of kaju katli, dazzling sparklers, loud laughs, and a phenomenal year ahead. Light up the night and enjoy every sweet bite!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, ${name}! 🎉✨\n\nMay your celebrations be louder than firecrackers and sweeter than gulab jamun! Wishing you a high-voltage, sparkler-filled festive week with your family!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Wishing you a blockbuster Diwali, ${name}! 🪔💥\n\nForget the calories, turn up the festive music, and let's light up the sky! Have an absolutely dazzling celebration!\n\n${enClosing(sender)}`
      ]
    },
    family: {
      warm: [
        (name, sender) =>
          `Dearest ${name}, Happy Diwali! 🪔\n\nFamily is the true light that makes every festival shine. May our home always overflow with laughter, health, love, and sacred harmony this Diwali and forever.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Wishing dearest ${name} and family a heartwarming Deepavali! ✨\n\nEvery diya lit reminds me of the warmth and blessings we share together. May this festival bring peace, togetherness, and radiant smiles to all of us.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, dearest ${name}! 🌸\n\nMay the sacred flame of the Diwali diya keep our family tied together in bonds of mutual affection, deep respect, and timeless joy.\n\n${enClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `Shubh Deepavali to beloved ${name} and family! 🌸\n\nMay the divine grace of Mahalakshmi and Lord Ganesha reside in our home, bringing peace, longevity, and timeless abundance.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Auspicious Diwali greetings, ${name}! 🙏\n\nMay the holy prayers of Deepavali bring divine protection, good health, and virtuous fortune to every corner of our family household.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `May Goddess Lakshmi and Lord Dhanvantari bestow radiant health and prosperity on beloved ${name} and family this Diwali! Shubh Deepotsav!\n\n${enClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `Happy Diwali, ${name}! ✨🎉\n\nWishing our wonderful family sweet treats, dazzling lights, and unforgettable celebrations together! May this year bring endless reasons to celebrate!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Joyous Diwali, ${name}! 🪔🎆\n\nMay our home echo with nonstop laughter, overflowing plates of homemade sweets, and sparklers in every hand! Let the grand celebration begin!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, ${name}! 💥✨\n\nHere's to dressing up in royal festive attire, capturing unforgettable memories, and enjoying every single moment with loved ones!\n\n${enClosing(sender)}`
      ]
    },
    teacher: {
      warm: [
        (name, sender) =>
          `Respected ${name}, Happy Diwali! 🪔\n\nJust as diyas illuminate the night, your wisdom and guidance continue to light up our minds and futures. Wishing you good health, joy, and profound respect this festive season.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Dearest ${name}, wishing you a peaceful and joyous Diwali! 🌸\n\nThank you for illuminating my path with knowledge, patience, and kindness. May your life shine as brightly as the lamps of Diwali.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Deepavali, respected ${name}! ✨\n\nMay this auspicious festival bring serenity to your spirit, prosperity to your household, and good health in the year to come.\n\n${enClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `Pranam and Shubh Deepavali, respected ${name}. 🙏\n\nMay Goddess Saraswati and Lord Ganesha continually bless you with wisdom, noble health, and inner peace for guiding so many lives with grace.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Salutations and auspicious Deepavali blessings to ${name}! 🪔\n\nMay the divine light of truth and righteousness always accompany you. Wishing you and your family abundant peace and blessings.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Shubh Deepotsav, respected ${name}! 🪙\n\nMay Lord Vighnaharta bestow upon you divine vitality, supreme honor, and lifelong contentment for your noble vocation of mentoring minds.\n\n${enClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `Wishing a bright and joyous Diwali to our inspiring mentor, ${name}! ✨\n\nMay your days be filled with radiant happiness, relaxation, sweet festivities, and glorious achievements!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, ${name}! 🎆🪔\n\nMay this festive break give you well-deserved rest, joyous laughter with loved ones, and sweet treats galore!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `A sparkling and sweet Diwali to our favorite educator, ${name}! 🌟\n\nMay your year ahead be as inspiring and rewarding as the lessons you share with us every day!\n\n${enClosing(sender)}`
      ]
    },
    colleague: {
      warm: [
        (name, sender) =>
          `Happy Diwali, ${name}! 🪔\n\nWishing you and your family a rejuvenating festive break filled with joy and sweet festivities. Thank you for being such a wonderful teammate through all our shared milestones!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Dearest ${name}, wishing you an illuminated and prosperous Diwali! ✨\n\nWorking alongside you is always a pleasure. May the coming year bring you immense success, creative fulfillment, and personal happiness.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Deepavali, ${name}! 🌟\n\nMay the festival of lights inspire new ideas, fruitful partnerships, and great triumphs in the year ahead.\n\n${enClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `Shubh Deepavali, ${name}! 🪙\n\nMay this auspicious festival usher in fresh milestones, flourishing success, and enduring prosperity in both your personal and professional journey.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `May the divine grace of Goddess Lakshmi grant you abundant professional triumphs and financial stability this Deepavali, ${name}! 🪔\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Auspicious Diwali greetings, ${name}! 🌸\n\nMay Lord Ganesha guide your intellect to triumph over every challenge and turn every endeavor into victory.\n\n${enClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `Happy Diwali, ${name}! 🎆✨\n\nMay your holiday be sparkler-bright, your mithai box never empty, and the upcoming quarter our most victorious yet! Enjoy the festive time off!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, ${name}! 💥🎉\n\nStep away from emails, close the spreadsheets, and light up the celebrations! Have a wonderful festival of lights with your family!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Wishing you a high-voltage, blockbuster Diwali, ${name}! 🪔✨\n\nMay you celebrate with great food, glowing sparklers, and zero work notifications! Have a blast!\n\n${enClosing(sender)}`
      ]
    },
    everyone: {
      warm: [
        (name, sender) =>
          `Happy Diwali, ${name}! 🪔\n\nMay the glow of golden diyas guide your spirit toward peace, love, and enduring contentment. Wishing you and everyone around you an illuminated Deepavali!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Dearest ${name}, wishing you a joyful and blessed Diwali! ✨\n\nMay the warmth of festive lights illuminate every dream in your heart and turn them into golden reality this year.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Deepavali, ${name}! 🌟\n\nMay kindness, hope, and joyful celebration fill your days. Wishing you an uplifting and prosperous festival of lights!\n\n${enClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `Auspicious Shubh Deepavali to ${name}! 🌸✨\n\nMay divine light dispel all darkness, ushering in health, wealth, and supreme harmony into your life.\n\n${enClosing(sender)}`,
        (name, sender) =>
          `May Goddess Mahalakshmi and Lord Vigneshwara bestow unending grace, virtue, and peace upon ${name} and family this sacred Diwali! 🪔\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Shubh Deepavali, ${name}! 🙏🪙\n\nMay the auspicious lamps of Deepotsav bring the blessings of righteousness, prosperity, and longevity to your household.\n\n${enClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `Wishing you an electrifying, sweet, and joyous Diwali, ${name}! 🎆🪔\n\nMay your celebrations sparkle brighter than ever before and fill your heart with immense laughter!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Diwali, ${name}! 🎉✨\n\nMay your home sparkle with joy, your plates overflow with festive delicacies, and your skies burst with vibrant colors!\n\n${enClosing(sender)}`,
        (name, sender) =>
          `Happy Deepavali, ${name}! 💥🌟\n\nLight the lamps, share the sweets, and celebrate the victory of light with unbridled joy and cheer!\n\n${enClosing(sender)}`
      ]
    }
  },
  hi: {
    friend: {
      warm: [
        (name, sender) =>
          `प्रिय ${name}, दीपावली की हार्दिक शुभकामनाएं! 🪔\n\nदीपों का यह पावन पर्व आपके जीवन को सच्ची खुशियों, स्नेह और सुनहरे अवसरों से भर दे। आपकी अनमोल मित्रता मेरे जीवन का एक सुंदर उपहार है।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `मेरे प्यारे मित्र ${name}, शुभ दीपावली! ✨\n\nजैसे मिट्टी के दीपक रात के अंधेरे को दूर करते हैं, वैसे ही आपका साथ जीवन में खुशियों का उजाला भरता है। ईश्वर आपको सदैव स्वस्थ और आनंदित रखे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `प्रिय ${name}, दीपावली के पावन पर्व पर ढेर सारा प्यार! 🌟\n\nप्रार्थना है कि यह प्रकाश पर्व आपके जीवन के हर सपने को साकार करे और आपकी मुस्कान सदा बनी रहे।\n\n${hiClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `शुभ दीपावली, ${name}! 🌸\n\nमाँ लक्ष्मी और विघ्नहर्ता भगवान श्री गणेश की कृपा से आपके जीवन के समस्त संकट दूर हों और आपको यश, सुख व समृद्धि प्राप्त हो।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `दीपावली के पावन दीपोत्सव पर आपको और आपके परिवार को मंगलमय शुभकामनाएं, ${name}! 🪔\n\nमाँ महालक्ष्मी आपके घर में अक्षय धन और सद्बुद्धि का वास करें।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `परम प्रिय ${name}, पावन दीपावली की बधाई! 🪙\n\nभगवान धनवंतरि और माँ लक्ष्मी का आशीष आपके परिवार पर सदैव बना रहे। आपका जीवन धर्म और वैभव से प्रकाशित रहे।\n\n${hiClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `दीपावली की झकास शुभकामनाएं, ${name}! 🎆✨\n\nखूब सारी काजू कतली खाएं, अपनों के साथ खिलखिलाएं और इस पावन पर्व को पूरे उत्साह से मनाएं!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `हैप्पी दिवाली, ${name}! 💥🎉\n\nपटाखों का शोर, फुलझड़ियों की चमक और मिठाइयों की भरमार—यह दिवाली आपके लिए एकदम धमाकेदार और यादगार रहे!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `अरे ${name}, रोशनी के इस त्योहार पर दिल खोलकर जश्न मनाओ! 🪔🎈\n\nडाइट भूल जाओ, मिठाइयों का आनंद लो और दोस्तों संग खूब मस्ती करो। हैप्पी दिवाली!\n\n${hiClosing(sender)}`
      ]
    },
    family: {
      warm: [
        (name, sender) =>
          `प्रिय ${name}, सपरिवार दीपावली की मंगलकामनाएं! 🪔\n\nपरिवार ही वह ज्योति है जो हर त्योहार को सार्थक बनाती है। प्रार्थना है कि हमारा घर-परिवार सदैव प्रेम, एकता और आरोग्य के उजाले से महकता रहे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `आदरणीय एवं प्रिय ${name}, शुभ दीपावली! ✨\n\nघर के आंगन में जलते दीपक हमारे परिवार के आपसी स्नेह और विश्वास का प्रतीक हैं। ईश्वर हमारे घर को सुख-शांति से परिपूर्ण रखे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `सपरिवार प्रिय ${name}, प्रकाश पर्व की अनंत शुभकामनाएं! 🌸\n\nअपनों का साथ ही सबसे बड़ा उपहार है। यह दीपावली हमारे परिवार में नव-उमंग और अटूट प्रेम लेकर आए।\n\n${hiClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `सादर शुभ दीपावली, ${name}! 🌸🙏\n\nमाँ महालक्ष्मी का स्थायी वास हमारे कुल में रहे और श्री गणेश जी हमें धर्म, मर्यादा और अक्षुण्ण ऐश्वर्य का आशीर्वाद दें।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `पावन दीपोत्सव पर प्रिय ${name} एवं समस्त परिवार को सादर प्रणाम व बधाई! 🪔\n\nभगवान श्री गणेश और माँ लक्ष्मी के आशीर्वाद से हमारे परिवार में सुख, शांति और समृद्धि की निरंतर वर्षा हो।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `शुभ दीपावली, ${name}! 🪙\n\nमाँ जगदम्बा और भगवान धनवंतरि हमारे परिवार के हर सदस्य को दीर्घायु, निरोगी काया और उत्तम यश प्रदान करें।\n\n${hiClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `हैप्पी दिवाली, ${name}! 🎉🪔\n\nमिठाइयों की मिठास, दीपों की कतार और अपनों का दुलार—यह दीपावली हमारे परिवार के लिए यादगार बने!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `धमाकेदार दीपावली की बधाई, ${name}! 🎆💥\n\nघर में सजी रंगोली, जलते हुए दीये और हंसी-मजाक के संग यह त्योहार पूरे उत्साह से मनाएं!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `प्यारे ${name}, दीपावली की खूब सारी खुशियां! 🌟✨\n\nखूब सारे उपहार, स्वादिष्ट पकवान और यादगार लम्हों से भरा रहे यह त्योहार!\n\n${hiClosing(sender)}`
      ]
    },
    teacher: {
      warm: [
        (name, sender) =>
          `आदरणीय ${name}, दीपावली के पावन पर्व पर सादर प्रणाम! 🪔\n\nजैसे दीपक तिमिर को मिटाता है, वैसे ही आपका ज्ञान हमारे जीवन को प्रकाशित करता है। आपके उत्तम स्वास्थ्य और दीर्घायु की मंगलकामना।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `श्रद्धेय ${name}, शुभ दीपावली! 🌸\n\nआपके मार्गदर्शन और स्नेह ने हमेशा मुझे सही दिशा दिखाई है। ईश्वर से प्रार्थना है कि आपका जीवन सदा सम्मान और सुख-शांति से आलोकित रहे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `आदरणीय गुरुवर ${name}, प्रकाश पर्व की हार्दिक बधाई! ✨\n\nज्ञान का प्रकाश फैलाने वाले आपके पावन चरणों में नमन। दीपावली का यह पर्व आपके जीवन में आरोग्य और आनंद लाए।\n\n${hiClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `परम श्रद्धेय ${name}, शुभ दीपावली! 🙏🌸\n\nमाँ सरस्वती और महालक्ष्मी की कृपा से आपका जीवन सदैव सम्मान, शांति और ज्ञान के प्रकाश से आलोकित रहे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `सादर प्रणाम, ${name}! 🪔\n\nदीपावली के इस पवित्र अवसर पर भगवान श्री गणेश आपके समस्त कार्यों को सिद्ध करें और आपको दीर्घायु व उत्तम स्वास्थ्य प्रदान करें।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `आदरणीय ${name}, दीपोत्सव की पावन बधाई! 🪙\n\nविद्या और संस्कारों का दीप जलाने वाले आपके व्यक्तित्व को सादर नमन। माँ लक्ष्मी आप पर अपनी असीम कृपा बनाए रखें।\n\n${hiClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `आदरणीय ${name}, आपको प्रकाश पर्व दीपावली की सप्रेम शुभकामनाएं! ✨\n\nईश्वर आपको सदा प्रसन्न, स्वस्थ और ऊर्जावान रखे! त्योहार का भरपूर आनंद लें!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `शुभ दीपावली, आदरणीय ${name}! 🎆\n\nछुट्टियों में अपनों के साथ आनंदमय समय बिताएं, स्वादिष्ट मिठाइयां चखें और सदा मुस्कुराते रहें!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `आदरणीय ${name}, दीपावली की उज्ज्वल शुभकामनाएं! 🌟\n\nआपका हर दिन त्योहार की तरह रोशनी और खुशियों से भरा रहे!\n\n${hiClosing(sender)}`
      ]
    },
    colleague: {
      warm: [
        (name, sender) =>
          `प्रिय ${name}, दीपावली की हार्दिक बधाई! 🪔\n\nआपके और आपके परिवार के लिए यह त्योहार सुख, शांति और नई ऊर्जा लेकर आए। आपके साथ कार्य करना सदैव प्रेरणादायक रहता है।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `सस्नेह ${name}, शुभ दीपावली! ✨\n\nकाम के व्यस्त दिनों के बीच यह त्योहार आपके लिए नई ताजगी और अपनों का संग लेकर आए। एक सफल वर्ष की मंगलकामना।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `प्रिय साथी ${name}, दीपावली की बहुत-बहुत बधाई! 🌟\n\nप्रार्थना है कि आने वाला वर्ष आपके करियर और व्यक्तिगत जीवन में नए कीर्तिमान स्थापित करे।\n\n${hiClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `शुभ दीपावली, ${name}! 🪙\n\nयह पावन पर्व आपके कार्यक्षेत्र और व्यक्तिगत जीवन में नए कीर्तिमान और आर्थिक समृद्धि स्थापित करे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `पावन दीपावली की बधाई, ${name}! 🪔\n\nमाँ महालक्ष्मी आपके परिश्रम को सफलता और समृद्धि का सुंदर प्रतिफल प्रदान करें। शुभ दीपोत्सव!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `शुभ दीपावली, ${name}! 🌸\n\nविघ्नहर्ता श्री गणेश आपके मार्ग की सभी बाधाएं दूर करें और आपको प्रत्येक उद्यम में विजय प्राप्त हो।\n\n${hiClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `हैप्पी दिवाली, ${name}! 🎆\n\nछुट्टियों का भरपूर आनंद लें, मिठाइयों का स्वाद चखें और नई ऊर्जा के साथ एक शानदार वर्ष की शुरुआत करें!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `दीपावली की मस्त शुभकामनाएं, ${name}! 🎉🪔\n\nकाम और लैपटॉप से दूर होकर परिवार संग दीप जलाएं, मिठाइयां बांटें और खूब खुशियां मनाएं!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `हैप्पी दिवाली, ${name}! 💥✨\n\nयह त्योहार आपके लिए नई उम्मीदें, ढेर सारा बोनस और सुनहरी सफलताएं लेकर आए!\n\n${hiClosing(sender)}`
      ]
    },
    everyone: {
      warm: [
        (name, sender) =>
          `${name}, आपको और आपके समस्त प्रियजनों को दीपावली की अनंत मंगलकामनाएं! 🪔\n\nदीपों का उजाला आपके जीवन में आशा, सद्भाव और शांति का नव-सवेरा लेकर आए।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `प्रिय ${name}, प्रकाश पर्व दीपावली की हार्दिक बधाई! ✨\n\nईश्वर आपके जीवन में खुशियों के अनगिनत दीप प्रज्वलित करें। आपका हर दिन मंगलमय हो।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `${name}, शुभ दीपावली! 🌟\n\nयह पवित्र त्योहार आपके अंतर्मन में शांति, प्रेम और परोपकार की पावन ज्योति जगाए।\n\n${hiClosing(sender)}`
      ],
      traditional: [
        (name, sender) =>
          `${name}, आपको पावन शुभ दीपावली! 🌸✨\n\nअंधकार पर प्रकाश और अधर्म पर धर्म की विजय का यह महापर्व आपके अंतर्मन को दिव्य शांति से भर दे।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `शुभ दीपोत्सव, ${name}! 🪔\n\nमाँ महालक्ष्मी और विघ्नहर्ता गणेश जी की पावन अनुकंपा से आपके घर में अखंड सुख और समृद्धि का वास हो।\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `सादर शुभ दीपावली, ${name}! 🪙\n\nभगवान धनवंतरि का पावन आशीष आपको आरोग्य प्रदान करे और माँ लक्ष्मी आपके जीवन को ऐश्वर्य से पूर्ण करें।\n\n${hiClosing(sender)}`
      ],
      cheerful: [
        (name, sender) =>
          `${name}, आपको जगमगाती, उल्लासपूर्ण और मिठास भरी दीपावली की ढेरों बधाइयां! 🎆🪔\n\nमुस्कुराते रहें, दीप जलाते रहें और अपनों के साथ आनंद मनाएं!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `हैप्पी दिवाली, ${name}! 💥🎉\n\nरोशनी, उमंग, संगीत और मिठाइयों से सजा यह त्योहार आपके जीवन में नई उमंगें भर दे!\n\n${hiClosing(sender)}`,
        (name, sender) =>
          `दीपावली का पावन त्योहार आपके जीवन में नई चमक और अपार आनंद लेकर आए, ${name}! 🌟🪔\n\n${hiClosing(sender)}`
      ]
    }
  }
};
