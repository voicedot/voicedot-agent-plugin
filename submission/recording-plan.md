# Nagranie 0.4.0 — ChatGPT oraz pełny cykl Codexa

To scenariusz, nie gotowy film. Dowody wykonania i nagrania są osobnymi materiałami. Hasła, tokeny, poczta i ustawienia serwerów pozostają poza nagraniem. Dane fikcyjne: Harbor Notes oraz Fieldwork Notes. Podstawowe testy działają na gotowym koncie demo; kodowanie wymaga otwarcia osobnego repo w uprawnionym środowisku agenta.

## Stan nagrań 30.10 — przeczytaj przed ponownym wykonaniem scen

Pełny cykl Harbor Notes (uwaga człowieka → zmiana kodu → publiczne wdrożenie → osobiste Checked) i odpowiedź z ponowieniem są już nagrane. Zachowaj poprawioną stronę i zapisaną decyzję. Poniższy scenariusz opisuje przebieg tych scen, ale nie jest poleceniem ich resetu. Ponowna realizacja wymaga osobnej decyzji Piotra. Osobny świeży przebieg CLI dla Workshop Notes także ukończono 30.10: zgody i weryfikacja człowieka, instalacja snippetu, wdrożenie, ping oraz pierwsza przypięta uwaga widoczna w Inboxie. Powstały cztery skrócone eksporty. Wcześniejsze próby diagnostyczne są zastąpione tym przebiegiem. Montaż, narracja, pełna kontrola prywatności i publikacja filmu pozostają do wykonania.

Operator steruje OpenScreen i Chrome. Gdy wymagany krok wykonuje Piotr w oknie Codexa, nagranie obejmuje jego rzeczywistą pracę. Narracja angielska powstanie później; nie zastępuje wyników narzędzi ani zgód człowieka.

## Stan po zmianie kontraktu 22.10

PreviewId jest wdrożony. 22.10 zaliczono w rzeczywistym ChatGPT Medium: podgląd → reload → osobna zgoda Piotra → jedna odpowiedź → retry bez duplikatu. Pozostałe warianty, runda/bulk i skany nie są przez to automatycznie zaliczone. Nowy film wymaga nowej uwagi człowieka; starego wyniku nie przedstawiać jako nowego przebiegu. Piotr nagrywa ekran, a lektor powstaje później przez ElevenLabs; narracja nie zastępuje wykonanych czynności.

## Przed nagraniem

- Repo strony: https://github.com/voicedot/voicedot-review-demo — branch review.
- Adres kodowanej strony: https://review.voicedot.ai/. DNS, wymuszone HTTPS, rzeczywisty ping widgetu i zgodny deployment.json potwierdzono 21.10. Pełny cykl ponownie wykonano i nagrano 30.10. Strona jest już poprawiona. Nie przywracaj jasnego przycisku przed odrębną sceną CLI ani podczas montażu. Jeśli Piotr osobno zleci ponowienie cyklu kodowania, przywróć tylko kolor nowym commitem zgodnie z README, zachowując historię, i użyj nowej uwagi człowieka oraz nowej rundy.
- Stałe przykłady przeglądarkowe pozostają pod https://app.voicedot.ai/reviewer/demo/harbor-notes/ i https://app.voicedot.ai/reviewer/demo/fieldwork-notes/.
- Połączyć aktualną prywatną instalację wtyczki z dedykowanym kontem; weryfikację hasła i OAuth wykonać poza nagraniem.
- Operator sprawdza czysty branch review, wersję początkową, Actions i ograniczony zapis Git. Dane dostępowe tylko w systemowym magazynie i prywatnym formularzu OpenAI, nigdy w komendach, repo ani kadrze filmu.

## Część 1 — feedback do wdrożonej zmiany w Codexie

1. Pokaż stronę i początkowy jasny przycisk Start a workspace. Sam przypnij i wyślij uwagę: “Please make the Start a workspace button easier to read by using a darker green.” Pierwszą uwagę na nowym adresie wysyła człowiek.
2. W Codexie otwórz repo strony. Prompt: “Read the feedback in Harbor Notes from https://review.voicedot.ai about Start a workspace. Show the page context and propose the smallest fix. Do not edit or publish yet.” Pokaż odczytaną rzeczywistą uwagę.
3. Po obejrzeniu propozycji: “Implement that button contrast fix in this repository, verify it, commit and push to review. You may deploy this demo website. Keep other feedback open.” Pokaż diff i prawdziwy push.
4. Pokaż zielone Publish review website w Actions. Porównaj commit w deployment.json i stopce strony z wypchniętym SHA. Otwórz stronę i pokaż faktyczny ciemniejszy przycisk.
5. Prompt: “Prepare a review round for this deployed button fix. Include the exact page, feedback thread and what I should check.” Pokaż podgląd; dopiero po osobnym potwierdzeniu utwórz rundę. Otwórz zwrócony link i osobiście oznacz Checked albo Needs fix.
6. Nie przedstawiaj MCP jako narzędzia edytującego pliki lub wykonującego git push. Robi to uprawniony host Codex; MCP dostarcza uwagi, kontekst oraz zapisuje rundę po zgodzie.

## Część 2 — pięć pozytywnych i trzy negatywne przypadki

1. W ChatGPT pokaż połączoną wtyczkę i pięć promptów z plugin.json: projekty, otwarte Harbor feedback, rozmowa o przycisku z odpowiedzią, przekazanie Fieldwork, stan istniejącej rundy Homepage fixes. Operator musi wcześniej przygotować prawdziwe zmiany i osobiste Checked, które odpowiadają oczekiwaniom paczki.
2. Pokaż rzeczywisty wynik: Help pominięty w otwartych, nieprzekazana rozmowa Fieldwork niewidoczna, faktycznie przyjęty przycisk w zakończonej jednoelementowej rundzie. Nie dodawać fikcyjnego oczekującego nagłówka. Nie fabrykuj stanu tylko dla nagrania.
3. Odpowiedź w otwartym wątku wymaga dokładnego podglądu i osobnego “Yes, send exactly this reply.” Treść może stwierdzać wdrożenie tylko po faktycznym wdrożeniu. Podgląd pokazuje previewId. Po zgodzie w osobnej turze agent potwierdza przez preview_id; operator sprawdza ponowienie tej samej operacji w jej 10-minutowym oknie i jedną zapisaną odpowiedź. W diagnostyce operator sprawdza replayed=true i ten sam messageId. W zwykłej odpowiedzi użytkownik widzi „Reply sent” albo „This reply was already sent. No duplicate was added”; bez surowych flag i identyfikatorów. Tajny token pozostaje poza kadrem. Nie otwieraj Help odpowiedzią.
4. Pokaż trzy granice z plugin.json: haiku bez narzędzi VoiceDot, odmowa usunięcia i odmowa dostępu do cudzych projektów.

## Część 3 — instalacja i osobne CLI

Jeśli pokazujesz instalację, agent instaluje snippet raz, otwiera dokładny autoryzowany HTTPS adres i pokazuje readyForFeedback=true po prawdziwym pingu. Rejestrację CLI przedstaw osobno od MCP. Zachowaj zgodę i weryfikację człowieka oraz jego pierwszą wiadomość. Bieżący onboarding pokazuje automatyczny 14-dniowy Team trial bez karty i opcjonalny wybór płatnego planu. Agent może otworzyć Inbox, ale nie wybiera planu ani nie dodaje karty. Nie opisuj tego nagrania jako ręcznego wyboru Free: taki wybór nie nastąpił. Nie pokazuj sekretów lub linków uwierzytelniających.

Do świeżej sceny CLI służy osobna strona https://install.voicedot.ai i repo https://github.com/voicedot/voicedot-install-demo (Workshop Notes). Nie używaj ukończonego Harbor Notes do instalacji od zera. Nowe żądanie musi wysłać nowy mail po zgodach człowieka. Ekran oczekiwania EN/PL kieruje do przycisku potwierdzającego adres w mailu, otwarcia linka w tej samej przeglądarce i powrotu do agenta. Nie ma osobnego kodu do przepisania. Weryfikacja e-maila nie loguje użytkownika; późniejszy link logowania jest osobnym krokiem. Mail i jednorazowe linki pozostają poza filmem.

## Po nagraniu

Odtwórz film i sprawdź czytelność, prawdziwe wyniki oraz brak sekretów. Udostępnij pod adresem dostępnym recenzentowi bez dodatkowego logowania; operator sprawdza odtwarzanie. Dopiero rzeczywisty URL trafia do review.demo_recording_url i końcowej paczki. Telefon wymaga natywnej aplikacji ChatGPT iOS/Android; emulacja przeglądarki nie zalicza tego kroku. Piotr uzupełnia dane prywatne i atestacje. Zgłoszenie dopiero po dosłownym „wyślij”.
