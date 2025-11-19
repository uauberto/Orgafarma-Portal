import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual da Orgafarma. 
A Orgafarma é uma distribuidora de medicamentos e produtos farmacêuticos de alta qualidade.
Seu tom deve ser profissional, acolhedor e eficiente (corporativo, mas humano).
Objetivos:
1. Ajudar farmacêuticos e compradores a navegar no portal.
2. Tirar dúvidas sobre logística (entregas geralmente em 24h para capitais).
3. Explicar sobre a qualidade e certificações da empresa.
4. Se perguntarem sobre preços específicos, peça para fazerem login no portal para ver a tabela atualizada.
5. Responda sempre em português do Brasil.
Seja conciso.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  try {
    if (!apiKey) {
      return "Erro: Chave de API não configurada no ambiente.";
    }

    const model = "gemini-2.5-flash";
    
    // Construct history for the API
    // Note: The GoogleGenAI SDK handles history slightly differently in chat mode,
    // but for a single generateContent call with context, we can simulate it or use chat.
    // Here we use a simple generateContent with system instruction context for statelessness simplicity in this demo,
    // or use chat for stateful. Let's use the chat interface properly.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Desculpe, não consegui processar sua resposta agora.";

  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Desculpe, estamos enfrentando uma instabilidade momentânea em nosso assistente inteligente.";
  }
};
