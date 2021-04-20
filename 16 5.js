class ElectricDevice {
  constructor (dcOutput, powerButton, deviceType){
  this.dcInput = '220v',
  this.deviceType = deviceType,
  this.dcOutput = dcOutput,
  this.powerButton = powerButton 
  }
}

// function ElectricDevice(dcOutput, powerButton, deviceType){
//   this.dcInput = '220v',
//   this.deviceType = deviceType,
//   this.dcOutput = dcOutput,
//   this.powerButton = powerButton 
// }
ElectricDevice.prototype.getPowerOn = function (powerOn){
  console.log(`Device powered on after ${powerOn} seconds, you pushing the button`)
}

class ChargeDevice {
  constructor (deviceType, dcOutput, powerButton, chargeType, chargeTime) {
    this.deviceType = deviceType,  
    this.dcOutput = dcOutput,
    this.powerButton = powerButton,
    this.chargeType = chargeType,
    this.chargeTime = chargeTime
  }
}
// function ChargeDevice(deviceType, dcOutput, powerButton, chargeType, chargeTime){
//     this.deviceType = deviceType,  
//     this.dcOutput = dcOutput,
//     this.powerButton = powerButton,
//     this.chargeType = chargeType,
//     this.chargeTime = chargeTime
// }
ChargeDevice.prototype = new ElectricDevice()
ChargeDevice.prototype.getPowerOn = function (powerOn){
  console.log(`Device powered on after ${powerOn} seconds, you pushing the button`)
}



const computer     = new ElectricDevice("Computer", '24v', 'In up of front');
const tableLamp    = new ElectricDevice( "Table lamp", '12v', 'on the cable');
const mobilePhone  = new ChargeDevice('Mobile phone', '9v', 'on the right side', "wireless", '2 hours');
const smartWatch   = new ChargeDevice('Smart watch', '5v', 'on the right side', "not wireless", '1 hour');

computer.getPowerOn('zero')
console.log(computer)
tableLamp.getPowerOn('zero')
console.log(tableLamp)
mobilePhone.getPowerOn('5')
console.log(mobilePhone)
smartWatch.getPowerOn('3')
console.log(smartWatch)


//dcOutput  - output from charger
//dcInput - input to charger
//powerButton - where the button
//chargeType - wireless or not
//chargeTime - charging time
//deviceType - type of device
//powerOn  - type how mutch time takes to device to power on