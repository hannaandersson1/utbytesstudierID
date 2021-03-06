import React from "react";

export const getInterviewContent = (id, color) => {
  const alfred = {
    profileCover: {
      img: "alfred.jpg",
      backgroundImg: "alfredBanner.jpg",
      title: "University of Science and Technology, Macau",
      subtitle: "Alfred Ödling | HT-17 | Centrala avtalen",
      quote:
        "“Kommer verkligen att minnas alla FESTER på världens bästa klubbar i Macau och Hong Kong”",
      name: "- Alfred Ödling"
    },
    images: {
      img1: "macau1.jpg",
      img2: "macau2.jpg",
      img3: "macau3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att få nya erfarenheter, nya kontakter, bredda vyerna, få bättre
              bild hur världen ser ut och lära sig om andra kulturer. I grunden
              är de precis som vi med samma humor osv. <br />
              <br />
              Kommer verkligen att minnas alla FESTER på världens bästa klubbar
              i Macau och Hong Kong.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: <p className="info-body-text">Pengar kommer att dras...</p>
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var inte direkt svårt att hitta passande kurser. Man valde när
              man kom fram och jag fick hjälp med detta. Kurserna jag valde var
              inte svåra att klara. Jag läste kurser inom ekonomi och
              marknadsföring. Alla kurser kunde tillgodoräknas som fria kurser
              när jag kom hem.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ja, jag hade valt samma ställe! Allt var najs. Nära till Hong Kong
              och till flygplats som gjorde det enkelt att resa runt i asien.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Macau och University of
              Science and Technology?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ba kör! Och... spara ihop en reskassa så ni slipper låna av mamma
              och pappa så mycket.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Det fungerade bra! Fixade boendet via skolan. Det kostade 2700
              kr/månaden. Bodde i en korridor där jag delade rum med en annan.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Behövde vaccinera mig, göra en hälsokoll, fixa visum. Sökte även
              några stipendium. Det tog sammanlagt en månad för alla
              förberedelser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: <p className="info-body-text">Det var billigt.</p>
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Gör det! Gör en lista på exakt vad som ska fixas och beta av den
              så blir det mindre stress.
            </p>
          )
        }
      }
    ]
  };
  const amine = {
    profileCover: {
      img: "amine.jpg",
      backgroundImg: "amineBanner.jpg",
      title: "Sogang University, Seoul i Sydkorea ",
      subtitle: "Amine Balta | HT-18 | Centrala avtalen",
      quote:
        "“Att uppleva nya kulturer är så berikande i både erfarenheter och perspektivet man har på livet”",
      name: "- Amine Balta"
    },
    images: {
      img1: "sydkoreaAmine1.jpg",
      img2: "sydkoreaAmine2.jpg",
      img3: "sydkoreaAmine3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det bästa med att studera utomlands är möjligheten att vara och bo
              i ett land som man annars inte hade haft möjligheten till. Att
              uppleva kulturer som skiljer sig så mycket från den svenska är så
              berikande i både erfarenheter och perspektivet man har på livet.
              Och att träffa nya människor, att äta massor av god mat och
              utforska nya ställen gör upplevelsen så mycket mer än bara en
              vanlig termin. <br />
              <br /> Det bästa minnet jag har från resan är att vandra upp för
              Seoraksan. Vi fick sova över på ett tempel lite längre ner för
              berget och sedan blev vi väckta klockan två på natten för att
              börja vandra i mörkret upp för berget för att kunna se
              soluppgången från toppen. Det var en upplevelse som var helt
              magisk. Stjärnhimlen mot bergstopparna, utsikten när solen började
              titta fram och man såg hur högt upp man faktiskt var. Det var
              obeskrivligt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Självklart får man en släng av hemlängtan, det händer alla. Men
              när man väl får insikten att man längtar hem så är det nästan
              ingenting kvar av terminen och då får man peppa sig själv att
              njuta av tiden man har kvar. På mitt universitet hade vi inget kök
              för studenterna så tyvärr var det lite tråkigt att vi inte kunde
              laga egen mat.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var inte så svårt att hitta kurser som passade programmet men
              däremot fanns det inget massivt utbud av kurser. Samt att vi har
              ju turen att vi på ID har en termin med fria kurser. <br />
              <br /> Jag läste UX/UI, Spel utvecklingskurs (Game Studio), 3D
              Animation, 3D Modeling, Koreansk politik (International politics
              of the Korean peninsula). Alla mina kurser tänker jag sätta som
              fria kurser i tillgodoräknandet.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag önskar jag hade förberett mig lite mer mentalt för hur det är
              att bo i ett litet korridorsrum med en annan person. Nu hade jag
              sån extrem tur med min rumskompis och vi har blivit väldigt goda
              vänner men det är ändå en omställning från att bo själv i en hel
              lägenhet till att bo två i ett trångt rum. Önskar även jag visste
              att det faktiskt blir kallt i Korea, så en eller tio långärmade
              tröjor kunde jag ha packat ner.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade valt exakt samma ställe, Seoul är en sån fantastisk stad
              och om man inte åker på utbyte här ska man definitivt åka hit och
              utforska. Jag har inget att klaga på i skolan heller, allt är
              välorganiserat och vi har alltid personer vi kan vända oss till
              ifall vi har frågor.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Sydkorea och Sogang
              University?
            </p>
          ),

          info: (
            <p className="info-body-text">
              Läs alla mail och gör som dom säger. Gå med i Facebook-grupperna
              dom länkar, där kan man hitta resten som ska dit och man kan
              ställa frågor. Och international office i Sverige va väldigt
              hjälpsamma. Och IO på Sogang var väldigt rutinerade också, dom
              hade alltid svar.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Jag bodde på ett ställe som heter Gonzaga Hall som ligger mitt på
              campus. Boendet kunde man söka via Sogang, så man fick information
              om hur man söker. Man behövde visa ett tuberkulostest för att bli
              accepterad, så det fixar man på vårdcentralen. Det kostade ungefär
              12 000 kronor för hela terminen (exklusive meal plan). Jag bodde i
              ett rum med två sängar, två skrivbord, två garderober, en toalett
              och en dusch i separata rum. Man får fylla i vad för rumskompis
              man vill ha (samma land, koreansk, eller samma kontinent). Jag
              fyllde i samma land och fick bo med en jämnårig tjej från Schweiz.
              Man kan även önska en specifik person.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Behövde skicka in massa papper till skolan, bland annat
              tuberkulos-testet. Fixade även visum som man även måste åka och
              hämta upp i Stockholm(dom vill att du besöker ambassaden en gång),
              vaccin som rekommenderades var hepatit A och B, japansk encefalit
              och tyfoid tabletter. Man behövde även ett papper som
              Thomas(programansvarig) hade skrivit på som typ intygar att man är
              en bra person. <br />
              <br /> Att fixa allt tog lite tid eftersom jag behövde hyra ut
              lägenhet, åka till Stockholm för visum, vaccinera mig, fixa med
              massa papper m.m. Börjar man i god tid innan slutdatum så är det
              inte så krångligt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det är definitivt dyrare att bo i Sydkorea än vad det kan vara att
              bo i andra asiatiska städer. Speciellt eftersom vi inte lagade
              egen mat så blev det lite dyrt att hela tiden behöva äta ute och
              maten nära universitetet kunde vara dyrare än andra ställen.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Om det finns ens en liten del av dig som vill åka så bara gör det,
              åk! Suger det är det ju bara att åka hem. En termin går så fort
              och man hinner blinka sen är halva över, så man har knappt chansen
              att vantrivas för sen är man hemma igen. Vi har sån perfekt
              möjlighet med fria kurser och CSN som hjälper till så man måste ju
              testa! Och är något oklart, fråga studenter som varit dit du vill
              eller ska, de kan säkert svara på alla dina frågor. Se det som en
              möjlighet, vem vet, detta kanske blir den bästa resan i ditt liv!
            </p>
          )
        }
      }
    ]
  };
  const aron = {
    profileCover: {
      img: "aron.jpg",
      backgroundImg: "aronBanner.jpg",
      title: "Grant MacEwan University, Edmonton i Kanada",
      subtitle: "Aron Nisbel | HT-18 | Centrala avtalen",
      quote:
        "“De bästa minnena jag har är från när jag klättrade i Banff national park”",
      name: "- Aron Nisbel"
    },
    images: {
      img1: "EdmontonCanada1.jpg",
      img2: "EdmontonCanada2.jpg",
      img3: "EdmontonCanada3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att träffa otroligt många nya människor med olika bakgrunder. Att
              se ett annat skolsystem och hur det funkar rent praktiskt.
              Upptäcka och uppleva nya miljöer.
              <b />
              <br /> De bästa minnena jag har är från när jag klättrade i Banff
              national park, såg en NHL-match och de stora husfesterna jag var
              på.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              En hel del pengar är det som går åt och hade en del hemlängtan.
              Kände mycket stress ibland på grund av en ovan studiemiljö och
              mycket att studera, speciellt i Kanada där man måste ta 5 kurser
              på en och samma gång. Det att det kan vara svårt att hitta
              egentid, speciellt om man bor med rumskompisar.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var inte svårt att hitta lämpliga kurser då jag använde fria
              kurserna så kunde välja vad jag ville.
              <br />
              <br /> Kurserna jag läste var både lite svårare att klara och
              andra var lätta. 3 var lätta, 1 mindre lätt och 1 innehöll många
              nya läro- och uppgiftsmoment som jag aldrig använt mig av
              tidigare. Vilket gjorde det extra svårt att hänga med. Många
              kurser som jag läste var ganska tunga med mycket att ta in. Jag
              Läste kurser inom antropologi, psykologi, mythologi, Kanadensisk
              historia och att utveckla spel i Unity3d. <br />
              <br /> Alla mina kurser tog jag som fria kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Tempot Kanada har på studier. Är mycket mer på kortare tid så lätt
              att bli stressad. Hade jag vetat att Computer Science kurserna här
              är så lätta som dom va så skulle jag valt fler CS kurser än 1.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Hade åkt till något annat ställe. Eftersom Edmonton i slutändan
              inte är superfint även om det har väldigt många positiva saker som
              bra barer och klättergym. Men det ligger hyfsat nära bergen, ca.
              4h bilresa. Men hade jag åkt idag så hade jag nog istället valt
              Vancouver eller någon mycket coolare stad, naturmässigt. Som har
              mycket mer natur.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Kanada och Grant MacEwan
              University?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att inte vara rädd att prata med främlingar på gatan, på gymmet
              eller i skolan. Kanadensare är mycket mer öppna än svenskar och en
              enda konversation kan leda till att du blir inbjuden till
              middag/fest eller något annat kul!
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Det var ett korridorsrum med eget kök och en rumskompis som man
              delar det köket med, man har eget sovrum. Fixades direkt via
              Universitetet genom online formulär och ansökan. Inte superfräscht
              och riktigt dyrt, ca 6000 i månaden. Men det ligger direkt
              downtown, 50 meter från universitet och jag hade en 139cm bred
              säng samt trevlig roommate.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Fixade ett ETA via en hemsida på nätet. Skicka kopia på min
              hälsodeklaration. Fixa boende och skicka bild på mig själv för att
              användas på access-korten till skolan och boendet. <br />
              <br />
              Jag gjorde förberedelserna utspritt över 4 månader. Lite
              förberedelser då och då.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Samma som i Sverige. Billigare att gå ut å äta och dricka men
              dyrare att bo. Alkohol är lika som i Sverige när man köper i
              butik.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Gör det!! Välj ett land som du genuint tycker verkar häftigt och
              intressant. Om man inte vill ha den där super kulturchocken, åk
              till Kanada. Du kan prata engelska med alla och alla är
              jättetrevliga och omtänksamma.
            </p>
          )
        }
      }
    ]
  };
  const charlotte = {
    profileCover: {
      img: "charlotte.jpg",
      backgroundImg: "charlotteBanner.jpg",
      title: "Hanyang University, Seoul i Sydkorea",
      subtitle: "Charlotte Ristiniemi | HT-17 | Centrala avtalen",
      quote:
        "“Det finns inget ställe jag hade bytt Seoul mot. Jag tycker att min upplevelse var helt fantastisk!”",
      name: "- Charlotte Ristiniemi"
    },
    images: {
      img1: "sydkoreaCharlotte1.jpg",
      img2: "sydkoreaCharlotte2.jpg",
      img3: "sydkoreaCharlotte3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det absolut bästa var att träffa människor från runt om i världen.
              Det som också var så himla kul med Seoul var att man fick uppleva
              en kultur som var väldigt annorlunda Sveriges. <br />
              <br /> En sak jag bara vill säga är att det alltid händer något i
              Seoul. Festivaler, coola byggnader eller stadsdelar att besöka,
              hajker, utställningar och fester. Man hann aldrig utforska hela
              Seoul vilket gjorde att man aldrig blev less på staden.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det blev ju en kulturkrock när man först kom till Seoul, det är
              inget jag vill sticka under stolen med. För det tog ett litet tag
              innan man anpassat sig och visste hur allting fungerade. Men efter
              någon/några veckor hade man vant sig.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              För mig blev det inte svårt att hitta lämpliga kurser eftersom att
              jag valde att läsa alla mina fria kurser på min utbytestermin. Så
              jag tänkte bara på att läsa kurser jag tyckte lät intressanta. Jag
              tror dock att jag hade kunnat tillgodoräkna någon kurs som
              breddning. Jag fick höra att utvecklingskurserna, mattekurserna
              och businesskurserna hade lite högre krav på sig. Men de kurserna
              jag läste var inte alls svåra. Det var mest quiz, inlämningar och
              presentationer. <br />
              <br />
              Jag läste kurser inom fotografi, portfolio, digitala medier,
              filosofi samt visuell design. Alla mina kurser tillgodoräknades
              som fria kurser
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att det är enkelt att hitta kompisar. Jag var nervös att det
              skulle vara svårt att komma i kontakt med folk, men det var en
              helt obefogad nervositet. Direkt när jag kom till mitt boende (där
              det typ bara bodde utbytesstudenter) så blev jag frågad om jag
              ville hänga med på en rundtur runt campus. Alla sitter i samma
              båt, så folk att lära känna finns det gott om.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade valt exakt samma igen. Det finns inget jag hade bytt
              Seoul mot. Jag tycker att min upplevelse var helt fantastisk!
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Sydkorea och Hanyang
              University?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ibland kan det bli en språkbarriär då inte alla kan engelska
              utanför universitetet. Men med google translate och kroppsspråk
              gick det ändå bra. Rummen är pyttesmå, det är typ samma
              boendepriser som i Umeå om man vill bo själv, men ganska billigt
              om man är villig att dela. Maten är supergod, men det är lite
              lurigt att hitta vegetariska alternativ.. Soju är overkligt
              billigt. Naturen är vacker och bergig, så det finns massa hiking
              möjligheter. Sista tipset från mig att att boka tid för att
              utfärda ett ARC (alien registration card) direkt när man kommer
              till Seoul. Det här kortet gör att ditt visum blir multiple entry,
              dvs du kan resa in och ut ur Sydkorea som du vill. Tiderna fylls
              upp väldigt snabbt och några av mina vänner kunde inte resa
              utomlands när vi hade en vecka ledigt i oktober för att de inte
              fått sitt ARC.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Jag fixade mitt boende själv då skolans boende hade vissa regler.
              Till exempel så bodde tjejer och killar separat, dörrarna var
              låsta på natten och om man bröt mot reglerna så kunde man bli
              “utkastad”. Jag använde en sida som hette goshipages.com för att
              leta ett studentrum som kallas goshiwon. Jag betalade strax under
              4000 kr för mitt pyttelilla rum som jag bodde själv i. Där hade
              jag säng, skrivbord, TV, toalett och dusch. Vår Ajumma (tanten som
              ägde huset) lagade mat som ingick i hyran och vi fick inte laga
              egen mat i köket. Dock åt jag nästan alltid ute ändå, så det
              spelade ingen roll.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Först och främst hela ansökningsprocessen som alla behöver göra.
              Till Hanyang behövde jag skicka med intyg på att jag hade pengar
              under min studietid (csn), hälsoförsäkring (denna fick jag av umu)
              samt betyg. Sedan fixade jag visum och lägenhet i Seoul på egen
              hand. Man behövde inga vaccin för att vara i Seoul men jag
              vaccinerade mig för resor jag skulle göra efter studietiden. Jag
              sökte inga stipendier men jag ångrar att jag inte gjorde det.{" "}
              <br />
              <br /> Svårt att uppskatta hur lång tid det tog. Det är ju ändå
              lite grejer man behöver fixa, typ hyra ut sin lägenhet här i Umeå,
              boka flyg, packa, åka till Stockholm för att utfärda visum (eller
              betala för att få det skickat). Men med lite organisation så
              flyter allt på väldigt smidigt skulle jag säga.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var väldigt billigt. Vi köpte både lunch och middag på
              restaurang varje dag vilket kostade typ en tjuga (västerländsk mat
              var snäppet dyrare). Det enda som jag spenderade mycket pengar på
              var mitt klätterkort och boende som kostade typ samma som i
              Sverige.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Om det finns en liten nerv som rycker när du tänker på
              utbytesstudier, åk. Det är sjukt kul!!
            </p>
          )
        }
      }
    ]
  };
  const david = {
    profileCover: {
      img: "david.jpg",
      backgroundImg: "davidBanner.jpg",
      title: "Metropolitan University, Tokyo i Japan",
      subtitle: "David Hellman | HT-17 | Centrala avtalen",
      quote:
        "“Jag kommer verkligen att komma ihåg och ta med mig hela landet som helhet och alla minnen med de människor man träffade där.”",
      name: "- David Hellman"
    },
    images: {
      img1: "tokyo2.jpeg",
      img2: "tokyo1.jpeg",
      img3: "tokyo3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att åka utomlands innebar framförallt en möjlighet att träffa
              massa fantastiska människor från hela världen och att uppleva en
              kultur på ett sätt som i andra fall skulle betyda betydligt mycket
              mer arbete. Med det menar jag att man med utbytesstudier har
              väldigt goda chanser dels att få en utbytesplats på ett
              universitet och detta dessutom gratis trots att många universitet
              tar avgifter för studenter ska få studera där. <br />
              <br />
              Vart man åker har betydelse. Vill man till exempel öka sin
              tekniska kompetens kan mer prestigefulla universitet vara att
              föredra. Däremot är det värt att överväga att ta en termin där man
              kan ägna sig åt att utforska och få njuta lite också. Även om jag
              inte läste allt för många kurser som utvecklade mig som UX
              designer så går det inte att bortse från andra saker man blir
              bättre på som språk, kulturella skillnader och personlig
              utveckling. <br />
              <br /> Att studera i Japan innebär att man måste läsa några kurser
              kopplade till språket och samhället. Även om detta kanske inte är
              precis vad man vill läsa så ökar det ens förståelse för samhället
              och möjliggör även att man kan söka det japanska statliga
              stipendiet JASSO, värt ungefär 7000 kr/mån. <br />
              <br />
              Att utvecklas handlar ofta om att anta nya utmaningar. Att studera
              utomlands anser jag är en sån utmaning där man är i en trygg miljö
              eftersom man har skolans stöd. Jag kommer verkligen att komma ihåg
              och ta med mig hela landet som helhet och alla minnen med de
              människor man träffade där.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Japan följer andra läsperioder än Sverige, något som gjorde att
              deras hösttermin överlappade vår vårtermin med ungefär en månad.
              Detta innebar att lite planering krävdes och att jag behövde
              studera ikapp det jag missat när jag kom tillbaka. Å andra sidan
              möjliggjorde detta också att man kunde jobba lite längre in på
              hösten och resa innan utlandsstudierna började. <br />
              <br />
              Betygsystemet såg också annorlunda ut. Detta innebar att det inte
              var helt självklart hur många kurser jag behövde läsa. För att
              vara på den säkra sidan läste jag lite mer än nödvändigt för att
              inte hamna i ett läge där jag var tvungen att läsa extra väl
              tillbaka i Sverige. Detta är särskilt viktigt att tänka på om man
              ska läsa annat än valbara kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var svårt att hitta passande kurser då universitetet hade
              störst fokus mot samhällskurser och biologi. Att studera i Japan
              innebär också ett krav på att ta några kurser i japanska, något
              som gör att vissa högskolepoäng måste allokeras till det. Eftersom
              få tekniskt studerade studenter åkte till TMU var det lågt tryck
              på sådana kurser. Förutom att en kurs blev inställd som resultat
              av detta så innebar det snarare bättre interaktion med lärarna och
              möjlighet att fördjupa kunskaperna inom sånt som var mer
              intressant. <br />
              <br />
              Att kurserna inte passade utbildningen perfekt var inte bara
              negativt. Det gav en chans att bredda kunskaper inom andra områden
              och läsa kurser som kanske inte skulle vara självklara inom
              utbildningen men ändå användbara. <br />
              <br /> Kurserna som jag sedan valde var inte svåra att klara. Det
              japanska betygssystemet är till stor del baserat på närvaro,
              deltagande och tentamensresultat. Därav krävdes det mindre
              ansträngning att studera på TMU än på ID.
              <br />
              <br /> Att läsa lite japanska är obligatoriskt på alla universitet
              i Japan, det kan därför vara bra att förbereda sig med lite
              japanska i förväg. Jag läste japanska i ett år på gymnasiet och
              även om jag inte mindes mycket så var det en fördel, framförallt
              för att komma in i de väldigt annorlunda alfabetena de använder.
              För att förbereda mig körde jag lite Duolingo sommaren innan jag
              skulle åka. Detta kan rekommenderas för att få en liten förståelse
              för språket. <br />
              <br /> Jag läste kurser som rymdteknologi, neurovetenskap,
              företagsledning, japanska och kurser kopplade till japanska
              samhället. I början av utbytesperioden fick man testa olika kurser
              och därefter välja fritt (med vissa krav som att läsa japanska).
              Därför var det möjligt att anpassa sina kurser så att man fick ett
              schema som kunde bestå av tre skoldagar och resten ledigt från
              föreläsningar. Alla kurser tillgodoräknade jag som fria kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det kan finnas en del oklarheter kring praktiska saker som till
              exempel att fixa telefonabonnemang eller skaffa bankkort. Detta är
              dock saker som alltid löser sig och man får hjälp med det när man
              är på plats så det är ingen stress egentligen.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade definitivt valt Japan, det är ett fantastiskt land på
              många sätt. Om jag hade haft möjligheten skulle jag eventuellt
              valt ett universitet mer inriktat mot tekniska utbildningar.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Tokyo och TMU?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Spela lite Duolingo innan du åker till Japan, det är ganska
              underhållande och det gör att du kan njuta mer av Japan när du väl
              är där. <br />
              <br />
              Det är extremt smidigt att resa runt och hitta på alla möjliga
              saker i Japan. Tyvärr är det inte jätte billigt jämfört med vissa
              andra asiatiska länder, det kan därför vara önskvärt att ha sparat
              lite extra pengar för att kunna resa runt.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Partneruniversitetet fixade boende åt en. Jag bodde i en av de två
              områdena där TMU hade lägenheter, kallat Chofu. Där bodde killar
              och tjejer i separata sektioner men i samma byggnad och gemensamt
              kök. Varje sektion hade ett antal lägenheter som man delade tre
              och tre . Man hade varsitt sovrum med säng, ett litet kylskåp,
              skrivbord och garderob. Dusch, toalett och tvätt delade man med de
              andra två i lägenheten. <br />
              <br />
              Boendet betalades direkt i klumpsumma innan ankomst till Japan,
              det kan därför vara bra att planera för detta. Kostnaden var ca 18
              000 kr för hela terminen inklusive en deposition som större delen
              försvann av för diverse ofrånkomliga avgifter vid återbetalning.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              För att åka till Japan krävdes mycket pappersarbete. Det var flera
              olika formulär som skulle skickas bland annat till
              partneruniversitetet men även immigrationbyrån. <br />
              <br /> Visum behövde man ansöka om och sedan hämta ut personligen
              ifrån japanska ambassaden i Stockholm. <br />
              <br /> En hälsodeklaration ska skickas in med dokumenten till
              partneruniversitetet. I deklarationen ska man även inkludera
              lungröntgen, detta kostar dock extra och eftersom vi i Sverige
              inte har några kända lungsjukdomar så brukar det räcka med att
              läkaren markerar dessa som okej. Hälsodeklarationen utan
              lungröntgen kostar ungefär 1300 kr.
              <br />
              <br /> Det var mycket pappersarbete så se till att följa angivna
              deadlines. Allt från att boka tid för hälsodeklaration till att
              söka visum tar lite tid så skjut inte upp det för mycket.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att äta där var betydligt billigare än i Sverige. Lunch köper man
              billigt på skolan och det hade varit fullt möjligt att äta middag
              ute de flesta dagarna. En av de största utgifterna var förmodligen
              de transporter som krävdes till och från skolan varje dag och för de
              egna utflykterna. I övrigt skiljer sig inte priserna allt för
              mycket jämfört med Sverige. <br />
              <br />
              Det är grymt att resa runt i Japan. Det är ett land med extremt
              mycket att se och göra och man kan ta sig långa sträckor snabbt
              med deras snabbtåg. För att uppleva så mycket som möjligt
              rekommenderar jag verkligen att söka stipendier. Man kan få ganska
              många tusen på bara ett par timmars arbete. Sök högt och lågt, jag
              lyckades till exempel få ett stipendium för att jag är född i en
              grannkommun till Göteborg. Det värsta man kan få är ett nej.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Bara åk, du kommer inte ångra dig! Se också till att lägga några
              timmar på att söka stipendier. Det krävs ganska lite tid för att
              ansöka och möjligen få ganska mycket pengar.
            </p>
          )
        }
      }
    ]
  };
  const emma = {
    profileCover: {
      img: "emma.jpg",
      backgroundImg: "emmaBanner.jpg",
      title: "University of Wollongong (UOW), Australien",
      subtitle: "Emma Fahlman | VT-17 | Centrala avtalen",
      quote:
        "“Varje skoldag avslutades på stranden som låg ca 20 min promenad från skolan”",
      name: "- Emma Fahlman"
    },
    images: {
      img1: "australia1.jpg",
      img2: "australia2.jpg",
      img3: "australia3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Oj, allt! Ny kultur, få miljöombyte efter 4 års studier i
              MIT-huset, helt andra kurser plus att man även har tid att
              semestra!
              <br />
              <br /> Varje skoldag avslutades på stranden som låg ca 20 min
              promenad från skolan. Köpte begagnad surfbräda via Facebook vilket
              gjorde att dagarna bestod av mycket mer än bara plugg.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Om man åker till Australien så är det bra att veta att det går åt
              mer pengar än i Sverige, då boende/mat osv är dyrare. Så kan vara
              bra att försöka spara ihop lite innan man åker.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              På UOW fanns det en hel del kurser inom interaktionsteknik. Men
              även rena grafiska eller fritt kreativa kurser. Kurserna var
              absolut inte svåra att klara. På UOW har de helt annan struktur på
              kurserna, så när man kommer från ID är man van att plugga hårt och
              sitta sent på kvällarna med ex. envarren. Här klarade man kurserna
              om man var med under de timmar som gällde, var oftast inga
              uppgifter som skulle göras utanför föreläsningstiderna.
              <br />
              <br /> Jag läste kurser inom fotografi, teater, kreativ historia
              och film/mediekunskap. Alla kurser var fria kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              När man ansöker till kurser i Australien så öppnas de under
              “slot-tider”, dvs ett först-till-kvarn system. Där gäller det att
              man väljer ett kalenderblock under veckan per kurs, för att sedan
              fylla ut med sina fyra kurser per vecka. Är man sen kanske det
              inte finns kvar någon tid, vilket då gör att man kanske får läsa
              kursen på kvällen eller i värsta fall byta kurs. Det är bra att
              veta om man ska plugga på UOW iallafall!
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade definitivt valt UOW om jag hade turen att få åka till
              samma ställe en gång till! Aldrig träffat så öppna och välkomnande
              människor. Dessutom hade många av kurserna stort fokus på
              kreativitet, vilket var ett väldigt härligt avbrott från matte och
              utveckling i Umeå. Sen att naturen och omgivningen är helt OTROLIG
              är såklart också ett plus!
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Australien och UOW?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att spindlar finns överallt, men så länge de är stora eller håriga
              så är de troligtvis inte dödliga.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Då jag reste tillsammans med min kille ansökte vi om en gemensam
              lägenhet via universitetet. UOW har ett system där man kan ganska
              enkelt ansöka om studentboenden. De är lite dyrare dock, vår hyra
              var 10.000 kr/mån för en etta men den låg på universitetsområdet
              vilket var toppen. <br />
              <br />
              Reser man själv skulle jag rekommendera att kolla andrahandsboende
              eller inneboende. I Australien är de extremt välkomnande och tar
              gärna in folk att bo hos dem ganska billigt!
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Visum är krav för att resa in i Australien. Då jag varit där
              tidigare kunde jag inte ansöka om ett “Work and Holiday” visum,
              vilket är det vanligaste. Jag ansökte istället om ett studentvisum
              vilket krävde bevis från Umeå att jag skulle studera där. De
              papperna tog någon dag att fixa men efter det så tog det bara
              någon dag att få visumet godkänt. Inga andra deklarationer behövs
              egentligen för att resa in. <br />
              <br />
              Vi hade ca en månad på oss på grund av olika omständigheter vilket
              gjorde att hela processen var tvungen att gå ganska snabbt. Men
              även med den korta tiden gick det smidigt då vi hade jättebra
              mailkontakt med personer från servicedesk vid UOW.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det är generellt lite dyrare än i Sverige, men sen finns det så
              otroligt mycket att göra där också vilket gjorde att det gick åt
              lite mer pengar. Att leva snålt går absolut, men mitt tips är att
              unna dig upplevelser också om du ändå reser iväg!
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Do it!!! Men se till att reka innan hur kursupplägget är och vilka
              visum som behövs. Sen OM du får lägga ditt eget schema, försök
              förlänga helgen så du hinner åka på lite längre utflykter i det
              land du far till.
            </p>
          )
        }
      }
    ]
  };
  const linus = {
    profileCover: {
      img: "linus.jpg",
      backgroundImg: "linusBanner.jpg",
      title: "Karlsuniversitetet, Prag i Tjeckien",
      subtitle: "Linus Lagerhjelm | HT-17 | Erasmus",
      quote:
        "“Många spännande och intressanta kurser man inte får möjlighet att läsa i Umeå”",
      name: "- Linus Lagerhjelm"
    },
    images: {
      img1: "prague1.jpg",
      img2: "prague2.jpg",
      img3: "prague3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Många spännande och intressanta kurser man inte får möjlighet att
              läsa i Umeå. Allting var väldigt billigt i Tjeckien med.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Boendet var väldigt sunkigt och alla som jobbade där pratade
              endast Tjeckiska.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var inte alls svårt att hitta kurser som passade till min
              utbildning. Däremot pluggade jag ca 70h i veckan för att klara dem
              men tror man hade kunnat läsa lite lättare kurser. Läste främst
              kurser om Artificiell intelligens och neurala nätverk. Alla mina
              kurser tillgodoräknades som fristående.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Se till att fylla i Umeås learning agreement och inte bara det
              från Karlsuniversitetet.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade nog valt samma ställe. Främst p.g.a kurserna men också
              för att Prag är väldigt fint och jag hade väldigt trevliga
              rumskompisar som jag fortfarande har god kontakt med.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Tjeckien och
              Karlsuniversitetet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Folk är inte överdrivet bra på engelska. Man får också vara beredd
              på mycket byråkrati.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Universitetet fixade boende som var rätt så centralt. Där delade
              jag rum med en annan person och vi delade kök+badrum med två
              andra. Kommer inte ihåg exakt hur mycket det kostade men ca 1600:-
              i månaden.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Behövde fylla i en ansökan till Umeå, en till Tjeckien, ett
              learning agreement och göra ett språktest. Samt fixa med alla
              papper för att få hyra ut lägenheten medan jag var borta. <br />
              <br />
              Rent tidsmässigt så var det alla blanketter som tog tid. Annars
              var det bara att packa och åka.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: <p className="info-body-text">Det var väldigt billigt.</p>
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Välj inte bara intressanta kurser, ta några lite lättare så du
              hinner ha roligt också.
            </p>
          )
        }
      }
    ]
  };
  const lovisa = {
    profileCover: {
      img: "lovisa.jpg",
      backgroundImg: "lovisaBanner.jpg",
      title: "Nanyang Technological University, Singapore",
      subtitle: "Lovisa Carlsson | HT-17 | Centrala avtalen",
      quote:
        "“Min utbytestermin kommer jag alltid att minnas som en av de roligaste och mest utmanande perioder i mitt liv”",
      name: "- Lovisa Carlsson"
    },
    images: {
      img1: "singapore3.jpg",
      img2: "singapore1.jpg",
      img3: "singapore2.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: <p className="info-body-text">
          När jag skulle bestämma mig för vilket land och universitet jag ville åka till skrev jag en lista 
          på vad jag ville göra under mitt utbyte. Jag ville; bli bättre på engelska, åka till ett land med mycket sol och värme, resa till olika länder, läsa roliga 
          kurser och träffa nya människor från olika delar av världen. Det bästa med att åka utomlands var 
          att jag fick uppfylla allt detta. <br/><br/> I singapore är modersmålet engelska 
          även kallat  “Singlish” (Singaporianer har sin egen dialekt och en del egna ord). Detta innebar att 
          det var lätt att förbättra min engelska. I en av de kurserna jag läste var vi 7 studenter 
          varav alla var från USA, inklusive professorn. Varje vecka skrev vi en kortare rapport och hade diskussioner på engelska om ämnen relaterade till konst och musik.<br/><br/> Singapore är ett VÄLDIGT 
          varmt land med hög luftfuktighet, kändes ovant men kroppen mådde superbra av all D-vitamin! Det 
          fanns en pool på campus där vi hängde mycket och kunde svalka oss.<br/><br/>Under min termin hann jag göra många resor, 
          Singapore ligger nära många spännande länder och flygbiljetter kan man få tag på 
          billigt. Jag hade kurser i skolan tisdag-torsdag och kunde därför resa fredag-måndag. Följande 
          länder hann jag besöka; Malaysia, Thailand, Indonesien och Japan.<br/><br/> Kurserna jag läste i Singapore var roliga och givande. Jag 
          läste 3 designkurser, 1 kurs i spelprogrammering samt 1 sångkurs. Professorerna var väldigt 
          duktiga och de la ner tid och energi på att se till att vi utvecklades och blev bättre. Eleverna var 
          väldigt drivna och även dem bidrog med kunskap och hjälp.<br/><br/> Sist men inte minst så fick jag superfina 
          vänner i Singapore. Vi var ett tjejgäng från olika delar av Europa som alla bodde i samma korridor. 
          Vi höll ihop under terminen och gjorde allt tillsammans!

          </p>

        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag fick utmana mig själv en hel del under terminen, exempelvis bo
              i korridor och dela toalett och dusch med andra. Luftfuktigheten var
              också ganska påfrestande, man svettas mycket och fick dricka
              kopiösa mängder vatten. Det fanns en del kryp och "djungeldjur" på campus och jag
              lärde mig att jag inte gillar kryp, ormar, möss osv…
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: <p className="info-body-text">
          På NTU räknas hp som AU. De flesta kurser ligger på  4 AU som motsvarar 7.5 hp eller 3 AU 
              som motsvarar 5.7 hp. Jag läste 1 kurs på 4AU och 4 kurser på 3 AU, detta motsvarar alltså 
              30.3 hp. Jag kunde tillgodoräkna alla mina kurser när jag kom hem. En kurs fick jag 
              tillgodoräknad under kategorin “Teknik för interaktion, yrkesförberedande” och resterande 
              under kategorin “Fria kurser”.<br/><br/> Jag läste alla mina kurser på “School Of 
              Art Design and Media”, det är den del av NTU som erbjuder designkurser. Det går att läsa 
              kurser på andra delar av NTU, exempelvis “School of Computer Science and Engineering”. Jag 
              valde att läsa designkurser då jag ville bredda mina kunskaper inom UI och UX design. En 
              fördel med att läsa på designskolan är att man inte har några tentor och därmed slutar man 
              skolan 2 veckor tidigare än alla andra. Istället för tentor har man projektredovisningar.<br/><br/>
              När man blir antagen till NTU har man innan terminsstart möjlighet att ansöka om vilka kurser man vill 
              läsa. Man är dock inte garanterad att få läsa dessa kurser. När man kommer till universitetet har man under 2 
              veckor något som kallas för Add/Drop period. Under dessa veckor kan man gå på valfria föreläsningar 
              och lägga till kurser och ta bort kurser i sitt schema. Det är först till kvar på kurserna så det är 
              lite som “hunger games” i början av terminen. Därför är det bra att i förväg 
              kolla upp vad det finns för kurser och ta reda på vilka som du har möjlighet att läsa. Jag hade tur och 
              blev antagen på alla de kurser jag ansökte till innan terminen började. Jag bytte sedan ut två av 
              kurserna under Add/Drop period. Det var även under Add/Drop som jag optimerade mitt schema och såg till att jag 
              läste kurser tisdag-torsdag.<br/><br/> Generellt vad som är positivt är att NTU har ett brett utbud av roliga kurser!
              Jag läste följande kurser: “Game design”, “Sound for interactive media”, “Graphical 
              communication”, “Digital painting” och “Magic of the voice in a world of a singer”.
          </p>
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
            Finns det något du hade velat veta innan du åkte på utlandsstudier

              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Tror inte det! Jag såg till att kolla upp allt med försäkring,
              CSN, Vaccin osv efter att jag hade blivit antagen.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade helt klart valt Singapore! Värmen, resorna, skolan och
              vännerna gjorde min vistelse i Singapore till en av de bästa
              perioderna i mitt liv! :)
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Singapore och NTU?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Förbered dig på en termin av extrem värme och luftfuktighet! Det
              kan vara mer påfrestande än vad man tror. Om du är vegetarian är
              det bra att vara förberedd på att campus inte erbjuder många
              vegetariska måltider tyvärr… Singaporianer älskar socker och
              friterat och mycket av maten som serveras på campus är inte den
              nyttigaste. Därför är det bra att köpa bestick och tallrik när man
              kommer till campus så att man kan göra en sallad då och då.
              <br />
              <br />
              Kan vara bra att kolla upp hur lagar fungerar i Singapore, de har en
              del strikta regler. Man får inte dricka eller äta i
              kollektivtrafiken och man får inte slänga skräp på gatorna. Detta
              kan resultera i höga böter. I princip alla platser i Singapore är
              kameraövervakade, detta tyckte jag dock var bra då jag kände mig
              trygg hela tiden.
              <br />
              <br />
              Som tidigare nämnt kan det vara bra att kolla upp hur Add/Drop
              period ser ut på NTU, för att minimera stressen de två första
              veckorna.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Man kan antingen ansöka om boende på Campus eller gå ihop några
              stycken och hyra en lägenhet mer centralt. Man är ej garanterad boende på
              Campus men alla jag känner som ansökt om boende har fått det.
              Boende i Singapore är extremt dyrt, speciellt om man vill bo i de
              centrala delarna. Boende på Campus är väldigt billigt och därför
              väljer många som vill resa under terminen detta alternativ.
              <br />
              <br />
              På Campus kan man ansöka om att få bo i ett eget rum eller dela
              rum med en person (man har ej möjlighet att önska vem man vill bo
              med). Man kan även ansöka om rum med eller utan AC (AC är starkt
              rekommenderat i den extrema värmen). Jag bodde i ett delat rum med
              en tjej från Frankrike, inte det lyxigaste boendet men det funkade
              under en en termin. Vi delade dusch och toaletter med de andra i
              korridoren, vilket var väldigt ovant. Dock har de personal som
              städar duschrummen varje dag. Vi hade även tillgång till
              tvättmaskiner, de gjorde knappt kläderna rena och därför är ett
              tips att inte ta med sig kläder som man är rädd om. <br />
              <br />
              En fördel med att bo på campus är att man har nära till
              skollokalerna. Bor man i de centrala delarna av Singapore tar det
              ca 45 minuter att ta sig till campus med kollektivtrafiken. Bor
              man på campus köper man alla måltider i någon av foodcourten som
              det finns gott om. Finns även Starbucks, MCdonalds och andra
              snabbmatsrestauranger på campus.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag behövde ansöka om CSN, kolla upp vilka försäkringar jag
              behövde, vaccinera mig, ansöka om boende på campus, ansöka om
              studentvisum, söka stipendier och boka flygbiljett. Ansöka om
              boende och studentvisum gör man då man blivit antagen till NTU.
              Man får då tillgång till deras portal där man får anvisningar om
              hur man ska gå till väga. Detta tog inte allt för lång tid. Man
              behöver ej åka till ambassad eller liknande för att få sitt Visum,
              det får man när man är på plats i Singapore.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Rent ekonomiskt klara man sig bra i Singapore. Det beror helt på
              hur man väljer att bo och hur mycket man reser runt. Utelivet och
              alkohol är väldigt dyrt i Singapore, om man är tjej finns det
              något som heter “Ladies night”, under dessa kvällar är inträde
              till nattklubbar och alkohol gratis för kvinnor. Ett tips är att
              söka stipendier för att täcka tråkiga kostnader som försäkring och
              vaccin. Jag sökte 3 och fick 1, tog inte allt för lång tid.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Åk! Tveka inte! Ingenting är omöjligt! Min utbytestermin kommer
              jag alltid att minnas som en av de roligaste, mest larorika och
              utmanande perioder i mitt liv. Gör en lista på vad du vill få ut
              av din utbytestermin och sök till ett land/universitet som passar
              dig!
            </p>
          )
        }
      }
    ]
  };
  const magnus = {
    profileCover: {
      img: "magnus.jpg",
      backgroundImg: "magnusBanner.jpg",
      title: " Tekniska universitet i München TUM, München i Tyskland",
      subtitle: "Magnus Emanuelsson | HT-18 | Erasmus",
      quote: "“Kulturen här och staden är fantastisk”",
      name: "- Magnus Emanuelsson"
    },
    images: {
      img1: "tyskland1.jpg",
      img2: "tyskland2.jpg",
      img3: "tyskland3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Miljöombyte, lära sig ny kultur, lära känna folk, bättre på
              engelska, bra fotboll, nära till alperna, grymma pubar, osv.
              <br />
              <br />
              Oktoberfest måste upplevas om man åker till Tyskland, även alperna
              och så måste man se en Bayernmatch.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att fixa allt inför resan, hitta kurser (väldigt problematiskt i
              Tyskland), boende (näst intill omöjligt i München), Kolla upp allt
              med stipendium, väl i Tyskland så är det mycket att fixa och många
              har svårt för engelska. Att deras termin sträcker sig över delar
              av höst och delar av vårterminen hemma, så de var ett måste att
              läsa sommarkurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var svårt att hitta passande kurser, men inte för våran
              utbildning eftersom 30hp är fria men för att vi var tvungen att
              läsa på engelska vilket tog bort 99% av kurserna. Sedan hade vi
              som krav att läsa 60% inom informatik. Förutom det så fick man
              själv hålla koll så att inte föreläsningarna krockade med andra
              kurser man läser. Ifall 2 tentor var samtidigt så gick inte de att
              lösa utan då blev de omtenta 2 månader efter vi var tillbaka i
              Sverige.
              <br />
              <br /> Läser en tyskakurs, en ekonomikurs samt 4 informatikkurser.
              Inte pluggat klart än så har svårt att veta hur svåra kurserna är.
              Tentorna är mellan 1-2 timmar och väldigt stressiga sägs det. Hur
              svår tentorna är tror jag beror på vilken kurs man läser, som det
              är hemma. Ska ta alla kurser som fria kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Vem man ska prata med, hur de fungerar med deadlines (var tydligen
              oväsentliga för oss så aldrig för sent att söka), hur svårt det
              var att hitta boende, hade gärna haft någon att prata med som
              varit i just samma stad.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Skulle absolut valt samma, kulturen här och staden är fantastisk.
              Det finns mycket att göra, vädret är bra och de är nära till det
              mesta. Hade gärna kunnat tyska eftersom man blir lite exkluderad
              då man enbart pratar engelska. Sedan har dem ett av världens bästa
              fotbollslag som man måste se ifall man åker hit.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Tyskland och universitet
              i München?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det är väldigt likt i Sverige, de har 3 olika typer av kurser.
              Föreläsningskurser, praktiska kurser samt seminarier kurser. Där
              de praktiska måste sökas långt innan dem andra. Var med på
              aktiviteter i början av året och lär känna folk, gå på oktoberfest
              och va där tidigt på dagarna. Framförallt, hitta boende i god tid.
              Även att universitet har många campus, ett av dem är 2 timmar bort
              med tåg.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Vi hade en kontakt som via en kontakt via ytterligare 3 kontakter
              lyckades lösa det. Var nära att vi stannade hemma för vi inte
              hitta något. Priset är omkring 18000 för en 2 rok, det får man
              räkna med om man ska bo i München. Vi är 3 st som delar så de blir
              rimligt. Vi bor nog på ett av de bättre ställena i München. Det är
              mitt i centrum och nära till allt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Stipendier, hyra ut lägenheten, söka kurser. Tyskland är väldigt
              likt Sverige, telefon går att ha samma som i Sverige, vårdcentral
              och dylikt är gratis. Inge vaccin och inget visum krävs. <br />
              <br />
              Med söka kurser och allt runtomkring så tog det minst 40 timmar
              för att göra alla förberedelser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ungefär som hemma, generellt är mat lite dyrare på restauranger
              men tex gå på krogen är billigare.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Åk gärna flera stycken, det är skönt att kunna prata svenska.
              Kolla upp staden innan, om de är möjligt att få boende, kontakta
              någon som varit iväg på utbytestermin.
            </p>
          )
        }
      }
    ]
  };
  const marc = {
    profileCover: {
      img: "marc.jpg",
      backgroundImg: "marcBanner.jpg",
      title: "Stellenbosch University, Sydafrika",
      subtitle: "Marc Conquand | HT-17 | Via CS sektionen",
      quote: "“Sydafrika är magiskt. Finns inget vackrare ställe på jorden”",
      name: "- Marc Conquand"
    },
    images: {
      img1: "afrika1.jpg",
      img2: "afrika2.jpg",
      img3: "afrika3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Billigt, vackert och man kan surfa. <br />
              <br /> Det bästa minnet var på en bussresa för att besöka min
              flickvän på den tiden. På bussen träffade jag en snubbe som vi
              senare bodde hos och han visade oss allt möjligt. Vi festa,
              vandra, surfa mm. Var magiskt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: <p className="info-body-text">Blev rånad.</p>
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var ganska svårt att hitta passande kurser, fanns computer
              vision och funktionell programmering vilket jag kan rekommendera.
              Sen fanns en fotokurs som jag också kan rekommendera. Inga
              designkurser.
              <br />
              <br /> Kurserna var inte svåra och de var fria kurser som jag fick
              dem tillgodoräknade som.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ja, jag hade valt samma varje gång. Sydafrika är magiskt. Finns
              inget vackrare ställe på jorden.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Sydafrika och
              Stellenbosch university?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Börja i tid med visum och kolla upp säkerhetsreglerna. VAR INTE
              UTE PÅ NATTEN! Uber är svinbilligt.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Lätt att fixa. Betala 3k i månaden. Se till om du går utanför
              avtalen att du ändå har kontrakt för visum.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Behövde fixa visum, vaccin och hälsodeklaration. Det tog tre
              veckors intensivt arbete så börja i tid!
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Billigt, mat och taxi kostade ingenting.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Var mycket jobb med visum och tight med tid. Börja långt innan och
              titta upp kraven och fixa några av grejerna innan även om du inte
              blivit accepterad. Normalt sett måste man ha en biljett ut ur
              landet. Vad du kan göra är att boka en ombokningsbar biljett så
              kan du bestämma vars du vill resa runt efteråt.
            </p>
          )
        }
      }
    ]
  };
  const matilda = {
    profileCover: {
      img: "matilda.jpg",
      backgroundImg: "matildaBanner.jpg",
      title: "Universitat Politècnica de Catalunya, Barcelona i Spanien",
      subtitle: "Matilda Nilsson | HT-17 | Erasmus+",
      quote:
        "“Pulsen i staden och att få testa på att bo i ett annat klimat är nog det jag tar med mig mest från min tid i Barcelona”",
      name: "- Matilda Nilsson"
    },
    images: {
      img1: "barca1.jpg",
      img2: "barca2.jpeg",
      img3: "barca3.jpeg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Oj den här blir svår, hela min Barcelona resa är ett så stark
              minne i sig. Hela intrycket av staden, människorna jag träffade
              där, maten, nattlivet, shoppingen men sen framförallt pulsen i
              staden och att få testa på att bo i ett annat klimat är nog det
              jag tar med mig mest från min tid i Barcelona. <br />
              <br /> Även alla erfarenheterna som det bär med sig samt chansen
              att utveckla sin engelska. Sen att få andra perspektiv från både
              Sverige men också sin utbildning var rätt nyttigt tyckte jag.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att en del saker lätt uppfattas som röriga för man inte har 100%
              koll på allt, vilket lätt kan stressa upp en.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var inte svårt att hitta passande kurser för jag pluggade på
              deras Data-institution. Enda nackdelen var att där inte fanns ett
              jättestort utbud av kurser att välja på. <br />
              <br />
              De kurser jag läste var medelsvåra att klara. Det krävdes en del
              av studenten. Men gjorde du bara vad du skulle var det inga
              problem att klara sig. Alla delmoment vägde olika tungt och i
              slutändan räckte det att man hade totalt över betyg 5 (5-10 var
              godkänt). Det vill säga gjorde man väldigt bra ifrån sig på vissa
              moment krävdes det inte att man behövde göra alla moment
              (förutsatt att momentet inte var obligatoriskt). Jag hamnade i en
              sådan här situation då jag inte behövde göra en final exam i en
              kurs då jag låg på över 5 innan i det momentet. <br />
              <br />
              Jag läste: Computer Network Architectures and Network Management,
              Future Internet Networks, Internet Applications and Security,
              Viability of Business Projects, Web Services. Jag fick dem
              tillgodoräknade som teknik för interaktion - fördjupning (18p),
              fria kurser (12p).
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att allt löser sig tillslut ;). Nej men det hade varit skönt att
              ha en tydlig bild över vad som krävs att man gör innan avresa, en
              checklista till exempel.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag hade åkt tillbaka till samma ställe, är så nöjd med mitt val.
              Skolan var isåfall det enda som kändes lite som en besvikelse, men
              det var inte en av mina prioriteter med att åka på utbytesstudier.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Spanien och Universitat
              Politècnica de Catalunya?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Barcelona har tyvärr problem med ficktjuvar vilket gör att man
              måste vara väldigt observant med sina saker och hålla hårt i dem.
              <br />
              <br />
              Man kan skaffa ett Spanskt personnummer (NIE nummer), detta är
              inget krav för att befinna sig i landet men kan behövas om man
              vill göra vissa saker som till exempel skaffa sig ett spanskt
              bankkort. Jag skaffade inte detta.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Hyrde en lägenhet som ett par från Sverige ägde, och fixade denna
              via kontakter hemifrån.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Behövde inte göra några förberedelser direkt. En av de största
              fördelarna med att åka till Europa, du bokar ditt flyg och packar
              din väska sen är det bara att dra. Sen så klart finns det en del
              småsaker att fixa, men inga krav på visum eller
              hälsoundersökningar etc. Men ett hett tips är ju helt klart att
              söka stipendier, ytterligare en stor fördel där man åker via
              Erasmus+ är att du får ett stipendium på 15 000kr (70% får du vid
              avresa och regerande 30% när du är klar med din termin). <br />
              <br />
              Spenderade sommaren (efter att jag fick reda på att jag kom in)
              att kolla boende, fixa med skolan samt att förbereda mig inför
              flytten.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Generellt var det billigare än Sverige.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              ÅK! Bara gör det, du kommer inte ångra dig. Utan ta istället
              chansen när du väl får möjlighet att göra en sån här grej. Och en
              viktig sak, vill du åka utomlands så kommer du kunna göra det
              (!!), det finns så otroligt många avtal att åka med så ge inte
              upp.
            </p>
          )
        }
      }
    ]
  };
  const mans = {
    profileCover: {
      img: "mans.jpg",
      backgroundImg: "mansBanner.jpg",
      title: "University of Twente, Nederländerna",
      subtitle: "Måns Hellgren | HT-18 | Erasmus+",
      quote:
        "“Man kan tycka att man är borta lång tid, men tiden går alldeles för fort när man väl är där”",
      name: "- Måns Hellgren"
    },
    images: {
      img1: "nederlanderna1.jpg",
      img2: "nederlanderna2.jpg",
      img3: "nederlanderna3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Träffa nya spännande människor, få chansen att läsa andra ämnen än
              vad som erbjuds hemma i Umeå, se nya platser, möta andra kulturer
              och äta ny mat. I mitt fall var det också generellt lite
              billigare, så jag fick mer pengar över till upplevelser, äta ute
              med mera. <br />
              <br />
              Jag hade även möjligheten att regelbundet dra iväg på resor med
              underbara människor. Erasmusresan till Prag var höjdpunkten skulle
              jag säga. Inte mycket sömn den helgen.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Om man är van vid att ens vecka består av tydliga vardagsrutiner
              och trivs i det kan det ta ett tag innan man hittar nya just pga
              allt nytt som flytta utomlands innebär.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              I mitt fall var det enkelt att hitta kurser då jag hade fria
              kurser kvar och inte behövde matcha något specifikt. <br />
              <br />
              Första kursen gick fint och var inte speciellt svår, den andra var
              ungefär som en kombination av linjär algebra-kursen och AI-kursen
              i svårighet, dvs lugnt bara man gör det man ska. <br />
              <br />
              Jag läste följande kurser: <br />
              201600094 - ”Going viral” 15 hp - marknadsföring +
              kommunikationsvetenskap. Blandning teori + projekt. Berör även
              lite kognitionsvetenskapliga teorier <br />
              201700271 - ”Web science” 15hp - kurs inom fakulteten computer
              science. Riktigt cool kurs som berör hur information flödar i
              nätverk, vad man kan dra för slutsater kring individers beteenden
              i dem m.m. även en del om spelteori.
              <br />
              <br /> Alla kurser gick som fria kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att boende som internationell student inte var jätteenkelt att få
              tag på. Med det sagt hittade jag ändå ett toppenboende till slut.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag sökte Humber college i Kanada, men kom inte in där. Hade jag
              gjort det hade jag mest troligt åkt dit.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Nederländerna och
              University of Twente?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Man bör leta boende i tid. Många studentboenden bestämmer själva
              vilka de tar in utifrån de som anmält intresse, och många tar
              därför endast in de som pratar holländska. De flesta
              internationella hittar dock boende innan de börjar, men bra att
              vara ute i tid ändå. <br />
              <br />
              Generellt för Nederländerna är också att de ogillar Visa och
              mastercard. Stora butikskedjor och de flesta restauranger tar dem,
              men annars är det Maestro som dominerar. Var beredd på att skaffa
              ett nederländskt bankkonto om du åker hit. En av fördelarna med
              Nederländerna är också hur centralt det är. Man når många
              europeiska städer inom 8 timmars buss/tåg. Ofta väldigt billigt
              också. Oroa dig inte kring språket. Nederländerna är bäst i
              världen på Engelska som andraspråk.
              <br />
              <br /> Cykel är ett måste, men inga problem att fixa när man väl
              kommer dit. Mycket är ganska likt Sverige, så vill man ha totalt
              miljöombyte till exempel skulle jag nog fundera på andra länder.
              Och just det, ingen risk för uppförsbackar likt Svingen. Du kan
              vara lugn.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Jag registrerade mig på den huvudsakliga bostadsförmedlaren
              Roomspot, men där svarade nästan alla boenden att de endast söker
              folk som pratar Holländska. Med längre kötid kan dock chansen öka
              då vissa boende delas ut efter kötid. Finns även andra
              bostadsförmedlare än roomspot. <br />
              <br />
              Jag hittade mitt boende via Camelot, en privat förmedlare som
              nyligen hade byggt massa nya lägenheter på Campus. De var ganska
              dyra till en början och när jag skrev på kontraktet, men har
              blivit lite billigare sedan dess. För mig var det deposition 2000
              euro (numera 1000) därefter 574 euro/månad (med alla
              service-kostnader inräknade). nuförtiden ligger priset för samma
              lägenhetstyp på ca 417 euro har jag fått reda på(kan dock
              variera). Lägenheten är en studio med eget kök, badrum och extra
              bred säng (160 cm verkar vara standard i byggnaden). finns även
              gemensamma utrymmen med Foosball, biljard, takterrass och biorum.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Stipendier är man garanterad som Erasmus-student. Den processen
              var väldigt tydlig från Umeå universitets sida, men krävde lite
              påskrifter av dokument. Representanten från Twente var dock ganska
              snabb på att svara. I övrigt behövdes inget specifikt. <br />
              <br />
              Började leta boende mitten på Maj. blev klart med boendet ca två
              veckor innan avfärd. Erasmus processen började andra halvan av Maj
              och var helt klar 5 augusti. Är man snabb hinner man dock med den
              innan sommarlovet.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Generellt billigare. Om din matbudget är ca 2500 hemma är den ca
              1500-2000 här nere. Det i kombination med extra CSN och stipendium
              gör att du inte behöver tänka jättemycket på hur du spenderar dina
              pengar. Man kan också söka bidrag från Nederländska staten om man
              har hög hyra. Hur mycket man får beror dels på om man är under
              eller över 23 år gammal och hur hög ens hyra är.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Go for it! Man kan tycka att man är borta lång tid, men tiden går
              alldeles för fort när man väl är där skulle jag säga. Och vill man
              passa på att besöka ställen man inte varit på i Europa är Erasmus
              ett riktigt bra alternativ.
            </p>
          )
        }
      }
    ]
  };
  const oskar = {
    profileCover: {
      img: "oskar.jpg",
      backgroundImg: "oskarBanner.jpg",
      title: "DTU, Danmark",
      subtitle: "Oskar Olausson | HT-18 | Nordtek",
      quote:
        "“Det bästa med att åka utomlands och studera var att träffa nytt spännande folk och ta del av deras erfarenheter”",
      name: "- Oskar Olausson"
    },
    images: {
      img1: "danmarkOskar1.jpg",
      img2: "danmarkOskar2.jpg",
      img3: "danmarkOskar3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det bästa med att åka utomlands och studera var att träffa nytt
              spännande folk och ta del av deras erfarenheter. Läste även
              väldigt roliga kurser när jag var iväg. Det bästa minnet var
              Introfesten. Tyckte även att grupparbetena var riktigt roliga.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ansökan dit tyckte jag var krånglig samt att boendet var svindyrt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var skönt att jag inte hade några krav på vilka kurser jag
              behövde läsa så det var inte så svårt att hitta kurser som passar
              in på ID. Jag läste kurser inom Matte, data och speldesign. Alla
              kurser gick som fria kurser i tillgodoräknandet.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att man kan få CSN i förskott om man har något dyrt att betala i
              början på terminen.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Samma ställe två gånger känns tråkigt. Kanske hade valt något
              utanför Europa.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Danmark och DTU?
            </p>
          ),

          info: (
            <p className="info-body-text">
              Boendet som de tillhandahåller är sjukt dyrt. 24000 i deposition
              som man inte får tillbaka innan vistelsen slut. Prata med Lennart
              Johansson om du är intresserad, skicka ett till mail om folk inte
              svarar.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Svårt att säga hur lång tid det tog det var många små saker på
              lång tid. Jag behövde fixa någon försäkrings grej och anmälde mig
              till stipendium.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: <p className="info-body-text">Dyrt</p>
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: <p className="info-body-text">Gört!!</p>
        }
      }
    ]
  };
  const simon = {
    profileCover: {
      img: "simon.jpg",
      backgroundImg: "simonBanner.jpg",
      title: "Köpenhamns Universitet, Danmark",
      subtitle: "Simon Asp | HT-18 | Nordlys",
      quote:
        "“Köpenhamn är väldigt fint och lätt för kompisar att hälsa på, så det blev mycket sånt”",
      name: "- Simon Asp"
    },
    images: {
      img1: "danmarkSimon1.jpg",
      img2: "danmarkSimon2.jpg",
      img3: "danmarkSimon3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Att få se annat, tänka på nya sätt och komma ur bubblan lite
              grann. Det känns som man får tänka mycket på sig själv och det kan
              vara bra, att man inte bara tänker/gör som alla andra i sin klass
              i Umeå t.ex. Det är även najs att slippa sitta i MIT varje dag.
              <br />
              <br />
              Att få utnyttja Köpenhamns universitets studentidrottsförening,
              KSI. De har massor med sporter man kan prova på och få en lärare
              i, för ganska billiga priser. Jag gick på klättring och simning,
              det var supernice! Och Köpenhamn är väldigt fint och lätt för
              kompisar att hälsa på, så det blev mycket sånt. Gillar all konst
              som finns tillgänglig i Köpenhamn.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Just mitt universitet passade mig inte jättebra, jag kollade inte
              så mycket på kurserna eller ”profilen” på universitetet, utan såg
              bara att det fanns lite kurser jag kunde ta, och åkte dit. Sen
              visade sig Köpenhamns Universitet vara väldigt teoretiskt och inte
              riktigt vad jag är van med.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var svårt att hitta kurser som passade. Det är väldigt
              teoretiskt och matematiskt. Bra om man verkligen vill gräva djupt
              i datavetenskap, men jag kände att jag inte riktigt ville göra
              det. Det fanns inga designkurser att läsa, men lyckades hitta en
              kurs som heter ”Innovation in Nature”.
              <br />
              <br /> Hade jag läst de lite tyngre datavetenskap kurser så tror
              jag det hade varit riktigt svårt. Jag läste bara en kurs i början
              och det kändes även lite svårt. Men sen har de typ lite annorlunda
              system med två stycken höstlov, och inte alla kurser har tentor,
              så stressade som tusan i början och sen var jag ganska mycket
              ledig i mitten av terminen och det kändes lite för chill.
              <br />
              <br /> De kurser jag läste var Natural Language Processing,
              Visualisering av data, och ”Innovation in Nature”. Två
              datavetenskap kurser och en typ biologi-multidisciplinär. Kurserna
              går in under både fria kurser och teknik inom interaktion tror
              jag.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Mer om universitetet. Jag gjorde dock min ansökan i sista sekund
              vilket inte var så smart, bara tog något som lät OK, men borde ha
              spenderat mer tid att faktiskt kolla vart jag ville åka. Man borde
              ha känslan av att ”dit vill jag åka för att läsa det här”.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Danmark hade varit ok igen, men isåfall hade jag velat komma in på
              en designskola eller liknande. I Danmark är skolorna väldigt
              separerade till skillnad från typ Umeå där man kan läsa både
              design och teknik osv. Man måste bli antagen till en specifik
              designskola om man vill läsa det. Känner att DTU hade varit mer
              nice rent skolmässigt, eller någon skola i Nederländerna.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Danmark och Köpenhamns
              universitet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var lätt att ansöka, till skillnad från Sydkorea, det var lite
              mer process. Men ha koll på deadlines bara och snacka med de som
              har hand om ditt utbyte. Lennart på TFE som hade hand om Danmark
              var väldigt lätt att ha att göra med.
              <br />
              <br /> Tänk på att man kan få SU (som Svenska CSN, fast det är
              inget lån, man får pengar gratis!!!, men man måste skaffa ett
              danskt jobb på 10h per vecka, vilket jag inte hade).
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Boende i Köpenhamn är ganska svårt. Universitetet är väldigt
              centralt beläget, och där är det dyrt med boende. Jag valde att
              hitta boende privat, för det skolan kan erbjuda tyckte jag vara
              ganska dyrt för att vara delade rum. Jag har bott inneboende hos
              olika människor, och det är det man borde satsa på om man inte
              vill bo i dorms. Det är helt enkelt för dyrt och svårt att hitta
              en egen lägenhet. Men dorms är också sjukt nice om man vill träffa
              människor. Jag hittade mina boenden på facebook, la ut lite
              annonser, det var ganska drygt. <br />
              <br />
              Om det hade varit min första utbytestermin hade jag lätt valt ett
              dorm och betalat lite extra.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Behövde inte så mycket förberedelser, lite papper att fylla i, det
              var lätt att få hjälp från Umu. Allt som allt tog det ungefär en
              månad.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Dyrt, svenska kronan är svag mot danska så allt blir nästan 50%
              dyrare. Men det ordnade sig ganska bra ändå, en termin är inte så
              långt. Har man SU så klarar man sig nog kanonbra!
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Kolla upp skolan innan, så du hamnar i en kontext du tycker om.
              Och ta en plats du är intresserad av bara. Jag tror man kan känna
              sig lite utanför på vilken plats som helst om man är i fel
              kontext, så kolla upp det. Och tänk lite KBK också, var inte rädd
              för att göra fel heller, man tar alltid med sig något från sina
              äventyr!
            </p>
          )
        }
      }
    ]
  };
  const tonje = {
    profileCover: {
      img: "tonje.jpg",
      backgroundImg: "tonjeBanner.jpg",
      title: "Western University, London i Kanada",
      subtitle: "Tonje Lindmark | HT-17 | Centrala avtalen",
      quote:
        "“Det bästa var såklart alla de upplevelser man fick med sig och nya kompisar som man träffade”",
      name: "- Tonje Lindmark"
    },
    images: {
      img1: "KanadaTonje1.jpg",
      img2: "KanadaTonje2.jpg",
      img3: "KanadaTonje3.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              För det första var det väldigt roligt! Vi läser ju tio terminer på
              ID, och att få spendera en av dom på en annan plats än vid Umeå
              Universitet var ganska befriande. Men det bästa var såklart alla
              de upplevelser man fick med sig och nya kompisar som man träffade.
              Jag tror också att det kan vara bra att göra något så stort för
              sig själv om man inte gjort det tidigare, att vara borta i fyra
              månader i ett annat land var ganska mäktigt.
              <br />
              <br /> Mitt bästa minne var nog i början när vi var ett gäng som
              hyrde en bil och åkte genom landsbygden (bara majsfält!) till den
              vackra nationalparken Bruce Peninsula. Där gick vi på hikes, bodde
              i stuga och det var verkligen supermysigt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Man saknar sina nära och kära! Vidrig känsla att säga hejdå på
              flygplatsen. Men sen finns ju Skype och Facetime och sådär, man
              överlever absolut.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var svårt att hitta kurser som gick ihop med ID-utbildningen
              och jag hade valt några kurser som jag inte fick läsa. Men det
              gjorde inte så mycket att det inte blev helt rätt från början.
              Första dagen gick jag ett litet varv och pratade med några
              ansvariga så satte dom in mig på rätt kurs. Saker löser sig.
              <br />
              <br /> Det jobbiga med Kanada är att deras kurser motsvarar 6hp
              istället för 7.5hp, så man kan inte tillgodoräkna en hel termin.
              Jag läste därför en sommarkurs i Sverige för att inte hamna efter.
              <br />
              <br />
              Jag var tvungen att plugga varje dag, men behövde inte sitta 8h
              och heller aldrig på kvällar eller helger. Jag hade valt kurser
              som var ”undergraduate”, alltså inom de första tre åren för en
              Kanadensisk utbildning. De som är ”graduate” är svårare.
              <br />
              <br /> Jag läste en salig blandning av kurser. Fotografi,
              mediaanalys, modern webbteknik och en kurs i olika program för
              bildbehandling, film och ljud.Innehållsmässigt hade kurserna
              kunnat passa i breddning. Problemet är dock att kurserna är 6hp.
              Så allra smidigast var att tillgodoräkna dem som fria kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Saker löser sig! Man behöver inte oroa sig över kurser eller
              liknande!
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Kanada var enkelt att leva i för att det inte var så många
              kulturella skillnader, lite svagare kaffe typ. Men idag skulle jag
              vilja åka till ett land med en helt annan kultur för att få
              uppleva ännu mer nytt.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Kanada och Western
              university?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var väldigt varmt när jag åkte till Kanada (var i den
              sydligaste delen) men snö i december när jag åkte hem. Så man får
              packa för två årstider. Western University är också väldigt stort,
              och har ett samlat campus vilket är trevligt. Lärarna var också
              väldigt engagerade och jag blev verkligen intresserad av de kurser
              jag läste. Campuset har också en träningsanläggning som är gratis
              för studenter. Lunchen var enklast att köpa ute, det fanns inte så
              många micros. Kan rekommendera Tim Horton's som var prisvärt och
              fanns överallt.
              <br />
              <br /> Sen var staden London i sig kanske inte jätterolig, den har
              några barer, restauranger och klubbar i centrum. Men universitetet
              och studentlivet ägde verkligen upp. Sen ligger London bara 2h
              bussresa från Toronto som är en mycket trevlig stad om man vill
              uppleva mer kulturliv.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              Jag bodde på ”rez” som är studentbostäder. Det var obehagligt
              dyrt, 6 tusen i månaden och man var tvungen att betala alla fyra
              månadshyror innan man kom dit. Men de matchar rumskompisar sjukt
              bra! Man fyller i en enkät och så hamnar med likasinnade personer
              som diskar lika mycket, pluggar samma saker vill ha samma
              temperatur inomhus. <br />
              <br />
              Det fanns även privata bostäder i närheten av campus som man kunde
              söka och som var billigare.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Man behöver bara ansöka om ETA om man ska vara där mindre än 6
              mån. Tar 5 minuter att fylla i på webben. Jag kan inte uppskatta
              exakt hur lång tid det tog men i mitt fall var det verkligen inte
              mycket att göra.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det är ungefär samma som i Sverige.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Fråga någon som varit på stället du vill åka till för att få en
              bättre uppfattning om hur platsen och universitetet kommer passa
              dig. Även praktiska frågor! Det brukar underlätta väldigt mycket
              att höra från någon som varit iväg.
            </p>
          )
        }
      }
    ]
  };

  const viktor = {
    profileCover: {
      img: "Viktor.jpg",
      backgroundImg: "viktorBanner.jpg",
      title: "University of Manitoba, Winnipeg i Kanada",
      subtitle: "Viktor Åhlund | HT-17 | Centrala avtalen",
      quote: "“Tiden i Kanada är nog den tid jag växt mest som person”",
      name: "- Viktor Åhlund"
    },
    images: {
      img1: "WinnipegCanada2.png",
      img2: "WinnipegCanada3.jpg",
      img3: "WinnipegCanada1.jpg"
    },
    interviewText: [
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Tiden i Kanada är nog den tid jag växte mest som person. Att vara
              själv utomlands får en att “växa upp” vilket var sjukt nyttigt!
              Sen får man ju blanda resande, plugg och språkresa. Började på
              universitetet ganska snabbt efter gymnasiet så fick aldrig chansen
              att dra ut och backpacka som många andra kompisar gjorde. <br />
              <br /> Har även 3 minnen som kommer följa med mig väldigt länge:
              <br />
              <br />
              Mottagningsveckan var sjukt rolig. Det var grillkvällar, fester,
              vattenskidor, tävlingar och amerikansk fotboll. Sjukt kul och
              perfekt chans att lära känna nytt folk! <br />
              <br /> Campusområdet var också extremt coolt, är massor av gammal
              arkitektur och häftiga byggnader. Var lika häftigt varje dag man
              gick till skolan. <br />
              <br /> Tredje och det bästa var att jag åkte till Banff i 5 dagar.
              TIPS TIPS TIPS. Det ligger 4 timmar med flyg från Winnipeg, mitt i
              Rocky Mountains. Det var utan tvekan den häftigaste natur jag sett
              i mitt liv. Det är berg och kristallklara sjöar överallt. Vi hyrde
              dessutom en Jeep och lyssnade på countrymusik hela resan, sjukt
              nice! Lite svårt att förklara hur coolt det var, men nästan ett
              måste om man åker till Kanada.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Kommer faktiskt inte på något. Det är klart man saknar alla
              människor man har hemma men man hamnar som i sin egen bubbla och
              glömmer lätt bort allt sånt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Hur fungerade det med dina kurser som du läste?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var lite svårt att hitta kurser som skulle passa in på
              utbildningen faktiskt. Lyckades hitta en designkurs inom linjen
              som jag valde, annars var det lite knapert. Till exempel,
              CS-sektionen på UofM gick inte att söka till som utbytesstudent.
              <br />
              <br /> Det var inte direkt svårt att klara kurserna i Kanada. Jag
              gjorde valet redan innan jag åkte att jag ville “komma bort” från
              plugget ett tag, vilket gjorde att jag medvetet valde ganska enkla
              kurser, typ filmkunskap. Det blir vad man gör det till, hade
              kunnat välja lite mer givande och krävande kurser men det var
              inget jag var intresserad av just då. Något som var skönt med UofM
              var att deras betyg läggs på under kursens gång, så du kan i
              princip klara kursen innan tentan.
              <br />
              <br /> De kurser jag gick var en filmvetenskap kurs, en
              designkurs, en kurs om designens och kamerans historia(Vi fick
              göra en egen kamera, det var coolt), miljökurs och en
              historiekurs. Alla mina kurser tillgodoräknade jag under fria
              kurser.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Finns det något du hade velat veta innan du åkte på utlandsstudier
              som du inte visste då?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Planera i tid. Det blir onödigt stressigt om man, som jag, väntar
              med att fixa kurser, köpa ESTA osv. till sista dagarna innan
              flyget går. Ju snabbare allt är fixat desto mindre nervöst och
              stressigt blir det. Kanske också planera sin resa lite grann. Har
              du någonstans du vill åka under tiden? Planera datum och plats du
              skulle vilja till, vad du vill göra där.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Om du skulle åka på utbyte idag, hade du valt samma ställe eller
              ett annat?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Jag var fast besluten att jag ville åka till Kanada och tog första
              bästa plats jag fick. Jag kollade inte var Winnipeg låg eller hur
              staden såg ut, utan jag såg att det var i Kanada och valde. Jag
              tänkte hela Kanada som bergigt och skogigt, som jag gillar, men
              när jag kom dit visade det sig att Winnipeg typ är den plattaste
              staden i världen. Närmaste kulle med skidlift var 3 timmar bort
              med buss. Lite oväntat kanske, men det blev ändå väldigt trevligt!
              Campus var så pass stort och speciellt att jag slutade tänka på
              det efter ett tag. <br />
              <br /> Jag ångrar inte att jag åkte dit, men skulle jag få chansen
              skulle jag nog valt att åka mer mot västkusten(Rocky Mountains).
              Om inte berg är något som är så viktigt är Winnipeg ett perfekt
              ställe att åka till, en storstad(600 000) i centrala Kanada med
              ett väldigt levande Campus! Ganska bra punkt om man vill flyga
              till antingen väst eller öst.
            </p>
          )
        }
      },

      {
        text: {
          heading: (
            <p className="info-heading">
              Vad ska man tänka på om man vill åka till Kanada och UofM?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Ta en extra stor resväska. När du kommer är det typ 30 grader
              varmt. När du drar är det -30. Kulturmässigt är Kanada väldigt
              likt Sverige, det kommer inte bli några kulturkrockar. Enda
              skillnaden jag märkte var sättet man pratar med sina lärare.
              Sverige är väldigt lätt och ledigt, det var lite mer “propert”
              där. Det är inte så dumt att säga att du är utbytesstudent så
              slipper du allt det där.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hur funkade det med boendet?</p>,
          info: (
            <p className="info-body-text">
              UofM har massor av studentbostäder på campus. När du blivit
              antagen kommer du under sommaren få en tid när du kan gå in och
              välja lägenhet/rum. Om jag kommer ihåg rätt fanns det 4 olika
              hus(funkar typ som hotell). Då är det i princip först till kvarn
              som gäller. Varje hus hade olika boendesituationer, från
              2manna-rum, egen lägenhet, eget rum med delat kök eller hotellrum.
              Jag kommer inte ihåg exakt vilket som var vilket men det är bara
              att höra av sig så kollar vi igenom det. <br />
              <br /> Iallafall, för att söka boende är du tvungen att betala
              1000kr i förtid innan du kommer. När du flyttar in kommer en
              räkning mellan 18000-22000kr som du kommer behöva betala första
              månaden du är där. Det är en engångskostnad och när den är betald
              är det gratis resten av terminen. Du har även möjlighet att köpa
              till en meal plan till boendet. Skulle starkt rekommendera det då
              3 av 4 boenden inte hade något kök. Det kostade ungefär
              1500kr/månaden och då är i princip all mat fixat för hela
              terminen. Du får kuponger du kan lösa in på en specifik restaurang
              eller olika snabbmatsställen på campus. Jag valde inte till en
              meal plan och det ångrar jag.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vilka förberedelser behövde du göra innan du åkte och hur lång tid
              tog dem?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Om du är i Kanada i mindre än 6 månader i sträck behöver du inget
              visum, då räcker det med ett ESTA(Travel Authorization). Det läggs
              elektroniskt på ditt pass så du behöver inga dokument. Tror det
              kostade typ 200 kr och man får det i princip direkt. Du kommer
              däremot behöva en utökad reseförsäkring som sträcker sig utanför
              Europa. Om de frågar om det när du ska in i Kanada och du inte har
              någon försäkring kan de välja att inte släppa in dig vilket vore
              lite tråkigt. Annars behövdes bara vanliga resedokument och
              studiebevis så du kan visa var du ska och vad du ska göra. <br />
              <br /> NOTE: Om du ska flyga igenom USA kommer du behöva ett ETA,
              samma sak som ESTA fast för USA. Tror du behöver det även om du
              inte ens ska in i landet, utan bara mellanlanda. <br />
              <br /> ESTA fick jag typ 2 timmar efter jag ansökt så det tog inte
              alls lång tid. Det som tog tid var att faktiskt söka kurserna. Det
              var ganska krångligt att hitta kurserna på alla olika fakulteter,
              och det stod dessutom inte vilka som var tillgängliga för
              utbytesstudenter. Fick ha några härliga mail-konversationer med
              min kontaktperson, men det löste sig till slut. Tips är att börja
              kolla på kurser direkt man får mail om det så har man tid att göra
              om några gånger. Se också till att vara tidigt ute med att välja
              lägenhet, dom ryker väldigt snabbt.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Var det dyrt/billigt att leva i landet?
            </p>
          ),
          info: (
            <p className="info-body-text">
              Det var ungefär som i Sverige, kanske lite billigare.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">
              Vad är ditt råd till någon som vill åka på utbytestermin?
            </p>
          ),
          info: (
            <p className="info-body-text">
              DO IT. Vad än din anledning är till att åka, om det är att komma
              bort från Umeå, träffa nya människor, läsa massa coola kurser
              eller bara passa på att åka utomlands är det ett sånt extremt bra
              tillfälle. Du åker utomlands och får massa HP på köpet. Våga också
              göra en massa massa saker, det stärker en som person! Att också
              resa till andra ställen än där universitet är. Det kanske är lite
              jobbigt första veckorna med hemlängtan och annat, men det går över
              väldigt snabbt, man har typ inte tid att tänka på det med alla nya
              intryck man får.
            </p>
          )
        }
      }
    ]
  };

  const content = {
    alfred,
    amine,
    aron,
    charlotte,
    david,
    emma,
    linus,
    lovisa,
    magnus,
    marc,
    matilda,
    mans,
    oskar,
    simon,
    tonje,
    viktor
  };
  return content[id];
};
