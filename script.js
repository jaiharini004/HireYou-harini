function greet() {
    alert("Welcome to your app!");
  }
  // Add this route after login
app.post("/setRole", async (req, res) => {
  const { role } = req.body;

  // Assuming you have user info in session or token
  const userId = req.session.userId; // Or from JWT

  if (!userId || !role) {
    return res.json({ success: false });
  }

  await User.updateOne({ _id: userId }, { $set: { role } });
  res.json({ success: true });
});
