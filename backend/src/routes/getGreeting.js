const GREETIN = 'Hallo Martin!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETIN,
    });
};
