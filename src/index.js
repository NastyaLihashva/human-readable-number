module.exports = function toReadable (number) {
  let upToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let upToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let upToNinety= ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety'];
  let numberStr = String(number).split('');
  let result = '';
  if(number <= 9){
      result = upToNine[number];
      return result;
  }
  else if(number <= 19 && number > 9){
      result = upToNineteen[number-10];
      return result;
  }
  else if(number <= 99 && numberStr[1] === '0'){
      result = upToNinety[numberStr[0]-2];
      return result;
  }
  else if(number <= 99){
      result = upToNinety[numberStr[0]-2]+' '+upToNine[numberStr[1]];
      return result;
  }
  else if(number <= 999 && numberStr[1] === '0' && numberStr[2] === '0'){
      result = upToNine[numberStr[0]]+' hundred';
      return result;
  }
  else if(number <= 999 && numberStr[1] === '0'){
      result = upToNine[numberStr[0]]+' hundred '+upToNine[numberStr[2]];
      return result;
  }
  else if(number <= 999 && numberStr[1] <= '1'){
      result = upToNine[numberStr[0]]+' hundred '+upToNineteen[numberStr[2]];
      return result;
  }
  else if(number <= 999 && numberStr[2] === '0'){
      result = upToNine[numberStr[0]]+' hundred '+upToNinety[numberStr[1]-2];
      return result;
  }
  else if(number <= 999){
      result = upToNine[numberStr[0]]+' hundred '+upToNinety[numberStr[1]-2]+' '+upToNine[numberStr[2]];
      return result;
  }
}
