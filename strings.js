function cleanText(s) {
    return s.split('').filter((char) => char.match(/[a-zA-Z-0-9 ]/)).join(''); 
}