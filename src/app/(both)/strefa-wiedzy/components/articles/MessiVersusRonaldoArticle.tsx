import { messiVersusRonaldo } from "@/constants/images";
import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/headings/Heading/Heading";
import { MESSI_VERSUS_RONALDO_ARTICLE_LEAD } from "@/constants/articles";
import { MESSI_VERSUS_RONALDO_ARTICLE_HEADING } from "@/constants/headings";
import { Lead } from "../Lead/Lead";
import { Paragraph } from "../Paragraph/Paragraph";
import Link from "next/link";
import { FIGO_HISTORY_URL, MOURINHO_ERA_URL } from "@/constants/urls";

export default function MessiVersusRonaldoArticle() {
  return (
    <article className="mx-auto flex w-[80%] flex-col pb-10 text-[1.375rem] lg:w-[60%]">
      <div className="py-6 text-center">
        <Heading title={MESSI_VERSUS_RONALDO_ARTICLE_HEADING} HeadingTag="h1" />
      </div>
      <div className="flex flex-col items-center">
        <div className="relative aspect-square w-[100%] sm:w-[45%]">
          <Image
            fill
            sizes="(min-width: 640px) 45vw, 80vw"
            className="rounded-3xl object-cover pb-4"
            src={messiVersusRonaldo.src}
            alt={messiVersusRonaldo.alt}
            priority
          />
        </div>
      </div>
      <Lead text={parse(MESSI_VERSUS_RONALDO_ARTICLE_LEAD)} />
      <Heading title="Początki rywalizacji" HeadingTag="h2" size="md" />
      <Paragraph>
        Rywalizacja nabrała tempa latem 2009 roku, gdy Ronaldo dołączył do Realu
        Madryt. Latem Królewscy potwierdzili transfer Portugalczyka z
        Manchesteru United - kwota 80 milionów funtów była wówczas rekordowa na
        rynku transferowym. To więcej niż Real płacił za Zinedine&apos;a
        Zidane&apos;a czy Luisa Figo, którego transferu szczegółową historię
        można przeczytać pod{" "}
        <Link href={FIGO_HISTORY_URL} className="text-linkColor">
          tym linkiem
        </Link>
        . Do Madrytu przenosił się zawodnik przez wielu uznawany za najlepszego
        na świecie. Ronaldo zdobył swoją pierwszą Złotą Piłkę w 2008 roku,
        podczas gdy Messi stawał się gwiazdą Barcelony, a sam otrzymał to
        indywidualne trofeum w 2009 roku, wyprzedzając w głosowaniu Ronaldo o
        240 punktów. Od tego momentu każde starcie Barcelony z Realem stało się
        bezpośrednim porównaniem ich umiejętności.
      </Paragraph>
      <Paragraph>
        Ronaldo w momencie transferu był wielkim piłkarzem. Wprawdzie było to
        tuż po jego porażce z Barceloną w finale Ligi Mistrzów, aczkolwiek
        zdobył to trofeum w barwach Manchesteru United już rok wcześniej.
        Cristiano wiedział, że transfer do Realu Madryt może być początkiem
        drogi do stawiania go wśród najlepszych piłkarzy w historii - po latach
        możemy powiedzieć, że faktycznie tak się stało.
      </Paragraph>
      <Paragraph>
        Messi zaś zdobył potrójną koronę, po czym nie było już wątpliwości, że
        Złota Piłka 2009 trafi właśnie w jego ręce. Argentyńczyk w tym samym
        roku dołożył jeszcze do kolekcji Superpuchar Hiszpanii, Superpuchar
        Europy i Klubowe Mistrzostwo Świata, osiągając legendarny sekstet.
      </Paragraph>
      <Heading
        title="Dominacja statystyczna w El Clasico"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Obaj piłkarze na stałe zdominowali statystyki Klasyków. Messi rozegrał w
        El Clasico 45 meczów, Ronaldo - 30. W tych spotkaniach Argentyńczyk
        zdobył 26 goli (rekord wszech czasów El Clasico), a Portugalczyk 18
        (drugie miejsce, ex aequo z Alfredo Di Stéfano). Statystyki asyst
        pokazują nam bardziej wyraźną różnicę - Messi zaliczył aż 14 kluczowych
        podań w Klasykach, podczas gdy Ronaldo tylko jedno. Pod względem
        zwycięstw także górą był gracz Barcelony - Messi wygrał 19 ze swoich
        Klasyków, a Ronaldo 8.
      </Paragraph>
      <Paragraph>
        Powyższe dane jasno pokazują, że w bezpośrednich starciach Messi był
        skuteczniejszy i częściej osiągał zwycięstwo ze swoją drużyną. Jak
        podsumował ekspert Ryan Kelly z Goal.com: „Messi jest niekwestionowanym
        królem El Clasico - ma więcej goli, więcej asyst i częściej był po
        zwycięskiej stronie”.
      </Paragraph>
      <Heading
        title="Ikoniczne momenty i niezapomniane mecze"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        W trakcie wspólnych lat w Messiego i Ronaldo Hiszpanii, Barcelona i Real
        odbyły wiele spektakularnych spotkań, które stały się częścią
        piłkarskiej historii. Oto niektóre z najważniejszych:
      </Paragraph>
      <ul className="list-disc space-y-3 ps-4 lg:ps-8">
        <li>
          <span className="font-bold">Listopad 2010 (La Liga)</span> -{" "}
          <em>La Manita</em> Barcelony 5:0. To pierwsze El Clasico Jose Mourinho
          (którego szerszą historię w Madrycie można przeczytać{" "}
          <Link href={MOURINHO_ERA_URL} className="text-linkColor">
            tutaj
          </Link>
          ) zakończyło się kompromitującą porażką Realu. Xavi otworzył wynik
          celnym uderzeniem po podaniu Iniesty, Pedro i David Villa podwyższyli
          wynik, a Jeffrén dobił Real. Messi asystował przy jednym z goli
          (podanie do Villi na 3:0).
        </li>
        <li>
          <span className="font-bold">Kwiecień 2011 (Liga Mistrzów)</span> -
          Barcelona 2:0 Real. W pierwszym meczu półfinału Ligi Mistrzów Real
          przegrał u siebie po dwóch bramkach Messiego. Po, do dziś budzącej
          kontrowersje, czerwonej kartce Pepe Barcelonie łatwiej było
          kontrolować grę - Messi najpierw wykorzystał podanie Ibrahima
          Affelaya, a potem zdobył słynną bramkę po „odebraniu” piłki od Sergio
          Busquetsa, a następnie ominięciu całej defensywy Realu.
        </li>
        <li>
          <span className="font-bold">Luty 2013 (Puchar Króla)</span> - Real
          Madryt 3:1 Barcelona. To była jedna z nielicznych sytuacji, gdy to
          Ronaldo dominował. Portugalczyk wywalczył rzut karny na 1:0 i sam go
          pewnie wykorzystał. Potem przejął piłkę po wybiciu Pinto i zdobył
          kolejną bramkę, a Raphaël Varane ustalił wynik spotkania.
        </li>
        <li>
          <span className="font-bold">Kwiecień 2017 (La Liga)</span> - Barcelona
          3:2 Real. W tym wyrównanym spotkaniu Messi zdobył zwycięską bramkę w
          końcówce. Na krótko po trafieniu Rakitica na 2-1, Sergio Ramos
          otrzymał czerwoną kartkę. Real był jednak w stanie się jeszcze
          podnieść i James Rodriguez zdobył bramkę na 2-2. Jednak w samej
          końcówce po słynnym rajdzie Sergiego Roberto mieliśmy okazję oglądać
          bramkę Messiego na 3-2, a następnie jego niezapomnianą cieszynkę z
          trzymaną w rękach koszulką wyciągniętą przed siebie.
        </li>
      </ul>
      <Paragraph>
        Każde z powyższych spotkań pokazało różne oblicza rywalizacji: raz
        świętował kompletny zespół Barcelony, raz błyszczał indywidualnie
        Ronaldo. Niemniej opinie ekspertów zgodnie podkreślają, że przez
        większość tamtego okresu, to Messi decydował o losach Klasyków.
      </Paragraph>
      <Paragraph>
        Nie można zapominać jednak o sukcesach Realu w tamtym okresie. Zdobył on
        wtedy legendarne 3 Ligi Mistrzów z rzędu. Po ostatnim z tych triumfów
        Ronaldo opuścił Real. Portugalczyk wygrywał ligę hiszpańską zaledwie 2
        razy, aczkolwiek w lidze mistrzów w barwach Realu triumfował aż
        czterokrotnie. Dla porównania przez okres ich rywalizacji w Hiszpanii,
        Messi podnosił najważniejsze klubowe europejskie trofeum tylko
        dwukrotnie. Argentyńczyk zdecydowanie dominował wtedy jednak na szczeblu
        ligowym, wygrywając La Liga sześciokrotnie.
      </Paragraph>
      <Heading
        title="Dziedzictwo i wpływ rywalizacji"
        HeadingTag="h2"
        size="md"
      />
      <Paragraph>
        Rywalizacja <strong>Messi kontra Ronaldo</strong> zdefiniowała prawie
        całą dekadę El Clasico i pozostawiła trwały ślad w świadomości fanów.
        Obaj zawodnicy zdobyli na przestrzeni swoich karier ogromną liczbę
        trofeów i przez wiele lat co roku dzielili między siebie Złotą Piłkę,
        podbijając kolejne piłkarskie rekordy. Mimo że wraz z odejściem Ronaldo
        do Juventusu w 2018 r. ich bezpośrednie spotkania w Hiszpanii się
        skończyły, duch tamtych pojedynków nadal żyje. Dziś każde kolejne El
        Clasico przywołuje wspomnienia tamtej ery - kibice i komentatorzy nadal
        zestawiają statystyki obu gwiazd i wspominają ich niezapomniane starcia.
        Jak podkreślił jeden z dziennikarzy: ”Messi jest niekwestionowanym
        królem El Clasico” - co w praktyce oznacza, że to on dominował w
        Klasykach, mimo że Ronaldo potrafił mu dorównać w najbardziej
        spektakularnych momentach. W rezultacie starcia El Clasico z udziałem
        Messiego i Ronaldo przeszły do legendy i pozostaną wzorcem doskonałego
        widowiska sportowego, nawet gdy obaj gracze kontynuują kariery już poza
        Hiszpanią.
      </Paragraph>
      <Paragraph>
        Epoka wspólnej gry Leo Messiego i Cristiano Ronaldo w Hiszpanii to złoty
        rozdział dla rywalizacji <strong>Barcelona vs Real Madryt</strong>. Obaj
        zawodnicy wielokrotnie przejmowali stery tych pojedynków swoimi
        wyczynami - Messi częściej kończył mecze na zwycięskiej pozycji i
        częściej trafiał do siatki, a Ronaldo wnosił swój charakterystyczny
        sposób gry, strzelając w kluczowych momentach. Wielkość tej rywalizacji
        potwierdzają liczby i pamięć kibiców. Starcia{" "}
        <strong>Messi vs Ronaldo</strong> pozostaną już na zawsze jednymi z
        najbardziej ikonicznych w historii futbolu.
      </Paragraph>
    </article>
  );
}
