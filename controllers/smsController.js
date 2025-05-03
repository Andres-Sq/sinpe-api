export function createSMS (req, res) {
    const { bank, phone_number, amount, details } = req.body;

    if (!bank || !phone_number || !amount || !details) 
        return res.status(400).json({ message: 'All fields are required' });

    const message = `Pase ${amount} ${phone_number} ${details}`;
    const encodedMessage = encodeURIComponent(message);
    const smsLink = `sms:${bank}?body=${encodedMessage}`;

    return res.status(200).json({
        bank,
        message,
        smsLink
    });
};