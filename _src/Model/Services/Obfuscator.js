class Obfuscator{
    /* Written By Thomas Micol - 2017*/

    static obfuscateString(aJsonString){
        let obfuscatedString = btoa(aJsonString);
        return obfuscatedString;
    }
    
    static obfuscateJavascriptObject(jsObject){
        let objectString = JSON.stringify(jsObject);
        return this.obfuscateString(objectString);
        
    }
}

