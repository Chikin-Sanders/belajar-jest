function cariData(arrData, kataKunciPencatian) {
    return arrData.filter(function (arrayElement) {
        return arrayElement.url.match(kataKunciPencatian)
    })
}

module.exports = cariData