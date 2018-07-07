module.exports = function (companyTools) {
  companyTools.getInfofromName = (companyName) => {
    db.companyloc.findAll({
      where: {
        companyName: name
      }
    }).then(data => {return data})
  }
}