function validateCreditCardNumber(cardNumber) {
    const cleanCardNumber = cardNumber.replace(/\D/g, '');
  
    const amexPattern = /^3[47]\d{13}$/;
    const mastercardPattern = /^5[1-5]\d{14}$/;
    const visaPattern = /^4(\d{12}|\d{15})$/;
    const discoverPattern = /^6011\d{12}(\d{3})?$/;
    const dinersClubPattern = /^3(0[0-5]\d{11}|\d{13})$/;
  
    if (amexPattern.test(cleanCardNumber)) {
      if (cleanCardNumber.length === 15) {
        return "American Express";
      }
    } else if (mastercardPattern.test(cleanCardNumber)) {
      if (cleanCardNumber.length === 16) {
        return "Mastercard";
      }
    } else if (visaPattern.test(cleanCardNumber)) {
      if (cleanCardNumber.length === 13 || cleanCardNumber.length === 16) {
        return "VISA";
      }
    } else if (discoverPattern.test(cleanCardNumber)) {
      if (cleanCardNumber.length === 15 || cleanCardNumber.length === 16) {
        return "Discover";
      }
    } else if (dinersClubPattern.test(cleanCardNumber)) {
      if (cleanCardNumber.length === 14 || cleanCardNumber.length === 16) {
        return "Diners Club";
      }
    }
  
    return "Invalid credit card number.";
  }
  
  const cardNumber = "6011123456789012";
  const cardType = validateCreditCardNumber(cardNumber);
  console.log(cardType); 
  