Feature: tester les pharase cucumber

        Scenario: ouvrir application

            Given Je accede sur le site de la poste
             Then Je verifie que le lien aide est afficher "//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]"
             When Je clique sur le lien "//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]"
             When Je clique sur le lien aide "//i[contains(@class,'actions__icon ph-icon ph-icon--action-help ph-icon--light ph-icon--default')]"