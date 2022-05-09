module.exports = {
  'en' : {
    translation:{
        WELCOME_MSG: 'Welcome, you can ask to perform a query on the data contained in the AIDA database or ask for Help. What would you like to try?',
        HELLO_MSG: 'Hello',
        OK_MSG: 'Ok',
        HELP_MSG: ['you can ask to count or list authors, papers, conferences, organizations, topics and citations or to describe authors or conferences. Start a query with list, count or describe',
        'You can ask a query starting with count, list, describe, who or what'],
        GOODBYE_MSG: ['Goodbye!','Bye!','See you later'],
        REFLECTOR_MSG: 'You just triggered {{intent}}',
        FALLBACK_MSG: 'Sorry, I don\'t know that. Please try again.',
        ERROR_MSG: 'Sorry, there was an error. Please try again.',
        
        HOMONYMS_MSG:'I found different homonyms: {{msg}} ', //To choose, you have to say the number of the {{obj}} you prefer',
        
        SUBJECT_REQUEST_MSG:'I can count papers, authors, conferences, organizations and citations. What do you want me to count?',
        SUBJECT_WRONG_MSG:'Sorry, I can\'t count {{sub}}. I can count papers, authors, conferences, organizations and citations. What do you prefer?',
        SUBJECT_REQUEST_REPROMPT_MSG:'I can count papers, authors, conferences, organizations and citations. What do you prefer?',
        INSTANCE_MSG:'what is the name of the {{list}} whose {{sub}} I should count? You can say all for the full list',
        INSTANCE2_MSG:'what is the name of the {{list}} whose {{sub}} I should count?',
        ITEM_MSG:'Searching for {{inst}}, I got {{msg}}. To choose, say the number. Which one is correct?',
        INTENT_CONFIRMATION_1_MSG: 'Do you want to know how many {{sub}} {{prep}} {{obj}} are in the AIDA database?',
        INTENT_CONFIRMATION_2_MSG: 'Do you want to know how many {{sub}} {{prep}} {{inst}} {{obj}} are in the AIDA database?',
        TOO_GENERIC_MSG:'Your search for {{item}} got {{results}}. You need to try again and to be more specific. Could you tell me the exact name?',
        NO_RESULT_MSG:'Your search for {{item}} got no result. You need to try again. What could I search for you?',
        QUERY_1_MSG: ['I found {{num}} {{sub}} {{prep}} {{inst}} {{obj}}. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?', 
        'I counted {{num}} {{sub}} {{prep}} {{inst}} {{obj}}. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?'],
        QUERY_2_MSG: ['I found {{num}} different {{sub}} {{prep}} {{obj}}. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?',
        'I counted {{num}} different {{sub}} {{prep}} {{obj}}. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?'],
        REPROMPT_MSG: 'So, what would you like to ask?',
        NO_QUERY_MSG: ['Sorry, you asked for a query that is not yet implemented. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?',
        'Sorry, you asked for a not yet implemented query. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?', 
        'Sorry, query not yet implemented. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?'],
        REPROMPT_END_MSG: ['You could ask me for another query or say stop to quit', "You can ask me to run another query or say stop to quit", "Ask me for another query or tell me stop to quit"],
        NO_SENSE_MSG:'I\'m sorry but the query resulting from the chosen options doesn\'t make sense. Try again. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?',
        
        LIST_WRONG_NUMBER_MSG:'The number {{number}} is too big or too small, you should tell me a number higher than one and smaller than six',
        LIST_SUBJECT_REQUEST_MSG:'I can list papers, authors, conferences, organizations and topics. What do you want me to list?',
        LIST_SUBJECT_WRONG_MSG:'Sorry, I can\'t list {{sub}}. I can list papers, authors, conferences, organizations and topics. What do you prefer?',
        LIST_SUBJECT_REQUEST_REPROMPT_MSG:'I can list papers, authors, conferences, organizations and topics. What do you prefer?',
        LIST_ORDER_MSG:'Do you want your list of the top {{number}} {{subject}} to be sorted by publications, by publications in the last 5 years, by citations or by citations in the last 5 years?',
        LIST_PAPERS_ORDER_MSG:'Do you want your list of the top {{number}} {{subject}} to be sorted by citations or by citations in the last 5 years?',
        LIST_PAPERS_ORDER_WRONG_MSG:'Sorry, I can\'t order by {{order}}. I can order by citations and by citations in the last 5 years. What do you prefer?',
        LIST_ORDER_WRONG_MSG:'Sorry, I can\'t order by {{order}}. I can order by publications, by publications in the last 5 years, by citations and by citations in the last 5 years. What do you prefer?',
        LIST_INSTANCE_MSG:'what is the name of the {{list}} for which {{sub}} should be in the top {{number}}? You can say all for the full list',
        LIST_INTENT_CONFIRMATION_1_MSG: 'Do you want to know which are the top {{number}} {{sub}} {{prep}} {{obj}}, by number of {{order}}, in the AIDA database?',
        LIST_INTENT_CONFIRMATION_2_MSG: 'Do you want to know which are the top {{number}} {{sub}}, by number of {{order}}, {{prep}} {{inst}} {{obj}} in the Aida database?',
        LIST_QUERY_MSG:'In the AIDA database, the top {{num}} {{sub}} {{prep}} {{inst}} {{obj}}, by number of {{order}}, {{verb}}: {{lst}}. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?',
        LIST_NO_RESULT_MSG:'In the AIDA database, there are no {{sub}} {{prep}} {{inst}} {{obj}}. You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?',
        
        DSC_TOO_GENERIC_MSG:'Your search for {{item}} got {{results}}. You need to try again and to be more specific. What is the name of the author or conference you want to know about?',
        DSC_NO_RESULT_MSG:'Your search for {{item}} got no result. You need to try again. What is the name of the author or conference you want to know about?',
        DESCRIBE_INSTANCE_MSG: 'What is the name of the author or conference you want to know about?',
        DESCRIBE_CONFIRM_MSG : 'Do you want to know something about {{ins}}?',
        DESCRIBE_TOPIC_MSG :'sorry but I can\'t tell you anything about the topics yet. You can ask me about conferences, organizations and authors.'
        
        ,
        
        COMPARE_FIRST_INSTANCE: 'What is the name of the author or conference or organization that you want to use as the first term for the comparison?',
        COMPARE_SECOND_INSTANCE: [
        'What is the name of the ${obj} that you want to use as the second term for the comparison?',
        'What is the name of the ${obj} that you want to compare to ${ins}?'],
        COMPARE_CONFIRM_MSG: 'Do you want to compare ${ins} to ${ins2}?',
        COMPARE_TOO_GENERIC_FIRST_MSG: 'Your search for ${ins} got ${results}. You need to try again and to be more specific. What is the name of the author or conference or organization that you want to use as the first term for the comparison? (for organizations you can enter the grid id)',
        COMPARE_TOO_GENERIC_SECOND_MSG: 'Your search for ${ins} got ${results}. You need to try again and to be more specific. What is the name of the ${obj} that you want to use as the second term for the comparison? (for organizations you can enter the grid id)',
        COMPARE_NO_RESULT_FIRST_MSG: 'Your search for ${ins} got no result. You need to try again. What is the name of the author or conference or organization that you want to use as the first term for the comparison? (for organizations you can enter the grid id)',
        COMPARE_NO_RESULT_SECOND_MSG: 'Your search for ${ins} got no result. You need to try again. What is the name of the ${obj} that you want to use as the second term for the comparison? (for organizations you can enter the grid id)',
        COMPARE_SAME_OBJ_MSG: "Hey, it's the same ${obj1}! You can try two different ones or ask for Help. What would you like to try?",
        COMPARE_WRONG_PAIR_MSG: "Hey, I can't compare ${obj1} to ${obj2}! You can try two entities of the same type or ask for Help. What would you like to try?",
        COMPARE_AUTHORS_MSG: "${author1} has ${publications}, ${citations} and ${h_index} ${author2}. ${topics}You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?",
        COMPARE_CONFERENCE_MSG: "${conf1} started ${years} ${conf2} and has ${citations} citations in the last 5 years. ${name1} also has ${h5_index} ${name2}. ${topics}You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?",
        COMPARE_ORGANIZATIONS_MESSAGE: "${org1} has ${publications} and ${citations} in the last 5 years. It also has ${h5_index} ${org2}. ${topics}You can ask to perform another query on the data contained in the AIDA database or ask for Help. What would you like to try?"
      
        }
    },
    
    'it' : {
        translation:{
        WELCOME_MSG: 'Buongiorno, puoi chiedere di eseguire una query sui dati contenuti nel database AIDA o chiedermi aiuto. Cosa preferisci fare?',
        HELLO_MSG: ['Ciao','Buongiorno'],
        OK_MSG: ['Ok','Perfetto','Va bene','Benissimo'],
        HELP_MSG: ['Per esempio, puoi iniziare una ricerca dicendo, conta'],
        GOODBYE_MSG: ['Arrivederci!','Addio','A più tardi','Ci vediamo'],
        REFLECTOR_MSG: 'Hai invocato l\'intento {{intent}}',
        FALLBACK_MSG: 'Perdonami, penso di non aver capito bene. Riprova.',
        ERROR_MSG: 'Scusa, c\'è stato un errore. Riprova.',
        
        HOMONYMS_MSG:'Ho trovato gli omonimi seguenti: {{msg}} Per scegliere, dimmi il numero di quello che preferisci',
        
        SUBJECT_REQUEST_MSG:'Posso contare articoli, autori, conferenze, organizzazioni e citazioni. Cosa vuoi contare?',
        SUBJECT_WRONG_MSG:'Mi dispiace ma non posso contare {{sub}}. Posso contare solamente articoli, autori, conferenze, organizzazioni e citazioni. Cosa preferisci?',
        SUBJECT_REQUEST_REPROMPT_MSG:'Posso contare articoli, autori, conferenze, organizzazioni e citazioni. Cosa preferisci?',
        INSTANCE_MSG:'Quale è il nome {{list}} di cui devo contare {{sub}}? Puoi dire no per contarli tutti', 
        ITEM_MSG:'Mentre cercavo {{inst}}, Ho trovato {{msg}} Quale è quello giusto?',
        INTENT_CONFIRMATION_1_MSG: 'Vuoi sapere il numero di {{sub}} {{prep}} {{obj}} presenti nel database AIDA?',
        INTENT_CONFIRMATION_2_MSG: 'Vuoi sapere il numero di {{sub}} {{prep}} {{inst}} {{obj}} presenti nel database AIDA?',
        TOO_GENERIC_MSG:'La tua ricerca di {{item}} ha ottenuto {{results}} Dovresti cercare di essere più specifico. Cosa cerchiamo?',
        NO_RESULT_MSG:'La tua ricerca di {{item}} non ha ottenuto risultati, riprova. Cosa posso cercare per te?',
        QUERY_1_MSG: ['Ho trovato {{num}} {{sub}} {{prep}} {{inst}} {{obj}}', 'Ho contato {{num}} {{sub}} {{prep}} {{inst}} {{obj}}','la query ha restituito {{num}} {{sub}} {{prep}} {{inst}} {{obj}}'],
        QUERY_2_MSG: ['Ho trovato {{num}} differenti {{sub}} {{prep}} {{obj}}', 'Ho contato {{num}} differenti {{sub}} {{prep}} {{obj}}'],
        REPROMPT_MSG: 'Quindi, cosa vorresti chiedere?',
        NO_QUERY_MSG: ['Mi dispiace, hai chiesto una query non ancora implementata','Scusa, la query richiesta non è stata ancora implementata','Mi dispiace, non so ancora eseguire la query che mi hai chiesto'],
        REPROMPT_END_MSG: ['Puoi chiedere di eseguire un\'altra query o dire stop per uscire','Chiedimi un\'altra query o dimmi stop per uscire'],
        NO_SENSE_MSG:'Mi dispiace ma la query risultante dalle opziani scelte non ha senso e non può essere eseguita. Prova ancora.',
        
        LIST_WRONG_NUMBER_MSG:'Il numero {{number}} non è nell\'intervallo ammesso, dovresti dirmi un numero tra 2 e 5. Allora, quanti elementi vuoi che elenchi?',
        LIST_SUBJECT_REQUEST_MSG:'Posso elencare articoli, autori, conferenze, organizzazioni e argomenti. Quali scegli?',
        LIST_SUBJECT_WRONG_MSG:'Mi dispiace, non posso elencare {{sub}}. Posso elencare articoli, autori, conferenze, organizzazioni e argomenti. Quali scegli?',
        LIST_SUBJECT_REQUEST_REPROMPT_MSG:'Posso elencare articoli, autori, conferenze, organizzazioni e argomenti. Cosa preferisci?',
        LIST_ORDER_MSG:'Vuoi che la lista sia ordinata per pubblicazioni, per pubblicazioni negli ultimi cinque anni, per citazioni o per citazioni negli ultimi 5 anni?',
        LIST_PAPERS_ORDER_MSG:'Vuoi che la lista sia ordinata per citazioni o per citazioni negli ultimi 5 anni?',
        LIST_PAPERS_ORDER_WRONG_MSG:'Mi dispiace, non posso ordinare per {{order}}. Posso ordinare per citazioni o per citazioni negli ultimi 5 anni. Cosa preferisci?',
        LIST_ORDER_WRONG_MSG:'Mi dispiace, non posso ordinare per {{order}}. Posso ordinare per pubblicazioni, per pubblicazioni negli ultimi cinque anni, per citazioni o per citazioni negli ultimi 5 anni. Cosa preferisci?',
        LIST_INSTANCE_MSG:'Quale è il nome {{list}} da mettere in relazione con {{sub}} da elencare? Puoi dire no per utilizzare tutto il database',
        LIST_INTENT_CONFIRMATION_1_MSG: 'Vuoi l\'elenco {{art}} {{number}} {{sub}} {{prep}} {{obj}} con il numero maggiore di {{order}}?',
        LIST_INTENT_CONFIRMATION_2_MSG: 'Vuoi l\'elenco {{art}} {{number}} {{sub}} con il numero maggiore di {{order}} {{prep}} {{inst}} {{obj}}?',
        LIST_QUERY_MSG:'Nel database AIDA, {{art}} {{num}} {{sub}} con il numero maggiore di {{order}} {{prep}} {{inst}} {{obj}}, {{verb}}: {{lst}}'
        }
    }
  
}

