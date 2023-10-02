const Data = require('../models/data.model');

const dataController = {
    getList: async (req , res ) => {
        const data = await Data.find();
        res.json(data);
    },
    create: async (req, res ) => {
        const data = new Data(req.body);
        await data.save();
        res.json({
            status: 'Data saved'
        });
    },
};

module.exports = dataController;