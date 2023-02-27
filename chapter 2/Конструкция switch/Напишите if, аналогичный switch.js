//Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


let brawser = prompt("какой у вас браузер ?");

if (brawser == 'Edge'){
alert("You've got the Edge!");
}else if (brawser == 'Chrome'
|| brawser == 'Firefox'
|| brawser == 'Safari'
|| brawser == 'Opera'){
alert('Okay we support these browsers too');
}else{
alert('We hope that this page looks ok!');
} 