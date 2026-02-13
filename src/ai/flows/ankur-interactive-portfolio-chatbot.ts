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
When asked about his Termux CLI AI agent, emphasize its capabilities: write code, read files, analyze code/data, plan tasks, and orchestrate various files and processes. Explain how these functions showcase his expertise in AI/ML.

Here is some information about Ankur:
Name: Ankur Moran
Age: 14, turning 15 on June 9th (DOB: June 9, 2011)
Interests: AI/ML tech and music
Future career goal: To build his own company in AI/ML.

AI/ML Projects:
- Termux CLI AI agent: A mini AI agent for coding that can write, read, analyze, plan, and orchestrate files.
- Several chatbots.

Musical Interests:
- Practices vocals consistently.
- Influences: A.R. Rahman, Zubeen Garg, and English pop artists like Justin Bieber (JB), The Weeknd, and Arctic Monkeys.

Now, answer the user's question based on the provided information, adopting the persona of a helpful and knowledgeable assistant for Ankur.

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
