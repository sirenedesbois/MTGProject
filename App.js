import React, { useState, useEffect } from 'react';
import Hilal from './App.css';

const Hilal = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeStart, setSwipeStart] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (swipeStart > 0) {
        const distance = swipeStart - e.clientY;
        setSwipeDistance(distance);
      }
    };

    const handleGlobalMouseUp = () => {
      if (swipeDistance > 50) {
        nextCard();
      }
      setSwipeDistance(0);
      setSwipeStart(0);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [swipeStart, swipeDistance]);

  const reflections = [
    // HADITHS NAWAWI (10 cartes)
    {
      reflection: "Hadith 1 : Les actes ne valent que par les intentions. As-tu vérifié ton intention aujourd'hui ?",
      ideas: [
        "Pourquoi fais-tu cette bonne action : pour Allah ou pour être vu ?",
        "Tes prières sont-elles par habitude ou par amour d'Allah ?",
        "Action : Avant chaque acte, demande-toi 'Quelle est mon intention ?'",
        "Purifie ton cœur de la recherche de reconnaissance"
      ]
    },
    {
      reflection: "Hadith 2 : Jibrîl est venu t'enseigner ta religion. Connais-tu les piliers de l'Islam, de l'Iman et de l'Ihsan ?",
      ideas: [
        "Peux-tu citer les 5 piliers de l'Islam sans hésiter ?",
        "Comprends-tu ce qu'est l'Ihsan : adorer Allah comme si tu Le voyais ?",
        "Action : Révise les piliers de la foi avec ta famille",
        "Pratique une prière comme si c'était la dernière"
      ]
    },
    {
      reflection: "Hadith 3 : L'Islam est bâti sur cinq piliers. Sur quel pilier es-tu le plus faible ?",
      ideas: [
        "Ta shahada est-elle vivante dans ton cœur ou juste sur ta langue ?",
        "Ta zakat est-elle donnée avec joie ou avec regret ?",
        "Action : Renforce le pilier le plus négligé cette semaine",
        "Étudie l'importance de chaque pilier"
      ]
    },
    {
      reflection: "Hadith 6 : Le licite est évident et l'illicite est évident. Évites-tu les zones douteuses ?",
      ideas: [
        "Consommes-tu des choses dont tu n'es pas sûr de la licéité ?",
        "Protèges-tu ta religion en t'éloignant des ambiguïtés ?",
        "Action : Abandonne une chose douteuse pour préserver ta foi",
        "Consulte des savants sur ce qui te semble ambigu"
      ]
    },
    {
      reflection: "Hadith 7 : La religion, c'est le bon conseil (nasîha). À qui donnes-tu des conseils sincères ?",
      ideas: [
        "Conseilles-tu avec douceur ou avec dureté ?",
        "Acceptes-tu les conseils qu'on te donne ?",
        "Action : Donne un conseil sincère avec sagesse aujourd'hui",
        "Remercie quelqu'un qui t'a conseillé"
      ]
    },
    {
      reflection: "Hadith 13 : Aucun de vous ne croit vraiment tant qu'il n'aime pas pour son frère ce qu'il aime pour lui-même.",
      ideas: [
        "Es-tu jaloux du succès des autres ou t'en réjouis-tu ?",
        "Souhaites-tu sincèrement le bien aux autres ?",
        "Action : Fais une invocation pour le succès de quelqu'un d'autre",
        "Aide quelqu'un à atteindre ce que tu désires pour toi"
      ]
    },
    {
      reflection: "Hadith 15 : Que celui qui croit en Allah et au Jour Dernier dise du bien ou se taise.",
      ideas: [
        "Combien de fois parles-tu sans réfléchir aux conséquences ?",
        "Tes paroles apportent-elles du bien ou du mal ?",
        "Action : Observe le silence pendant une heure et réfléchis à tes paroles",
        "Avant de parler, demande-toi : est-ce vrai, utile, nécessaire ?"
      ]
    },
    {
      reflection: "Hadith 16 : Ne te mets pas en colère. La colère détruit les bonnes actions.",
      ideas: [
        "Quelle est la dernière fois où tu t'es mis en colère ? Était-ce justifié ?",
        "Comment réagis-tu quand quelqu'un te contrarie ?",
        "Action : La prochaine fois que tu es en colère, fais tes ablutions",
        "Apprends les invocations contre la colère"
      ]
    },
    {
      reflection: "Hadith 24 : Allah a interdit l'injustice. Fais-tu preuve de justice même envers ceux que tu n'aimes pas ?",
      ideas: [
        "As-tu déjà été injuste envers quelqu'un par favoritisme ?",
        "Défends-tu la vérité même si elle est contre toi ?",
        "Action : Répare une injustice que tu as commise",
        "Traite tout le monde équitablement cette semaine"
      ]
    },
    {
      reflection: "Hadith 34 : Celui qui voit un mal, qu'il le change par sa main, sinon par sa langue, sinon par son cœur.",
      ideas: [
        "Restes-tu silencieux face à l'injustice par peur ou par facilité ?",
        "Que fais-tu concrètement pour changer le mal autour de toi ?",
        "Action : Parle contre une injustice que tu observes",
        "Au minimum, déteste le mal dans ton cœur"
      ]
    },

    // CORAN (10 cartes)
    {
      reflection: "Sourate Al-Fatiha : Tu récites 'Guide-nous sur le droit chemin' 17 fois par jour. Es-tu sur le droit chemin ?",
      ideas: [
        "Demandes-tu vraiment à être guidé ou récites-tu machinalement ?",
        "Quels sont les choix que tu fais qui t'éloignent du droit chemin ?",
        "Action : Médite sur chaque verset d'Al-Fatiha lors de ta prochaine prière",
        "Identifie un comportement à changer pour être mieux guidé"
      ]
    },
    {
      reflection: "Sourate Al-Baqara 2:286 : Allah ne charge une âme que de ce qu'elle peut supporter. Fais-tu confiance à cette promesse ?",
      ideas: [
        "Te plains-tu de tes épreuves au lieu de chercher leur sagesse ?",
        "Crois-tu vraiment qu'Allah ne te donne que ce que tu peux supporter ?",
        "Action : Remercie Allah pour une épreuve récente",
        "Vois tes difficultés comme des opportunités de croissance"
      ]
    },
    {
      reflection: "Sourate Al-Asr : Par le temps, l'homme est en perdition sauf... Fais-tu partie des exceptions ?",
      ideas: [
        "Crois-tu et agis-tu en conséquence ?",
        "Encourages-tu les autres à la vérité et à la patience ?",
        "Action : Exhorte un ami à faire une bonne action aujourd'hui",
        "Sois patient face à une difficulté cette semaine"
      ]
    },
    {
      reflection: "Sourate Ar-Rahman : Lequel des bienfaits de votre Seigneur nierez-vous ? Comptes-tu tes bienfaits ?",
      ideas: [
        "Reconnais-tu que chaque souffle est un bienfait d'Allah ?",
        "Négliges-tu des bienfaits évidents : vue, ouïe, santé ?",
        "Action : Écris 50 bienfaits dont tu jouis actuellement",
        "Remercie Allah pour un bienfait que tu tenais pour acquis"
      ]
    },
    {
      reflection: "Sourate Al-Mulk 67:2 : Qui a créé la mort et la vie pour vous éprouver. Comment utilises-tu ta vie ?",
      ideas: [
        "Si tu mourais demain, serais-tu satisfait de ta vie ?",
        "Que fais-tu qui restera après ta mort ?",
        "Action : Fais une action qui te survivra (sadaqa jariya, bon conseil, etc.)",
        "Prépare-toi à la mort en multipliant les bonnes œuvres"
      ]
    },
    {
      reflection: "Sourate Al-Kahf : Récites-tu cette sourate chaque vendredi ? Elle est une lumière entre deux vendredis.",
      ideas: [
        "Comprends-tu les leçons de la sourate Al-Kahf ?",
        "Les histoires de cette sourate t'inspirent-elles ?",
        "Action : Lis et médite sur Al-Kahf ce vendredi",
        "Apprends les 10 premiers et derniers versets par cœur"
      ]
    },
    {
      reflection: "Sourate Yusuf : La plus belle des histoires. Patientes-tu face aux épreuves comme Yusuf ?",
      ideas: [
        "Face à l'injustice, réagis-tu avec patience ou avec amertume ?",
        "Gardes-tu ta foi même dans les moments les plus sombres ?",
        "Action : Lis l'histoire de Yusuf et tire-en des leçons",
        "Pardonne à quelqu'un qui t'a fait du mal"
      ]
    },
    {
      reflection: "Sourate Al-Ikhlas : Elle équivaut à un tiers du Coran. Comprends-tu vraiment le Tawhid ?",
      ideas: [
        "Associes-tu quelque chose à Allah dans tes pensées ou tes actes ?",
        "Crois-tu qu'Allah est le Seul à pouvoir t'aider ?",
        "Action : Récite Al-Ikhlas 3 fois après chaque prière",
        "Médite sur l'unicité absolue d'Allah"
      ]
    },
    {
      reflection: "Sourate An-Nas et Al-Falaq : Te protèges-tu des maux visibles et invisibles ?",
      ideas: [
        "Récites-tu les protections du matin et du soir ?",
        "Crois-tu sincèrement au pouvoir de ces invocations ?",
        "Action : Mémorise les invocations de protection",
        "Récite ces deux sourates matin et soir cette semaine"
      ]
    },
    {
      reflection: "Coran 2:152 : Souvenez-vous de Moi, Je me souviendrai de vous. Combien de fois mentionnes-tu Allah par jour ?",
      ideas: [
        "Ton cœur est-il occupé par Allah ou par les distractions ?",
        "Fais-tu du dhikr régulièrement ou seulement quand tu as un besoin ?",
        "Action : Fixe-toi un objectif de dhikr quotidien (100 fois SubhanAllah)",
        "Réserve 5 minutes le matin uniquement pour le souvenir d'Allah"
      ]
    },

    // COMPORTEMENT EN TANT QUE MUSULMAN (10 cartes)
    {
      reflection: "Le musulman est le miroir de son frère. Ton comportement reflète-t-il l'Islam ?",
      ideas: [
        "Les gens voient-ils l'Islam à travers ton caractère ?",
        "Es-tu un bon ambassadeur de ta religion ?",
        "Action : Corrige un comportement qui nuit à l'image de l'Islam",
        "Sois la meilleure version de toi-même avec les non-musulmans"
      ]
    },
    {
      reflection: "L'honnêteté est une caractéristique du croyant. Es-tu honnête même quand personne ne te voit ?",
      ideas: [
        "As-tu déjà menti pour éviter des ennuis ?",
        "Es-tu honnête dans tes transactions commerciales ?",
        "Action : Avoue une erreur que tu as cachée",
        "Sois 100% honnête pendant une semaine entière"
      ]
    },
    {
      reflection: "Le musulman ne doit ni médire, ni calomnier. Contrôles-tu ta langue ?",
      ideas: [
        "Parles-tu des gens en leur absence ?",
        "Écoutes-tu les médisances sans les arrêter ?",
        "Action : Refuse de participer à la prochaine conversation de médisance",
        "Défends quelqu'un en son absence"
      ]
    },
    {
      reflection: "La propreté fait partie de la foi. Ton corps, tes vêtements, ta maison sont-ils propres ?",
      ideas: [
        "Négliges-tu ton hygiène personnelle ?",
        "Ton environnement reflète-t-il le respect de soi ?",
        "Action : Nettoie ton espace de vie aujourd'hui",
        "Prends soin de ton apparence tout en restant modeste"
      ]
    },
    {
      reflection: "Sourire à ton frère est une aumône. Combien de fois souris-tu par jour ?",
      ideas: [
        "Es-tu accueillant avec les gens ou distant ?",
        "Ton visage reflète-t-il la paix intérieure ?",
        "Action : Souris sincèrement à 10 personnes aujourd'hui",
        "Égaye le cœur de quelqu'un par ta bonne humeur"
      ]
    },
    {
      reflection: "Le musulman ne doit pas envier. Es-tu content de ce qu'Allah t'a donné ?",
      ideas: [
        "Jalouses-tu les possessions des autres ?",
        "Compares-tu ta vie à celle des autres sur les réseaux sociaux ?",
        "Action : Supprime les comptes qui te font sentir envieux",
        "Remercie Allah pour ce que tu as au lieu de désirer ce que tu n'as pas"
      ]
    },
    {
      reflection: "Respecte tes parents même s'ils sont injustes. Comment traites-tu tes parents ?",
      ideas: [
        "Leur parles-tu avec respect et douceur ?",
        "Fais-tu passer leurs besoins avant les tiens ?",
        "Action : Rends visite à tes parents ou appelle-les aujourd'hui",
        "Demande-leur pardon pour toutes tes erreurs passées"
      ]
    },
    {
      reflection: "Le musulman ne doit pas être arrogant. L'humilité orne-t-elle ton caractère ?",
      ideas: [
        "Te vantes-tu de tes réussites ?",
        "Regardes-tu les autres de haut ?",
        "Action : Rends service à quelqu'un que tu considères 'inférieur'",
        "Rappelle-toi que devant Allah, seule la piété compte"
      ]
    },
    {
      reflection: "Sois bon envers les voisins. Connais-tu même le nom de ton voisin ?",
      ideas: [
        "As-tu déjà aidé ton voisin dans le besoin ?",
        "Ton voisin se sent-il en sécurité grâce à toi ?",
        "Action : Offre un cadeau ou un repas à ton voisin",
        "Présente-toi si tu ne connais pas encore tes voisins"
      ]
    },
    {
      reflection: "Le meilleur des musulmans est celui dont les autres sont à l'abri de sa langue et de sa main.",
      ideas: [
        "As-tu blessé quelqu'un par tes paroles récemment ?",
        "Es-tu une source de paix ou de conflit ?",
        "Action : Présente tes excuses à quelqu'un que tu as blessé",
        "Retiens ta langue avant de parler cette semaine"
      ]
    },

    // FEMME EN ISLAM (10 cartes)
    {
      reflection: "Les femmes sont les sœurs des hommes en religion. Respectes-tu ce principe d'égalité spirituelle ?",
      ideas: [
        "Traites-tu les femmes avec le respect qu'elles méritent ?",
        "Reconnais-tu leur valeur égale devant Allah ?",
        "Action : Encourage une femme dans son cheminement spirituel",
        "Étudie les droits que l'Islam accorde aux femmes"
      ]
    },
    {
      reflection: "Le Paradis est sous les pieds des mères. Quelle est la place de ta mère dans ta vie ?",
      ideas: [
        "Honores-tu ta mère plus que tout autre être humain ?",
        "Lui obéis-tu tant que cela ne contredit pas Allah ?",
        "Action : Embrasse la main de ta mère et remercie-la",
        "Fais quelque chose qui la rendra heureuse aujourd'hui"
      ]
    },
    {
      reflection: "Khadija, Aïcha, Fatima, Maryam : des femmes modèles. Qui t'inspire parmi elles ?",
      ideas: [
        "Connais-tu l'histoire de ces femmes exceptionnelles ?",
        "Quelle qualité de ces femmes veux-tu développer ?",
        "Action : Lis la biographie d'une de ces femmes",
        "Applique une leçon tirée de leur vie"
      ]
    },
    {
      reflection: "La pudeur (haya) est une parure pour la femme musulmane. Comment protèges-tu ta pudeur ?",
      ideas: [
        "Tes vêtements reflètent-ils la modestie islamique ?",
        "Ta pudeur va-t-elle au-delà de l'apparence (comportement, paroles) ?",
        "Action : Révise ta garde-robe selon les critères islamiques",
        "Cultive la pudeur dans tes interactions"
      ]
    },
    {
      reflection: "La femme musulmane est éducatrice de générations. Prépares-tu cette responsabilité ?",
      ideas: [
        "Acquiers-tu le savoir nécessaire pour éduquer tes enfants ?",
        "Es-tu un modèle pour les jeunes filles autour de toi ?",
        "Action : Apprends une leçon islamique à transmettre aux enfants",
        "Sois un exemple de vertu pour la prochaine génération"
      ]
    },
    {
      reflection: "La femme a le droit à l'éducation, au travail, à la propriété. Connais-tu tes droits en Islam ?",
      ideas: [
        "Étudies-tu pour développer ton savoir ?",
        "Connais-tu tes droits financiers et juridiques ?",
        "Action : Étudie un chapitre du fiqh concernant les femmes",
        "Partage tes connaissances avec d'autres femmes"
      ]
    },
    {
      reflection: "Aïcha (qu'Allah l'agrée) était une grande savante. Le savoir religieux est-il une priorité pour toi ?",
      ideas: [
        "Combien de temps consacres-tu à l'étude de ta religion ?",
        "Cherches-tu le savoir auprès de sources fiables ?",
        "Action : Inscris-toi à un cours de sciences islamiques",
        "Lis un livre de fiqh ou de tafsir cette semaine"
      ]
    },
    {
      reflection: "La femme musulmane est forte, pas soumise. Confonds-tu soumission à Allah et soumission aux hommes ?",
      ideas: [
        "Te défends-tu quand tes droits islamiques sont bafoués ?",
        "Connais-tu la différence entre obéissance à Allah et oppression ?",
        "Action : Étudie les cas où le Prophète ﷺ a défendu les femmes",
        "Refuse toute pratique culturelle contraire à l'Islam"
      ]
    },
    {
      reflection: "La prière de la femme chez elle est meilleure. Fais-tu de ta maison un lieu de spiritualité ?",
      ideas: [
        "As-tu un coin prière dédié chez toi ?",
        "Ta maison est-elle un refuge spirituel pour ta famille ?",
        "Action : Embellis ton espace de prière à la maison",
        "Prie avec khushu' dans le confort de ton foyer"
      ]
    },
    {
      reflection: "La femme peut être imam pour d'autres femmes. Prends-tu des responsabilités dans ta communauté ?",
      ideas: [
        "Participes-tu activement à la vie de ta mosquée ou communauté ?",
        "Guides-tu d'autres femmes dans leur cheminement spirituel ?",
        "Action : Organise un cercle d'étude pour femmes",
        "Deviens une leader spirituelle dans ta communauté"
      ]
    },

    // BUSINESS EN ISLAM (10 cartes)
    {
      reflection: "Le commerce licite est aimé d'Allah. Ton business est-il halal à 100% ?",
      ideas: [
        "Vends-tu des produits ou services conformes à la Sharia ?",
        "Évites-tu le riba (intérêt) dans tes transactions ?",
        "Action : Audite ton business pour éliminer tout élément haram",
        "Consulte un savant sur la licéité de tes activités"
      ]
    },
    {
      reflection: "Le Prophète ﷺ était un commerçant honnête. L'honnêteté guide-t-elle tes affaires ?",
      ideas: [
        "Caches-tu des défauts de tes produits aux clients ?",
        "Es-tu transparent dans tes prix et tes conditions ?",
        "Action : Révèle un défaut que tu aurais pu cacher",
        "Sois connu comme le commerçant le plus honnête"
      ]
    },
    {
      reflection: "Gagner sa vie de façon halal est une obligation. Comment gagnes-tu ton argent ?",
      ideas: [
        "Ton salaire provient-il d'une source licite ?",
        "Travailles-tu pour une entreprise qui respecte les valeurs islamiques ?",
        "Action : Si nécessaire, cherche un emploi plus conforme à l'Islam",
        "Refuse tout argent d'origine douteuse"
      ]
    },
    {
      reflection: "La baraka (bénédiction) vaut mieux que le profit rapide. Cherches-tu la baraka ou l'argent ?",
      ideas: [
        "Préfères-tu gagner beaucoup de façon douteuse ou peu de façon halal ?",
        "Invoques-tu Allah pour qu'Il bénisse ton commerce ?",
        "Action : Donne une partie de tes profits en sadaqa",
        "Privilégie la qualité et l'éthique au profit rapide"
      ]
    },
    {
      reflection: "Ne sois pas injuste dans les salaires. Paies-tu tes employés équitablement ?",
      ideas: [
        "Tes employés reçoivent-ils un salaire juste pour leur travail ?",
        "Les paies-tu à temps sans retard ?",
        "Action : Augmente le salaire d'un employé méritant",
        "Assure-toi que personne n'est exploité dans ton entreprise"
      ]
    },
    {
      reflection: "La zakât purifie ton argent. Calcules-tu et donnes-tu ta zakât correctement ?",
      ideas: [
        "Connais-tu le montant exact de zakât que tu dois ?",
        "La donnes-tu à temps chaque année ?",
        "Action : Calcule ta zakât avec un expert si nécessaire",
        "Donne ta zakât avec joie, pas avec regret"
      ]
    },
    {
      reflection: "Le monopole et la thésaurisation sont interdits. Accapares-tu des biens par avidité ?",
      ideas: [
        "Stockes-tu des marchandises pour faire monter les prix ?",
        "Empêches-tu la circulation des richesses ?",
        "Action : Vends à un prix équitable même si tu pourrais gagner plus",
        "Partage tes ressources au lieu de les accumuler"
      ]
    },
    {
      reflection: "Les contrats doivent être clairs et consentis. Tes accords commerciaux sont-ils transparents ?",
      ideas: [
        "Lis-tu et comprends-tu tous les contrats que tu signes ?",
        "Y a-t-il des clauses ambiguës ou injustes ?",
        "Action : Révise un contrat avec un conseiller islamique",
        "Refuse tout contrat contenant du gharar (incertitude excessive)"
      ]
    },
    {
      reflection: "Le travail est une adoration si l'intention est pure. Travailles-tu pour Allah ou pour l'argent ?",
      ideas: [
        "Ton travail te rapproche-t-il d'Allah ou t'en éloigne-t-il ?",
        "Cherches-tu à servir la communauté ou juste à t'enrichir ?",
        "Action : Réforme ton intention : travaille pour plaire à Allah",
        "Utilise ton business comme moyen de servir ta communauté"
      ]
    },
    {
      reflection: "Investir dans le halal apporte la baraka. Où places-tu ton argent ?",
      ideas: [
        "Tes investissements sont-ils conformes à la finance islamique ?",
        "Évites-tu les actions d'entreprises impliquées dans le haram ?",
        "Action : Transfère tes économies vers des comptes islamiques",
        "Consulte un conseiller en finance islamique"
      ]
    },

    // TAWAKKUL MINDSET (10 cartes)
    {
      reflection: "Attache ton chameau puis place ta confiance en Allah. Fais-tu les causes avant de compter sur Allah ?",
      ideas: [
        "Comptes-tu sur Allah sans faire d'efforts ?",
        "Ou travailles-tu dur en pensant que tout dépend de toi ?",
        "Action : Fais ton maximum puis laisse le résultat à Allah",
        "Équilibre effort humain et confiance divine"
      ]
    },
    {
      reflection: "Celui qui compte sur Allah, Allah lui suffit. Mets-tu vraiment ta confiance en Lui ?",
      ideas: [
        "Te stresses-tu excessivement pour l'avenir ?",
        "Crois-tu qu'Allah est le Seul pourvoyeur ?",
        "Action : Confie une inquiétude majeure à Allah et lâche prise",
        "Répète : HasbunAllahu wa ni'mal wakil"
      ]
    },
    {
      reflection: "Si Allah t'aide, nul ne peut te vaincre. Cherches-tu d'abord l'aide d'Allah ou celle des créatures ?",
      ideas: [
        "Vers qui te tournes-tu en premier dans la difficulté ?",
        "Places-tu plus d'espoir en les gens qu'en Allah ?",
        "Action : Avant de demander de l'aide, prie deux raka'at et fais du'a",
        "Rappelle-toi qu'Allah est plus capable que toute créature"
      ]
    },
    {
      reflection: "Ne désespère jamais de la miséricorde d'Allah. Gardes-tu espoir même dans les pires moments ?",
      ideas: [
        "Penses-tu qu'il est trop tard pour toi ?",
        "Crois-tu qu'Allah peut changer ta situation en un instant ?",
        "Action : Lis l'histoire de Yûnus (Jonas) et tire-en des leçons",
        "Invoque Allah avec la certitude qu'Il répondra"
      ]
    },
    {
      reflection: "Allah ne change pas l'état d'un peuple tant qu'ils ne changent pas ce qui est en eux-mêmes.",
      ideas: [
        "Attends-tu que ta situation change sans rien faire ?",
        "Travailles-tu sur ton développement personnel et spirituel ?",
        "Action : Identifie une mauvaise habitude et change-la",
        "Comprends que le changement extérieur commence de l'intérieur"
      ]
    },
    {
      reflection: "Avec la difficulté vient la facilité (Coran 94:5-6). Vois-tu la lumière au bout du tunnel ?",
      ideas: [
        "Te focalises-tu uniquement sur tes problèmes ?",
        "Cherches-tu les opportunités cachées dans tes épreuves ?",
        "Action : Trouve 3 bénédictions dans ta difficulté actuelle",
        "Rappelle-toi que chaque nuit a une aube"
      ]
    },
    {
      reflection: "Ne sois pas triste, Allah est avec nous (Coran 9:40). Te sens-tu seul dans tes épreuves ?",
      ideas: [
        "Ressens-tu la présence d'Allah dans ta vie ?",
        "Te rappelles-tu qu'Allah est plus proche de toi que ta veine jugulaire ?",
        "Action : Passe 10 minutes en présence d'Allah (dhikr, réflexion)",
        "Parle à Allah comme à ton ami le plus proche"
      ]
    },
    {
      reflection: "Les plans d'Allah sont meilleurs que tes désirs. Acceptes-tu ce qu'Allah a décrété ?",
      ideas: [
        "Te révoltes-tu contre le destin ou l'acceptes-tu ?",
        "Réalises-tu que ce que tu détestes peut être un bien pour toi ?",
        "Action : Dis Alhamdulillah pour quelque chose que tu voulais mais n'as pas eu",
        "Fais confiance à la sagesse divine même si tu ne comprends pas"
      ]
    },
    {
      reflection: "Demande et il te sera donné. Invoques-tu Allah avec certitude ?",
      ideas: [
        "Tes invocations sont-elles sincères ou machinales ?",
        "Doutes-tu de la capacité d'Allah à exaucer ?",
        "Action : Fais du'a pendant le dernier tiers de la nuit",
        "Invoque Allah comme si tu savais qu'Il va répondre"
      ]
    },
    {
      reflection: "Allah éprouve ceux qu'Il aime. Vois-tu tes épreuves comme des signes de Son amour ?",
      ideas: [
        "Penses-tu qu'Allah t'a abandonné à cause de tes épreuves ?",
        "Comprends-tu que l'épreuve purifie et élève ton rang ?",
        "Action : Remercie Allah pour tes épreuves",
        "Vois tes difficultés comme des opportunités de rapprochement"
      ]
    },

    // FOI (IMAN) (10 cartes)
    {
      reflection: "La foi augmente et diminue. Où en est ta foi aujourd'hui ?",
      ideas: [
        "Ta foi est-elle plus forte qu'il y a un an ?",
        "Que fais-tu pour nourrir ta foi quotidiennement ?",
        "Action : Fais une action qui renforce ta foi chaque jour",
        "Identifie ce qui affaiblit ta foi et évite-le"
      ]
    },
    {
      reflection: "Croire en Allah, c'est croire en Son pouvoir absolu. Limites-tu Allah dans ton esprit ?",
      ideas: [
        "Penses-tu que certaines choses sont impossibles même pour Allah ?",
        "Invoques-tu Allah pour l'impossible ?",
        "Action : Demande à Allah quelque chose que tu pensais impossible",
        "Médite sur les noms d'Allah : Al-Qadir, Al-Qawiy"
      ]
    },
    {
      reflection: "Croire aux Anges, aux Livres, aux Prophètes. Connais-tu vraiment les piliers de la foi ?",
      ideas: [
        "Peux-tu nommer les 6 piliers de l'Iman ?",
        "Ta croyance influence-t-elle réellement ta vie ?",
        "Action : Étudie en profondeur un pilier de la foi",
        "Enseigne les piliers de l'Iman à quelqu'un"
      ]
    },
    {
      reflection: "Le cœur entre deux doigts du Tout-Miséricordieux. Demandes-tu à Allah de raffermir ton cœur ?",
      ideas: [
        "Crains-tu que ton cœur dévie du droit chemin ?",
        "Invoques-tu Allah pour la guidance constante ?",
        "Action : Répète souvent 'Yâ Muqallibal-qulûb thabbit qalbî 'alâ dînik'",
        "Protège ton cœur des doutes et des tentations"
      ]
    },
    {
      reflection: "La foi n'est pas complète sans les actions. Tes actions reflètent-elles ta foi ?",
      ideas: [
        "Y a-t-il un écart entre ce que tu crois et ce que tu fais ?",
        "Prétends-tu croire sans agir ?",
        "Action : Aligne une action avec ta croyance cette semaine",
        "Sois cohérent entre tes paroles et tes actes"
      ]
    },
    {
      reflection: "Celui qui aime Allah aime Ses commandements. Aimes-tu vraiment Allah ?",
      ideas: [
        "Trouves-tu les obligations difficiles ou agréables ?",
        "Obéis-tu à Allah par amour ou par peur ?",
        "Action : Fais une adoration avec plaisir, pas par obligation",
        "Développe une relation d'amour avec ton Créateur"
      ]
    },
    {
      reflection: "La foi a plus de 70 branches. Sur combien de branches te tiens-tu ?",
      ideas: [
        "Ta foi se limite-t-elle aux 5 piliers ?",
        "Cultives-tu la pudeur, la patience, la générosité ?",
        "Action : Adopte une nouvelle branche de la foi chaque mois",
        "Ne te contente pas du minimum"
      ]
    },
    {
      reflection: "Goûter à la douceur de la foi. As-tu déjà ressenti cette douceur ?",
      ideas: [
        "Ressens-tu du plaisir dans l'adoration ?",
        "Ton cœur s'apaise-t-il avec le dhikr ?",
        "Action : Prie une nuit entière et ressens la proximité divine",
        "Cherche ces moments de connexion spirituelle intense"
      ]
    },
    {
      reflection: "Les signes de la foi : amour pour Allah et Son Messager, amour des croyants, haine du retour à la mécréance.",
      ideas: [
        "Qui aimes-tu le plus : Allah, le Prophète ﷺ ou une créature ?",
        "Aimes-tu tes frères et sœurs en Islam ?",
        "Action : Exprime ton amour pour Allah dans ta prière",
        "Renforce les liens avec les croyants"
      ]
    },
    {
      reflection: "Le doute affaiblit la foi. As-tu des doutes que tu ignores au lieu de les résoudre ?",
      ideas: [
        "Évites-tu de poser des questions par peur ?",
        "Cherches-tu des réponses à tes interrogations ?",
        "Action : Pose une question qui te tracasse à un savant",
        "Le savoir dissipe le doute"
      ]
    },

    // FIN DES TEMPS (10 cartes)
    {
      reflection: "La Fin des Temps approche. Vis-tu comme si demain était le Jour du Jugement ?",
      ideas: [
        "Serais-tu prêt si l'Heure arrivait maintenant ?",
        "Prépares-tu ton au-delà autant que ton présent ?",
        "Action : Fais ton testament islamique dès aujourd'hui",
        "Multiplie les bonnes actions comme si c'était ton dernier jour"
      ]
    },
    {
      reflection: "Parmi les signes : l'ignorance se répand et le savoir diminue. Cherches-tu le savoir authentique ?",
      ideas: [
        "D'où tires-tu ton savoir religieux : réseaux sociaux ou savants ?",
        "Combats-tu l'ignorance par l'apprentissage ?",
        "Action : Inscris-toi à un cours avec un savant reconnu",
        "Vérifie tes sources avant d'accepter une information"
      ]
    },
    {
      reflection: "Les gens rivaliseront dans la construction de hauts buildings. Où sont tes priorités ?",
      ideas: [
        "Investis-tu plus dans ta maison terrestre que dans ta demeure éternelle ?",
        "Que construis-tu qui survivra à la mort ?",
        "Action : Construis une mosquée, un puits ou finance un projet durable",
        "Prépare ton Paradis pendant que tu es sur terre"
      ]
    },
    {
      reflection: "Le temps se contractera. Sens-tu que les jours passent de plus en plus vite ?",
      ideas: [
        "Utilises-tu ton temps comme s'il était infini ?",
        "Remets-tu à demain ce que tu pourrais faire aujourd'hui ?",
        "Action : Fixe-toi des objectifs spirituels à court terme",
        "Ne gaspille pas le temps, il est la substance de ta vie"
      ]
    },
    {
      reflection: "Les liens de parenté seront rompus. Entretiens-tu tes liens familiaux ?",
      ideas: [
        "As-tu coupé les ponts avec des membres de ta famille ?",
        "Appelles-tu régulièrement tes proches ?",
        "Action : Réconcilie-toi avec un membre de ta famille",
        "Maintiens le lien même si l'autre le rompt"
      ]
    },
    {
      reflection: "L'homme obéira à sa femme et désobéira à sa mère. Respectes-tu la hiérarchie des droits ?",
      ideas: [
        "Tes parents passent-ils avant ton conjoint dans tes priorités ?",
        "Honores-tu ta mère comme Allah l'a ordonné ?",
        "Action : Passe du temps avec tes parents cette semaine",
        "Équilibre les droits de chacun selon l'Islam"
      ]
    },
    {
      reflection: "Les fitn (épreuves) se multiplieront. Comment protèges-tu ta foi des tentations modernes ?",
      ideas: [
        "Les réseaux sociaux affaiblissent-ils ta foi ?",
        "Es-tu influencé par les tendances contraires à l'Islam ?",
        "Action : Fais un jeûne numérique et reconnecte avec Allah",
        "Protège-toi des fitn en renforçant ton savoir"
      ]
    },
    {
      reflection: "Avant la Fin, le soleil se lèvera à l'Ouest. Ce jour-là, le repentir ne sera plus accepté.",
      ideas: [
        "Remets-tu ton repentir à plus tard ?",
        "Penses-tu avoir tout le temps pour te repentir ?",
        "Action : Repens-toi sincèrement dès maintenant",
        "Ne garantis pas le prochain instant pour te repentir"
      ]
    },
    {
      reflection: "Le Mahdi et Issa (Jésus) reviendront. Seras-tu parmi ceux qui les suivront ?",
      ideas: [
        "Prépares-tu ton cœur à reconnaître la vérité ?",
        "Serais-tu ferme dans ta foi face aux grandes épreuves ?",
        "Action : Étudie les signes de la Fin pour ne pas être trompé",
        "Renforce ta foi pour rester sur le droit chemin"
      ]
    },
    {
      reflection: "La vie de ce monde est courte, l'Au-delà est éternel. Où investis-tu le plus ?",
      ideas: [
        "Passes-tu plus de temps à planifier ta retraite ou ton Paradis ?",
        "Tes objectifs sont-ils terrestres ou spirituels ?",
        "Action : Équilibre ta vie entre Dunya et Akhira",
        "Travaille pour les deux mondes, mais privilégie l'éternel"
      ]
    },

    // DEVOIRS ET RÈGLES DES ÉPOUX (10 cartes)
    {
      reflection: "Le mariage est la moitié de la foi. Protèges-tu ton mariage comme un trésor ?",
      ideas: [
        "Investis-tu dans ton couple autant que dans ta carrière ?",
        "Ton conjoint se sent-il aimé et valorisé ?",
        "Action : Surprends ton conjoint avec un geste d'amour aujourd'hui",
        "Le mariage mérite ton meilleur, pas tes restes"
      ]
    },
    {
      reflection: "Les meilleurs d'entre vous sont les meilleurs envers leurs épouses. Comment traites-tu ton conjoint ?",
      ideas: [
        "Es-tu plus gentil avec les étrangers qu'avec ton épouse ?",
        "Ton conjoint bénéficie-t-il de ton meilleur caractère ?",
        "Action : Demande à ton conjoint comment tu peux être meilleur",
        "Suis l'exemple du Prophète ﷺ dans ton mariage"
      ]
    },
    {
      reflection: "L'homme est responsable de sa famille. Assumes-tu tes responsabilités de chef de famille ?",
      ideas: [
        "Subviens-tu aux besoins de ta famille ?",
        "Guides-tu ta famille vers le bien ?",
        "Action : Organise une assise spirituelle familiale hebdomadaire",
        "Sois un leader juste, pas un tyran"
      ]
    },
    {
      reflection: "La femme a des droits sur son mari : respect, entretien, gentillesse. Respectes-tu ces droits ?",
      ideas: [
        "Traites-tu ton épouse avec respect et dignité ?",
        "Pourvois-tu à ses besoins matériels et émotionnels ?",
        "Action : Demande à ton épouse si elle est satisfaite de tes soins",
        "Les droits de l'épouse sont des obligations, pas des faveurs"
      ]
    },
    {
      reflection: "Le mari a des droits : obéissance dans le bien, préservation de son honneur. Honores-tu ces droits ?",
      ideas: [
        "Obéis-tu à ton mari tant qu'il ne désobéit pas à Allah ?",
        "Protèges-tu sa réputation et ses biens ?",
        "Action : Facilite la vie de ton mari au lieu de la compliquer",
        "L'obéissance à ton mari est une adoration"
      ]
    },
    {
      reflection: "Consultation mutuelle (shura) dans les décisions familiales. Décides-tu seul ou consultes-tu ?",
      ideas: [
        "Imposes-tu tes décisions ou cherches-tu l'avis de ton conjoint ?",
        "Ton conjoint se sent-il inclus dans les choix importants ?",
        "Action : Prends une décision importante ensemble cette semaine",
        "La shura renforce le couple"
      ]
    },
    {
      reflection: "La patience est essentielle dans le mariage. Es-tu patient avec les défauts de ton conjoint ?",
      ideas: [
        "Te focalises-tu sur les défauts ou sur les qualités ?",
        "Acceptes-tu ton conjoint tel qu'il est ?",
        "Action : Liste 10 qualités de ton conjoint et remercie Allah",
        "Personne n'est parfait, sois indulgent"
      ]
    },
    {
      reflection: "L'intimité est un droit mutuel. Préserves-tu l'intimité de ton couple ?",
      ideas: [
        "Respectes-tu les besoins de ton conjoint ?",
        "Gardes-tu l'intimité privée entre vous deux ?",
        "Action : Ne partage jamais les détails intimes de ton couple",
        "Ce qui se passe entre époux reste entre époux"
      ]
    },
    {
      reflection: "En cas de conflit, cherche la réconciliation. Comment gères-tu les disputes ?",
      ideas: [
        "Laisses-tu les conflits s'envenimer ou cherches-tu à résoudre ?",
        "Es-tu prêt à faire des compromis pour la paix ?",
        "Action : Réconcilie-toi avant de dormir si vous êtes fâchés",
        "Ne laisse pas Shaytan détruire ton foyer"
      ]
    },
    {
      reflection: "Le divorce est la chose permise la plus détestée par Allah. Protèges-tu ton mariage du divorce ?",
      ideas: [
        "Menaces-tu du divorce à chaque dispute ?",
        "Fais-tu tout pour sauver ton mariage avant d'envisager la séparation ?",
        "Action : Consulte un conseiller conjugal islamique si nécessaire",
        "Le divorce n'est pas une solution facile, c'est un dernier recours"
      ]
    },

    // CRÉATION (10 cartes)
    {
      reflection: "Regardez les cieux et la terre. Contemples-tu la création d'Allah ?",
      ideas: [
        "Quand as-tu observé le ciel étoilé pour la dernière fois ?",
        "Vois-tu les signes d'Allah dans la nature ?",
        "Action : Passe 30 minutes à observer la création et méditer",
        "Chaque élément de la création témoigne de Son existence"
      ]
    },
    {
      reflection: "Allah a créé les cieux et la terre en 6 jours. Médites-tu sur Sa puissance créatrice ?",
      ideas: [
        "Réalises-tu qu'Allah a créé l'univers par un simple 'Kun' (Sois) ?",
        "Doutes-tu de Sa capacité à changer ta situation ?",
        "Action : Étudie les versets sur la création dans le Coran",
        "Si Allah a créé l'univers, Il peut résoudre tes problèmes"
      ]
    },
    {
      reflection: "Nous avons créé l'homme d'argile. Connais-tu ton origine humble ?",
      ideas: [
        "L'arrogance trouve-t-elle place dans ton cœur ?",
        "Te rappelles-tu que tu n'es que poussière ?",
        "Action : Prosterne-toi longuement et ressens ton humilité",
        "D'argile tu viens, à l'argile tu retourneras"
      ]
    },
    {
      reflection: "Dans la création des cieux et de la terre, il y a des signes pour les doués d'intelligence.",
      ideas: [
        "Réfléchis-tu sur les merveilles de la nature ?",
        "Vois-tu la perfection dans la moindre feuille d'arbre ?",
        "Action : Étudie un phénomène naturel et vois-y la main d'Allah",
        "La science mène au Créateur, pas loin de Lui"
      ]
    },
    {
      reflection: "Allah a créé toute chose en couple. Vois-tu l'équilibre dans la création ?",
      ideas: [
        "Nuit et jour, homme et femme, bien et mal : tout est équilibré",
        "Apprécies-tu l'harmonie divine dans l'univers ?",
        "Action : Observe les paires dans la nature (mâle/femelle, etc.)",
        "L'équilibre est la signature du Créateur"
      ]
    },
    {
      reflection: "Les montagnes sont des piquets pour stabiliser la terre. Connais-tu les merveilles géologiques ?",
      ideas: [
        "Le Coran a révélé des vérités scientifiques il y a 1400 ans",
        "Étudies-tu comment le Coran décrit précisément la nature ?",
        "Action : Lis un livre sur les miracles scientifiques du Coran",
        "La science moderne confirme le Coran"
      ]
    },
    {
      reflection: "Les abeilles : Allah leur a inspiré de construire des ruches. Vois-tu l'intelligence dans la création ?",
      ideas: [
        "Comment une abeille sait-elle construire un hexagone parfait ?",
        "Qui a programmé les animaux à faire ce qu'ils font ?",
        "Action : Observe un animal et médite sur son instinct",
        "L'instinct animal est une révélation du Créateur"
      ]
    },
    {
      reflection: "Le cycle de l'eau : évaporation, nuages, pluie. Apprécies-tu ce système parfait ?",
      ideas: [
        "Chaque goutte de pluie suit un cycle orchestré par Allah",
        "Remercies-tu Allah pour l'eau que tu bois ?",
        "Action : Ne gaspille pas l'eau, c'est un bienfait précieux",
        "Le cycle de l'eau prouve une conception intelligente"
      ]
    },
    {
      reflection: "Ton propre corps est un signe. Connais-tu les merveilles de ton anatomie ?",
      ideas: [
        "Ton cœur bat 100 000 fois par jour sans que tu y penses",
        "Remercies-tu Allah pour la santé de ton corps ?",
        "Action : Étudie un système corporel et émerveille-toi",
        "Ton corps témoigne de la perfection du Créateur"
      ]
    },
    {
      reflection: "Nous avons créé l'univers en expansion. La science moderne découvre ce que le Coran disait déjà.",
      ideas: [
        "Le Big Bang est mentionné dans le Coran (21:30)",
        "L'expansion de l'univers est décrite en 51:47",
        "Action : Partage un miracle scientifique du Coran",
        "Le Coran est la parole du Créateur de l'univers"
      ]
    }
  ];

  const handleTouchStart = (e) => {
    setSwipeStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const distance = swipeStart - e.touches[0].clientY;
    setSwipeDistance(distance);
  };

  const handleTouchEnd = () => {
    if (swipeDistance > 50) {
      nextCard();
    }
    setSwipeDistance(0);
  };

  const handleMouseDown = (e) => {
    setSwipeStart(e.clientY);
  };

  const handleDoubleClick = () => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;
    
    if (timeDiff < 300) {
      setIsFlipped(!isFlipped);
    }
    setLastClickTime(currentTime);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % reflections.length);
  };

  return (
    <div className="app-container">
      <div 
        className="content-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{
          transform: swipeDistance > 0 ? `translateY(-${Math.min(swipeDistance, 100)}px)` : 'none',
          transition: swipeDistance === 0 ? 'transform 0.3s ease' : 'none'
        }}
      >
        <div className="header">
          <div className="moon-icon">🌙</div>
          <h2 className="title">Hilal</h2>
          <p className="subtitle">
            Double-cliquez pour révéler • Swipez vers le haut pour continuer
          </p>
        </div>

        <div className="card-container" onClick={handleDoubleClick}>
          <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-face card-front">
              <div className="card-icon">☪️</div>
              <p className="card-text">{reflections[currentCard].reflection}</p>
              <div className="card-counter">
                Carte {currentCard + 1} sur {reflections.length}
              </div>
            </div>

            <div className="card-face card-back">
              <h3 className="back-title">Questions & Actions</h3>
              <ul className="ideas-list">
                {reflections[currentCard].ideas.map((idea, index) => (
                  <li key={index} className="idea-item">
                    <span className="bullet">•</span>
                    <span className="idea-text">{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="instructions">
          <div className="instruction-icons">
            <div className="instruction-item">
              <span>↑</span>
              <span>Swipez vers le haut</span>
            </div>
            <div className="instruction-item">
              <span>↻</span>
              <span>Double-cliquez</span>
            </div>
          </div>
          
          <button onClick={nextCard} className="next-button">
            Carte suivante
          </button>
        </div>

        <div className="footer">
          <p>« Et rappelle, car le rappel profite aux croyants » (51:55)</p>
        </div>
      </div>
    </div>
  );
};

export default Hilal;