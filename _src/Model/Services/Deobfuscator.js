class Deobfuscator{
    
    getObjectFromObfuscatedString(aString){
        return JSON.parse(this.deobfuscateObjectString(aString));
    }
    
    deobfuscateObjectString(aString){
        return atob(aString);
    }
}