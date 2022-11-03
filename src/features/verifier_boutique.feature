Feature: tester les pharase cucumber

        Scenario: ouvrir application

            Given J'accede sur le site de la poste
             Then Je verifie que le lien "//button[@aria-expanded='false'][contains(.,'Boutique')]" est afficher
             When Je clique sur le lien "//button[@aria-expanded='false'][contains(.,'Boutique')]"