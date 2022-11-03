Feature: tester les pharase cucumber

        Scenario: ouvrir application

            Given J'accede sur le site de la poste
             Then Je verifie que le lien "//span[@class='js-hide-connected actions__name'][contains(.,'Se connecter')]" est afficher
             When Je clique sur le lien "//span[@class='js-hide-connected actions__name'][contains(.,'Se connecter')]"