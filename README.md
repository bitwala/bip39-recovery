## ENGLISH
### BIP39 Private Key Recovery

Use your backup phrases to generate the corresponding private key for your Bitwala wallet.

Note: this is only for for the product launched late 2018. For legacy wallets, please see [here](https://support.bitwala.com/hc/en-gb/articles/360000857880/)

[Online version](https://bitwala.github.io/bip39-recovery/). WARNING NEVER DO THIS!!!

### Running offline

If you would prefer to run it, offline, follow these instructions to set up the recovery tool on your machine.

### Paranoid Mode:
- [x] start your RasPi with LAN or WLAN
- [x] install the software
- [x] disable: WLAN
- [x] disable: LAN
- [x] disable: Bluetooth
- [x] shutdown
- [x] wait 30 seconds
- [x] restart Raspi
- [x] check if WLAN,LAN and BT is still disabeled
- [x] check if none is arround you
- [x] start recovery app
- [x] recover your wallet
- [x] switchoff your RasPi/Device
- [x] remove the Raspi SD card and format it on an also offline / cold maschine

### Requirements

- Node & npm [https://nodejs.org/](https://nodejs.org/)
- 12 word main key list
- 12 word backup key list

### Installing

- Clone or download the repository
- `cd app`
- Run `yarn`
- Run `yarn start`

## DEUTSCH

Benutze deinen Bitwala BTC Hauptschlüssel sowie deinen Backupschlüssel der generierten Wallet.

Hinweis: Diese Anweisungen gelten nur für die App nach Anfang 2018. Für normale Wallets vor 2018, sehe hier nach [hier](https://support.bitwala.com/hc/en-gb/articles/360000857880/)

### Sicherheitswarnung! [Online version] NICHT BENUTZEN!!!!.

### Offline Recovery

Was man benötigt kann ich hier kurz aufzeigen, was jedoch unerlässlich ist, ist das du es auf einem Gerät ausführst das
vor dem Hochfahren und wärend dem Hochfahren sich nicht mit dem Internet verbindet und logischerweise auch nicht wärend dem eigentlichen Recovery! Das Gerät es am Besten auch nicht kann.

Ich selbst benutze einen RasPi dem ich die Treiber für LAN, WLAN und Bluetooth entfernt habe. Klar die unten aufgeführten Anweisungen kannst du natürlich nur ausführen wenn das Gerät eine Online Verbindung hat.

### So gehe ich im Detail vor:
- [x] RasPi hochfahren mit LAN oder WLAN
- [x] Software installieren
- [x] WLAN deaktivieren
- [x] LAN deaktivieren
- [x] Bluetooth deaktivieren
- [x] Herunterfahren
- [x] 30 Sekunden warten
- [x] Raspi starten
- [x] Testen ob WLAN,LAN und BT ausgeschaltet sind
- [x] Software starten
- [x] Schaue dich um das Niemand dir über die Schultern schaut 
- [x] Recovery ausführen
- [x] Gerät ausschalten
- [x] SD Karte entfernen und an anderem Rechner der ebenfalls nur offline ist formatieren

### Vorraussetzungen

- Node & npm [https://nodejs.org/](https://nodejs.org/)
- Hauptschlüssel 12 Worte 
- Backupschlüssel 12 Worte 

### Installation

- Clone or downloade diese Repository
- `cd app`
- Run `yarn`
- Run `yarn start`




