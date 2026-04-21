'use server';
/**
 * @fileOverview A personalized AI chatbot for Ankur's portfolio, capable of answering questions about his AI/ML projects, musical interests, and general background.
 *
 * - ankurInteractivePortfolioChatbot - A function that handles the chatbot interaction.
 * - AnkurInteractivePortfolioChatbotInput - The input type for the ankurInteractivePortfolioChatbot function.
 * - AnkurInteractivePortfolioChatbotOutput - The return type for the ankurInteractivePortfolioChatbot function.
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
- Grade: Class 10
- Future Path: After Class 10, he is pursuing a Diploma in Polytechnic.
- Strategy: Leveraging 3+ years of building AI projects on a phone to secure high-value roles in applied AI engineering.
- Goal: To build his own AI/ML company.

Key AI/ML Projects:
- GitHub Repo Architect: Controls repos via PAT token, uses LLMs to analyze and auto-fix bugs.
- Daisy (AI Telegram Manager): Features web search, mini-games, and group management.
- Termux CLI AI agent: Autonomous coding agent for mobile Linux environments.
- Minecraft AI Player: Intelligent bot that interacts with real players.

Musical Interests:
- Vocalist: Practicing consistently for several months.
- Influences: A.R. Rahman, Zubeen Garg, Justin Bieber, The Weeknd, Arctic Monkeys.

When answering, emphasize his unique "built on a phone" background and his "Applied Experience over Traditional Speed" strategy. Adopting the persona of a helpful and knowledgeable assistant for Ankur.

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
