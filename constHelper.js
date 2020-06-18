module.exports = {
    autoPairKey: () => {
        var buffer = Buffer.alloc(15)
        buffer.writeInt8(33, 0)
        buffer.writeInt8(7, 1)
        buffer.writeInt8(6, 2)
        buffer.writeInt8(5, 3)
        buffer.writeInt8(4, 4)
        buffer.writeInt8(3, 5)
        buffer.writeInt8(2, 6)
        buffer.writeInt8(1, 7)
        buffer.writeInt8(-72, 8)
        buffer.writeInt8(34, 9)
        buffer.writeInt8(0, 10)
        buffer.writeInt8(0, 11)
        buffer.writeInt8(0, 12)
        buffer.writeInt8(0, 13)
        buffer.writeInt8(0, 14)
        return buffer
    },
    handPairKey: () => {
        var buffer = Buffer.alloc(15)
        buffer.writeInt8(32, 0)
        buffer.writeInt8(7, 1)
        buffer.writeInt8(6, 2)
        buffer.writeInt8(5, 3)
        buffer.writeInt8(4, 4)
        buffer.writeInt8(3, 5)
        buffer.writeInt8(2, 6)
        buffer.writeInt8(1, 7)
        buffer.writeInt8(1, 8)
        buffer.writeInt8(1, 9)
        buffer.writeInt8(1, 10)
        buffer.writeInt8(1, 11)
        buffer.writeInt8(0, 12)
        buffer.writeInt8(0, 13)
        buffer.writeInt8(0, 14)
        return buffer
    },
    fuweiKey: () => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(4, 0)
        buffer.writeInt8(-1, 1)
        buffer.writeInt8(0, 2)
        buffer.writeInt8(0, 3)
        buffer.writeInt8(0, 4)
        buffer.writeInt8(0, 5)
        return buffer
    },
    dianyaKey: () => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(8, 0)
        buffer.writeInt8(36, 1)
        buffer.writeInt8(0, 2)
        buffer.writeInt8(0, 3)
        buffer.writeInt8(0, 4)
        buffer.writeInt8(0, 5)
        return buffer
    },
    readVersionsKey: () => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(8, 0)
        buffer.writeInt8(35, 1)
        buffer.writeInt8(0, 2)
        buffer.writeInt8(0, 3)
        buffer.writeInt8(0, 4)
        buffer.writeInt8(0, 5)
        return buffer
    },
    setUnitsFKey: () => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(2, 0)
        buffer.writeInt8(1, 1)
        buffer.writeInt8(0, 2)
        buffer.writeInt8(0, 3)
        buffer.writeInt8(0, 4)
        buffer.writeInt8(0, 5)
        return buffer
    },
    setUnitsCKey: () => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(2, 0)
        buffer.writeInt8(0, 1)
        buffer.writeInt8(0, 2)
        buffer.writeInt8(0, 3)
        buffer.writeInt8(0, 4)
        buffer.writeInt8(0, 5)
        return buffer
    },
    startTempUpdates: () => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(11, 0)
        buffer.writeInt8(1, 1)
        buffer.writeInt8(0, 2)
        buffer.writeInt8(0, 3)
        buffer.writeInt8(0, 4)
        buffer.writeInt8(0, 5)
        return buffer
    },
    setTargetTempKey: (probe, a, targetTemp) => {
        var buffer = Buffer.alloc(6)
        buffer.writeInt8(1, 0)
        buffer.writeInt8(probe, 1)
        buffer.writeInt16BE(a && 255, 2)
        //buffer.writeInt8(a>>8,4)
        buffer.writeInt16BE(targetTemp & 255, 4)
        //buffer.writeInt8(targetTemp>>8,7)

        return buffer
    //new byte[]{(byte) 1, b, (byte) (s & 255), (byte) (s >> 8), (byte) (targetTemp & 255), (byte) (targetTemp >> 8)};
    },
}
