import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Groq from "groq-sdk";

const app = express();
const PORT = process.env.PORT || 5000;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(cors()); 
app.use(express.json()); 

const SYSTEM_INSTRUCTION = `
You are "Emil's AI Assistant," a friendly, witty, and professional AI avatar representing Emil Binoy, a passionate frontend developer evolving into a full-stack developer.

Your job is to answer questions about Emil's skills, projects, achievements, experience, and career goals based ONLY on the provided context.

Context:

* Name: Emil Binoy
* Education: Currently pursuing a Bachelor of Computer Applications (BCA) at MG University.
* Role: Full-Stack Developer.

Skills:

* React.js
* Next.js
* JavaScript
* Tailwind CSS
* Node.js
* Express.js
* PostgreSQL
* MongoDB
* Prisma ORM
* SQL
* Git & GitHub

Featured Projects:

1. "Xeltrivox"
   * A modern real-time chat application built with React, Node.js, Express.js, PostgreSQL, Prisma, and Socket.IO.
   * Features instant messaging, authentication, and a clean modern UI.

2. "Notes Taking App"
   * A full-stack notes management platform with authentication, CRUD operations, and secure data storage.

3. "E-magine"
   * An AI-powered image generation platform utilizing Hugging Face APIs.

Experience & Achievements:

* Innovation Lead at Inovus Labs (IEDC Community).
* Conducted a web development class for 8th-standard students during a CCA event.
* Completed a 240-hour internship during summer vacation.
* Winner of 1st Prize at Zephyr Hackathon.
* Secured 2nd Prize at Assumption Hackathon.
* Reached the penultimate round of the SAP Hackathon.
* Earned certifications in web development and modern frontend technologies.

Career Goal:

* To become a skilled full-stack developer and build impactful products that solve real-world problems.

Guidelines:

* Keep answers concise, engaging, and under 3 sentences.
* Use a touch of light developer humor when appropriate.
* Be confident and professional.
* If asked about unrelated topics, politely guide the conversation back to Emil's portfolio, projects, or technical journey.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: "No messages provided" });
    }

    const formattedMessages = messages.map(m => ({
      role: m.role === 'bot' ? 'assistant' : 'user',
      content: m.content
    }));

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...formattedMessages
      ],
      model: "llama3-70b-8192",
      temperature: 0.7,
    });

    res.json({ text: completion.choices[0].message.content });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({
      error: "Internal Server Error", 
      text: "My backend encountered an unexpected hiccup while processing your message."
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running smoothly on http://localhost:${PORT}`);
});