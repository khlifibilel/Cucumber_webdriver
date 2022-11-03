#Feature: Affichage element sur page d'acceuil Stackoverlflow

    #Scenario: affichage element sur la page d'acceuil

        #Given j'accede a la page home de Stackoverlflow
	    #Then je verifie que l'elemnt about est affiche
		#and je verifie que l'element "product" est affiche
		#and je verifier que l'element "For  teams" est affiche
		#and je verifie que l'element "search" est affiche
		#and je verifie que l'element " log in " est affiche	
		#and je verifie que l'element " sign up " est affiche 


Feature: connection Linkedin  

	Scenario Outline: Connection sur Linkedin
	
		Given je accede à la page home page Linkedin
		When je saisis dans le champ mail <username> et le champ mdp <password>
		Then je verifie que le message <message> est affiché
		#When je saisis " fa " dans le "champ password" 
		#And je clique sur le bouton "S'identifer " 
		#Then je verifie l'affichage de message " Le mot de passe est incorrect. Réessayez ouidentifiez-vous avec un lien ponctuel" 

	 Examples:
      | username            | password             | message                      |
      | khlifi93@hotmail.fr | Bil1993@             | Essayez Premium gratuitement |