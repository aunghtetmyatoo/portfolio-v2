import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const text = `Name: ${name} \nEmail: ${email} \nMessage: ${message} \nDate: ${new Date().toLocaleString()}`;

  try {
    const result = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: text,
    });

    return result.data.ok
      ? NextResponse.json(
          { success: true, message: 'Message sent successfully!' },
          { status: 200 },
        )
      : NextResponse.json(
          { success: false, message: 'Failed to send message.' },
          { status: 500 },
        );
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending message.' },
      { status: 500 },
    );
  }
}
