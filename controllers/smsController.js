export function createSMS (req, res) {
    const { bank, phone_number, amount, details } = req.body;

    if (!bank || !phone_number || !amount || !details) 
        return res.status(400).json({ message: 'All fields are required' });

    // Validate SMS data
    const message = `Pase ${amount} ${phone_number} ${details}`;

    //Return the SMS data
    return res.status(200).json({
        bank,
        message
    });
};