# Portfolio Studenta

## Opis projektu

Portfolio Studenta to aplikacja mobilna wykonana w React Native z wykorzystaniem Expo. Aplikacja przedstawia profil studenta, jego umiejętności, projekty oraz dane kontaktowe.

Projekt wykonałem jako aplikacje zaliczeniową z przedmiotu Programowanie mobilne na iOS. Aplikacja wykorzystuje nawigację między ekranami, formularze, walidację danych, Context API oraz lokalne przechowywanie danych za pomocą AsyncStorage.

## Technologie

W projekcie wykorzystano:

* React Native
* Expo
* Expo Router
* TypeScript
* AsyncStorage
* Context API
* React Hooks
* Ionicons

## Funkcjonalności

Aplikacja zawiera następujące funkcjonalności:

* ekran profilu studenta,
* zdjęcie profilowe,
* opis studenta,
* lista umiejętności,
* edycja danych profilu,
* zapis profilu w pamięci lokalnej,
* ekran listy projektów,
* wyszukiwanie projektów po nazwie,
* ekran szczegółów wybranego projektu,
* formularz dodawania nowego projektu,
* walidacja danych w formularzu,
* możliwość usuwania projektów,
* zapis projektów w pamięci lokalnej,
* ekran kontaktowy,
* dane kontaktowe: e-mail, telefon, GitHub, LinkedIn i lokalizacja,
* przyciski otwierające e-mail, telefon oraz GitHub,
* działająca nawigacja dolna między ekranami,
* zagnieżdżona nawigacja do szczegółów projektu.

## Ekrany aplikacji

### Profil

Ekran profilu zawiera dane studenta, zdjęcie profilowe, opis, cel zawodowy oraz listę umiejętności. Użytkownik może edytować dane profilu. Zmienione dane są zapisywane lokalnie i nie znikają po ponownym uruchomieniu aplikacji.

### Projekty

Ekran projektów prezentuje listę projektów studenta. Każdy projekt zawiera nazwę, opis, technologie oraz rok realizacji. Na ekranie znajduje się także wyszukiwarka projektów oraz przycisk umożliwiający dodanie nowego projektu.

### Szczegóły projektu

Ekran szczegółów pokazuje pełne informacje o wybranym projekcie, czyli nazwę, opis, wykorzystane technologie oraz rok realizacji. Użytkownik może także usunąć projekt.

### Nowy projekt

Ekran dodawania projektu zawiera formularz z polami:

* nazwa projektu,
* opis projektu,
* technologie,
* rok realizacji.

Formularz posiada walidację danych:

* nazwa musi mieć minimum 3 znaki,
* opis musi mieć minimum 10 znaków,
* należy podać minimum jedną technologię,
* rok musi być liczbą z zakresu 2000–2030.

### Kontakt

Ekran kontaktowy zawiera dane kontaktowe studenta oraz przyciski umożliwiające szybki kontakt. Użytkownik może otworzyć aplikację pocztową, telefon lub profil GitHub.

## Lokalny zapis danych

Aplikacja wykorzystuje AsyncStorage do zapisywania danych lokalnie na urządzeniu. Dzięki temu dane profilu oraz lista projektów są zachowywane po ponownym uruchomieniu aplikacji.

Zapisywane dane:

* profil użytkownika,
* lista projektów.

## Struktura projektu

```text
portfolio-studenta/
  app/
    _layout.tsx
    index.tsx
    contact.tsx
    projects/
      _layout.tsx
      index.tsx
      new.tsx
      [id].tsx

  assets/
    picture.jpg

  context/
    ProjectsContext.tsx
    ProfileContext.tsx

  data/
    projects.ts

  utils/
    storage.ts

  README.md
  package.json
  app.json
```

## Instrukcja uruchomienia

### 1. Sklonowanie repozytorium

```bash
git https://github.com/mormych/IOS_prototyp.git
```

### 2. Przejście do folderu projektu

```bash
cd portfolio-studenta
```

### 3. Instalacja zależności

```bash
npm install
```

Jeżeli wystąpią konflikty zależności, można użyć:

```bash
npm install --legacy-peer-deps
```

### 4. Uruchomienie aplikacji

```bash
npx expo start
```

W przypadku problemów z cache:

```bash
npx expo start --clear
```

### 5. Uruchomienie na telefonie

Aby uruchomić aplikację na telefonie:

1. Zainstaluj aplikację Expo Go(Sklep Play, App store).
2. Wejdź do katalogu projektu
3. Uruchom projekt komendą `npx expo start`.
4. Zeskanuj kod QR w aplikacji Expo Go.
5. Aplikacja uruchomi się na telefonie.

## Autor

Michał Adamiak

## Status projektu

Projekt został ukończony. Aplikacja spełnia wszystkie wymagania projektu Portfolio Studenta. Wykonałem ekran profilu, ekran projektów, ekran szczegółów projektu, ekran kontaktowy, formularz dodawania projektów, walidację danych, lokalny zapis danych oraz spersonalizowany wygląd.
