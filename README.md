# BIP39 Private Key Recovery

Use your backup phrases to generate the corresponding private key for your Bitwala wallet.

Note: this is only for for the product launched late 2018. For legacy wallets, please see [here](https://support.bitwala.com/hc/en-gb/articles/360000857880/)

[Online version](https://bitwala.github.io/bip39-recovery/).

## Running offline

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

### Testing
- Test patter: 
    - Main key: search scout husband nasty dust choose stable carry memory struggle identify slim
        - Result: xprv9s21ZrQH143K3SWqj8XUcCNPd5QzLq8aFHBY4QCw4ZLossvsrETTARg3nA5FZqPjpWMKdwEpM9jkqb9Mwc35XxV1sLcuwfePsEuxsw3ukDe
    - Backup key: mule decrease dragon exist rubber network trouble inner mouse drum gadget stone
        - Result: xprv9s21ZrQH143K42181pdXa85XUv5YerBRQQ1qPDSD8BCKa1e7pjm1Q9dRhZpxiWfQGWPrWfWdDZFDYRsCF9aWPSc5n1ZuyxTVrSpVXujgZBc


`If you copy and past the keys above you will get the above results, if not something is wrong`

### Make your key's ice-cold / offline

- [x] `yarn build && yarn global add serve`
- [x] copy the build folder to an USB drive or any other media 
- [x] mount the device at a cold machine
- [x] cd into build folder and run:
- [x] `serve -s`
