import mqtt from 'mqtt';  
import {sendmessage} from './websocket';

let counter = 0;

export default function init(){
	const client = mqtt.connect('mqtt://localhost:1883')
	
	client.on('connect', () => {  
  		client.subscribe('webapp')
	})

	client.on('message', (topic, message) => {  

		try {
			const msg = JSON.parse(message.toString());
			const channel = msg.channel; //this is set to the user's github acc name
			//console.log(msg);
			sendmessage(msg.channel, "databox", "message", msg.payload)
		}
		catch(err){
			console.log(err);
		}
	});
}
