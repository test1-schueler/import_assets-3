
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
    
}

namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex`e410100000ffffffffffff00f077c7fcef44e40f7f7777ccefeeeefe7f7777c7efe4eefe7f7777c7efeeeefe7f7777c7efeeeefe7f7777ccefeeeefe7f7777c7efeeeefe7f7777c7efeeeefe7f77ccc7efeeeefe7f77ccc7efeeeefe7f7777c7efeeeefe7f7777c7efeeeefe7f7777ccefe4eefef077c7fcef44e40f00ffffffffffff00`)
}