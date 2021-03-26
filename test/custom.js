async function connectSerial(x) {
    const log = document.getElementById('target');

    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600/*, dataBits: 8, stopBits: 1, parity: "none"*/ });
        // await port.open({ baudRate: 9600 });
        // await writer.write(" U001\n123456789 ");

        const encoder = new TextEncoderStream();
        const writableStreamClosed = encoder.readable.pipeTo(port.writable);
        const writer = encoder.writable.getWriter();

        // 噴字字串
        // 以下為202個字
        // var sprayText = "EN 1.4307/AISI 304L 1.50MM X 1500MM X 3000MM 2B METANCOR-COM S.R.L/TEL.022-422-446123456789123456789003456789123456789123456789123456789123456789123450046789123456789123456789123456789123456789123456789";
        // var sprayText = "011123456789132456789123465789123465789123456789**022123456789132456789123465789123465789123456789**033123456789132456789123465789123465789123456789**044123456789132456789123465789123465789123456789**";
        var sprayText = "";

        switch (x) {
            case 1:
                sprayText = "011123456789132456789123465789123465789123456789**";
                break;
            case 2:
                sprayText = "011123456789132456789123465789123465789123456789**022123456789132456789123465789123465789123456789**";
                break;
            case 3:
                sprayText = "011123456789132456789123465789123465789123456789**022123456789132456789123465789123465789123456789**033123456789132456789123465789123465789123456789**";
                break;
            case 4:
                sprayText = "011123456789132456789123465789123465789123456789**022123456789132456789123465789123465789123456789**033123456789132456789123465789123465789123456789**044123456789132456789123465789123465789123456789**";
                break;
        }
        // var sprayText = "316L NO.1 1/2\" X 60\" X 120\" A1002951";


        // String.fromCharCode 是關鍵 請勿刪除
        var cSend = String.fromCodePoint(2) + "{0}" + String.fromCodePoint(10) + "{1}" + String.fromCodePoint(3);
        var cShow1 = "", cShow2 = "", cShow3 = "", cShow4 = "";
        // cShow1 = cSend.replace("{0}", "U001\n").replace("{1}", sprayText);

        if (sprayText.indexOf("\r\n", 0) == -1) {
            if (sprayText.length > 200) {
                alert("字數超過200字無法傳送至噴字機!");
                return;
            }
            if (sprayText.length <= 50) {
                cShow1 = cSend.replace("{0}", "U001").replace("{1}", sprayText);
                cShow2 = cSend.replace("{0}", "U002").replace("{1}", " ");
                cShow3 = cSend.replace("{0}", "U003").replace("{1}", " ");
                cShow4 = cSend.replace("{0}", "U004").replace("{1}", " ");
            } else if (sprayText.length <= 100) {
                cShow1 = cSend.replace("{0}", "U001").replace("{1}", sprayText.substr(0, 50));
                cShow2 = cSend.replace("{0}", "U002").replace("{1}", sprayText.substr(50, sprayText.length - 50));
                cShow3 = cSend.replace("{0}", "U003").replace("{1}", " ");
                cShow4 = cSend.replace("{0}", "U004").replace("{1}", " ");
            } else if (sprayText.length <= 150) {
                cShow1 = cSend.replace("{0}", "U001").replace("{1}", sprayText.substr(0, 50));
                cShow2 = cSend.replace("{0}", "U002").replace("{1}", sprayText.substr(50, 50));
                cShow3 = cSend.replace("{0}", "U003").replace("{1}", sprayText.substr(100, sprayText.length - 100));
                cShow4 = cSend.replace("{0}", "U004").replace("{1}", " ");
            } else if (sprayText.length <= 200) {
                cShow1 = cSend.replace("{0}", "U001").replace("{1}", sprayText.substr(0, 50));
                cShow2 = cSend.replace("{0}", "U002").replace("{1}", sprayText.substr(50, 50));
                cShow3 = cSend.replace("{0}", "U003").replace("{1}", sprayText.substr(100, 50));
                cShow4 = cSend.replace("{0}", "U004").replace("{1}", sprayText.substr(150, sprayText.length - 150));
            }
        } else {
            //如果有多行要分段送(不考慮每行超50字)，目前沒有使用(要使用多行可用這下列語法調整)
            sprayText = sprayText.repeat("\r\n", "?");
            var data = sprayText.split("?");
            for (var i = 0; i <= data.length - 1; i++) {
                switch (i) {
                    case 0:
                        cShow1 = "U001\n" + data[0];
                        break;
                    case 1:
                        cShow2 = "U002\n" + data[1];
                        break;
                    case 2:
                        cShow3 = "U003\n" + data[2];
                        break;
                    case 3:
                        cShow4 = "U004\n" + data[3];
                        break;
                }
            }
        }

        if (cShow1 != "") {
            writer.write(cShow1);
            log.innerHTML += cShow1;
        }
        if (cShow2 != "") {
            writer.write(cShow2);
            log.innerHTML += cShow2;
        }
        if (cShow3 != "") {
            writer.write(cShow3);
            log.innerHTML += cShow3;
        }
        if (cShow4 != "") {
            writer.write(cShow4);
            log.innerHTML += cShow4;
        }
        // writer.write("U001\n316L NO.1 1/2\" X 60\" X 120\" A1002951");
        writer.close();
        await writableStreamClosed;
        await port.close();

    } catch (error) {
        log.innerHTML = error;
    }
}