
import { API_KEY } from './secxx.js';

const submitPrompt = document.getElementById('submitButton')

function answerBot(message, sender){
    const chatbox =document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
}

async function getAnswer() {
    console.log('buttonclicked');
    try{
        
        // const userInput = document.getElementById('userInput').value;
        // answerBot(userInput, 'user');
        
        // SEND INPUT TO PHP SCRIPT
        await fetch('https://api.openai.com/v1/chat/completions', options)
            const options = {
            method: 'POST', 
            headers: {
                'Authorization': `Bearer ${API_KEY}` ,
                'Content-type' : 'application/json'
            },
            body: {
                "model": "gpt-3.5-turbo",
                "messages": [{
                    role: "user",
                    content: "Hello!"
                }]
            }
          
        };
        
        if(response.ok){
            const data = await response.json();
            const botResponse = data.botResponse;
            answerBot(botResponse, 'bot');
        } else {
            console.error('error status', response.status);
        }
    
    }
    catch (error) {
        console.error(error);
    }
    
    
}


submitPrompt.addEventListener('click', getAnswer)