const { log } = require('node:console');
const empModel = require('../model/empModel.js');

const addEmp = async (req, res) => {
    try {
        const data = new empModel({
            name: req.body.name,
            sal: req.body.sal
        })
        const result = await data.save();
        res.json(result);
    } catch (error) {
        console.log(error);

    }
}

const updtEmp = async (req, res) => {
    try {
        const result = await empModel.findByIdAndUpdate({ _id: req.params.id }, { sal: req.body.sal });
        res.json(result);
    } catch (error) {
        console.log(error);

    }
}

const dltEmp = async (req, res) => {
    try {
        const result = await empModel.deleteOne({ _id: req.params.id });
        res.json(result);
    } catch (error) {
        console.log(error);

    }
}

const showEmp = async (req, res) => {
    try {
        const result = await empModel.find();
        res.json(result);
    } catch (error) {
        console.log(error);

    }
}

module.exports = { addEmp, updtEmp, dltEmp, showEmp };