document.addEventListener('DOMContentLoaded', (event) => {
    addFormValidation('moraleForm', 'activiteMoraleSouhaitee', 'formNotCompletedMoraleError', 'terms-and-conditions-morale');
    addFormValidation('physiqueForm', 'activitePhysiqueSouhaitee', 'formNotCompletedPhysiqueError', 'terms-and-conditions-physique');
});

function addFormValidation(formId, checkboxContainerId, errorId, termsId) {
    document.getElementById(formId).addEventListener('submit', function(e) {
        if (!checkActivity(formId, checkboxContainerId, errorId, termsId)) {
            e.preventDefault();
        }
    });

    var checkboxes = document.querySelectorAll(`#${checkboxContainerId} .checkbox-input`);
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function() {
            document.getElementById(errorId).style.display = "none";
        });
    }
}

function checkActivity(formId, checkboxContainerId, errorId, termsId) {
    var checkboxes = document.querySelectorAll(`#${checkboxContainerId} .checkbox-input`);
    var requiredInputs = document.querySelectorAll(`#${formId} input[required]`);
    var termsAndConditions = document.getElementById(termsId);

    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    var filledAllRequired = Array.prototype.slice.call(requiredInputs).every(x => x.value.trim() !== '');
    var acceptedTerms = termsAndConditions.checked;

    if (!checkedOne || !filledAllRequired || !acceptedTerms) {
        document.getElementById(errorId).style.display = "block";
        return false;
    }
    return true;
}
