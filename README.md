## Application

Basic vending machine application built with vanilla Javascript.

1. Vending machine can dispense one of four beverages.
2. Display message to the user on selection and payment.
3. The vending machine accepts `$1`, `$5`, `$0.05`, `$0.10` and `$0.25`

## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
git clone git@github.com:elisenavarro/vending-machine.git
cd vending-machine
rm -rf .git
yarn install
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```
