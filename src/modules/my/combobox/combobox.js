/* eslint-disable no-alert */

import { LightningElement } from 'lwc';
export default class Combobox extends LightningElement {
    enterTxt;
    handleChange(evt) {
        console.log('Current value of the input: ' + evt.target.value);
        this.enterTxt = evt.target.value;
        this.dispatchEvent(new CustomEvent('change'));
    }
}
