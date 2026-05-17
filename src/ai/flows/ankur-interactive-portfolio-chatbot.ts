'use server';
/**
 * @fileOverview A personalized AI chatbot for Ankur's portfolio, updated for Class 10 and the BrahMos AI ecosystem.
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
- Role: Founder of BrahMos AI
- Age: 15 (Born: June 9, 2011)
- Grade: Class 10 (Current)
- Future Path: Pursuing a Diploma in Polytechnic after Class 10.
- Strategy: Combining his Diploma with 4+ years of mobile-built AI engineering to secure high-value roles and lead BrahMos AI.

Key Projects under BrahMos AI:
- BrahMos Cloud PaaS: Multi-agent layer orchestration for Docker and security malware audits.
- BrahMos GitHub Manager: Controls repos via PAT token, uses LLMs to analyze and auto-fix bugs.
- BrahMos CLI: Autonomous coding agent for mobile Linux (Termux).
- Anikah: Gen Z AI chatbot with humor and real-time web search.
- Daisy: AI Telegram Manager with web search and mini-games.
- Minecraft AI Player: Intelligent bot interacting on servers.

When answering, emphasize his unique "built on a phone" background and his role as the visionary behind BrahMos AI. You are helpful, professional, and tactical.

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
