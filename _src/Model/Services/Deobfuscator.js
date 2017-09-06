class Deobfuscator{
    
    static getObjectFromObfuscatedString(aString){
        return JSON.parse(this.deobfuscateObjectString(aString));
    }
    
    static deobfuscateObjectString(aString){
        return atob(aString);
    }
}