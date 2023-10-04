/**

 * 1. Crear una funcion para recibir un string 'str'
 * 2. Definir un arreglo donde definimos los valores a coincidir en este caso las vocales con tilde ["Á", "á"...]
 * 3. Definir un contador en 0
 * 4. Definir caso donde la cadena este vacia y retornamos un 0 de valor
 * 5. Definir un ciclo que itere sobre cada caracter en la cadena dada (str)
 * 6. En caso de que coincida el valor del caracter con alguno del arreglo aumentar en 1 el contador
 * 7. Regresamos el valor de contador
 * 
 * countVowels(str)
 * // input: str
 * // output: the number of vowels with accent mark in the phrase
 * vowels <- ["Á", "á","É","é","Í","í","Ó","ó","Ú","ú"]
 * count <- 0
 * base case
 * IF str.length = 0 then:
 *   RETURN 0
 * ELSE 
 *  FOR letter of str DO:
 *      IF vowels match with letter THEN:
 *          count <- count + 1
 *      RETURN count
 */


function countVowels(str){
    const vowels = ["Á", "á","É","é","Í","í","Ó","ó","Ú","ú"]
    let count = 0;
    if(str.length = 0){
        return 0;
    }
    else {

     for(let letter of str){
            if(vowels.includes(letter)){
             count++;
          }
         }
      

            return count 
        }
    
}

const phrase = "Buenos días, Hola Mundo, AZÚCAR";
const numberOfVowels = countVowels(phrase);
console.log(`El numero vocales con tilde de  ${phrase} es: ${numberOfVowels}`);

