const Request = require("../../models/Request")
const log = require("../../models/Log")
const sms = require("../../utils/sms")
const config = require("../../configs/config.json")

const get = async (req, res) => {
    const findRequest = await Request.findByPk(req.params.id)

    res.render("requests/code", {
        user : req.user,
        flash : req.flash(),
        request : findRequest
    })
}

const post = async (req, res) => {
    const findRequest = await Request.findByPk(req.params.id)

    findRequest.update({code : req.body.code})

    sms.send(config.smsCodes.sendOwnershipCode, findRequest.customerNumber, [findRequest.customerName, findRequest.phoneModel, req.body.code, findRequest.IMEI1, findRequest.IMEI2])

    req.flash("success", "انتقال مالکیت با موفقیت ارسال شد.")

    res.redirect(`/requests/${req.params.id}`)
}

module.exports = {
    get,
    post
}