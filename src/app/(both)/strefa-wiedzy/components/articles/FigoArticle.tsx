import { Heading } from "@/components/headings/Heading/Heading";
import { Lead } from "../Lead/Lead";
import { Paragraph } from "../Paragraph/Paragraph";
import parse from "html-react-parser";
import { FIGO_HISTORY_ARTICLE_LEAD } from "@/constants/articles";
import { FIGO_HISTORY_ARTICLE_HEADING } from "@/constants/headings";
import Image from "next/image";
import { luisFigo } from "@/constants/images";

// TODO: Inner linking between articles
// TODO: Move strings to constants

export default function FigoArticle() {
  return (
    <article className="mx-auto flex w-[80%] flex-col pb-10 text-[22px] lg:w-[60%]">
      <div className="text-center py-6">
        <Heading title={FIGO_HISTORY_ARTICLE_HEADING} HeadingTag="h1" />
      </div>
      {/* TODO: Add sizes */}
      <div className="flex flex-col items-center">
        <div className="relative aspect-square w-[100%] sm:w-[45%]">
          <Image
            fill
            className="rounded-3xl object-cover pb-4"
            src={luisFigo.src}
            alt={luisFigo.alt}
          />
        </div>
      </div>
      <Lead text={parse(FIGO_HISTORY_ARTICLE_LEAD)} />
      <Heading title="Wpływ Figo na Barcelonę" HeadingTag="h2" size="md" />
      <Paragraph>
        W latach 1996–1998 Barça przeszła pod wodzą trenera Bobby’ego Robsona
        swoistą ofensywną metamorfozę. Drużyna grała znakomitą, otwartą piłkę,
        strzelając nawet 102 gole w lidze w sezonie 1996/97. Figo znakomicie
        wpasował się w tę filozofię: w 1997 r. wywalczył z Barceloną Puchar
        Zdobywców Pucharów i Puchar Króla, do czego przyczynił się, zdobywając
        dwie bramki w finale Copa del Rey. Jego drybling, kreatywność i podania
        były kluczowe dla formowania się skutecznej ofensywy Barçy z Rivaldo czy
        Kluivertem. Z czasem Figo stał się centrum rozgrywania i przywódcą na
        boisku. Katalończycy odczuwali dumę z posiadania takiego grajka, a jego
        obecność dawała im poczucie zewnętrznego uznania.
      </Paragraph>
      <Heading
        title="Relacja Figo z kibicami Barcelony"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Rok 1998 przyniósł Barcelonie dublet (wygrana liga oraz Puchar Króla), a
        Figo był bohaterem tamtego sezonu – uczestniczył w balkonowej paradzie
        po zdobyciu La Liga i Copa del Rey. W jego oczach oraz w oczach
        publiczności zmieniała się jego rola: stał się ulubieńcem Camp Nou oraz
        kapitanem Barcelony. Robiło wrażenie tak silne zaangażowanie
        obcokrajowca w katalońską tożsamość. Porównywano go nawet z dziedzictwem
        Cruyffa – zdaniem ówczesnych komentatorów Figo nie był wprawdzie
        urodzony w Katalonii, ale uważano go za jednego z nich. Kibice wyrażali
        entuzjazm przy każdej jego akcji, a on wzrastał w oczach fanów,
        nabierając pewności siebie i stając się idolem Barcelony. Jego transfer
        do Realu w 2000 roku całkowicie zniszczył tę więź. Fani poczuli się
        oszukani. Przed wyjazdem do Madrytu darzyli go ogromną sympatią, a
        poczucie zdrady było nie do zniesienia. Późniejsze powroty gracza do
        Camp Nou w białej koszulce Realu kończyły się spektakularnymi protestami
        kibiców – pomidory, petardy, a nawet rzucany na murawę świński łeb – co
        tylko świadczyło o tym, jak bardzo dobitna była relacja między Figo a
        katalońską publicznością.
      </Paragraph>
      <Heading title="Napięcia wewnątrz Barcelony" HeadingTag="h2" size="md" />
      <Paragraph>
        Ostatnie lata Figo w Barcelonie przypadły na trudny okres dla klubu. Pod
        wodzą Louisa van Gaala szatnia została zasypana Holendrami – napłynęli
        bracia de Boer, Cocu czy Zenden. Powstały podziały między grupami
        piłkarzy (m.in. głośne sprzeczki Van Gaala z Rivaldo o system gry), co
        obok słabszych wyników powodowało narastające napięcia. Mimo to Figo,
        jako kapitan, starał się utrzymać drużynę razem. Na boisku ciągle był
        jednym z liderów – zwłaszcza w Lidze Mistrzów sezonu 1999/2000 ciągnął
        Barçę do przodu. W rewanżu z Chelsea zdobył bramkę na 2-0, jakże ważną
        dla późniejszego awansu, a media chwaliły go za klasę i zaangażowanie,
        mimo że sam czuł narastającą frustrację.
      </Paragraph>
      <Paragraph>
        Narastał również konflikt Portugalczyka z trenerem. Według późniejszych
        relacji Van Gaal atakował Figo i sugerował, że to on prowokował ataki
        kibiców, na co Portugalczyk reagował oburzeniem. W klubie było coraz
        bardziej niespokojnie – drużyna skoncentrowana na zwycięstwach walczyła
        z wewnętrznymi rywalizacjami, niekiedy spowodowanymi różnicami
        kulturowymi i językowymi. W tak zmienionej rzeczywistości ani Figo, ani
        większość kolegów nie byli już bezwarunkowo pewni swojej pozycji.
      </Paragraph>
      <Paragraph>
        Lato 2000 roku było przełomowe dla <strong>El Clásico</strong> –
        Barcelona i Real wymieniły prezesów, a kulminacją emocji stał się
        transfer Luísa Figo. Portugalczyk, uwielbiany do tej pory na Camp Nou,
        postanowił zmienić barwy klubu, by dołączyć do największego rywala.
      </Paragraph>
      <Paragraph>
        W Barcelonie po 22 latach z fotela prezesa odszedł Josep Lluis Nunez.
        Pod jego rządami Figo coraz częściej czuł się niedoceniony: obok takich
        gwiazd jak Rivaldo był kluczowy dla drużyny, lecz nie otrzymał podwyżki
        ani najlepszego kontraktu. Nunez zawsze oszczędnie wydawał klubowe
        środki i wolał unikać wielkich transferów. Kiedy jednak niemal jedynym
        kandydatem na następcę został Joan Gaspart, jego priorytetem stało się
        zatrzymanie Figo – pierwszym krokiem miało być znaczące podniesienie
        pensji Portugalczyka.
      </Paragraph>
      <Paragraph>
        W Madrycie natomiast Lorenzo Sanz świętował ósmy triumf w Pucharze
        Europy i natychmiast ogłosił przyspieszone wybory prezydenckie, licząc
        na zwycięstwo w wyniku potencjalnego zadziałania „efektu podwójnego
        wygrania Ligi Mistrzów” z 1998 i 2000 roku. Jego kontrkandydatem został
        Florentino Pérez, który zapowiedział, że aby pokonać Sanza, ściągnie do
        klubu najlepszych piłkarzy świata, a na pierwszy ogień miało właśnie
        pójść sprowadzenie Figo.
      </Paragraph>
      <Paragraph>
        5 lipca, w dniu wesela córki Sanza z Michelem Salgado, dziennikarz José
        Ramón de la Morena ogłosił, że Figo zgodzi się przenieść do Realu, jeśli
        Pérez wygra wybory. Wieść ta obiegła media i towarzystwo weselne, budząc
        zarówno zdumienie, jak i gorące dyskusje. Pérez nie zaprzeczył –
        rozpoczął intensywne, poufne negocjacje.
      </Paragraph>
      <Paragraph>
        Według relacji Paulo Futre, kluczową rolę odegrali w nich Santos
        “Gordito” Márquez i sam Futre, którzy spotkali się z Pérezem i
        pośredniczyli w rozmowach z José Veigą, agentem Figo. Po serii spotkań,
        telefonów i ustaleń finansowych – w tym rozmów o prowizji rzędu kilku
        milionów euro – udało się przekonać Veigę do przyjazdu do Madrytu i
        wyjazdu do Holandii, gdzie reprezentacja Portugalii przygotowywała się
        do Mistrzostw Europy 2000. Figo, rozgoryczony swoim wynagrodzeniem w
        Barcelonie, wstępnie przyjął ofertę Realu – pięciokrotnie wyższą niż u
        dotychczasowego pracodawcy.
      </Paragraph>
      <Paragraph>
        Gdy informacja o zamiarach Figo dotarła do Barcelony, wywołała sensację.
        Klub znajdował się w politycznym impasie między odejściem Núñeza a
        kolejnymi wyborami – miał stracić jedną ze swoich największych gwiazd na
        rzecz odwiecznego rywala. Gaspart zapytał Figo: „Jak możesz nam to
        robić?” Portugalczyk odpowiedział, że jego kontrakt w Barcelonie jest za
        niski. Gaspart obiecał więc, że jeśli wygra wybory, wyrówna ofertę
        Realu. Figo nie był jednak pewny zwycięstwa Gasparta. Przyszły prezes
        Barcelony, aby uspokoić sytuację, zaproponował wydanie publicznego
        oświadczenia lojalności Figo wobec Barcelony. Wspólnie z Asensio,
        właścicielem prasowego dziennika „Sport” i krewnym Lorenzo Санza,
        załatwili reportaż z wakacji Portugalczyka.
      </Paragraph>
      <Paragraph>
        Po zakończeniu Euro 2000 Figo wypoczywał na Korsyce. 9 lipca na
        pierwszej stronie gazety „Sport” został opublikowany jego komunikat:
        zapewniał, że nadal darzy Barçę sympatią, że stawi się na Camp Nou 24
        lipca i nie ma żadnej wstępnej umowy z kandydatem na prezesa Realu.
      </Paragraph>
      <Paragraph>
        Dla Florentino Péreza to był cios, lecz zachował zimną krew.
        Zapowiedział, że gdyby wygrał i Figo się nie pojawił, to Perez
        zrekompensuje to wszystkim socios klubu ze stolicy – mieli oni otrzymać
        darmowe karnety na wszystkie domowe mecze Realu przez cały sezon. Była
        to jego karta przetargowa: układy przewidywały kary finansowe – pięć
        miliardów peset, które Veiga i Figo mieliby zapłacić, gdyby wycofali się
        z transferu.
      </Paragraph>
      <Paragraph>
        Gaspart w tym czasie ciągle naciskał. Konsultował się z prawnikami,
        którzy ostrzegali, że sprawa może skończyć się wypłatą odszkodowania.
        Katalońskie środowisko przypominało Figo, co oznaczałby jego transfer do
        Madrytu – jak zareagowaliby kibice, i jak bardzo byłby napiętnowany.
      </Paragraph>
      <Paragraph>
        Figo zaczął się wahać i otrzymywał groźby. Przypominano jego uszczypliwy
        okrzyk z balkonu Parlamentu Katalonii w stronę Realu Madryt: „Blancos,
        llorones, felicita a los campeones”, co można przetłumaczyć jako: „Białe
        płaczki – pogratulujcie mistrzom”. Tymczasem Pérez intensyfikował
        kampanię, zbierając głosy listownie. Dwa dni przed głosowaniem podano,
        że ma już znaczną przewagę, głównie dzięki tej formie wyborów – na 33
        116 głosów aż 19 380 przyszło pocztą.
      </Paragraph>
      <Paragraph>
        Gdy Florentino świętował zwycięstwo (16 469 głosów przeciw 13 302 dla
        Sanza), nie wiedział, że Figo postanowił odmówić transferu. Nadal
        przebywał na Korsyce, a Futre z Veigą ukrywali przed Pérezem jego
        decyzję. Wobec konieczności osobistego przekonania Portugalczyka obaj
        wyruszyli tam prywatnym samolotem, gotowi na wszystko – nawet agent Figo
        miał łzy w oczach, gdy rozważano skutki finansowe niezgody piłkarza.
      </Paragraph>
      <Paragraph>
        Ostatecznie zdobyli się na rozmowę z Figo i namówili go na spotkanie z
        Pérezem w Lizbonie o 1:00 w nocy. W tajemnicy, w biurze Veigi, zebrało
        się dwanaście osób – przedstawiciele obu stron. Florentino otwarcie
        powiedział: „Luís, bez ciebie nie byłbym prezesem. Chcę stworzyć
        najlepszą drużynę na świecie. Potrzebujemy ciebie – obiecuję Złotą Piłkę
        i Ligę Mistrzów”. Figo jednak odparł, że to wszystko jest dla niego zbyt
        ryzykowne, boi się o rodzinę i nie wyobraża sobie przejścia do Realu.
        Rozmowa trwała do świtu – gdy Pérez dopytywał, czego Portugalczyk
        oczekuje w zamian za zgodę, atmosfera nieco się rozluźniła.
      </Paragraph>
      <Paragraph>
        Ku zaskoczeniu wszystkich, Figo zażądał sprowadzenia do Madrytu swojego
        przyjaciela Sá Pinto. Transfer ówczesnego piłkarza Realu Sociedad
        ułatwiłby aklimatyzację Figo. Pérez zgodził się na tę klauzulę. Choć
        ostatecznie transfer Sá Pinto nie doszedł do skutku (Real Sociedad
        zażądał zbyt wysokiej ceny), intencja Figo była jasna – potrzebował
        kogoś bliskiego w nowej szatni.
      </Paragraph>
      <Paragraph>
        W Barcelonie, gdy tydzień po wyborach odbyło się walne zgromadzenie
        socios, Gaspart wygrał dzięki 25 181 głosom przeciw 19 791 Bassata.
        Kilka dni później odebrał telefon od Figo. Piłkarz miał w ręku dwa
        bilety – jeden do Madrytu, drugi do Barcelony – i zastanawiał się, który
        wykorzystać. Gaspart miał zapewnić mu gwarancję z La Caixy na pięć
        miliardów peset na wypadek konieczności zapłaty odszkodowania. To była
        ostateczna chwila prawdy.
      </Paragraph>
      <Paragraph>
        Gaspart miał za sobą wspaniały dzień, a nagle wszystko legło w gruzach.
        Przez lata marzył o tym, by jako prezes prowadzić Barcelonę, a gdy to
        się wreszcie stało, uderzył go taki cios. Tłumaczył Figo, że nie załatwi
        poręczenia z La Caixy w jedną noc, ale mógł zagwarantować je z ramienia
        klubu. Dla Figo nie było to wystarczające – oczekiwał dokumentu od La
        Caixy. Portugalczyk był nieugięty. „Jeśli nie dostanę tego papieru, José
        Veiga popełni samobójstwo” – dodał na koniec. Gaspart zrozumiał, że to
        koniec współpracy z Figo.
      </Paragraph>
      <Paragraph>
        W poniedziałek, zaledwie dobę po wyborczym zwycięstwie Gasparta i osiem
        dni po triumfie Péreza, Florentino wystąpił przy Alfredo Di Stéfano na
        prezentacji Figo. To był pierwszy z jego Galácticos – później mieli
        nadejść Zidane, Ronaldo, Beckham i reszta gwiazd.
      </Paragraph>
      <Paragraph>
        Figo nie wyglądał na szczęśliwego. Jego twarz zdradzała ciężar, mimo że
        przed chwilą parafował umowę z pięciokrotnie wyższymi zarobkami. Jeden z
        szefów Madrytu zdradził potem, że zawodnik cierpiał psychicznie z powodu
        gróźb i zastraszeń: gdy jechał na prezentację, grożono mu zasypaniem
        pikantnymi zdjęciami żony – co oczywiście było nieprawdą. Te pogróżki
        tylko pogłębiły jego przygnębienie.
      </Paragraph>
      <Paragraph>
        Gaspart powiedział później, że to, co zrobił mu Florentino, „odłożył na
        nocną półkę”. Użył parafrazy wypowiedzi Jordiego Pujola, który
        twierdził, że każdą krzywdę, którą czynią ci wrogowie, należy zapisać i
        schować w szufladce nocnego stolika, by od czasu do czasu na nią zerknąć
        i pamiętać o tym, kto cię skrzywdził.
      </Paragraph>
      <Paragraph>
        Barcelona otrzymała od Realu zapłatę – dziesięć miliardów peset – świeżo
        upieczony prezes Barcelony czuł, że musi natychmiast dokonać transferu,
        by uwiarygodnić się przed socios. Skorzystał więc z okazji i sprowadził
        z Arsenalu Marca Overmarsa, a w pakiecie dorzucono mu jeszcze Emanuela
        Petita. Cała operacja pochłonęła sześć miliardów peset. W pośpiechu
        Gaspart zgodził się też na kolejne wielkie wydatki, choć z perspektywy
        czasu przyznał, że lepiej byłoby zachować ostrożność i przeanalizować
        potrzeby zespołu przed wydaniem środków.
      </Paragraph>
      <Paragraph>
        Kadencja Gasparta okazała się przeklęta – przez trzy lata klub nie
        zdobył ani jednego znaczącego trofeum (oprócz lokalnego Pucharu
        Katalonii). Wydatki na Overmarsa, Petita oraz transfery Alfonso,
        Gerarda, de la Peñi, Savioli, Geovanniego, Rochembacka, Christanvala,
        Bonano, Anderssona, Sorína, Mendiety, Riquelme i Enke były ogromne, a
        efekt sportowy minimalny.
      </Paragraph>
      <Paragraph>
        Tymczasem w Realu zaczęła się galaktyczna era. Choć początki Figo w
        Madrycie były trudne – podczas pierwszej konferencji prasowej
        stwierdził, że nadal czuje się przede wszystkim Portugalczykiem –
        Florentino zapewnił go, że „urodził się, by grać w Realu”. Docenił w nim
        cechy istotne na Bernabéu: odwagę, odporność i nieskazitelną klasę.
      </Paragraph>
      <Heading
        title="Barcelona vs Real Madryt - spuścizna Luisa Figo"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        W historii <strong>El Clásico</strong> Luís Figo zapisał się na długo
        przed swoim transferem. Z każdym kolejnym rokiem był gwarantem
        widowiskowych momentów i drużynowych sukcesów, co jeszcze zwiększało
        jego wagę w tych pojedynkach. Dla miłośników starć{" "}
        <strong>Barcelona vs Real Madryt</strong> Figo kojarzony jest z obrazem
        tragicznej zdrady. Kiedy Figo opuszczał Camp Nou, z bohaterskiego
        Portugalczyka zamienił się w symbol podziału: zarzucano mu, że obrócił
        się przeciwko katalońskiej idei, a sceny z jego powrotu na Camp Nou (z
        transparentami „zdrajca”, gwizdami i obelgami) na stałe wpisały się w
        historię <strong>El Clásico</strong>.
      </Paragraph>
    </article>
  );
}
