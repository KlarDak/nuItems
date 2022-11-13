var nuInputs = /** @class */ (function () {
    function nuInputs() {
    }
    nuInputs.addInputField = function (root, config) {
        this.__addInputFieldBox(config.className);
        this.__addInputLabel(config.placeholder, config.className);
        this.__addInputField(config.type, config.className, config.name, config.id, config.placeholder);
        if (config.isRequired === true)
            this.__addInputRequiredLabel();
        root.appendChild(this.nuElem);
    };
    nuInputs.__addInputFieldBox = function (className) {
        this.nuElem = this.__createElem("div", "inputFieldBlock", className);
    };
    nuInputs.__addInputLabel = function (placeholder, classLabel) {
        var inputFieldLabel = this.__createElem("label", "inputFieldLabel", classLabel);
        inputFieldLabel.innerText = placeholder;
        this.nuElem.appendChild(inputFieldLabel);
    };
    nuInputs.__addInputField = function (type, className, name, id, placeholder) {
        var inputField = document.createElement("input");
        inputField.type = type !== null && type !== void 0 ? type : "text";
        inputField.className = "inputField";
        if (className)
            inputField.classList.add(className);
        inputField.id = this.__checkArg(id);
        inputField.name = this.__checkArg(name);
        inputField.placeholder = this.__checkArg(placeholder);
        this.nuElem.appendChild(inputField);
    };
    nuInputs.__addInputRequiredLabel = function () {
        var inputFieldRequired = this.__createElem("label", "inputFieldRequired");
        inputFieldRequired.innerHTML = "Обязательное поле";
        this.nuElem.appendChild(inputFieldRequired);
    };
    nuInputs.__createElem = function (typeElem, classNameElem, anotherClassElem) {
        var newNuElem = document.createElement(typeElem);
        newNuElem.className = classNameElem;
        if (anotherClassElem)
            newNuElem.classList.add(anotherClassElem);
        return newNuElem;
    };
    nuInputs.__checkArg = function (arg) {
        return arg !== null && arg !== void 0 ? arg : "";
    };
    return nuInputs;
}());
//# sourceMappingURL=nuInputs.js.map