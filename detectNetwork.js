var detectNetwork = function(cardNumber) {

  var prefix = cardNumber.substring(0,2);
  var length = cardNumber.length;

  var visaLengths        = [13,16,19];
  var maestroLengths     = [12,13,14,15,16,17,18,19];
  var chinaUnionLengths  = [16,17,18,19];
  var switchLengths      = [16, 18,19];

  var switchPrefixes     = ['4903','4905','4911','4936','564182','633110','6333','6759']; //switch prefixes are either 4 or 6 digits long
  var mastercardPrefixes = ["51","52","53","54","55"];
  var discoverPrefixes   = ["6011","644","645","646","647","648","649","65"]; //length of 16/19
  var maestroPrefixes    = ["5018","5020","5038","6304"];

  for(var i = 0; i < switchPrefixes.length;i++){
    if((switchPrefixes[i] === cardNumber.substring(0,4) || switchPrefixes[i] === cardNumber.substring(0,6)) && ((length === 16) || (length === 18) || (length === 19))){
      return 'Switch';
    } else if(cardNumber[0] === '4' && (switchPrefixes[0] === cardNumber.substring(0,4) || switchPrefixes[1] === cardNumber.substring(0,4) || switchPrefixes[2] === cardNumber.substring(0,4) || switchPrefixes[3] === cardNumber.substring(0,4) )){
      return 'Switch';
    }
  }

  for(var i = 0; i < discoverPrefixes.length;i++){
    if((discoverPrefixes[i] === cardNumber.substring(0,3) || discoverPrefixes[i] === cardNumber.substring(0,4) || discoverPrefixes[i] === cardNumber.substring(0,2)) && (length === 16 || length === 19)){
      return 'Discover';
    }
  }

  for(var i = 0; i < maestroLengths.length;i++){
    if(length === maestroLengths[i] && ((cardNumber.substring(0,4) === '5018') || (cardNumber.substring(0,4) === '5020') || (cardNumber.substring(0,4) === '5038') || (cardNumber.substring(0,4) === '6304')) ){
      return 'Maestro';
    }
  }

  for(var i = 0; i< visaLengths.length; i++){
    if(length === visaLengths[i] && cardNumber.substring(0,1) === '4'){
      return 'Visa';
    }
  }

  for(var i = 0;i < mastercardPrefixes.length;i++){
    if((mastercardPrefixes[i] === prefix) && length === 16){
      return 'MasterCard';
    }
  }

  if((prefix === '34' || prefix === '37') && length === 15){
    return 'American Express';
  } else if((prefix === '38' || prefix === '39') && length ===14){
    return 'Diner\'s Club';
  } else {
    return 'China UnionPay';
  }



};

//I am finished, Hooray!
