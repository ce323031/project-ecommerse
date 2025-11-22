const User = require('../models/user.model');

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'name and email are required' });

    const user = new User({ name, email });
    await user.save();

    return res.status(201).json({ message: 'User created', user });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    return res.status(500).json({ error: 'Internal error' });
  }
}

async function listUsers(req, res) {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return res.json({ users });
  } catch (err) {
    return res.status(500).json({ error: 'Internal error' });
  }
}

module.exports = { createUser, listUsers };
