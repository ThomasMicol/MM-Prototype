class Obfuscator{
    /* Written By Thomas Micol - 2017*/

    obfuscateString(aJsonString){
        let obfuscatedString = btoa(aJsonString);
        return obfuscatedString;
    }
    
    obfuscateJavascriptObject(jsObject){
        let objectString = JSON.stringify(jsObject);
        return this.obfuscateString(objectString);
        
    }
}

