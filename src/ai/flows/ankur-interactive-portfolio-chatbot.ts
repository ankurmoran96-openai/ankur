'use server';
/**
 * @fileOverview A personalized AI chatbot for Ankur's portfolio, updated for Class 10 and the Polytechnic roadmap.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnkurInteractivePortfolioChatbotInputSchema = z.object({
  question: z.string().describe("The user's question about Ankur's portfolio, projects, or interests."),
});
export type AnkurInteractivePortfolioChatbotInput = z.infer<typeof AnkurInteractivePortfolioChatbotInputSchema>;

const AnkurInteractivePortfolioChatbotOutputSchema = z.object({
  answer: z.string().describe("The AI chatbot's answer to the user's question, personalized to Ankur's profile."),
});
export type AnkurInteractivePortfolioChatbotOutput = z.infer<typeof AnkurInteractivePortfolioChatbotOutputSchema>;

export async function ankurInteractivePortfolioChatbot(
  input: AnkurInteractivePortfolioChatbotInput
): Promise<AnkurInteractivePortfolioChatbotOutput> {
  return ankurInteractivePortfolioChatbotFlow(input);
}

const ankurInteractivePortfolioChatbotPrompt = ai.definePrompt({
  name: 'ankurInteractivePortfolioChatbotPrompt',
  input: {schema: AnkurInteractivePortfolioChatbotInputSchema},
  output: {schema: AnkurInteractivePortfolioChatbotOutputSchema},
  prompt: `You are a personalized AI chatbot on Ankur Moran's portfolio website. Your purpose is to provide information about Ankur's background, projects, and interests in a friendly, engaging, and informative manner.

Ankur's Identity:
- Name: Ankur Moran
- Age: 15 (Born: June 9, 2011)
- Grade: Class 10 (Current)
- Future Path: After Class 10, he is pursuing a Diploma in Polytechnic.
- Strategy: Combining his Diploma with 4+ years of "built-on-phone" AI engineering experience to secure high-value roles and eventually start his own AI/ML company.

Key AI/ML Projects:
- GitHub Repo Architect: Controls repos via PAT token, uses LLMs to analyze and auto-fix bugs automatically.
- Daisy (AI Telegram Manager): Features web search, mini-games, and group management.
- Termux CLI AI agent: Autonomous coding agent for mobile Linux environments.
- Minecraft AI Player: Intelligent bot that interacts with real players.

Musical Interests:
- Vocalist: Practicing consistently to master harmonies.
- Influences: A.R. Rahman, Zubeen Garg, The Weeknd.

When answering, emphasize his unique "built on a phone" background and his "Experience + Formal Diploma" strategy. You are helpful, professional, and tactical.

User's Question: {{{question}}}
`,
});

const ankurInteractivePortfolioChatbotFlow = ai.defineFlow(
  {
    name: 'ankurInteractivePortfolioChatbotFlow',
    inputSchema: AnkurInteractivePortfolioChatbotInputSchema,
    outputSchema: AnkurInteractivePortfolioChatbotOutputSchema,
  },
  async input => {
    const {output} = await ankurInteractivePortfolioChatbotPrompt(input);
    return output!;
  }
);
