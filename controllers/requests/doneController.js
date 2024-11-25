const Request = require("../../models/Request")
const sms = require("../../utils/sms")
const config = require("../../configs/config.json")
const log = require("../../utils/log")


const get = async (req, res) => {
    const findRequest = await Request.findByPk(req.params.id)

    if(!findRequest) {
        req.flash("danger", "درخواست مورد نظر یافت نشد.")
        return res.redirect("/requests")
    }

    await findRequest.update({
        status : "انجام شده"
    })

    sms.send(config.smsCodes.ownershipTransfered, findRequest.customerNumber, [findRequest.customerName, findRequest.phoneModel, findRequest.customerNumber])
    log("انتقال مالکیت مستقیم", `انتقال مالکیت ${findRequest.phoneModel} برای ${findRequest.customerName} به شماره ${findRequest.customerNumber}`, req.user.id)
    res.redirect(`/requests/${req.params.id}`)
}

module.exports = {
    get
}