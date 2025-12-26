export interface TranslationStrings {
    // Modal
    modalTitle: string;
    closeButton: string;

    // Component List
    noComponentsFound: string;
    tagLabel: string;

    // Props Section
    componentPropsTitle: string;
    noPropsAvailable: string;
    optionalLabel: string;
    noDefaultValue: string;
    enterPlaceholder: string;

    // Output Section
    generatedHtmlTitle: string;
    copyToClipboard: string;
    resetProps: string;
    copiedSuccess: string;
    copyFailed: string;

    // Fallback Trigger
    fallbackTriggerButtonText: string;
}

export interface ComponentTranslations {
    [lang: string]: TranslationStrings;
}

export const translations: ComponentTranslations = {
    en: {
        modalTitle: "Component Registry",
        closeButton: "Close",
        noComponentsFound: "No components found in registry",
        tagLabel: "Tag",
        componentPropsTitle: "Component Props",
        noPropsAvailable: "No props available",
        optionalLabel: "optional",
        noDefaultValue: "No default value",
        enterPlaceholder: "Enter",
        generatedHtmlTitle: "Generated HTML",
        copyToClipboard: "Copy to Clipboard",
        resetProps: "Reset Props",
        copiedSuccess: "Copied to clipboard!",
        copyFailed: "Failed to copy",
        fallbackTriggerButtonText: "Open Component Registry",
    },
    fr: {
        modalTitle: "Registre de composants",
        closeButton: "Fermer",
        noComponentsFound: "Aucun composant trouvé dans le registre",
        tagLabel: "Balise",
        componentPropsTitle: "Propriétés du composant",
        noPropsAvailable: "Aucune propriété disponible",
        optionalLabel: "optionnel",
        noDefaultValue: "Pas de valeur par défaut",
        enterPlaceholder: "Entrer",
        generatedHtmlTitle: "HTML généré",
        copyToClipboard: "Copier dans le presse-papiers",
        resetProps: "Réinitialiser les propriétés",
        copiedSuccess: "Copié dans le presse-papiers !",
        copyFailed: "Échec de la copie",
        fallbackTriggerButtonText: "Ouvrir le registre de composants",
    },
};