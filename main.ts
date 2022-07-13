serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    s = serial.readLine()
    if (parseFloat(s) != 0) {
        obj = parseFloat(s)
        basic.showNumber(obj)
    }
})
let p = 0
let obj = 0
let s = ""
servos.P0.setRange(0, 180)
servos.P0.setAngle(90)
basic.showIcon(IconNames.Asleep)
serial.redirectToUSB()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    obj = 0
    if (obj == 0) {
        p = 60
        servos.P0.setAngle(p)
        while (p <= 130) {
            servos.P0.setAngle(p)
            basic.pause(1)
            p += 3
        }
        while (p >= 60) {
            servos.P0.setAngle(p)
            basic.pause(1)
            p += -3
        }
    } else if (obj == 1) {
    	
    } else if (obj == 2) {
    	
    }
})
