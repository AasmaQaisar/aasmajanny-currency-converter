#! /usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

const welCome = async () => {
    console.log(chalk.redBright(figlet.textSync("Currency Converter \n")));
  };
  await welCome();
interface CurrencyConversionRates {
    [key: string]: number;
  }
  
  const conversionRates: CurrencyConversionRates = {
    USD: 1,
    EUR: 0.81,
    GBP: 0.72,
    JPY: 110.44,
    AUD: 1.30,
    CAD: 1.26,
    CHF: 0.90,
    CNY: 6.46,
  };
  
  function currencyConverter(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number {
    if (fromCurrency === toCurrency) {
      return amount;
    }
    const rate = conversionRates[toCurrency] / conversionRates[fromCurrency];
    return amount * rate;
  }
  
// Example usage
const amount = 150;
const fromCurrency = 'USD';
const toCurrency = 'EUR';

const convertedAmount = currencyConverter(amount, fromCurrency, toCurrency);
console.log(chalk.greenBright(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`));

// Example 2
const amount1 = 250;
const fromCurrency1 = 'GBP';
const toCurrency1 = 'JPY';

const convertedAmount1 = currencyConverter(amount1, fromCurrency1, toCurrency1);
console.log(chalk.blueBright(`${amount1} ${fromCurrency1} = ${convertedAmount1} ${toCurrency1}`));

// Example 3
const amount2 = 500;
const fromCurrency2 = 'AUD';
const toCurrency2 = 'CAD';

const convertedAmount2 = currencyConverter(amount2, fromCurrency2, toCurrency2);
console.log(chalk.cyanBright(`${amount2} ${fromCurrency2} = ${convertedAmount2} ${toCurrency2}`));

//  Example 4
const amount3 = 1000;
const fromCurrency3 = 'CHF';
const toCurrency3 = 'CNY';

const convertedAmount3 = currencyConverter(amount3, fromCurrency3, toCurrency3);
console.log(chalk.yellowBright(`${amount3} ${fromCurrency3} = ${convertedAmount3} ${toCurrency3}`));





