import { Heading } from "@/components/headings/Heading/Heading";
import { MOURINHO_ERA_ARTICLE_LEAD } from "@/constants/articles";
import { MOURINHO_ERA_ARTICLE_HEADING } from "@/constants/headings";
import { joseMourinho } from "@/constants/images";
import parse from "html-react-parser";
import Image from "next/image";
import { Lead } from "../Lead/Lead";
import { Paragraph } from "../Paragraph/Paragraph";

export default function MourinhoEraArticle() {
  return (
    <article className="mx-auto flex w-[80%] flex-col pb-10 text-[1.375rem] lg:w-[60%]">
      <div className="py-6 text-center">
        <Heading title={MOURINHO_ERA_ARTICLE_HEADING} HeadingTag="h1" />
      </div>
      <div className="flex flex-col items-center">
        <div className="relative aspect-square w-[100%] sm:w-[45%]">
          <Image
            fill
            sizes="(min-width: 640px) 45vw, 80vw"
            className="rounded-3xl object-cover pb-4"
            src={joseMourinho.src}
            alt={joseMourinho.alt}
            priority
          />
        </div>
      </div>
      <Lead text={parse(MOURINHO_ERA_ARTICLE_LEAD)} />
      <Heading
        title="Nowe rozdanie w starciach z Barceloną"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Kiedy Mourinho przejmował drużynę Realu w 2010 roku, klub odczuwał
        kompletną dominację Barcelony Guardioli. Blaugrana nie tylko zdobywała
        ligowe tytuły, ale i światową sławę dzięki tzw. tiki-tace - idealnej
        kontroli piłki i spektakularnej grze. Celem Mourinho było odwrócenie tej
        tendencji. W mediach już wkrótce pojawiły się słowa nowego trenera, że
        Real musi odzyskać status „najlepszego klubu na świecie”. Już pierwszy
        sezon pokazał powagę jego zamiarów: pomimo kompromitującej porażki 0:5
        na Camp Nou, Real szybko zaczął nadrabiać dystans, dzielący go na tamten
        moment z Barceloną. W 2011 roku Real sięgnął po pierwsze od lat
        zwycięstwo nad Barceloną, wygrywając w finale Pucharu Króla 1-0 po
        bramce Cristiano Ronaldo. To był sygnał, że zmiany wprowadzone przez
        trenera powoli zaczynają działać. Nie zmienia to faktu, że w tamtym
        sezonie to Barcelona sięgnęła po ligę oraz ligę mistrzów.
      </Paragraph>
      <Paragraph>
        Na boisku zaczynało być widać oznaki rewolucji taktycznej: Real Mourinho
        nie uciekał się do chaotycznego ataku z dawnych lat. Trener postawił na
        balans między siłą obrony a szybkim kontratakiem. Wprowadzono między
        innymi:
      </Paragraph>
      <ul className="list-disc space-y-3 ps-4 lg:ps-8">
        <li>
          <span className="font-bold">Formacja 4-3-3 z tzw. „trivote”</span> -{" "}
          potrójna ochrona środka pola. Mourinho wystawiał w Klasykach Pepe lub
          Lassanę Diarrę jako dodatkowego defensywnego pomocnika, dzięki czemu
          Xavi i Iniesta mieli ograniczoną swobodę w rozgrywaniu akcji. Realu
          miał wtedy w pomocy aż trzech graczy skupionych na neutralizowaniu
          katalońskich kreatorów.
        </li>
        <li>
          <span className="font-bold">
            Zmniejszona rola klasycznej „dziesiątki”
          </span>{" "}
          - zamiast oddelegowania Mesuta Özila czy Kaki jako głównego
          rozgrywającego, Real częściej bazował swoją grę na rozciąganiu obrony
          Barcelony i szybkich podaniach do napastników. Özil występował raczej
          na skrzydle lub schodził po piłkę, co utrudniało Barçy przewidywanie
          akcji Królewskich.
        </li>
        <li>
          <span className="font-bold">Nastawienie na kontrataki</span> - z
          udziałem Cristiano Ronaldo i energicznych skrzydłowych, np. di Marii.
          Real pozwalał Barcelonie prowadzić grę, by następnie błyskawicznie
          atakować wolne przestrzenie.
        </li>
        <li>
          <span className="font-bold">Agresywny pressing</span> - mimo
          defensywnego ustawienia, Real starał się jak najszybciej przejmować
          piłkę po stracie, utrudniając Barcelonie swobodne rozgrywanie akcji.
          Już w pierwszych minutach meczów zawodnicy Realu często podkręcali
          tempo, by wymuszać błędy rywali i przejmować piłkę.
        </li>
        <li>
          <span className="font-bold">Aktywność bocznych obrońców</span> -{" "}
          Marcelo i Arbeloa często wspierali ataki, co pozwalało wykorzystać
          luki na skrzydłach. Gdy ofensywni obrońcy Barçy włączali się do akcji.
          Real umiejętnie atakował wolne sektory boiska.
        </li>
      </ul>
      <Paragraph>
        Te taktyczne korekty sprawiły, że Real przestał być tylko biernym
        obserwatorem. Pod koniec, bądź co bądź nieudanego, sezonu 2010/2011
        zaczynało być widać efekty: Real przerwał 18-letnią posuchę w starciach
        z Barceloną, zdobywając Puchar Króla po raz pierwszy od lat. Z kolei
        mistrzostwo La Liga w sezonie 2011/2012 - zdobywając rekordową liczbą
        100 punktów - udowodniło, że Real może nawiązać walkę z Barceloną
        również w lidze, a nie tylko w poszczególnych pojedynkach.
      </Paragraph>
      <Heading
        title="Napięta atmosfera i eskalacja konfliktów"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Za czasów Mourinho relacje na linii Real - Barcelona stały się czymś
        znacznie więcej niż tylko sportowym pojedynkiem. Każde El Clasico było
        naznaczone ogromnym napięciem ze strony piłkarzy, trenerów i kibiców.
        Stadion był zawsze pełen emocji: kibice Realu głośno dopingowali swoją
        drużynę, wyśpiewując przyśpiewki pełne ironii wobec Barcelony, zaś fani
        Barçy odpowiadali prowokacyjnymi transparentami. Jednocześnie trenerzy i
        media podsycały napięcie, agresywną retoryką eskalując konflikt.
      </Paragraph>
      <Paragraph>
        Poniżej najbardziej zapamiętane momenty ery Mourinho:
      </Paragraph>
      <ul className="list-disc space-y-3 ps-4 lg:ps-8">
        <li>
          <span className="font-bold">La Manita w 2010</span> - dla Realu była
          to bolesna lekcja. Sromotna porażka w pierwszym spotkaniu pod rządami
          Mourinho uwypukliła potrzebę zmian. Kibice Realu w geście protestu
          opuścili loże na koniec meczu, świadomi, że czeka ich długa droga
          powrotna do równowagi. Mecz został również zapamiętany z gestu Gerarda
          Pique, który wzorem Toniego Bruinsa przed laty uniósł pięć palców ku
          górze.
        </li>
        <li>
          <span className="font-bold">
            Finał Pucharu Króla w 2011 (Real 1:0 Barcelona)
          </span>{" "}
          - mecz w Walencji odbył się w szale emocji. Dochodziło do przepychanek
          na ławkach i na boisku, na którym walczono o każdą piłkę. W dogrywce
          Ronaldo strzelił gola głową i Real przerwał 18-letnią posuchę,
          zdobywając długo wyczekiwane trofeum. Piłkarze Realu padali sobie w
          ramiona ze łzami radości - zwycięstwo po takiej walce było tym
          bardziej satysfakcjonujące. Warto wspomnieć także o pucharze, który
          wypadł z rąk Sergio Ramosa podczas przejazdu odkrytym autobusem po
          ulicach Madrytu, podczas którego świętowano zwycięstwo. Federacja
          zdecydowała go nie naprawiać, a zniszczony puchar wstawić do swojego
          muzeum, co Real uznał za obrazę.
        </li>
        <li>
          <span className="font-bold">Półfinały Ligi Mistrzów w 2011</span> -
          rywalizacja w LM w 2011 roku to jeden z najbardziej pamiętnych
          momentów ery Mourinho. W pierwszym meczu w Madrycie Barcelona wygrała
          2:0 po dwóch golach Messiego, a Pepe otrzymał czerwoną kartkę za
          brutalny faul. Mourinho na konferencji prasowej oskarżał Barçę,
          sugerując układy z sędziami. W rewanżu na Camp Nou padł remis 1:1,
          dający Katalończykom awans do finału. Po każdym starciu piłkarzy
          stadion szalał, a media jeszcze długo żyły licznymi prowokacjami.
        </li>
        <li>
          <span className="font-bold">Natłok Klasyków</span> - napięcie rosło w
          każdym kolejnym sezonie. W żadnym z Klasyków nie brakowało brutalnych
          fauli i kontrowersyjnych decyzji sędziego. Atmosfera była bardzo
          gęsta, co sprawiało, że praktycznie każdy faul wzbudzał ogromne emocje
          po obu stronach.
        </li>
        <li>
          <span className="font-bold">Wojna w mediach</span> - Mourinho i
          Guardiola prowadzili oczywiście wojnę na słowa. Mourinho, znany z
          kąśliwych uwag, nie wahał się publicznie atakować Guardioli i całej
          Barcelony, sugerując układy sędziowskie. Obaj wymieniali się aluzjami
          - każdy uśmiech lub wymowna poza traktowane były jak kolejny rozdział
          tej wojny psychologicznej.
        </li>
      </ul>
      <Paragraph>
        El Clasico ery Mourinho było więc prawdziwą wojną. Zawodnicy walczyli o
        każdy centymetr murawy. W efekcie na koncie piłkarzy często lądowały
        żółte i czerwone kartki. Meczom towarzyszyła atmosfera ciągłej
        konfrontacji - takie napięcie było rzadkością. Każdy pojedynek Realu z
        Barceloną budził coraz większe emocje i żył własnym życiem.
      </Paragraph>
      <Heading
        title="Wojna psychologiczna Mourinho kontra Guardiola"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Na uwagę zasługuje również bezpośrednia rywalizacja dwóch trenerów: José
        Mourinho i Pepa Guardioli. Ich starcie przeniosło rywalizację na kolejny
        poziom. El Clasico stało się nie tylko zmaganiem piłkarzy, ale też bitwą
        sztabów szkoleniowych. W mediach toczono zaciętą wojnę. Mourinho, znany
        ze swoich błyskotliwych, często kąśliwych wypowiedzi, ostro atakował
        kataloński zespół i Guardiolę. Publicznie sugerował układy sędziowskie
        sprzyjające Barcelonie i poddawał w wątpliwość niektóre ich sukcesy.
        Każdy kolejny gest potęgował wrażenie, że mamy do czynienia z osobistą
        wojną dwóch wielkich umysłów futbolu.
      </Paragraph>
      <Paragraph>
        Piłkarsko, biorąc pod uwagę ogół pojedynków za kadencji Mourinho,
        zdecydowanie górą wyszedł Guardiola. Real Mourinho zaczął notować
        bardziej korzystną passę w Klasykach już po odejściu Katalończyka z
        Barcelony w 2012.
      </Paragraph>
      <Heading
        title="Zmiana mentalności Realu Madryt"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Jednym z najważniejszych efektów ery Mourinho był całkowity zwrot
        mentalności drużyny. Przez lata Real uchodził za zespół wielkich gwiazd,
        często bardziej skupiony na indywidualnych popisach niż na kolektywie.
        Mourinho zdecydował się to zmienić, kreując ducha walki i jedności
        potrzebny do pokonania silnej Barcelony. Wprowadził surową dyscyplinę
        oraz zasady bezwzględnego zaangażowania, które pomogły piłkarzom
        uwierzyć we własne siły.
      </Paragraph>
      <Paragraph>
        Takie zmiany w mentalności przyniosły wymierne skutki. Real stał się
        drużyną walczącą do upadłego, co wcześniej trudno było sobie wyobrazić.
        Real odzyskał wiarę we własne możliwości. Kibice znów patrzyli na
        Królewskich jednocześnie jako na artystów futbolu, a także prawdziwych
        wojowników.
      </Paragraph>
      <Heading
        title="Dziedzictwo ery Mourinho w El Clasico"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Choć Mourinho opuścił Real Madryt w 2013 roku, jego wpływ na rywalizację
        z Barceloną okazał się trwały. W erze Mourinho El Clasico przestało być
        wyłącznie sportowym pojedynkiem - stało się starciem charakterów i
        filozofii. Nawet po jego odejściu relacje między drużynami pozostały
        napięte, a zwykłe mecze ligowe nabierały nowej dramaturgii dzięki
        kontekstowi tamtych lat.
      </Paragraph>
      <Paragraph>
        Real wyszedł z tej ery mentalnie silniejszy - mniej romantyczny,
        bardziej pragmatyczny i w pełni świadomy swojej wartości. Taktyczne
        innowacje Mourinho, takie jak silna pierwsza linia pressingu czy tzw.
        trivote, uczyniły drużynę bardziej elastyczną. Nawet kibice Realu
        przyzwyczajeni do ofensywnych fajerwerków zaczęli cenić zwycięstwa, w
        których walka i strategia górowały nad techniczną finezją.
      </Paragraph>
      <Paragraph>
        Barcelona dominowała w Klasykach przez kilka lat po odejściu Mourinho, a
        echa wojny Mourinho-Guardiola słyszalne były przy każdej zapowiedzi
        kolejnego El Clasico. Wiele meczów Realu komentowano przez pryzmat
        tamtych batalii, a presja na zawodnikach stale wzrastała. Wielu kibiców
        uznaje tamte lata za najlepsze w kontekście Klasyków. Mecze te były
        wtedy niezwykle ciekawe na boisku, jak i poza na nim. Era Mourinho w
        Realu pokazała, jak jeden człowiek był w stanie przekształcić naturę
        najważniejszego piłkarskiego pojedynku.
      </Paragraph>
    </article>
  );
}
