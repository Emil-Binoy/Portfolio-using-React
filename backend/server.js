import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Groq from "groq-sdk";

const app = express();
const PORT = process.env.PORT || 5000;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(cors()); 
app.use(express.json()); 

async function fetchGitHubProjects(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      headers: {
        'User-Agent': 'Node-Express-App' 
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch GitHub data');
    
    const repos = await response.json();
    
    return repos
      .filter(repo => !repo.fork) 
      .map(repo => `* "${repo.name}": ${repo.description || 'A web development project.'} (Link: ${repo.html_url})`)
      .join('\n');
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return "* (Could not load latest dynamic projects right now, rely on featured projects instead.)";
  }
}

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: "No messages provided" });
    }

    
    const dynamicProjects = await fetchGitHubProjects('Emil-Binoy'); 

    const dynamicSystemInstruction = `
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



All Other Live GitHub Repositories:
${dynamicProjects}

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

    const formattedMessages = messages.map(m => ({
      role: m.role === 'bot' || m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '')
    }));

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: dynamicSystemInstruction },
        ...formattedMessages
      ],
      model: "openai/gpt-oss-20b",
      temperature: 0.7,
      max_tokens: 300,
    });

    const choice = completion.choices[0].message;
    // Use reasoning_content separation if Groq provides it, otherwise strip <think> blocks
    let cleanContent = choice.content || '';
    // Remove complete <think>...</think> blocks
    cleanContent = cleanContent.replace(/<think>[\s\S]*?<\/think>/g, '');
    // Remove any incomplete/truncated <think> block (no closing tag)
    cleanContent = cleanContent.replace(/<think>[\s\S]*/g, '');
    cleanContent = cleanContent.trim();
    res.json({ text: cleanContent });
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