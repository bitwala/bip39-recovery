## ENGLISH
### BIP39 Private Key Recovery

Use your backup phrases to generate the corresponding private key for your Bitwala wallet.

Note: this is only for for the product launched late 2018. For legacy wallets, please see [here](https://support.bitwala.com/hc/en-gb/articles/360000857880/)(no warranty!)

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

- Test patter: 
    - Main key: search scout husband nasty dust choose stable carry memory struggle identify slim
        - Result: xprv9s21ZrQH143K3SWqj8XUcCNPd5QzLq8aFHBY4QCw4ZLossvsrETTARg3nA5FZqPjpWMKdwEpM9jkqb9Mwc35XxV1sLcuwfePsEuxsw3ukDe
            - with password: test: xprv9s21ZrQH143K3qvn1A5XS9U2Fz6hwLjZ77e3o3WdGXHwA3jkZfWfui1Hz9Xra1joMGgndQPDA2YoRxYezfNiLDaGGMr1uqMhAzZCESvZ1Rw
    - Backup key: mule decrease dragon exist rubber network trouble inner mouse drum gadget stone
        - Result: xprv9s21ZrQH143K42181pdXa85XUv5YerBRQQ1qPDSD8BCKa1e7pjm1Q9dRhZpxiWfQGWPrWfWdDZFDYRsCF9aWPSc5n1ZuyxTVrSpVXujgZBc
            - with pasword: test: xprv9s21ZrQH143K253SFRj76SwzLU3Gt1WqdrxDfeMhuyH8CFHfLCm79jeNGB6ZnAAkFzY9nzeK5FeWRRUVFo2fxHADRqDZLhtJDJqjWK6xEBB

`If you copy and past the keys above you will get the above results, if not something is wrong`

### Work ice-cold / offline
yarn build
yarn global add serve
serve -s build


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## DEUTSCH

Benutze deinen Bitwala BTC Hauptschlüssel sowie deinen Backupschlüssel der generierten Wallet.

Hinweis: Diese Anweisungen gelten nur für die App nach Anfang 2018. Für normale Wallets vor 2018, sehe hier nach [hier](https://support.bitwala.com/hc/en-gb/articles/360000857880/) (p.s. ungetestet und wie auch immer würde ich persönlich das Tool niemals benutzen, entweder liegt der QuellCode offen oder ich benutze es nicht)

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

DIE SOFTWARE WIRD "WIE BESEHEN" OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG, EINSCHLIESSLICH DER GEWÄHRLEISTUNG FÜR MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG, ZUR VERFÜGUNG GESTELLT. IN KEINEM FALL HAFTEN DIE AUTOREN ODER COPYRIGHT-INHABER FÜR JEGLICHE HAFTUNGSANSPRÜCHE, SCHÄDEN ODER SONSTIGE HAFTUNGEN, DIE AUS VERTRAGSVERHÄLTNISSEN, VERTRAGSVERHÄLTNISSEN, UNTERLASSEN ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER VERWENDUNG ODER ANDEREN HAND SOFTWARE.

(mit Google 1 zu 1 übersetzt, falls die Übersetzung dir wirr erscheint beschwere dich bei Google)


