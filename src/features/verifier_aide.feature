Feature: tester les pharase cucumber

        Scenario: ouvrir application

            Given J'accede sur le site de la poste
             Then Je verifie que le lien "//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]" est afficher
             When Je clique sur le lien "//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]"