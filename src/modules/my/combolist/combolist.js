import { LightningElement, api } from 'lwc';
import { testValues } from 'my/testData';

export default class Combolist extends LightningElement {
    i;
    j;
    values;
    newArray;
    cValue;
    matchedValues = [];
    test;
    someValuesMatched = false;

    _contactId = undefined;

    set contactId(value) {
        this._contactId = value;
        //console.log(value);
        this.values = JSON.stringify(testValues);
        this.newArray = this.values.split(',');
        // console.log(this.vArray);
        this.matchedValues.splice(0, this.matchedValues.length);
        this.j = 0;

        for (this.i = 0; this.i < this.newArray.length; this.i++) {
            this.cValue = String(this.newArray[this.i])
                .toString()
                .replace(/"/g, '');
            this.test = this.cValue.localeCompare(value);
            //console.log(this.test);
            if (!this.test) {
                this.matchedValues.push({
                    name: this.newArray[this.i].replace(/"/g, ''),
                    index: this.j
                });
                this.someValuesMatched = true;
                this.j++;
            }
        }

        //this.dispatchEvent(new CustomEvent('change'));
        console.log(this.someValuesMatched);
        console.log(this.matchedValues);
    }

    // getter for productId
    @api get contactId() {
        return this._contactId;
    }

    handleclicklist(evt) {
        const selectedEvent = new CustomEvent('selected', {
            detail: evt.target.value
        });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}
