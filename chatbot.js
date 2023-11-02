
 import { API_KEY } from './secxx.js';



const submitPrompt = document.getElementById('submitButton')
const outPutElement = document.getElementById('output')
const inputElement = document.querySelector('input')
const chatBox = document.querySelector('.chat-box');

function answerBot(message, sender){
    const chatbox =document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
}

async function getAnswer() {
    console.log('buttonclicked');
   
    const options = {
        method: 'POST', 
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: inputElement.value
            }],
            max_tokens: 100
        })
    } 
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        outPutElement.classList.add('message');
        chatBox.appendChild(outPutElement);
        if (data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value

            
        }
    } catch (error){
        console.log(error)
    }

    let currentIndex = 0;

    function typeText() {
  if (currentIndex < text.length) {
    outputElement.textContent += text.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeText, 100); // Adjust typing speed by changing the timeout
  }
}

typeText();


    
    
    
    

    
        
        // const userInput = document.getElementById('userInput').value;
        // answerBot(userInput, 'user');
        
        // SEND INPUT TO PHP SCRIPT
        
            
          
    //     };
        
    //     if(response.ok){
    //         const data = await response.json();
    //         const botResponse = data.botResponse;
    //         answerBot(botResponse, 'bot');
    //     } else {
    //         console.error('error status', response.status);
    //     }
    // }
    // catch (error) {
    //     console.error(error);
    // }
    
    
}


submitPrompt.addEventListener('click', getAnswer)