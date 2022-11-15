Feature: connection Linkedin

        Scenario: Connection sur Linkedin
	
            Given Je accede à la page home page Linkedin
             When Je saisis dans le champ mail "khlifi93@hotmail.fr" et le champ mdp "Bil1993@"
              And Je clique sur le bouton "submit"
             Then Je verifie que le message est affiché "Essayez Premium gratuitement"
             

             #Then Je verifier mon nom est afficher "Bilel khlifi"
		#When je saisis " fa " dans le "champ password" 
		#And je clique sur le bouton "S'identifer " 
		#Then je verifie l'affichage de message " Le mot de passe est incorrect. Réessayez ouidentifiez-vous avec un lien ponctuel" 

        # Examples:
        #           | username            | password | message                      |
        #           | khlifi93@hotmail.fr | Bil1993@ | Essayez Premium gratuitement |