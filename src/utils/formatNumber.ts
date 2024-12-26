export const  formatNumber = (number: number) => {
    const numStr = Math.abs(number).toString();
    const firstDigit = numStr[0];
    const rest = numStr.slice(1);

    let formattedRest = "";
    for (let i = 0; i < rest.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedRest += ",";
      }
      formattedRest += rest[i];
    }

    const formatted = firstDigit + (formattedRest ? "," + formattedRest : "");

    return number < 0 ? `-${formatted}` : formatted;
  }