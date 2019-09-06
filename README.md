# TOC
## BIP39 Private Key Recovery Tool

- [English](#english)
- [BIP39 Private Key Recovery](#bip39-private-key-recovery)
- [Build and Running offline](#build-and-running-offline)
- [Requirements](#requirements)
- [Installing](#installing)
- [Test Pattern](#test-patter)
- [Build and work ice-cold / offline](#build-and-work-ice-cold--offline)
- [Work offline without build](#work-offline-without-build)
- [Paranoid Mode](#paranoid-mode)
- [SOFTWARE IS PROVIDED AS IS](#software-is-provided-as-is)
---
- [Deutsch](#deutsch)
- [Sicherheitswarnung](#sicherheitswarnung)
- [Offline Recovery](#offline-recovery)
- [So gehe ich im Detail vor](#so-gehe-ich-im-detail-vor)
- [Vorraussetzungen](#vorraussetzungen)
- [Installation](#installation)
- [Software wie sie ist](#software-wie-sie-ist)
---


## ENGLISH
### BIP39 Private Key Recovery

Use your backup phrases to generate the corresponding private key for your Bitwala wallet.

Note: this is only for for the product launched late 2018. For legacy wallets, please see [here](https://support.bitwala.com/hc/en-gb/articles/360000857880/)(no warranty!)

[Online version](https://bitwala.github.io/bip39-recovery/). WARNING! DO NOT USE THIS ONLINE!!! [more](#work-offline-without-build)

### Build and Running offline

If you would prefer to run it, offline, follow these instructions to set up the recovery tool on your machine.

### Requirements

- Node & npm [https://nodejs.org/](https://nodejs.org/)
- 12 word main key list
- 12 word backup key list

### Installing

- Clone or download the repository
- `cd app`
- Run `yarn`
- Run `yarn start`


### Test patter

- Tests:
    - Main key: search scout husband nasty dust choose stable carry memory struggle identify slim
        - Result: xprv9s21ZrQH143K3SWqj8XUcCNPd5QzLq8aFHBY4QCw4ZLossvsrETTARg3nA5FZqPjpWMKdwEpM9jkqb9Mwc35XxV1sLcuwfePsEuxsw3ukDe
            - with password: test: xprv9s21ZrQH143K3qvn1A5XS9U2Fz6hwLjZ77e3o3WdGXHwA3jkZfWfui1Hz9Xra1joMGgndQPDA2YoRxYezfNiLDaGGMr1uqMhAzZCESvZ1Rw
    - Backup key: mule decrease dragon exist rubber network trouble inner mouse drum gadget stone
        - Result: xprv9s21ZrQH143K42181pdXa85XUv5YerBRQQ1qPDSD8BCKa1e7pjm1Q9dRhZpxiWfQGWPrWfWdDZFDYRsCF9aWPSc5n1ZuyxTVrSpVXujgZBc
            - with pasword: test: xprv9s21ZrQH143K253SFRj76SwzLU3Gt1WqdrxDfeMhuyH8CFHfLCm79jeNGB6ZnAAkFzY9nzeK5FeWRRUVFo2fxHADRqDZLhtJDJqjWK6xEBB

`If you copy and past the keys above you will get the above results, if not something is wrong`

### Build and work ice-cold / offline
yarn build
yarn global add serve
serve -s build

### Work offline without build

- [x] Visit [Online version](https://bitwala.github.io/bip39-recovery/)
- [ ] Save the website as Page / Web archive (create a new folder for)
- [ ] copy the saved folder to SD-Card
- [ ] Use the tool on an LAN / WAN / BT free computer


### Paranoid Mode
- [x] start your RasPi with LAN or WLAN
- [ ] install the software
- [ ] disable: WLAN
- [ ] disable: LAN
- [ ] disable: Bluetooth
- [ ] shutdown
- [ ] wait 30 seconds
- [ ] restart Raspi
- [ ] check if WLAN,LAN and BT is still disabeled
- [ ] check if none is arround you
- [ ] start recovery app
- [ ] recover your wallet
- [ ] switchoff your RasPi/Device
- [ ] remove the Raspi SD card and format it on an also offline / cold machine

### SOFTWARE IS PROVIDED AS IS

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS  
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,  
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN  
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## DEUTSCH

Benutze deinen Bitwala BTC Hauptschlüssel sowie deinen Backupschlüssel der generierten Wallet.

Hinweis: Diese Anweisungen gelten nur für die App nach Anfang 2018. Für normale Wallets vor 2018, sehe hier nach [hier](https://support.bitwala.com/hc/en-gb/articles/360000857880/) (p.s. ungetestet und wie auch immer würde ich persönlich das Tool niemals benutzen, entweder liegt der QuellCode offen oder ich benutze es nicht)

### Sicherheitswarnung

[Online version](https://bitwala.github.io/bip39-recovery/) NICHT ONLINE BENUTZEN!!!!
- [x] Besuche die Webseite,
- [ ] speichere diese in einen Ordner ab und
- [ ] sichere diesen auf eine SD-Karte.
- [ ] Öffne den Ordner auf einem Computer der zu keinem Zeitpunkt mit dem Internet verbunden ist.
- [ ] Führe das Tool aus

### Offline Recovery

Was man benötigt kann ich hier kurz aufzeigen, was jedoch unerlässlich ist, ist das du es auf einem Gerät ausführst das
vor dem Hochfahren und wärend dem Hochfahren sich nicht mit dem Internet verbindet und logischerweise auch nicht wärend dem eigentlichen Recovery! Das Gerät es am Besten auch nicht kann.

Ich selbst benutze einen RasPi dem ich die Treiber für LAN, WLAN und Bluetooth entfernt habe. Klar die unten aufgeführten Anweisungen kannst du natürlich nur ausführen wenn das Gerät eine Online Verbindung hat.

### So gehe ich im Detail vor

- [x] RasPi hochfahren mit LAN oder WLAN
- [ ] Software installieren
- [ ] WLAN deaktivieren
- [ ] LAN deaktivieren
- [ ] Bluetooth deaktivieren
- [ ] Herunterfahren
- [ ] 30 Sekunden warten
- [ ] Raspi starten
- [ ] Testen ob WLAN,LAN und BT ausgeschaltet sind
- [ ] Software starten
- [ ] Schaue dich um das Niemand dir über die Schultern schaut
- [ ] Recovery ausführen
- [ ] Gerät ausschalten
- [ ] SD Karte entfernen und an anderem Rechner der ebenfalls nur offline ist formatieren


### Vorraussetzungen

- Node & npm [https://nodejs.org/](https://nodejs.org/)
- Hauptschlüssel 12 Worte
- Backupschlüssel 12 Worte


### Installation

- Clone or downloade diese Repository
- `cd app`
- Run `yarn`
- Run `yarn start`


### Software wie sie ist

DIE SOFTWARE WIRD "WIE BESEHEN" OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG, EINSCHLIESSLICH DER GEWÄHRLEISTUNG FÜR MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG, ZUR VERFÜGUNG GESTELLT. IN KEINEM FALL HAFTEN DIE AUTOREN ODER COPYRIGHT-INHABER FÜR JEGLICHE HAFTUNGSANSPRÜCHE, SCHÄDEN ODER SONSTIGE HAFTUNGEN, DIE AUS VERTRAGSVERHÄLTNISSEN, VERTRAGSVERHÄLTNISSEN, UNTERLASSEN ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER VERWENDUNG ODER ANDEREN HAND SOFTWARE.

(mit Google 1 zu 1 übersetzt)


