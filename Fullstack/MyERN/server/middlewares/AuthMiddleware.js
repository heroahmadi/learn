const validateToken = (req, res, next) => {
    const accessToken = res.header("accessToken");

    if (!accessToken) {
        return res.json({error: "User not logged in!"});
    }

    try {
        const validToken = verify(accessToken, "SECRET");
        if (validToken) {
            return next();
        }
    } catch (err) {
        return res.json({error: err})
    }
};

export default validateToken;