Gamla tankar kring en betalsida för Stockholm Makerspace
====================
Som ett första steg gör vi absolut minsta möjliga som krävs för att ersätta Tictail. Dvs en enkel webshop som inte kan presentera några slutdatum eller liknande för medlemmen. Den stora skillnaden blir att medlemmen först fyller i sin E-post och får en engånginloggning via mail. På så vis kan köpet kopplas till en specifik medlem.


Databas och GDPR
----------------
Vi vill undvika att lagra data i detta system. Bland annat på grund av att vi vill slippa krångel med GDPR.

Vi genererar en inloggningslänk kryptografiskt på följande sätt:

key1 = Hemlig nyckel för hela systemet
key2 = Genereras unikt för varje mail
encrypted_email = E-postadressen krypteras med en kombination av key1+key2
länk = http://medlem.makerspace.se/login/[key2]/[encrypted_email]

När medlemmen sedan klickar på länken kan systemet plocka fram key1 ur serverns konfigurationsfil och key2 från URL. På så vis kan systemet dekryptera E-postadressen. Vi har altså inget behov av att lagra inloggningsuppgifter.

Systemet lagrar tillfälligt personuppgifter i en session på servern som automatiskt tas bort efter 24h.

Makerpay har inte någon egen databas, utan allt skickas rätt in i MakerAdmin's databas, utan att ens gå via något API.


Betalsystem
-----------
Sekvensdiagrammet är baserat på att tjänsten Makerpay är igång, vilket den inte är i dagsläget. En förenkling skulle kunna vara att enbart tillåta Stripe, plocka ut befintlig kod från Makerpay och låta shopen trycka in data själv i MakerAdmin's databas.


Sekvensdiagram
--------------
![Sekvensdiagram](https://raw.githubusercontent.com/makerspace/medlem.makerspace.se/master/Docs/Sekvensdiagram.png)
