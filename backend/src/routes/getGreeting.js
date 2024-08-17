const GREETING = 'Hello Mr Martin!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
