interface InputFieldConfig {
    type: string,
    placeholder: string,
    id?: string,
    className?: string,
    name?: string,
    isRequired: boolean
}

class nuInputs {
    static nuElem: HTMLElement;

    public static addInputField(root: HTMLElement, config: InputFieldConfig) {
        this.__addInputFieldBox(config.className);
        this.__addInputLabel(config.placeholder, config.className);
        this.__addInputField(config.type, config.className, config.name, config.id, config.placeholder);

        if (config.isRequired === true)
            this.__addInputRequiredLabel();

        root.appendChild(this.nuElem);
    }

    private static __addInputFieldBox(className?: string) : void {
        this.nuElem = this.__createElem("div", "inputFieldBlock", className);
    }

    private static __addInputLabel(placeholder: string, classLabel?: string) {
         let inputFieldLabel = this.__createElem("label", "inputFieldLabel", classLabel);
         inputFieldLabel.innerText = placeholder;

         this.nuElem.appendChild(inputFieldLabel);
    }

    private static __addInputField(type: string, className?: string, name?: string, id?: string, placeholder?: string) {
        let inputField = document.createElement("input");
        inputField.type = type ?? "text";
        inputField.className = "inputField";

        if (className)
            inputField.classList.add(className);

        inputField.id = this.__checkArg(id);
        inputField.name = this.__checkArg(name);
        inputField.placeholder = this.__checkArg(placeholder);

        this.nuElem.appendChild(inputField);
    }

    private static __addInputRequiredLabel() {
        let inputFieldRequired = this.__createElem("label", "inputFieldRequired");
        inputFieldRequired.innerHTML = "Обязательное поле";

        this.nuElem.appendChild(inputFieldRequired);
    }

    private static __createElem(typeElem: string, classNameElem: string, anotherClassElem?: string) {
        let newNuElem = document.createElement(typeElem);
        newNuElem.className = classNameElem;

        if (anotherClassElem)
            newNuElem.classList.add(anotherClassElem);

        return newNuElem;
    }

    private static __checkArg(arg: string) : string|null {
        return arg ?? "";
    }
}