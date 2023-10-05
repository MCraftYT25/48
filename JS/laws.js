let laws_numbers = [];
  
  function laws(x)
  {
    if(laws_numbers.includes(x))
    {
      document.getElementsByClassName('laws-desc')[x-1].innerHTML = "";
      var index = laws_numbers.indexOf(x);
      laws_numbers.splice(index, 1);
    } else {

      laws_numbers.push(x);
    
      var text = "";
      switch(x)
      {
        case 1:
          text = "Nigdy nie przyćmiewaj Mistrza! To prawo sugeruje, że zawsze powinniśmy pokazywać szacunek dla osób, które mają nad nami władzę, i nigdy nie próbować ich przewyższyć lub pokazać, że jesteśmy lepsi.";
          break;
        case 2:
          text = "Nigdy nie ufaj zbytnio przyjaciołom, naucz się używać wrogów. To prawo sugeruje, że przyjaciele często zdradzają Cię w pośpiechu, ponieważ są bardziej podatni na zazdrość. Jeśli jednak zatrudnisz byłego wroga, okaże się on bardziej godny zaufania, ponieważ ma więcej do udowodnienia. W związku z tym powinieneś bardziej obawiać się przyjaciół niż wrogów.";
          break;
        case 3:
          text = "Zachowaj w tajemnicy twoje intencje. To prawo sugeruje, że powinieneś ukrywać swoje prawdziwe intencje i nie ujawniać swoich planów. Dzięki temu inni nie będą w stanie przewidzieć twoich działań ani przeciwdziałać im.";
          break;
        case 4:
          text = "Zawsze mów mniej niż potrzeba. To prawo sugeruje, że powinieneś zawsze mówić tylko tyle, ile jest absolutnie konieczne, i nie więcej. Pozwala to utrzymać kontrolę nad informacjami i zaskoczyć innych, gdy to konieczne.";
          break;
        case 5:
          text = "Tak wiele zależy od reputacji. Strzeż jej za wszelką cenę. To prawo podkreśla znaczenie utrzymania dobrej reputacji. Twoja reputacja jest jednym z najważniejszych aktywów, które posiadasz, i powinieneś chronić ją za wszelką cenę.";
          break;
        case 6:
          text = "Za wszelką cenę zwracaj na siebie uwagę. To prawo sugeruje, że powinieneś zawsze starać się przyciągać uwagę, niezależnie od sytuacji. W ten sposób zyskasz większą kontrolę nad swoim otoczeniem i będziesz mógł lepiej wpływać na innych.";
          break;
        case 7:
          text = "Spraw, żeby inni pracowali za ciebie, ale to ty zbierz laury. To prawo sugeruje, że powinieneś wykorzystywać umiejętności i wysiłek innych do osiągnięcia swoich celów, ale jednocześnie upewnić się, że to ty otrzymasz uznanie za ich pracę.";
          break;
        case 8:
          text = "Spraw, by inni do ciebie przychodzili, użyj zaczepki, jeśli trzeba. To prawo sugeruje, że powinieneś stworzyć sytuację, w której inni będą do ciebie przychodzić z własnej woli. Możesz to osiągnąć, używając różnych technik przyciągania uwagi, takich jak zaczepki.";
          break;
        case 9:
          text = "Wygrywaj działaniem, nigdy przekonywaniem. To prawo sugeruje, że powinieneś skupić się na działaniu i osiąganiu wyników, a nie na przekonywaniu innych do swojego punktu widzenia.";
          break;
        case 10:
          text = "Zaraźliwość: unikaj nieszczęśliwych i pechowców. To prawo sugeruje, że powinieneś unikać osób, które mają pecha lub są nieszczęśliwe, ponieważ ich negatywność może przenieść się na ciebie.";
          break;
        case 11:
          text = "Naucz się utrzymywać innych w zależności od ciebie. To prawo sugeruje, że powinieneś stworzyć sytuację, w której inni są od ciebie zależni. Dzięki temu zyskasz większą kontrolę nad swoim otoczeniem i będziesz mógł lepiej wpływać na innych.";
          break;
        case 12:
          text = "Stosuj wybiórczo uczciwość i hojność, żeby rozbroić swoją ofiarę. To prawo sugeruje, że powinieneś używać uczciwości i hojności w strategiczny sposób, aby rozbroić swoją ofiarę. Dzięki temu będziesz mógł lepiej kontrolować sytuację i osiągnąć swoje cele.";
          break;
        case 13:
          text = "Kiedy prosisz o pomoc, odwołuj się do własnego interesu ludzi, nigdy nie licz na łaskę lub wdzięczność. To prawo sugeruje, że gdy prosisz o pomoc, powinieneś odwoływać się do interesów innych, a nie polegać na ich łaskawości czy wdzięczności.";
          break;
        case 14:
          text = "Udawaj przyjaciela, pracuj jak szpieg. To prawo sugeruje, że powinieneś zachowywać się jak przyjaciel, ale jednocześnie zbierać informacje jak szpieg. Pozwala to na zdobycie cennych informacji i utrzymanie przewagi.";
          break;
        case 15:
          text = "Kompletnie zniszcz swojego wroga. To prawo sugeruje, że jeśli masz wroga, powinieneś go całkowicie zniszczyć. Półśrodki mogą prowadzić do odwetu i dalszych problemów.";
          break;
        case 16:
          text = "Stosuj nieobecność, żeby zyskać większy szacunek. To prawo sugeruje, że powinieneś umiejętnie wykorzystywać swoją nieobecność, aby zwiększyć swoją wartość w oczach innych.";
          break;
        case 17:
          text = "Trzymaj innych w napięciu: kultywuj atmosferę nieprzewidywalności. To prawo sugeruje, że powinieneś utrzymywać innych w stanie niepewności, tworząc atmosferę nieprzewidywalności. Dzięki temu zyskasz większą kontrolę nad sytuacją.";
          break;
        case 18:
          text = "Nie buduj fortec, żeby się schronić. To prawo sugeruje, że nie powinieneś izolować się od innych, budując metaforyczne “fortece”. Izolacja może prowadzić do utraty kontaktu z rzeczywistością i ograniczenia możliwości.";
          break;
        case 19:
          text = "Wiedz, z kim masz do czynienia. Nie obraź niewłaściwej osoby. To prawo sugeruje, że powinieneś znać ludzi, z którymi masz do czynienia, i unikać obrażania tych, którzy mogą ci zaszkodzić.";
          break;
        case 20:
          text = "Nie wtrącaj się w niczyje sprawy. To prawo sugeruje, że powinieneś unikać ingerowania w sprawy innych, aby uniknąć niepotrzebnych konfliktów i problemów.";
          break;
        case 21:
          text = "Udawaj naiwnego, żeby złapać naiwnego. Wydawaj się głupszy niż twoja ofiara. To prawo sugeruje, że powinieneś udawać naiwnego lub mniej inteligentnego, aby zaskoczyć swoją ofiarę i zyskać przewagę.";
          break;
        case 22:
          text = "Stosuj taktykę pokonanego: przekształć słabość w siłę. To prawo sugeruje, że powinieneś umiejętnie wykorzystać swoją pozorną słabość jako siłę, przekształcając ją w strategiczną przewagę.";
          break;
        case 23:
          text = "Skoncentruj swoje siły. To prawo sugeruje, że powinieneś skupić swoje zasoby i wysiłki na jednym celu lub obszarze, zamiast rozpraszać się na wiele różnych działań.";
          break;
        case 24:
          text = "Zachowuj się jak idealny dworzanin. To prawo sugeruje, że powinieneś zachowywać się jak doskonały dworzanin, zwracając uwagę na swoje maniery i postępowanie.";
          break;
        case 25:
          text = "Twórz siebie na nowo. To prawo sugeruje, że powinieneś być w stanie reinwentować siebie, aby dostosować się do zmieniających się okoliczności i osiągnąć swoje cele.";
          break;
        case 26:
          text = "Miej czyste ręce. To prawo sugeruje, że powinieneś utrzymywać swoją niewinność i unikać bezpośredniego zaangażowania w kontrowersyjne działania.";
          break;
        case 27:
          text = "Graj na ludzkiej potrzebie wierzenia, by stworzyć oddanych ślepo naśladowców. To prawo sugeruje, że powinieneś wykorzystać ludzką potrzebę wierzenia w coś, aby stworzyć oddanych naśladowców.";
          break;
        case 28:
          text = "Brawurowo przystępuj do działania. To prawo sugeruje, że powinieneś podejmować działania z odwagą i pewnością siebie, aby zaskoczyć innych i zyskać przewagę.";
          break;
        case 29:
          text = "Zaplanuj wszystko aż do końca. To prawo sugeruje, że powinieneś dokładnie planować swoje działania od początku do końca, aby uniknąć nieprzewidzianych problemów i osiągnąć swoje cele.";
          break;
        case 30:
          text = "Niech innym wydaje się, że twoje osiągnięcia przychodzą ci łatwo. To prawo sugeruje, że powinieneś sprawiać wrażenie, jakby twoje osiągnięcia przychodziły ci z łatwością. Dzięki temu inni będą cię bardziej szanować i podziwiać";
          break;
        case 31:
          text = "Kontroluj możliwości wyboru: niech inni grają kartami, które ty rozdasz. To prawo sugeruje, że powinniśmy kontrolować sytuacje i warunki, dając innym wrażenie, że mają wolność wyboru, podczas gdy rzeczywistość jest taka, że to my decydujemy o dostępnych opcjach. To jest strategia manipulacji, która pozwala utrzymać kontrolę nad sytuacją, jednocześnie dając innym poczucie autonomii.";
          break;
        case 32:
          text = "Graj na ludzkich fantazjach. To prawo sugeruje, że powinniśmy wykorzystywać ludzkie pragnienia i marzenia do naszych celów. Ludzie często są skłonni do ucieczki od rzeczywistości i zanurzenia się w świat fantazji. Wykorzystując to, możemy kierować ich działaniami i decyzjami.";
          break;
        case 33:
          text = "Odkryj piętę achillesową każdego człowieka. To prawo sugeruje, że powinniśmy zidentyfikować i wykorzystać słabości innych do naszych celów. Każdy człowiek ma swoją “piętę achillesową”, czyli słabość, która może być wykorzystana przeciwko niemu.";
          break;
        case 34:
          text = "Miej własny królewski styl: działaj jak król, aby traktowano cię jak króla. To prawo sugeruje, że powinniśmy zachowywać się z pewnością siebie i godnością, niezależnie od sytuacji. Twój styl i sposób bycia powinny odzwierciedlać twoją unikalność i siłę. Kiedy traktujesz siebie jak króla, inni zaczynają cię tak traktowa.";
          break;
        case 35:
          text = "Zostań mistrzem działania w odpowiednim czasie. To prawo sugeruje, że powinniśmy nauczyć się rozpoznawać i wykorzystywać odpowiednie momenty do działania. Czasami lepiej jest poczekać na właściwy moment, zamiast działać natychmiast.";
          break;
        case 36:
          text = "Lekceważ rzeczy, których nie możesz mieć: ignorowanie ich to najlepsza zemsta. To prawo sugeruje, że powinniśmy nauczyć się ignorować rzeczy, których nie możemy mieć. Zamiast poświęcać energię na dążenie do czegoś, co jest poza naszym zasięgiem, lepiej skupić się na tym, co jest możliwe do osiągnięcia.";
          break;
        case 37:
          text = "Stwórz zależność: utrzymuj innych w zależności od siebie. To prawo sugeruje, że powinniśmy stworzyć sytuacje, w których inni są zależni od nas, aby utrzymać naszą pozycję i władzę. Kiedy inni są zależni od nas, mamy większą kontrolę nad sytuacją.";
          break;
        case 38:
          text = "Myśl co chcesz, ale zachowuj się jak inni. To prawo sugeruje, że powinniśmy zachować swoje prawdziwe myśli i intencje dla siebie, jednocześnie dostosowując swoje zachowanie do oczekiwań innych. Pozwala to na uniknięcie niepotrzebnej uwagi i krytyki.";
          break;
        case 39:
          text = "Zmieniaj się, ale nigdy nie zmieniaj zasad. To prawo sugeruje, że powinniśmy być elastyczni i zdolni do dostosowania się do zmieniających się okoliczności, ale jednocześnie powinniśmy trzymać się naszych podstawowych zasad i wartości.";
          break;
        case 40:
          text = "Niech innym wydaje się, że twoje osiągnięcia przychodzą ci łatwo. To prawo sugeruje, że powinniśmy starać się, aby nasze osiągnięcia wydawały się łatwe i naturalne, nawet jeśli wymagały one dużo pracy i wysiłku. Daje to wrażenie, że jesteśmy naturalnie utalentowani i skuteczni.";
          break;
        case 41:
          text = "Unikaj udawania kogoś wielkiego. To prawo sugeruje, że powinniśmy unikać pretensji do wielkości, które nie są poparte naszymi rzeczywistymi osiągnięciami. Udawanie kogoś, kim nie jesteśmy, może prowadzić do niewłaściwych oczekiwań i rozczarowań.";
          break;
        case 42:
          text = "Bądź spokojny: niech twoje spokój i cierpliwość wywołują frustrację i gniew u innych. To prawo sugeruje, że powinniśmy zachować spokój i cierpliwość, nawet w obliczu konfliktu lub presji. Nasza spokojna postawa może wywołać frustrację i gniew u innych, co daje nam przewagę.";
          break;
        case 43:
          text = "Pracuj nad sercami i umysłami innych. To prawo sugeruje, że powinniśmy starać się wpływać na emocje i myśli innych, aby osiągnąć nasze cele. Wpływanie na serca i umysły innych pozwala nam kształtować ich postawy i zachowania.";
          break;
        case 44:
          text = "Rozbrajaj i rozwścieczaj za pomocą efektu lustra. To prawo sugeruje, że powinniśmy naśladować zachowanie innych, aby rozbroić ich i wywołać frustrację. Efekt lustra polega na odbijaniu zachowań, emocji i postaw innych osób, co może prowadzić do dezorientacji i gniewu.";
          break;
        case 45:
          text = "Głoś potrzebę zmiany, ale nigdy nie reformuj zbyt wiele naraz. To prawo sugeruje, że powinniśmy dążyć do zmian, ale robić to stopniowo i ostrożnie. Zbyt wiele zmian naraz może prowadzić do chaosu i niezadowolenia.";
          break;
        case 46:
          text = "Nigdy nie wydawaj się doskonały. To prawo sugeruje, że powinniśmy unikać pokazywania naszej doskonałości, ponieważ może to prowadzić do zazdrości i niechęci ze strony innych.";
          break;
        case 47:
          text = "Nie przekraczaj celu, do jakiego dążyłeś; gdy zwyciężysz, wiedz gdzie się zatrzymać. To prawo sugeruje, że powinniśmy znać nasze granice i umieć zatrzymać się, gdy osiągniemy nasz cel. Zbyt daleko posunięte dążenie do celu może prowadzić do niepotrzebnych problemów i konfliktów.";
          break;
        case 48:
          text = "Bądź stale czujny: nie daj się zaskoczyć. To prawo sugeruje, że powinniśmy zawsze być czujni i przygotowani na niespodziewane wydarzenia. Nie możemy pozwolić sobie na zaskoczenie, ponieważ może to prowadzić do utraty kontroli nad sytuacją.";
          break;
      }
      document.getElementsByClassName('laws-desc')[x-1].innerHTML = text;
    }
    
  }

function expand()
{
  for(i = 1; i<49; i++)
  {
    document.getElementsByClassName('laws-desc')[i-1].innerHTML = expand_laws(i);
    document.getElementById('laws-button').innerHTML = '<button class="laws-button" onclick="collapse();">Zwiń</button>'
  }
  
}
function collapse()
{
  for(i = 1; i<49; i++)
  {
    document.getElementsByClassName('laws-desc')[i-1].innerHTML = "";
    document.getElementById('laws-button').innerHTML = '<button class="laws-button" onclick="expand();">Rozwiń</button>'
  }
}

function expand_laws(x)
{
  switch(x)
      {
        case 1:
          text = "Nigdy nie przyćmiewaj Mistrza! To prawo sugeruje, że zawsze powinniśmy pokazywać szacunek dla osób, które mają nad nami władzę, i nigdy nie próbować ich przewyższyć lub pokazać, że jesteśmy lepsi.";
          break;
        case 2:
          text = "Nigdy nie ufaj zbytnio przyjaciołom, naucz się używać wrogów. To prawo sugeruje, że przyjaciele często zdradzają Cię w pośpiechu, ponieważ są bardziej podatni na zazdrość. Jeśli jednak zatrudnisz byłego wroga, okaże się on bardziej godny zaufania, ponieważ ma więcej do udowodnienia. W związku z tym powinieneś bardziej obawiać się przyjaciół niż wrogów.";
          break;
        case 3:
          text = "Zachowaj w tajemnicy twoje intencje. To prawo sugeruje, że powinieneś ukrywać swoje prawdziwe intencje i nie ujawniać swoich planów. Dzięki temu inni nie będą w stanie przewidzieć twoich działań ani przeciwdziałać im.";
          break;
        case 4:
          text = "Zawsze mów mniej niż potrzeba. To prawo sugeruje, że powinieneś zawsze mówić tylko tyle, ile jest absolutnie konieczne, i nie więcej. Pozwala to utrzymać kontrolę nad informacjami i zaskoczyć innych, gdy to konieczne.";
          break;
        case 5:
          text = "Tak wiele zależy od reputacji. Strzeż jej za wszelką cenę. To prawo podkreśla znaczenie utrzymania dobrej reputacji. Twoja reputacja jest jednym z najważniejszych aktywów, które posiadasz, i powinieneś chronić ją za wszelką cenę.";
          break;
        case 6:
          text = "Za wszelką cenę zwracaj na siebie uwagę. To prawo sugeruje, że powinieneś zawsze starać się przyciągać uwagę, niezależnie od sytuacji. W ten sposób zyskasz większą kontrolę nad swoim otoczeniem i będziesz mógł lepiej wpływać na innych.";
          break;
        case 7:
          text = "Spraw, żeby inni pracowali za ciebie, ale to ty zbierz laury. To prawo sugeruje, że powinieneś wykorzystywać umiejętności i wysiłek innych do osiągnięcia swoich celów, ale jednocześnie upewnić się, że to ty otrzymasz uznanie za ich pracę.";
          break;
        case 8:
          text = "Spraw, by inni do ciebie przychodzili, użyj zaczepki, jeśli trzeba. To prawo sugeruje, że powinieneś stworzyć sytuację, w której inni będą do ciebie przychodzić z własnej woli. Możesz to osiągnąć, używając różnych technik przyciągania uwagi, takich jak zaczepki.";
          break;
        case 9:
          text = "Wygrywaj działaniem, nigdy przekonywaniem. To prawo sugeruje, że powinieneś skupić się na działaniu i osiąganiu wyników, a nie na przekonywaniu innych do swojego punktu widzenia.";
          break;
        case 10:
          text = "Zaraźliwość: unikaj nieszczęśliwych i pechowców. To prawo sugeruje, że powinieneś unikać osób, które mają pecha lub są nieszczęśliwe, ponieważ ich negatywność może przenieść się na ciebie.";
          break;
        case 11:
          text = "Naucz się utrzymywać innych w zależności od ciebie. To prawo sugeruje, że powinieneś stworzyć sytuację, w której inni są od ciebie zależni. Dzięki temu zyskasz większą kontrolę nad swoim otoczeniem i będziesz mógł lepiej wpływać na innych.";
          break;
        case 12:
          text = "Stosuj wybiórczo uczciwość i hojność, żeby rozbroić swoją ofiarę. To prawo sugeruje, że powinieneś używać uczciwości i hojności w strategiczny sposób, aby rozbroić swoją ofiarę. Dzięki temu będziesz mógł lepiej kontrolować sytuację i osiągnąć swoje cele.";
          break;
        case 13:
          text = "Kiedy prosisz o pomoc, odwołuj się do własnego interesu ludzi, nigdy nie licz na łaskę lub wdzięczność. To prawo sugeruje, że gdy prosisz o pomoc, powinieneś odwoływać się do interesów innych, a nie polegać na ich łaskawości czy wdzięczności.";
          break;
        case 14:
          text = "Udawaj przyjaciela, pracuj jak szpieg. To prawo sugeruje, że powinieneś zachowywać się jak przyjaciel, ale jednocześnie zbierać informacje jak szpieg. Pozwala to na zdobycie cennych informacji i utrzymanie przewagi.";
          break;
        case 15:
          text = "Kompletnie zniszcz swojego wroga. To prawo sugeruje, że jeśli masz wroga, powinieneś go całkowicie zniszczyć. Półśrodki mogą prowadzić do odwetu i dalszych problemów.";
          break;
        case 16:
          text = "Stosuj nieobecność, żeby zyskać większy szacunek. To prawo sugeruje, że powinieneś umiejętnie wykorzystywać swoją nieobecność, aby zwiększyć swoją wartość w oczach innych.";
          break;
        case 17:
          text = "Trzymaj innych w napięciu: kultywuj atmosferę nieprzewidywalności. To prawo sugeruje, że powinieneś utrzymywać innych w stanie niepewności, tworząc atmosferę nieprzewidywalności. Dzięki temu zyskasz większą kontrolę nad sytuacją.";
          break;
        case 18:
          text = "Nie buduj fortec, żeby się schronić. To prawo sugeruje, że nie powinieneś izolować się od innych, budując metaforyczne “fortece”. Izolacja może prowadzić do utraty kontaktu z rzeczywistością i ograniczenia możliwości.";
          break;
        case 19:
          text = "Wiedz, z kim masz do czynienia. Nie obraź niewłaściwej osoby. To prawo sugeruje, że powinieneś znać ludzi, z którymi masz do czynienia, i unikać obrażania tych, którzy mogą ci zaszkodzić.";
          break;
        case 20:
          text = "Nie wtrącaj się w niczyje sprawy. To prawo sugeruje, że powinieneś unikać ingerowania w sprawy innych, aby uniknąć niepotrzebnych konfliktów i problemów.";
          break;
        case 21:
          text = "Udawaj naiwnego, żeby złapać naiwnego. Wydawaj się głupszy niż twoja ofiara. To prawo sugeruje, że powinieneś udawać naiwnego lub mniej inteligentnego, aby zaskoczyć swoją ofiarę i zyskać przewagę.";
          break;
        case 22:
          text = "Stosuj taktykę pokonanego: przekształć słabość w siłę. To prawo sugeruje, że powinieneś umiejętnie wykorzystać swoją pozorną słabość jako siłę, przekształcając ją w strategiczną przewagę.";
          break;
        case 23:
          text = "Skoncentruj swoje siły. To prawo sugeruje, że powinieneś skupić swoje zasoby i wysiłki na jednym celu lub obszarze, zamiast rozpraszać się na wiele różnych działań.";
          break;
        case 24:
          text = "Zachowuj się jak idealny dworzanin. To prawo sugeruje, że powinieneś zachowywać się jak doskonały dworzanin, zwracając uwagę na swoje maniery i postępowanie.";
          break;
        case 25:
          text = "Twórz siebie na nowo. To prawo sugeruje, że powinieneś być w stanie reinwentować siebie, aby dostosować się do zmieniających się okoliczności i osiągnąć swoje cele.";
          break;
        case 26:
          text = "Miej czyste ręce. To prawo sugeruje, że powinieneś utrzymywać swoją niewinność i unikać bezpośredniego zaangażowania w kontrowersyjne działania.";
          break;
        case 27:
          text = "Graj na ludzkiej potrzebie wierzenia, by stworzyć oddanych ślepo naśladowców. To prawo sugeruje, że powinieneś wykorzystać ludzką potrzebę wierzenia w coś, aby stworzyć oddanych naśladowców.";
          break;
        case 28:
          text = "Brawurowo przystępuj do działania. To prawo sugeruje, że powinieneś podejmować działania z odwagą i pewnością siebie, aby zaskoczyć innych i zyskać przewagę.";
          break;
        case 29:
          text = "Zaplanuj wszystko aż do końca. To prawo sugeruje, że powinieneś dokładnie planować swoje działania od początku do końca, aby uniknąć nieprzewidzianych problemów i osiągnąć swoje cele.";
          break;
        case 30:
          text = "Niech innym wydaje się, że twoje osiągnięcia przychodzą ci łatwo. To prawo sugeruje, że powinieneś sprawiać wrażenie, jakby twoje osiągnięcia przychodziły ci z łatwością. Dzięki temu inni będą cię bardziej szanować i podziwiać";
          break;
        case 31:
          text = "Kontroluj możliwości wyboru: niech inni grają kartami, które ty rozdasz. To prawo sugeruje, że powinniśmy kontrolować sytuacje i warunki, dając innym wrażenie, że mają wolność wyboru, podczas gdy rzeczywistość jest taka, że to my decydujemy o dostępnych opcjach. To jest strategia manipulacji, która pozwala utrzymać kontrolę nad sytuacją, jednocześnie dając innym poczucie autonomii.";
          break;
        case 32:
          text = "Graj na ludzkich fantazjach. To prawo sugeruje, że powinniśmy wykorzystywać ludzkie pragnienia i marzenia do naszych celów. Ludzie często są skłonni do ucieczki od rzeczywistości i zanurzenia się w świat fantazji. Wykorzystując to, możemy kierować ich działaniami i decyzjami.";
          break;
        case 33:
          text = "Odkryj piętę achillesową każdego człowieka. To prawo sugeruje, że powinniśmy zidentyfikować i wykorzystać słabości innych do naszych celów. Każdy człowiek ma swoją “piętę achillesową”, czyli słabość, która może być wykorzystana przeciwko niemu.";
          break;
        case 34:
          text = "Miej własny królewski styl: działaj jak król, aby traktowano cię jak króla. To prawo sugeruje, że powinniśmy zachowywać się z pewnością siebie i godnością, niezależnie od sytuacji. Twój styl i sposób bycia powinny odzwierciedlać twoją unikalność i siłę. Kiedy traktujesz siebie jak króla, inni zaczynają cię tak traktowa.";
          break;
        case 35:
          text = "Zostań mistrzem działania w odpowiednim czasie. To prawo sugeruje, że powinniśmy nauczyć się rozpoznawać i wykorzystywać odpowiednie momenty do działania. Czasami lepiej jest poczekać na właściwy moment, zamiast działać natychmiast.";
          break;
        case 36:
          text = "Lekceważ rzeczy, których nie możesz mieć: ignorowanie ich to najlepsza zemsta. To prawo sugeruje, że powinniśmy nauczyć się ignorować rzeczy, których nie możemy mieć. Zamiast poświęcać energię na dążenie do czegoś, co jest poza naszym zasięgiem, lepiej skupić się na tym, co jest możliwe do osiągnięcia.";
          break;
        case 37:
          text = "Stwórz zależność: utrzymuj innych w zależności od siebie. To prawo sugeruje, że powinniśmy stworzyć sytuacje, w których inni są zależni od nas, aby utrzymać naszą pozycję i władzę. Kiedy inni są zależni od nas, mamy większą kontrolę nad sytuacją.";
          break;
        case 38:
          text = "Myśl co chcesz, ale zachowuj się jak inni. To prawo sugeruje, że powinniśmy zachować swoje prawdziwe myśli i intencje dla siebie, jednocześnie dostosowując swoje zachowanie do oczekiwań innych. Pozwala to na uniknięcie niepotrzebnej uwagi i krytyki.";
          break;
        case 39:
          text = "Zmieniaj się, ale nigdy nie zmieniaj zasad. To prawo sugeruje, że powinniśmy być elastyczni i zdolni do dostosowania się do zmieniających się okoliczności, ale jednocześnie powinniśmy trzymać się naszych podstawowych zasad i wartości.";
          break;
        case 40:
          text = "Niech innym wydaje się, że twoje osiągnięcia przychodzą ci łatwo. To prawo sugeruje, że powinniśmy starać się, aby nasze osiągnięcia wydawały się łatwe i naturalne, nawet jeśli wymagały one dużo pracy i wysiłku. Daje to wrażenie, że jesteśmy naturalnie utalentowani i skuteczni.";
          break;
        case 41:
          text = "Unikaj udawania kogoś wielkiego. To prawo sugeruje, że powinniśmy unikać pretensji do wielkości, które nie są poparte naszymi rzeczywistymi osiągnięciami. Udawanie kogoś, kim nie jesteśmy, może prowadzić do niewłaściwych oczekiwań i rozczarowań.";
          break;
        case 42:
          text = "Bądź spokojny: niech twoje spokój i cierpliwość wywołują frustrację i gniew u innych. To prawo sugeruje, że powinniśmy zachować spokój i cierpliwość, nawet w obliczu konfliktu lub presji. Nasza spokojna postawa może wywołać frustrację i gniew u innych, co daje nam przewagę.";
          break;
        case 43:
          text = "Pracuj nad sercami i umysłami innych. To prawo sugeruje, że powinniśmy starać się wpływać na emocje i myśli innych, aby osiągnąć nasze cele. Wpływanie na serca i umysły innych pozwala nam kształtować ich postawy i zachowania.";
          break;
        case 44:
          text = "Rozbrajaj i rozwścieczaj za pomocą efektu lustra. To prawo sugeruje, że powinniśmy naśladować zachowanie innych, aby rozbroić ich i wywołać frustrację. Efekt lustra polega na odbijaniu zachowań, emocji i postaw innych osób, co może prowadzić do dezorientacji i gniewu.";
          break;
        case 45:
          text = "Głoś potrzebę zmiany, ale nigdy nie reformuj zbyt wiele naraz. To prawo sugeruje, że powinniśmy dążyć do zmian, ale robić to stopniowo i ostrożnie. Zbyt wiele zmian naraz może prowadzić do chaosu i niezadowolenia.";
          break;
        case 46:
          text = "Nigdy nie wydawaj się doskonały. To prawo sugeruje, że powinniśmy unikać pokazywania naszej doskonałości, ponieważ może to prowadzić do zazdrości i niechęci ze strony innych.";
          break;
        case 47:
          text = "Nie przekraczaj celu, do jakiego dążyłeś; gdy zwyciężysz, wiedz gdzie się zatrzymać. To prawo sugeruje, że powinniśmy znać nasze granice i umieć zatrzymać się, gdy osiągniemy nasz cel. Zbyt daleko posunięte dążenie do celu może prowadzić do niepotrzebnych problemów i konfliktów.";
          break;
        case 48:
          text = "Bądź stale czujny: nie daj się zaskoczyć. To prawo sugeruje, że powinniśmy zawsze być czujni i przygotowani na niespodziewane wydarzenia. Nie możemy pozwolić sobie na zaskoczenie, ponieważ może to prowadzić do utraty kontroli nad sytuacją.";
          break;
      }
      return text;
}
